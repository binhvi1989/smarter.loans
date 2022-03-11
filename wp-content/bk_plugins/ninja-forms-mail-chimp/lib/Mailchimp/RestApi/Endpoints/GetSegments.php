<?php


namespace NFMailchimp\EmailCRM\Mailchimp\RestApi\Endpoints;

use NFMailchimp\EmailCRM\Mailchimp\RestApi\Responses\Response;
use NFMailchimp\EmailCRM\RestApi\Contracts\RequestContract;
use NFMailchimp\EmailCRM\RestApi\Contracts\ResponseContract;

/**
 * Class GetSegments
 *
 * Endpoint to get all segments of a list via MailChimp API.
 */
class GetSegments extends GetList
{

	/** @inheritDoc */
	public function getUri(): string
	{
		return 'lists/' . $this->constructParameterUri('listId', 'alphanumeric') . '/segments';
	}

	/** @inheritDoc */
	public function handleRequest(RequestContract $request): ResponseContract
	{
		$listId = $request->getParam('listId');
		$apiKey = $request->getParam('apiKey');
		$action = new \NFMailchimp\EmailCRM\Mailchimp\Actions\GetSegments($this->getListsClient($apiKey));
		try {
			$segments = $action->requestSegments($listId);
			return Response::fromEntity($segments);
		} catch (\Exception $exception) {
			$response = $this->constructExceptionResponse($exception, 'GetSegments');
			return $response;
		}
		return parent::handleRequest($request); // TODO: Change the autogenerated stub
	}
}