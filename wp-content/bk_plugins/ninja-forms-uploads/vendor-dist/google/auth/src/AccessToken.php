<?php

/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace NF_FU_VENDOR\Google\Auth;

use NF_FU_VENDOR\Firebase\JWT\ExpiredException;
use NF_FU_VENDOR\Firebase\JWT\JWT;
use NF_FU_VENDOR\Firebase\JWT\SignatureInvalidException;
use NF_FU_VENDOR\Google\Auth\Cache\MemoryCacheItemPool;
use NF_FU_VENDOR\Google\Auth\HttpHandler\HttpClientCache;
use NF_FU_VENDOR\Google\Auth\HttpHandler\HttpHandlerFactory;
use NF_FU_VENDOR\GuzzleHttp\Psr7;
use NF_FU_VENDOR\GuzzleHttp\Psr7\Request;
use NF_FU_VENDOR\phpseclib\Crypt\RSA;
use NF_FU_VENDOR\phpseclib\Math\BigInteger;
use NF_FU_VENDOR\SimpleJWT\JWT as SimpleJWT;
use NF_FU_VENDOR\SimpleJWT\Keys\KeyFactory;
use NF_FU_VENDOR\SimpleJWT\Keys\KeySet;
use NF_FU_VENDOR\SimpleJWT\InvalidTokenException;
use NF_FU_VENDOR\Psr\Cache\CacheItemPoolInterface;
/**
 * Wrapper around Google Access Tokens which provides convenience functions.
 *
 * @experimental
 */
class AccessToken
{
    const FEDERATED_SIGNON_CERT_URL = 'https://www.googleapis.com/oauth2/v3/certs';
    const IAP_CERT_URL = 'https://www.gstatic.com/iap/verify/public_key-jwk';
    const OAUTH2_ISSUER = 'accounts.google.com';
    const OAUTH2_ISSUER_HTTPS = 'https://accounts.google.com';
    const OAUTH2_REVOKE_URI = 'https://oauth2.googleapis.com/revoke';
    /**
     * @var callable
     */
    private $httpHandler;
    /**
     * @var CacheItemPoolInterface
     */
    private $cache;
    /**
     * @param callable $httpHandler [optional] An HTTP Handler to deliver PSR-7 requests.
     * @param CacheItemPoolInterface $cache [optional] A PSR-6 compatible cache implementation.
     */
    public function __construct(callable $httpHandler = null, \NF_FU_VENDOR\Psr\Cache\CacheItemPoolInterface $cache = null)
    {
        $this->httpHandler = $httpHandler ?: \NF_FU_VENDOR\Google\Auth\HttpHandler\HttpHandlerFactory::build(\NF_FU_VENDOR\Google\Auth\HttpHandler\HttpClientCache::getHttpClient());
        $this->cache = $cache ?: new \NF_FU_VENDOR\Google\Auth\Cache\MemoryCacheItemPool();
    }
    /**
     * Verifies an id token and returns the authenticated apiLoginTicket.
     * Throws an exception if the id token is not valid.
     * The audience parameter can be used to control which id tokens are
     * accepted.  By default, the id token must have been issued to this OAuth2 client.
     *
     * @param string $token The JSON Web Token to be verified.
     * @param array $options [optional] {
     *     Configuration options.
     *
     *     @type string $audience The indended recipient of the token.
     *     @type string $certsLocation The location (remote or local) from which
     *        to retrieve certificates, if not cached. This value should only be
     *        provided in limited circumstances in which you are sure of the
     *        behavior.
     *     @type string $cacheKey The cache key of the cached certs. Defaults to
     *        the sha1 of $certsLocation if provided, otherwise is set to
     *        "federated_signon_certs_v3".
     * }
     * @return array|bool the token payload, if successful, or false if not.
     * @throws \InvalidArgumentException If certs could not be retrieved from a local file.
     * @throws \InvalidArgumentException If received certs are in an invalid format.
     * @throws \RuntimeException If certs could not be retrieved from a remote location.
     */
    public function verify($token, array $options = [])
    {
        $audience = isset($options['audience']) ? $options['audience'] : null;
        $certsLocation = isset($options['certsLocation']) ? $options['certsLocation'] : self::FEDERATED_SIGNON_CERT_URL;
        $cacheKey = isset($options['cacheKey']) ? $options['cacheKey'] : $this->getCacheKeyFromCertLocation($certsLocation);
        // Check signature against each available cert.
        $certs = $this->getCerts($certsLocation, $cacheKey, $options);
        $alg = $this->determineAlg($certs);
        switch ($alg) {
            case 'ES256':
                return $this->verifyEs256($token, $certs, $audience);
            case 'RS256':
                return $this->verifyRs256($token, $certs, $audience);
            default:
                throw new \InvalidArgumentException('unrecognized "alg" in certs, expected ES256 or RS256');
        }
    }
    /**
     * Identifies the expected algorithm to verify by looking at the "alg" key
     * of the provided certs.
     *
     * @param array $certs Certificate array according to the JWK spec (see
     *                     https://tools.ietf.org/html/rfc7517).
     * @return string The expected algorithm, such as "ES256" or "RS256".
     */
    private function determineAlg(array $certs)
    {
        $alg = null;
        foreach ($certs as $cert) {
            if (empty($cert['alg'])) {
                throw new \InvalidArgumentException('certs expects "alg" to be set');
            }
            $alg = $alg ?: $cert['alg'];
            if ($alg != $cert['alg']) {
                throw new \InvalidArgumentException('More than one alg detected in certs');
            }
        }
        return $alg;
    }
    /**
     * Verifies an ES256-signed JWT.
     *
     * @param string $token The JSON Web Token to be verified.
     * @param array $certs Certificate array according to the JWK spec (see
     *                     https://tools.ietf.org/html/rfc7517).
     * @param string|null $audience If set, returns false if the provided
     *                              audience does not match the "aud" claim on
     *                              the JWT.
     * @return array|bool the token payload, if successful, or false if not.
     */
    private function verifyEs256($token, array $certs, $audience = null)
    {
        $this->checkSimpleJwt();
        $jwkset = new \NF_FU_VENDOR\SimpleJWT\Keys\KeySet();
        foreach ($certs as $cert) {
            $jwkset->add(\NF_FU_VENDOR\SimpleJWT\Keys\KeyFactory::create($cert, 'php'));
        }
        // Validate the signature using the key set and ES256 algorithm.
        try {
            $jwt = $this->callSimpleJwtDecode([$token, $jwkset, 'ES256']);
        } catch (\NF_FU_VENDOR\SimpleJWT\InvalidTokenException $e) {
            return \false;
        }
        if ($aud = $jwt->getClaim('aud')) {
            if ($audience && $aud != $audience) {
                return \false;
            }
        }
        return $jwt->getClaims();
    }
    /**
     * Verifies an RS256-signed JWT.
     *
     * @param string $token The JSON Web Token to be verified.
     * @param array $certs Certificate array according to the JWK spec (see
     *                     https://tools.ietf.org/html/rfc7517).
     * @param string|null $audience If set, returns false if the provided
     *                              audience does not match the "aud" claim on
     *                              the JWT.
     * @return array|bool the token payload, if successful, or false if not.
     */
    private function verifyRs256($token, array $certs, $audience = null)
    {
        $this->checkAndInitializePhpsec();
        $keys = [];
        foreach ($certs as $cert) {
            if (empty($cert['kid'])) {
                throw new \InvalidArgumentException('certs expects "kid" to be set');
            }
            if (empty($cert['n']) || empty($cert['e'])) {
                throw new \InvalidArgumentException('RSA certs expects "n" and "e" to be set');
            }
            $rsa = new \NF_FU_VENDOR\phpseclib\Crypt\RSA();
            $rsa->loadKey(['n' => new \NF_FU_VENDOR\phpseclib\Math\BigInteger($this->callJwtStatic('urlsafeB64Decode', [$cert['n']]), 256), 'e' => new \NF_FU_VENDOR\phpseclib\Math\BigInteger($this->callJwtStatic('urlsafeB64Decode', [$cert['e']]), 256)]);
            // create an array of key IDs to certs for the JWT library
            $keys[$cert['kid']] = $rsa->getPublicKey();
        }
        try {
            $payload = $this->callJwtStatic('decode', [$token, $keys, ['RS256']]);
            if (\property_exists($payload, 'aud')) {
                if ($audience && $payload->aud != $audience) {
                    return \false;
                }
            }
            // support HTTP and HTTPS issuers
            // @see https://developers.google.com/identity/sign-in/web/backend-auth
            $issuers = [self::OAUTH2_ISSUER, self::OAUTH2_ISSUER_HTTPS];
            if (!isset($payload->iss) || !\in_array($payload->iss, $issuers)) {
                return \false;
            }
            return (array) $payload;
        } catch (\NF_FU_VENDOR\Firebase\JWT\ExpiredException $e) {
        } catch (\NF_FU_VENDOR\ExpiredException $e) {
            // (firebase/php-jwt 2)
        } catch (\NF_FU_VENDOR\Firebase\JWT\SignatureInvalidException $e) {
        } catch (\NF_FU_VENDOR\SignatureInvalidException $e) {
            // (firebase/php-jwt 2)
        } catch (\DomainException $e) {
        }
        return \false;
    }
    /**
     * Revoke an OAuth2 access token or refresh token. This method will revoke the current access
     * token, if a token isn't provided.
     *
     * @param string|array $token The token (access token or a refresh token) that should be revoked.
     * @param array $options [optional] Configuration options.
     * @return boolean Returns True if the revocation was successful, otherwise False.
     */
    public function revoke($token, array $options = [])
    {
        if (\is_array($token)) {
            if (isset($token['refresh_token'])) {
                $token = $token['refresh_token'];
            } else {
                $token = $token['access_token'];
            }
        }
        $body = \NF_FU_VENDOR\GuzzleHttp\Psr7\stream_for(\http_build_query(['token' => $token]));
        $request = new \NF_FU_VENDOR\GuzzleHttp\Psr7\Request('POST', self::OAUTH2_REVOKE_URI, ['Cache-Control' => 'no-store', 'Content-Type' => 'application/x-www-form-urlencoded'], $body);
        $httpHandler = $this->httpHandler;
        $response = $httpHandler($request, $options);
        return $response->getStatusCode() == 200;
    }
    /**
     * Gets federated sign-on certificates to use for verifying identity tokens.
     * Returns certs as array structure, where keys are key ids, and values
     * are PEM encoded certificates.
     *
     * @param string $location The location from which to retrieve certs.
     * @param array $options [optional] Configuration options.
     * @return array
     * @throws \InvalidArgumentException If received certs are in an invalid format.
     */
    private function getCerts($location, $cacheKey, array $options = [])
    {
        $cacheItem = $this->cache->getItem($cacheKey);
        $certs = $cacheItem ? $cacheItem->get() : null;
        $gotNewCerts = \false;
        if (!$certs) {
            $certs = $this->retrieveCertsFromLocation($location, $options);
            $gotNewCerts = \true;
        }
        if (!isset($certs['keys'])) {
            if ($location !== self::IAP_CERT_URL) {
                throw new \InvalidArgumentException('federated sign-on certs expects "keys" to be set');
            }
            throw new \InvalidArgumentException('certs expects "keys" to be set');
        }
        // Push caching off until after verifying certs are in a valid format.
        // Don't want to cache bad data.
        if ($gotNewCerts) {
            $cacheItem->expiresAt(new \DateTime('+1 hour'));
            $cacheItem->set($certs);
            $this->cache->save($cacheItem);
        }
        return $certs['keys'];
    }
    /**
     * Retrieve and cache a certificates file.
     *
     * @param $url string location
     * @param array $options [optional] Configuration options.
     * @return array certificates
     * @throws \InvalidArgumentException If certs could not be retrieved from a local file.
     * @throws \RuntimeException If certs could not be retrieved from a remote location.
     */
    private function retrieveCertsFromLocation($url, array $options = [])
    {
        // If we're retrieving a local file, just grab it.
        if (\strpos($url, 'http') !== 0) {
            if (!\file_exists($url)) {
                throw new \InvalidArgumentException(\sprintf('Failed to retrieve verification certificates from path: %s.', $url));
            }
            return \json_decode(\file_get_contents($url), \true);
        }
        $httpHandler = $this->httpHandler;
        $response = $httpHandler(new \NF_FU_VENDOR\GuzzleHttp\Psr7\Request('GET', $url), $options);
        if ($response->getStatusCode() == 200) {
            return \json_decode((string) $response->getBody(), \true);
        }
        throw new \RuntimeException(\sprintf('Failed to retrieve verification certificates: "%s".', $response->getBody()->getContents()), $response->getStatusCode());
    }
    private function checkAndInitializePhpsec()
    {
        // @codeCoverageIgnoreStart
        if (!\class_exists('NF_FU_VENDOR\\phpseclib\\Crypt\\RSA')) {
            throw new \RuntimeException('Please require phpseclib/phpseclib v2 to use this utility.');
        }
        // @codeCoverageIgnoreEnd
        $this->setPhpsecConstants();
    }
    private function checkSimpleJwt()
    {
        // @codeCoverageIgnoreStart
        if (!\class_exists('NF_FU_VENDOR\\SimpleJWT\\JWT')) {
            throw new \RuntimeException('Please require kelvinmo/simplejwt ^0.2 to use this utility.');
        }
        // @codeCoverageIgnoreEnd
    }
    /**
     * phpseclib calls "phpinfo" by default, which requires special
     * whitelisting in the AppEngine VM environment. This function
     * sets constants to bypass the need for phpseclib to check phpinfo
     *
     * @see phpseclib/Math/BigInteger
     * @see https://github.com/GoogleCloudPlatform/getting-started-php/issues/85
     * @codeCoverageIgnore
     */
    private function setPhpsecConstants()
    {
        if (\filter_var(\getenv('GAE_VM'), \FILTER_VALIDATE_BOOLEAN)) {
            if (!\defined('MATH_BIGINTEGER_OPENSSL_ENABLED')) {
                \define('MATH_BIGINTEGER_OPENSSL_ENABLED', \true);
            }
            if (!\defined('CRYPT_RSA_MODE')) {
                \define('CRYPT_RSA_MODE', \NF_FU_VENDOR\phpseclib\Crypt\RSA::MODE_OPENSSL);
            }
        }
    }
    /**
     * Provide a hook to mock calls to the JWT static methods.
     *
     * @param string $method
     * @param array $args
     * @return mixed
     */
    protected function callJwtStatic($method, array $args = [])
    {
        $class = \class_exists('NF_FU_VENDOR\\Firebase\\JWT\\JWT') ? 'Firebase\\JWT\\JWT' : 'JWT';
        return \call_user_func_array([$class, $method], $args);
    }
    /**
     * Provide a hook to mock calls to the JWT static methods.
     *
     * @param array $args
     * @return mixed
     */
    protected function callSimpleJwtDecode(array $args = [])
    {
        return \call_user_func_array(['SimpleJWT\\JWT', 'decode'], $args);
    }
    /**
     * Generate a cache key based on the cert location using sha1 with the
     * exception of using "federated_signon_certs_v3" to preserve BC.
     *
     * @param string $certsLocation
     * @return string
     */
    private function getCacheKeyFromCertLocation($certsLocation)
    {
        $key = $certsLocation === self::FEDERATED_SIGNON_CERT_URL ? 'federated_signon_certs_v3' : \sha1($certsLocation);
        return 'google_auth_certs_cache|' . $key;
    }
}
