! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "https://www.lendingtree.com/yantr/", n(n.s = 1050)
}([, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = l(n(2)),
        r = l(n(3)),
        a = l(n(5)),
        o = l(n(6)),
        c = l(n(8)),
        s = l(n(9));

    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = function(t, e) {
        var n;
        n = function() {
            new Vue({
                mixins: [r.default],
                el: t,
                components: {
                    App: e
                }
            }), Vue.filter("currency", function(t) {
                return a.default.formatNumber(t)
            }), Vue.filter("date", function(t) {
                var e = new Date(t);
                return e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear()
            }), Vue.use(o.default), Vue.use(c.default), Vue.use(s.default, {
                namespace: "lt-yantr_"
            })
        }, (0, i.default)("https://unpkg.com/vue@2.5.16/dist/vue.runtime.min.js", n)
    }
}, function(t, e, n) {
    var i, r, a;
    i = {}, r = 0, a = function(t) {
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }, t.exports = function(t, e, n) {
        var o;
        e && "function" != typeof e && (n = e.context || n, o = e.setup, e = e.callback);
        var c, s, l = document.createElement("script"),
            p = !1,
            u = function() {
                p || (p = !0, s(), e && e.call(n, c))
            },
            d = function() {
                c = new Error(t || "EMPTY"), u()
            };
        if (!l.readyState || "async" in l) s = function() {
            l.onload = l.onerror = null
        }, l.onerror = d, l.onload = u, l.async = !0, l.charset = "utf-8", o && o.call(n, l), l.src = t, a(l);
        else {
            var h = r++,
                f = {
                    loaded: !0,
                    complete: !0
                },
                x = !1;
            s = function() {
                l.onreadystatechange = l.onerror = null, i[h] = void 0
            }, l.onreadystatechange = function() {
                var t = l.readyState;
                if (!c) {
                    if (!x && f[t] && (x = !0, a(l)), "loaded" === t && (l.children, "loading" === l.readyState)) return d();
                    "complete" === l.readyState && u()
                }
            }, l.onerror = d, i[h] = l, o && o.call(n, l), l.src = t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(4),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = {
        prop: ["dynamicPropsFromAttr"],
        render: function(t) {
            return t("app", {
                props: this.dynamicPropsFromAttr
            })
        },
        beforeMount: function() {
            this.dynamicPropsFromAttr = {};
            for (var t = 0; t < this.$el.attributes.length; ++t) {
                var e = this.$el.attributes[t],
                    n = e.name;
                n.indexOf("init-") >= 0 && (n = a.default.reverse(n.replace("init-", "")), this.dynamicPropsFromAttr[n] = e.value)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
        r = /-[a-z\u00E0-\u00F6\u00F8-\u00FE]/g;
    t.exports = e = function(t) {
        return t.replace(i, function(t) {
            return "-" + t.toLowerCase()
        })
    }, e.reverse = function(t) {
        return t.replace(r, function(t) {
            return t.slice(1).toUpperCase()
        })
    }
}, function(t, e, n) {

    ! function(n, i) {
        var r = {
                version: "0.4.1",
                settings: {
                    currency: {
                        symbol: "$",
                        format: "%s%v",
                        decimal: ".",
                        thousand: ",",
                        precision: 2,
                        grouping: 3
                    },
                    number: {
                        precision: 0,
                        grouping: 3,
                        thousand: ",",
                        decimal: "."
                    }
                }
            },
            a = Array.prototype.map,
            o = Array.isArray,
            c = Object.prototype.toString;

        function s(t) {
            return !!("" === t || t && t.charCodeAt && t.substr)
        }

        function l(t) {
            return o ? o(t) : "[object Array]" === c.call(t)
        }

        function p(t) {
            return t && "[object Object]" === c.call(t)
        }

        function u(t, e) {
            var n;
            for (n in t = t || {}, e = e || {}) e.hasOwnProperty(n) && null == t[n] && (t[n] = e[n]);
            return t
        }

        function d(t, e, n) {
            var i, r, o = [];
            if (!t) return o;
            if (a && t.map === a) return t.map(e, n);
            for (i = 0, r = t.length; i < r; i++) o[i] = e.call(n, t[i], i, t);
            return o
        }

        function h(t, e) {
            return t = Math.round(Math.abs(t)), isNaN(t) ? e : t
        }

        function f(t) {
            var e = r.settings.currency.format;
            return "function" == typeof t && (t = t()), s(t) && t.match("%v") ? {
                pos: t,
                neg: t.replace("-", "").replace("%v", "-%v"),
                zero: t
            } : t && t.pos && t.pos.match("%v") ? t : s(e) ? r.settings.currency.format = {
                pos: e,
                neg: e.replace("%v", "-%v"),
                zero: e
            } : e
        }
        var x = r.unformat = r.parse = function(t, e) {
                if (l(t)) return d(t, function(t) {
                    return x(t, e)
                });
                if ("number" == typeof(t = t || 0)) return t;
                e = e || r.settings.number.decimal;
                var n = new RegExp("[^0-9-" + e + "]", ["g"]),
                    i = parseFloat(("" + t).replace(/\((.*)\)/, "-$1").replace(n, "").replace(e, "."));
                return isNaN(i) ? 0 : i
            },
            m = r.toFixed = function(t, e) {
                e = h(e, r.settings.number.precision);
                var n = Math.pow(10, e);
                return (Math.round(r.unformat(t) * n) / n).toFixed(e)
            },
            g = r.formatNumber = r.format = function(t, e, n, i) {
                if (l(t)) return d(t, function(t) {
                    return g(t, e, n, i)
                });
                t = x(t);
                var a = u(p(e) ? e : {
                        precision: e,
                        thousand: n,
                        decimal: i
                    }, r.settings.number),
                    o = h(a.precision),
                    c = t < 0 ? "-" : "",
                    s = parseInt(m(Math.abs(t || 0), o), 10) + "",
                    f = s.length > 3 ? s.length % 3 : 0;
                return c + (f ? s.substr(0, f) + a.thousand : "") + s.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (o ? a.decimal + m(Math.abs(t), o).split(".")[1] : "")
            },
            v = r.formatMoney = function(t, e, n, i, a, o) {
                if (l(t)) return d(t, function(t) {
                    return v(t, e, n, i, a, o)
                });
                t = x(t);
                var c = u(p(e) ? e : {
                        symbol: e,
                        precision: n,
                        thousand: i,
                        decimal: a,
                        format: o
                    }, r.settings.currency),
                    s = f(c.format);
                return (t > 0 ? s.pos : t < 0 ? s.neg : s.zero).replace("%s", c.symbol).replace("%v", g(Math.abs(t), h(c.precision), c.thousand, c.decimal))
            };
        r.formatColumn = function(t, e, n, i, a, o) {
            if (!t) return [];
            var c = u(p(e) ? e : {
                    symbol: e,
                    precision: n,
                    thousand: i,
                    decimal: a,
                    format: o
                }, r.settings.currency),
                m = f(c.format),
                v = m.pos.indexOf("%s") < m.pos.indexOf("%v"),
                y = 0;
            return d(d(t, function(t, e) {
                if (l(t)) return r.formatColumn(t, c);
                var n = ((t = x(t)) > 0 ? m.pos : t < 0 ? m.neg : m.zero).replace("%s", c.symbol).replace("%v", g(Math.abs(t), h(c.precision), c.thousand, c.decimal));
                return n.length > y && (y = n.length), n
            }), function(t, e) {
                return s(t) && t.length < y ? v ? t.replace(c.symbol, c.symbol + new Array(y - t.length + 1).join(" ")) : new Array(y - t.length + 1).join(" ") + t : t
            })
        }, void 0 !== t && t.exports && (e = t.exports = r), e.accounting = r
    }()
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.withParams = e.validationMixin = e.Vuelidate = void 0;
    var i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        r = n(7),
        a = function(t, e, n) {
            return t.reduce(function(t, i) {
                return t[n ? n(i) : i] = e(i), t
            }, {})
        };
    var o = function(t, e, n, i) {
        if ("function" == typeof n) return n.call(t, e, i);
        n = Array.isArray(n) ? n : n.split(".");
        for (var r = 0; r < n.length; r++) {
            if (!e || "object" != typeof e) return i;
            e = e[n[r]]
        }
        return void 0 === e ? i : e
    };
    var c = {
        $invalid: function() {
            var t = this.proxy;
            return this.nestedKeys.some(function(e) {
                return t[e].$invalid
            }) || this.ruleKeys.some(function(e) {
                return !t[e]
            })
        },
        $dirty: function() {
            if (this.dirty) return !0;
            if (0 === this.nestedKeys.length) return !1;
            var t = this.proxy;
            return this.nestedKeys.every(function(e) {
                return t[e].$dirty
            })
        },
        $error: function() {
            return this.$dirty && !this.$pending && this.$invalid
        },
        $pending: function() {
            var t = this,
                e = this.proxy;
            return this.nestedKeys.some(function(t) {
                return e[t].$pending
            }) || this.ruleKeys.some(function(e) {
                return t.getRef(e).$pending
            })
        },
        $params: function() {
            var t = this,
                e = this.validations;
            return i({}, a(this.nestedKeys, function(t) {
                return e[t] && e[t].$params || null
            }), a(this.ruleKeys, function(e) {
                return t.getRef(e).$params
            }))
        }
    };

    function s(t) {
        this.dirty = t;
        var e = this.proxy,
            n = t ? "$touch" : "$reset";
        this.nestedKeys.forEach(function(t) {
            e[t][n]()
        })
    }
    var l = {
            $touch: function() {
                s.call(this, !0)
            },
            $reset: function() {
                s.call(this, !1)
            },
            $flattenParams: function() {
                var t = this.proxy,
                    e = [];
                for (var n in this.$params)
                    if (this.isNested(n)) {
                        for (var i = t[n].$flattenParams(), r = 0; r < i.length; r++) i[r].path.unshift(n);
                        e = e.concat(i)
                    } else e.push({
                        path: [],
                        name: n,
                        params: this.$params[n]
                    });
                return e
            }
        },
        p = Object.keys(c),
        u = Object.keys(l),
        d = null,
        h = null;
    var f = function(t, e) {
            var n = function(t) {
                    if (h) return h;
                    for (var e = t.constructor; e.super;) e = e.super;
                    return h = e, e
                }(t),
                s = function(t) {
                    if (d) return d;
                    var e = t.extend({
                            props: ["rule", "model", "parentModel", "rootModel"],
                            methods: {
                                runRule: function(e) {
                                    (0, r.pushParams)();
                                    var n, i = this.rule.call(this.rootModel, this.model, e),
                                        a = "object" != typeof(n = i) && "function" != typeof n || "function" != typeof n.then ? i : function(t, e) {
                                            var n = new t({
                                                data: {
                                                    pending: !0,
                                                    value: !1
                                                }
                                            });
                                            return e.then(function(t) {
                                                n.pending = !1, n.value = t
                                            }, function(t) {
                                                throw n.pending = !1, n.value = !1, t
                                            }), n.__isVuelidateAsyncVm = !0, n
                                        }(t, i),
                                        o = (0, r.popParams)();
                                    return {
                                        output: a,
                                        params: o && o.$sub ? o.$sub.length > 1 ? o : o.$sub[0] : null
                                    }
                                }
                            },
                            computed: {
                                run: function() {
                                    var t = this,
                                        e = this.parentModel;
                                    if (Array.isArray(e) && e.__ob__) {
                                        var n = e.__ob__.dep;
                                        n.depend();
                                        var i = n.constructor.target;
                                        if (!this._indirectWatcher) {
                                            var r = i.constructor;
                                            this._indirectWatcher = new r(this.rootModel, function() {
                                                return t.runRule(e)
                                            }, null, {
                                                lazy: !0
                                            })
                                        }
                                        if (!this._indirectWatcher.dirty && this._lastModel === this.model) return this._indirectWatcher.depend(), i.value;
                                        this._lastModel = this.model, this._indirectWatcher.evaluate(), this._indirectWatcher.depend()
                                    }
                                    return this._indirectWatcher ? this._indirectWatcher.value : this.runRule(e)
                                },
                                $params: function() {
                                    return this.run.params
                                },
                                proxy: function() {
                                    var t = this.run.output;
                                    return t.__isVuelidateAsyncVm ? !!t.value : !!t
                                },
                                $pending: function() {
                                    var t = this.run.output;
                                    return !!t.__isVuelidateAsyncVm && t.pending
                                }
                            },
                            render: function(t) {
                                return null
                            }
                        }),
                        n = t.extend({
                            data: function() {
                                return {
                                    dirty: !1
                                }
                            },
                            mounted: function() {
                                this._watcher.lazy = !0
                            },
                            props: ["validations", "model", "prop", "parentModel", "rootModel"],
                            methods: i({}, l, {
                                getRef: function(t) {
                                    return this._watcher.depend(), this._watcher.dirty && this._watcher.evaluate(), this.$refs[t]
                                },
                                isNested: function(t) {
                                    return "function" != typeof this.validations[t]
                                }
                            }),
                            computed: i({}, c, {
                                nestedKeys: function() {
                                    return this.keys.filter(this.isNested)
                                },
                                ruleKeys: function() {
                                    var t = this;
                                    return this.keys.filter(function(e) {
                                        return !t.isNested(e)
                                    })
                                },
                                keys: function() {
                                    return Object.keys(this.validations)
                                },
                                proxy: function() {
                                    var t = this,
                                        e = a(this.keys, function(e) {
                                            return {
                                                enumerable: !0,
                                                configurable: !1,
                                                get: function() {
                                                    return t.getRef(e).proxy
                                                }
                                            }
                                        }),
                                        n = a(p, function(e) {
                                            return {
                                                enumerable: !0,
                                                configurable: !1,
                                                get: function() {
                                                    return t[e]
                                                }
                                            }
                                        }),
                                        r = a(u, function(e) {
                                            return {
                                                enumerable: !1,
                                                configurable: !1,
                                                get: function() {
                                                    return t[e]
                                                }
                                            }
                                        });
                                    return Object.defineProperties({}, i({}, e, n, r))
                                }
                            }),
                            render: function(t) {
                                var e = this;
                                return t("div", [this.nestedKeys.map(function(n) {
                                    return f(t, e, n)
                                }), this.ruleKeys.map(function(n) {
                                    return m(t, e, n)
                                })])
                            }
                        }),
                        s = n.extend({
                            methods: {
                                isNested: function(t) {
                                    return void 0 !== this.validations[t]()
                                },
                                getRef: function(t) {
                                    var e = this;
                                    return {get proxy() {
                                            return e.validations[t]() || !1
                                        }
                                    }
                                }
                            },
                            render: function() {
                                return null
                            }
                        }),
                        h = n.extend({
                            computed: {
                                keys: function() {
                                    return Object.keys(this.model)
                                },
                                tracker: function() {
                                    var t = this,
                                        e = this.validations.$trackBy;
                                    return e ? function(n) {
                                        return "" + o(t.rootModel, t.model[n], e)
                                    } : function(t) {
                                        return "" + t
                                    }
                                }
                            },
                            methods: {
                                isNested: function() {
                                    return !0
                                },
                                getRef: function(t) {
                                    return this._watcher.depend(), this._watcher.dirty && this._watcher.evaluate(), this.$refs[this.tracker(t)]
                                }
                            },
                            render: function(t) {
                                return t("div", x(t, this))
                            }
                        }),
                        f = function(t, e, i) {
                            if ("$params" === i) return null;
                            if ("$each" === i) return t(h, {
                                key: i,
                                ref: i,
                                attrs: {
                                    validations: e.validations[i],
                                    parentModel: e.parentModel,
                                    prop: i,
                                    model: e.model,
                                    rootModel: e.rootModel
                                }
                            });
                            var r = e.validations[i];
                            if (Array.isArray(r)) {
                                var c = e.rootModel,
                                    l = a(r, function(t) {
                                        return function() {
                                            return o(c, c.$v, t)
                                        }
                                    }, function(t) {
                                        return Array.isArray(t) ? t.join(".") : t
                                    });
                                return t(s, {
                                    key: i,
                                    ref: i,
                                    attrs: {
                                        validations: l,
                                        parentModel: null,
                                        prop: i,
                                        model: null,
                                        rootModel: c
                                    }
                                })
                            }
                            return t(n, {
                                key: i,
                                ref: i,
                                attrs: {
                                    validations: r,
                                    parentModel: e.model,
                                    prop: i,
                                    model: e.model[i],
                                    rootModel: e.rootModel
                                }
                            })
                        },
                        x = function(t, e) {
                            var r = e.validations,
                                a = i({}, r);
                            delete a.$trackBy;
                            var o = {};
                            return e.keys.map(function(i) {
                                var r = e.tracker(i);
                                return o.hasOwnProperty(r) ? null : (o[r] = !0, t(n, {
                                    key: r,
                                    ref: r,
                                    attrs: {
                                        validations: a,
                                        prop: i,
                                        parentModel: e.model,
                                        model: e.model[i],
                                        rootModel: e.rootModel
                                    }
                                }))
                            })
                        },
                        m = function(t, n, i) {
                            return t(e, {
                                key: i,
                                ref: i,
                                attrs: {
                                    rule: n.validations[i],
                                    parentModel: n.parentModel,
                                    model: n.model,
                                    rootModel: n.rootModel
                                }
                            })
                        };
                    return d = n
                }(n),
                f = new n({
                    render: function(n) {
                        var i = "function" == typeof e ? e.call(t) : e;
                        return n(s, {
                            ref: "$v",
                            attrs: {
                                validations: i,
                                parentModel: null,
                                prop: "$v",
                                model: t,
                                rootModel: t
                            }
                        })
                    }
                });
            return f.$mount(), f
        },
        x = {
            beforeCreate: function() {
                var t = this,
                    e = this.$options;
                e.validations && (e.computed || (e.computed = {}), e.computed.$v = function() {
                    return t._vuelidate.$refs.$v.proxy
                })
            },
            created: function() {
                var t = this.$options.validations;
                t && (this._vuelidate = f(this, t))
            },
            beforeDestroy: function() {
                this._vuelidate && (this._vuelidate.$destroy(), this._vuelidate = null)
            }
        };

    function m(t) {
        t.mixin(x)
    }
    e.Vuelidate = m, e.validationMixin = x, e.withParams = r.withParams, e.default = m
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    };
    e.pushParams = o, e.popParams = c, e.withParams = function(t, e) {
        if ("object" == typeof t && void 0 !== e) return n = t, i = e, l(function(t) {
            return function() {
                t(n);
                for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                return i.apply(this, r)
            }
        });
        var n, i;
        return l(t)
    };
    var r = [],
        a = e.target = null;
    e._setTarget = function(t) {
        e.target = a = t
    };

    function o() {
        null !== a && r.push(a), e.target = a = {}
    }

    function c() {
        var t = a,
            n = e.target = a = r.pop() || null;
        return n && (Array.isArray(n.$sub) || (n.$sub = []), n.$sub.push(t)), t
    }

    function s(t) {
        if ("object" != typeof t || Array.isArray(t)) throw new Error("params must be an object");
        e.target = a = i({}, a, t)
    }

    function l(t) {
        var e = t(s);
        return function() {
            o();
            try {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                return e.apply(this, n)
            } finally {
                c()
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "VueMaskPlugin", function() {
        return u
    }), n.d(e, "VueMaskDirective", function() {
        return p
    });
    var i = function(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        },
        r = "undefined" != typeof window && window.navigator.userAgent.toLowerCase(),
        a = r && r.indexOf("edge/") > 0,
        o = r && r.indexOf("android") > 0,
        c = r && /chrome\/\d+/.test(r) && !a;

    function s(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.value,
            r = t.dataset,
            a = r.previousValue,
            s = void 0 === a ? "" : a,
            l = r.mask;
        (e || n && n !== s && n.length > s.length) && (t.value = function(t, e) {
            if (!e) return t;
            var n = /^([^#ANX]+)/;
            1 == +t.length && n.test(e) && (t = n.exec(e)[0] + t);
            for (var i = "", r = 0, a = 0; a < e.length; a += 1) {
                var o = e.charAt(a);
                switch (o) {
                    case "#":
                    case "A":
                    case "?":
                    case "N":
                    case "X":
                        break;
                    default:
                        t = t.replace(o, "")
                }
            }
            for (var c = 0, s = 1; s && c < e.length; c += 1) {
                var l = t.charAt(c - r),
                    p = e.charAt(c);
                switch (p) {
                    case "#":
                        /\d/.test(l) ? i += l : s = 0;
                        break;
                    case "A":
                        /[a-z]/i.test(l) ? i += l : s = 0;
                        break;
                    case "N":
                        /[a-z0-9]/i.test(l) ? i += l : s = 0;
                        break;
                    case "?":
                        r += 1;
                        break;
                    case "X":
                        i += l;
                        break;
                    default:
                        i += p, l && l !== p && (t = " " + t)
                }
            }
            return i
        }(n, l), o && c ? setTimeout(function() {
            return i(t, "input")
        }, 0) : i(t, "input")), t.dataset.previousValue = n
    }

    function l(t, e) {
        t.dataset.mask = e
    }
    var p = {
            bind: function(t, e) {
                l(t, e.value), s(t)
            },
            componentUpdated: function(t, e) {
                var n = e.value,
                    i = n !== e.oldValue;
                i && l(t, n), s(t, i)
            }
        },
        u = function(t) {
            t.directive("mask", p)
        };
    e.default = u
}, function(t, e, n) {
    t.exports = function() {
        "use strict";
        var t = {},
            e = {
                getItem: function(e) {
                    return e in t ? t[e] : null
                },
                setItem: function(e, n) {
                    return t[e] = n, !0
                },
                removeItem: function(e) {
                    var n = e in t;
                    return !!n && delete t[e]
                },
                clear: function() {
                    return t = {}, !0
                },
                key: function(e) {
                    var n = Object.keys(t);
                    return void 0 !== n[e] ? n[e] : null
                }
            };
        Object.defineProperty(e, "length", {
            get: function() {
                return Object.keys(t).length
            }
        });
        var n = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            i = {},
            r = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return n(t, null, [{
                    key: "on",
                    value: function(t, e) {
                        void 0 === i[t] && (i[t] = []), i[t].push(e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        i[t].length ? i[t].splice(i[t].indexOf(e), 1) : i[t] = []
                    }
                }, {
                    key: "emit",
                    value: function(t) {
                        var e = t || window.event,
                            n = function(t) {
                                try {
                                    return JSON.parse(t).value
                                } catch (e) {
                                    return t
                                }
                            };
                        if (void 0 !== e && void 0 !== e.key) {
                            var r = i[e.key];
                            void 0 !== r && r.forEach(function(t) {
                                var i = n(e.newValue),
                                    r = n(e.oldValue);
                                t(i, r, e.url || e.uri)
                            })
                        }
                    }
                }]), t
            }(),
            a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            c = function() {
                function t(e) {
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.storage = e, this.options = {
                            namespace: "",
                            events: ["storage"]
                        }, Object.defineProperty(this, "length", {
                            get: function() {
                                return this.storage.length
                            }
                        }), "undefined" != typeof window)
                        for (var n in this.options.events) window.addEventListener ? window.addEventListener(this.options.events[n], r.emit, !1) : window.attachEvent ? window.attachEvent("on" + this.options.events[n], r.emit) : window["on" + this.options.events[n]] = r.emit
                }
                return o(t, [{
                    key: "setOptions",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.options = a(this.options, t)
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = JSON.stringify({
                                value: e,
                                expire: null !== n ? (new Date).getTime() + n : null
                            });
                        this.storage.setItem(this.options.namespace + t, i)
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this.storage.getItem(this.options.namespace + t);
                        if (null !== n) try {
                            var i = JSON.parse(n);
                            if (null === i.expire) return i.value;
                            if (i.expire >= (new Date).getTime()) return i.value;
                            this.remove(t)
                        } catch (t) {
                            return e
                        }
                        return e
                    }
                }, {
                    key: "key",
                    value: function(t) {
                        return this.storage.key(t)
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        return this.storage.removeItem(this.options.namespace + t)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        if (0 !== this.length) {
                            for (var t = [], e = 0; e < this.length; e++) {
                                var n = this.storage.key(e),
                                    i = new RegExp("^" + this.options.namespace + ".+", "i");
                                !1 !== i.test(n) && t.push(n)
                            }
                            for (var r in t) this.storage.removeItem(t[r])
                        }
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        r.on(this.options.namespace + t, e)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        r.off(this.options.namespace + t, e)
                    }
                }]), t
            }(),
            s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            l = {
                install: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = s({}, n, {
                            storage: n.storage ? n.storage : "local",
                            name: n.name || "ls"
                        });
                    if (i.storage && -1 === ["memory", "local", "session"].indexOf(i.storage)) throw new Error('Vue-ls: Storage "' + i.storage + '" is not supported');
                    var r = null;
                    switch (i.storage) {
                        case "local":
                            r = "undefined" != typeof window && "localStorage" in window ? window.localStorage : null;
                            break;
                        case "session":
                            r = "undefined" != typeof window && "sessionStorage" in window ? window.sessionStorage : null;
                            break;
                        case "memory":
                            r = e
                    }
                    r || (r = e, console.error('Vue-ls: Storage "' + i.storage + '" is not supported your system, use memory storage'));
                    var a = new c(r);
                    a.setOptions(s(a.options, {
                        namespace: ""
                    }, i || {})), t[i.name] = a, Object.defineProperty(t.prototype, "$" + i.name, {
                        get: function() {
                            return a
                        }
                    })
                }
            };
        return "undefined" != typeof window && (window.VueLocalStorage = l), l
    }()
}, , , , , , function(t, e, n) {
    t.exports = {
        default: n(16),
        __esModule: !0
    }
}, function(t, e, n) {
    var i = n(17),
        r = i.JSON || (i.JSON = {
            stringify: JSON.stringify
        });
    t.exports = function(t) {
        return r.stringify.apply(r, arguments)
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.5.6"
    };
    "number" == typeof __e && (__e = n)
}, , , , , , , , , , , , , , function(t, e, n) {
    var i = n(32),
        r = n(17),
        a = n(33),
        o = n(35),
        c = n(45),
        s = function(t, e, n) {
            var l, p, u, d = t & s.F,
                h = t & s.G,
                f = t & s.S,
                x = t & s.P,
                m = t & s.B,
                g = t & s.W,
                v = h ? r : r[e] || (r[e] = {}),
                y = v.prototype,
                b = h ? i : f ? i[e] : (i[e] || {}).prototype;
            for (l in h && (n = e), n)(p = !d && b && void 0 !== b[l]) && c(v, l) || (u = p ? b[l] : n[l], v[l] = h && "function" != typeof b[l] ? n[l] : m && p ? a(u, i) : g && b[l] == u ? function(t) {
                var e = function(e, n, i) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, i)
                    }
                    return t.apply(this, arguments)
                };
                return e.prototype = t.prototype, e
            }(u) : x && "function" == typeof u ? a(Function.call, u) : u, x && ((v.virtual || (v.virtual = {}))[l] = u, t & s.R && y && !y[l] && o(y, l, u)))
        };
    s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e, n) {
    var i = n(34);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    var i = n(36),
        r = n(44);
    t.exports = n(40) ? function(t, e, n) {
        return i.f(t, e, r(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(37),
        r = n(39),
        a = n(43),
        o = Object.defineProperty;
    e.f = n(40) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = a(e, !0), i(n), r) try {
            return o(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(38);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(40) && !n(41)(function() {
        return 7 != Object.defineProperty(n(42)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    t.exports = !n(41)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(38),
        r = n(32).document,
        a = i(r) && i(r.createElement);
    t.exports = function(t) {
        return a ? r.createElement(t) : {}
    }
}, function(t, e, n) {
    var i = n(38);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !i(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !i(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var i = n(37),
        r = n(47),
        a = n(62),
        o = n(58)("IE_PROTO"),
        c = function() {},
        s = function() {
            var t, e = n(42)("iframe"),
                i = a.length;
            for (e.style.display = "none", n(63).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; i--;) delete s.prototype[a[i]];
            return s()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (c.prototype = i(t), n = new c, c.prototype = null, n[o] = t) : n = s(), void 0 === e ? n : r(n, e)
    }
}, function(t, e, n) {
    var i = n(36),
        r = n(37),
        a = n(48);
    t.exports = n(40) ? Object.defineProperties : function(t, e) {
        r(t);
        for (var n, o = a(e), c = o.length, s = 0; c > s;) i.f(t, n = o[s++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(49),
        r = n(62);
    t.exports = Object.keys || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(45),
        r = n(50),
        a = n(54)(!1),
        o = n(58)("IE_PROTO");
    t.exports = function(t, e) {
        var n, c = r(t),
            s = 0,
            l = [];
        for (n in c) n != o && i(c, n) && l.push(n);
        for (; e.length > s;) i(c, n = e[s++]) && (~a(l, n) || l.push(n));
        return l
    }
}, function(t, e, n) {
    var i = n(51),
        r = n(53);
    t.exports = function(t) {
        return i(r(t))
    }
}, function(t, e, n) {
    var i = n(52);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    var i = n(50),
        r = n(55),
        a = n(57);
    t.exports = function(t) {
        return function(e, n, o) {
            var c, s = i(e),
                l = r(s.length),
                p = a(o, l);
            if (t && n != n) {
                for (; l > p;)
                    if ((c = s[p++]) != c) return !0
            } else
                for (; l > p; p++)
                    if ((t || p in s) && s[p] === n) return t || p || 0; return !t && -1
        }
    }
}, function(t, e, n) {
    var i = n(56),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(i(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(56),
        r = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        return (t = i(t)) < 0 ? r(t + e, 0) : a(t, e)
    }
}, function(t, e, n) {
    var i = n(59)("keys"),
        r = n(61);
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e, n) {
    var i = n(17),
        r = n(32),
        a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: i.version,
        mode: n(60) ? "pure" : "global",
        copyright: "Â© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = !0
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var i = n(32).document;
    t.exports = i && i.documentElement
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(65),
        r = n(67);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(66);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                class: t.applyFormGroupClass
            }, [n("lt-label", {
                attrs: {
                    label: t.label,
                    "tooltip-link": t.tooltipLink,
                    showTooltip: t.showTooltip,
                    "show-question-mark": t.showQuestionMark,
                    "popper-content": t.popperContent
                }
            }), t._v(" "), n("a", {
                on: {
                    click: function(e) {
                        t.showPopup()
                    }
                }
            }, [t._v(t._s(t.rightlabel))]), t._v(" "), n("div", {
                class: t.applyInputGroupClass
            }, [t.alignLeft ? t._m(0) : t._e(), t._v(" "), n("input", {
                ref: "input",
                class: t.applyInputClass,
                attrs: {
                    maxlength: t.maxlength,
                    tabindex: t.tabIndex,
                    type: t.type,
                    id: t.id,
                    readonly: t.readonly
                },
                domProps: {
                    value: t.value
                },
                on: {
                    input: function(e) {
                        t.updateValue(e.target.value)
                    },
                    focus: t.selectAll,
                    blur: function(e) {
                        t.formatValue(), t.inputBlur()
                    },
                    keyup: t.allowOnlyNumeric
                }
            }), t._v(" "), 1 == t.showLoader ? n("div", {
                staticClass: "input-loader loader"
            }, [n("img", {
                attrs: {
                    alt: "lt-loader",
                    width: "61",
                    height: "60",
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAYAAADVPrJMAAAAAXNSR0IArs4c6QAADJZJREFUaAXdWwtwVcUZ/nfPuffc5JKHgBDESkBR0VpRREWhBEJDo6A4TlIFywRQbEWccZSiaDu3voa21s5A1QoFEh6lhtYHKD5ISCoy+AIERitiykAECUoIuYTknnN2t9+eJBDIDbkhEXOzk9xz7p49u/+3/3P/3cvo+yrvqCDVVATJCF5KjjuEuBpMitKJsTRcg8RUEhE7ivtjIOEAkdpLxLcRE1vJsnbQgdoamtrzKNqrjiaRdWiHhQe7AdwAYr7hIDYLoG4gRuceH4Pp4fDfeAVirygJzE2wSXkEjz4gMt8lEiVkVO2m2/pXHe+nnTcdA7qwvDv5U24kV9xKnMZRINibXLseCDeIDBNkYqg6MJXJGpIUwVcXlXhIfgBMooRgPRSJaiHq2/v8eKfmMDpaCyl4HX1uoNxekIr2lfaBXgQRTTk8iTi7G2iuIiuBe2A1TRqsXfc1uPoRAH5KQu4kZlRCfGtwtcmxBRl+DoR+klAFzs4hyS7Gm1eQwYaS6b+wnvuQAhPgbUwik9tJqKVUkbqY7mOYjDMrZwRahcDP82jcu8kZD2f7X7tEWom9SIAoISQpeRjEr8J1NZnsvyCriiakVgM8qG+tKEbLKzGRLJVq+UVkqnGk2J0YrRcmkZNpEY9Uh2/uNv/ljNTlTzx0bVl5az1Ge95m0GoxdDSRZkMkZ9awoPmw8Xv3b8YM9B0pI0EFpMLLic4/QLlMy2j7SqGCuHzVnYyekCa6h1jCgCG+f1VkBZekci6rIAmP+YLhV0PXbNbGMObSJtBqBQ0kkxaCgJHeCCDpQ/eaz65nRfnkpOTTRPZdzCO3teErqofJDuZNTp7zcHq3sjTbMSBMygXwBYI7j88d8X7M4h4zaAC+lXz0J5iegeAowRjVgdt/oUpaxmaQFuPvvcC+89+tHzZCGImzuEk3a4MPoYe6q/cU4/f/YWTRjliIiAm0+gfdDmP0V9jZNA+woP0A/CC4/hrLJSjz2S1zijJ7kylnwAI8whnzcR/sZ0Rss5SZFxq17tPWqGkVNACPhzgvAEAdVGgOfwSH8wCbTB+21vn3+TxUkmE6jOdIRs8ZJkvTQKSjPou4bOKzY4q3n27s04KGSI+BSP8doPt5nbi0Bdc72R305ek6PZvP5pRmjoIrW2H4jD4KXFGO2sKI3/XUyKIWVQ4aEb3AG8JN0LPQ4X4ehx3ajut9nQmwpvyZjOISqdgMYcsKSKF2/VcLJebNXHtdcnRkMAzRHgBwEBx+Fjp8pRc3ufQVdPoOeMwfVKSj0arr5masfxWyPUm66pBwJWIZY0xSMDhn5tpsK9o7UUED8B3Q4Ts9o6WoBlNzPzjcorhE6/hs1z0zekOxYvIhKRD7CYWgjx5ITIwg/m9emoGGHmv9DUGUTYi2C5F5AnDXNX+189UcrUn4J+A+hwgYhp0lcEZzH12bfWLB00ByM9AAOhuc7QvICLLoDcDOZyGtLZ2/zL/prYjBnPnCkRu4AdiMBqmEyEOnUn4SaLWSMsHhXwAwI4cO4XMuXNPBU1/qzN+fHvleuSvoCSHVEcPkDNzOm108+oamNJ8EGg+mwnhhtYM7SevhmTc3bRwv97V1gfelIz8G04j7WS+m4/Ym5ThotYwuQaPheMZgwCoBegEb5dnuJs3j41aLuZTGQgQr1RwhG7id8fh/fjawkXoPNAItBpEeBqt9gQdT0WY2iYoaG8Xjde7oolWw4luFo7TvTpfkDmvEUc/pQtKOPFOLgxeIKFra2CBer4CCRZhajA/SrGaksmZ/MiZF46kHHaF01I5rEOZ9WPa/Ga9gm9IdYYdXA+BeiYBFKj5ehln/E6ADNIgsSm3gdBH1pOqmL8fr/Q3fDgzDiq/TeUh/gpFskDPYA60KYa8l9FlbbM13WG0sF9uf9egEM5WbuwqxGUBDvHWUBjm/ceaubItjNRyAHg/2QEPbEZxs6wT0dhgJzDB2uLaMKGQcwPEhfY84AQ7uItWIDCREAPzdhQmo7LARO0FHoo5XKZLbGRAD4qDwITsZGUZPl89p0Oc9AF3bCWjtMBJYd1UDT12m9RpBSkD6jPO0Fvf1RtCcJqoA5Ih310U+jh301cF7faP1WrtjpdgFGjRSrPj04Z/TEfw7XQSvB2Ne9lobQCv13gM4jUSi7M0pDLi19A0d9bh8COmDuFhRxcoYLyyxVU2kBknTOqp1pJliUrEfTEfhuLiQfL1T0cXKoQNYbWGpLLQMGwq31ToOY32wfwTQ1AP7F1rku1RxXOW3DOaXSJ26QlVxZBK/9Sy3Z8jUORBy7cK6TMlZdbkPMWj3enHWjJaHYcTNfUCos6e6Jg2fUZNp8ToLSeFUCy6rt7fwAGO5lHuxNeCrBuD6PSjF0slMSIhXgNHorpWBRMZVumeelXKFwwFahG2Id/0eEGP9yXCbJdKidRYvdZbJk+GyBmtRxoGHMlu5Rzjtw0Yc0VYPBNP5T+PqeAEUG53uQNPHk3XgrTjf4vREYMo262BEbWoIQ9GPzFQZXi40tj47catQKIRkkRrl7W7q7KhQGy//fFOk0T19AXdV4dHPkBlLQjzeBcr+PmsCJPlN2ogJVx1zyd0SCqHGwxa294DTbzR4aOi0dXsXwEy2PzkDq6tLdQ7cFbLESEr8SuPyQLNSBKGk1ntuy4vb6C69/Ix34FzxKQCNcAzoGL3V7/PrDh0H7YGT9gcAXeZB5Vhf3+K/JZ5B5y0ccz2A/tTjckRWMCU2Qse9dUWjThN7k/4H0KXasgN4CqzdPSonPqOznJwcgxnq18h59/KYKGlTfl7p8YzQcdAeVx2xCJAbtnHUjVRrnrQdEi+ct37+3Y/hocZ6XLZFGOuofIBvjERPXlywt91NOJxWgOhF4TAbLDj7rbol8bx4AavpnFY4truf81mmz+gNi62V+dWCKUWrm2I4mdP6iWk/B8i7vLDN5Bmk3BlqupdiaPpep713joqJOHiTI/U5PiUPHBP0tI5LmhLcDDRbDX8t1GNoFAFw/XwW7UuY0PSlzno/ZXHWaJOpJ0G/H+IssIR88uXpxV+eSm8z0F6DKvtNzM0CzwjgSC+Wn/PUBN+1p77cmb7nLcm6FAmB5+GiUrmJPLdLr1hBsTQajS36YjUBUZmw1iAaH+6JuqLdmIR72erIumgd/ZB10wpGX6sEWwCwVzIdiNhyB2KwrPwppVFPDEfnNBCw17CjxeSDEJUvPI5z6o/F+AvqZt+QHxLgqWNPLsi8GFL5guFjV2o6cQqh3FVyVkuA9fstgtYP2WrnEwC/G5zerb/Dol8E/71SjTezYBlalBKv7Vn4mLwoc5gpaAXj3GMEThdVQKwfWDa15N3TDR8T4SrbHInc6WLk0QZ4ok4KG3zqURxjWomgJuaDqKcjpC3Pfrk0K2gq+zYmjT8iyOyj/TE4/I2QbGbBtKJ/t9ZXTKB1J2p8wnCswudDx+v3vbxKHKJk9ny2Rv/04OyUyQUjfmII369gsKYDsKEBSyl3Kil/sziv5CR/3BJFMYPWHaixiX3Icp+Hw7/N69Bw6KActP9temSFKfnCSW9M2tXSQO2tf3Hci31TVNL0LcPfmXo4ff/5ZIN0/CkhiwUMbEHe+rJYx2gTaN2pZ9VdCwfOxWM2BYMfsonObj48wJVTjgX76zAqC/3+PTtzV4XsWIloqd1L01/ysW8D/f1C5CGOzjWlkf5dr69rPxuy0bITah0laF7ElX9eeW9pm86Ztxm0B1zP8Vgautc39PFS4/6hAdNMk0hA4ageMKtjUIMSpsxXTINtkiJSaVop1bmrclvdGFySsSQQPFclhcOqO6KqIT6DT8AWazYiqqCWY71GxE8/qj6/ZsPW8h/tfOrCve+V6qRAS5PWUv0ZgT7RmTKWTVg0HptEMzEPQwNGIMmVDjybDt1BoHDqsDzfjBw7VjjyCyb5PsnlUS5YBL/PENhRMaCbfrRPhJT0wVRehjw0FgtyqI/7u+FgK5wFzgBhTyLiRCIg9hNHipfS10xbOYoYNinOrLQTdP2ghTmF/mOR6usZM8aiw1v9hv9yKALAS49oPQHeSh7NbWwbSYmlAAwuJkQfgfFZBlLteFG31/96A12314DRfhdq13DJ37as4CZIDBIe7SsdArqRhFBI8Qu3LB+AXNRVJkdCjvgIQLkMkE/EAxgRQBtf0eqg56dp0aeCdsEmb5SMredSfVxmle8OdYCNaBzkxOiNNR10nZc9z+rBeySGWbhnIreuALKrwL5+hmRpilM3cC+JKfzskMEGSKqQTO3BCaBthmFss027wggax6bkT9Hp6Q4v/weSyMev44VhewAAAABJRU5ErkJggg=="
                }
            })]) : t._e(), t._v(" "), t.alignRight ? t._m(1) : t._e()])], 1)
        },
        r = [function() {
            var t = this.$createElement;
            return (this._self._c || t)("span", {
                class: this.applyInputGroupAddonClass
            }, [this._v(this._s(this.symbol))])
        }, function() {
            var t = this.$createElement;
            return (this._self._c || t)("span", {
                class: this.applyInputGroupAddonClass
            }, [this._v(this._s(this.symbol))])
        }]
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(68),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = c(n(69)),
        r = c(n(5)),
        a = c(n(72)),
        o = c(n(172));

    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            label: {
                type: String,
                default: ""
            },
            value: {
                default: 0
            },
            maxlength: {
                default: 12
            },
            symbol: {
                type: String,
                default: "$"
            },
            symbolAligned: {
                type: String,
                default: "left"
            },
            precision: {
                default: 0
            },
            tooltipLink: {},
            applyInputClass: {
                default: "form-control"
            },
            tabIndex: {
                default: "0"
            },
            applyInputGroupClass: {
                default: "input-group"
            },
            applyFormGroupClass: {
                default: "form-group"
            },
            applyInputGroupAddonClass: {
                default: "input-group-addon"
            },
            id: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "text"
            },
            readonly: {
                default: !1
            },
            rightlabel: {
                type: String,
                default: ""
            },
            rightLabelLink: {
                default: ""
            },
            showTooltip: {
                default: !1
            },
            showQuestionMark: {
                default: ""
            },
            popperContent: {
                default: ""
            },
            maxValue: {
                default: i.default
            },
            modelName: {
                default: null
            },
            showLoader: {
                default: !1
            }
        },
        mounted: function() {
            this.formatValue(), this.setTracking()
        },
        updated: function() {
            this.setTracking()
        },
        created: function() {
            this.allowOnlyNumeric()
        },
        methods: {
            showPopup: function() {
                this.$emit("showPopup", !0)
            },
            updateValue: function(t) {
                this.$emit("input", r.default.unformat(t))
            },
            formatValue: function() {
                void 0 !== this.value && "" != this.value && this.value.toString().indexOf(",") > 0 && (this.value = this.value.replace(/,/g, ""));
                var t = this.maxValue !== i.default && parseFloat(this.value) > parseFloat(this.maxValue) ? this.maxValue : this.value;
                this.$refs.input.value = r.default.formatMoney(t, {
                    symbol: "",
                    precision: this.precision
                })
            },
            inputBlur: function() {
                var t = this.modelName ? {
                    model: this.modelName,
                    maxValue: this.maxValue,
                    value: this.$refs.input.value
                } : this.$refs.input.value;
                this.$emit("inputBlur", t)
            },
            selectAll: function(t) {
                setTimeout(function() {
                    t.target.select()
                }, 0)
            },
            setTracking: function() {
                o.default.set({
                    key: this.label,
                    val: this.value
                })
            },
            allowOnlyNumeric: function(t) {
                void 0 == t || "8" == t.keyCode || "46" == t.keyCode || "36" == t.keyCode || "37" == t.keyCode || "39" == t.keyCode || "16" == t.keyCode || "9" == t.keyCode || "17" == t.keyCode || "a" == t.key && t.ctrlKey || (this.$refs.input.value = isNaN(this.$refs.input.value) ? this.value : this.$refs.input.value)
            }
        },
        computed: {
            alignLeft: function() {
                return "left" == this.symbolAligned
            },
            alignRight: function() {
                return "right" == this.symbolAligned
            }
        },
        components: {
            LtLabel: a.default,
            trackData: o.default
        }
    }
}, function(t, e, n) {
    t.exports = {
        default: n(70),
        __esModule: !0
    }
}, function(t, e, n) {
    n(71), t.exports = 9007199254740991
}, function(t, e, n) {
    var i = n(31);
    i(i.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(73),
        r = n(75);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    n(169);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, "c0bc0f4a", null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(74);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return t.showTooltip ? n("label", [t._v("\n    " + t._s(t.label) + " "), n("tooltip-view", {
                attrs: {
                    "show-question-mark": t.showQuestionMark,
                    "popper-content": t.popperContent,
                    referenceElement: "open me"
                }
            })], 1) : t.label ? t._m(0) : n("span", [t.tooltipLink ? n("tooltip", {
                attrs: {
                    "tooltip-link": t.tooltipLink,
                    "tooltip-text": t.tooltipText,
                    "tooltip-class": t.tooltipClass
                }
            }) : t._e()], 1)
        },
        r = [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("label", [this._v("\n    " + this._s(this.label) + " "), this.tooltipLink ? e("tooltip", {
                attrs: {
                    "tooltip-link": this.tooltipLink
                }
            }) : this._e()], 1)
        }]
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(76),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = a(n(77)),
        r = a(n(151));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            label: {
                type: String,
                default: ""
            },
            span: {
                type: String,
                default: ""
            },
            tooltipLink: {},
            tooltipClass: {
                default: "glyphicon glyphicon-question-sign calc-question"
            },
            tooltipText: {
                type: String,
                default: ""
            },
            showTooltip: {
                default: !1
            },
            showQuestionMark: {
                default: ""
            },
            popperContent: {
                default: ""
            }
        },
        components: {
            Tooltip: i.default,
            TooltipView: r.default
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(78),
        r = n(80);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(79);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("span", [n("a", {
                class: t.tooltipClass,
                attrs: {
                    target: t.target
                },
                on: {
                    click: function(e) {
                        t.handleClick()
                    }
                }
            }, [t._v(t._s(t.tooltipText))]), t._v(" "), t.ShowModal ? n("modal", {
                on: {
                    close: function(e) {
                        t.ShowModal = !1
                    }
                }
            }, [n("div", {
                attrs: {
                    slot: "body"
                },
                domProps: {
                    innerHTML: t._s(t.ModalBody)
                },
                slot: "body"
            })]) : t._e()], 1)
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(81),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = c(n(82)),
        r = c(n(88)),
        a = c(n(149)),
        o = n(150);

    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            tooltipLink: {},
            tooltipClass: {
                default: "glyphicon glyphicon-question-sign calc-question"
            },
            tooltipText: {
                default: ""
            }
        },
        data: function() {
            return {
                ShowModal: !1,
                ModalBody: "",
                target: ""
            }
        },
        components: {
            Modal: i.default
        },
        methods: {
            handleClick: function() {
                if (void 0 !== this.tooltipLink && this.tooltipLink.indexOf("dma-") >= 0) return this.createModal(o.DebtManagementTooltip, this), this.ShowModal = !0, !1;
                if ("" == this.target) return this.fetchData(), this.ShowModal = !0, !1;
                if (window.location.hostname.indexOf(".lendingtree") < 0) {
                    var t = "https://www.lendingtree.com/glossary/" + this.tooltipLink;
                    window.open(t)
                }
            },
            fetchData: function() {
                var t = this;
                if (void 0 !== t.tooltipLink) {
                    var e = {
                        url: a.default.getWWWURL() + "/wp-json/glossary/v1?slug=" + t.tooltipLink,
                        storage_key: t.tooltipLink,
                        expTime: 9e5,
                        headers: {
                            "x-requested-with": "XMLHttpRequest"
                        }
                    };
                    return (0, r.default)(e).then(function(e) {
                        var n = JSON.parse(e);
                        "Not Found" != n.term ? (t.ModalBody = '<div class="glossary-details-section"><dl><dt><div class="term"><h1>' + n[0].term + "</h1></div></dt>", t.ModalBody += '<dd><div id="detail" class="detail">' + n[0].value + "</div></dd></dl>", t.ModalBody += '<div class="content-navigation-ahead"><a href="/glossary/" target="_blank">More Glossary Terms</a></div></div>') : t.ModalBody = "<h3>Glossary Not found.</h3>"
                    }, function(t) {
                        console.log("There is some issue with network call, please try again")
                    })
                }
            },
            createModal: function(t, e) {
                var n = t;
                "Not Found" != n.term ? (e.ModalBody = '<div class="glossary-details-section"><dl><dt><div class="term"><h1>' + n[e.tooltipLink].term + "</h1></div></dt>", e.ModalBody += '<dd><div id="detail" class="detail">' + n[e.tooltipLink].value + "</div></dd></dl>", e.ModalBody += '<div class="content-navigation-ahead"><a href="/glossary/" target="_blank">More Glossary Terms</a></div></div>') : e.ModalBody = "<h3>Glossary Not found.</h3>"
            }
        },
        created: function() {
            window.location.hostname.indexOf(".lendingtree") < 0 && (this.target = "_blank")
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(83),
        r = n(85);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(84);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask"
            }, [n("div", {
                staticClass: "modal-wrapper"
            }, [n("div", {
                staticClass: "modal-container"
            }, [n("div", {
                staticClass: "modal-body"
            }, [n("a", {
                staticClass: "modal-close",
                on: {
                    click: function(e) {
                        t.$emit("close")
                    }
                }
            }, [t._v("Ã—")]), t._v(" "), t._t("body", [t._v("\n            default body\n          ")])], 2)])])])])
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(86),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        beforeCreate: function(t) {
            document.body.className = document.body.className + " modal-open"
        },
        destroyed: function(t, e) {
            document.body.className = document.body.className.replace("modal-open", "").trim()
        }
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e, n, i, r, a, o, c) {
        var s, l = "function" == typeof t ? t.options : t;
        if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), i && (l.functional = !0), a && (l._scopeId = "data-v-" + a), o ? (s = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
            }, l._ssrRegister = s) : r && (s = c ? function() {
                r.call(this, this.$root.$options.shadowRoot)
            } : r), s)
            if (l.functional) {
                l._injectStyles = s;
                var p = l.render;
                l.render = function(t, e) {
                    return s.call(e), p(t, e)
                }
            } else {
                var u = l.beforeCreate;
                l.beforeCreate = u ? [].concat(u, s) : [s]
            }
        return {
            exports: t,
            options: l
        }
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = s(n(89)),
        r = s(n(122)),
        a = s(n(15)),
        o = s(n(126)),
        c = s(n(148));

    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = function(t) {
        return (new window.DOMParser).parseFromString(t, "text/xml")
    };
    e.default = function(t) {
        if (!t.url) return o.default.reject({
            error: "URL not defined"
        });
        var e = t.storage_key,
            n = t.expTime ? t.expTime : 36e5;
        if (e) {
            var s = c.default.get(e);
            if (null !== s) return o.default.resolve(s)
        }
        return new o.default(function(o, s) {
            var p = new XMLHttpRequest;
            if (p.open(t.method || "GET", t.url), p.onload = function() {
                    if (this.status >= 200 && this.status < 300) {
                        var t = p.responseText;
                        t && "notfound" == t.toLocaleLowerCase() && o(t);
                        try {
                            var i = JSON.parse(t),
                                r = (0, a.default)(t);
                            if (e && r && r.length > 0)
                                if ((r = r.toLocaleLowerCase()).indexOf("not found") > 0 || r.indexOf("error") > 0 && !i.hasOwnProperty("hasErrors") || i.hasOwnProperty("hasErrors") && i.hasErrors) {
                                    var u = {
                                        status: this.status,
                                        statusText: p.statusText
                                    };
                                    s((0, a.default)(u))
                                } else c.default.set(e, t, n)
                        } catch (i) {
                            var d = l(t).documentElement.outerHTML.toLocaleLowerCase();
                            d.indexOf("error") > 0 || d.indexOf("not found") > 0 ? (u = {
                                status: this.status,
                                statusText: p.statusText
                            }, s((0, a.default)(u))) : c.default.set(e, t, n)
                        }
                        o(t)
                    } else u = {
                        status: this.status,
                        statusText: p.statusText
                    }, s((0, a.default)(u))
                }, p.onerror = function() {
                    var t = {
                        status: this.status,
                        statusText: p.statusText
                    };
                    s((0, a.default)(t))
                }, t.headers && (0, r.default)(t.headers).forEach(function(e) {
                    p.setRequestHeader(e, t.headers[e])
                }), "POST" === t.method) p.setRequestHeader("Content-Type", "application/json"), p.send((0, a.default)(t.params));
            else {
                var u = t.params;
                u && "object" === (void 0 === u ? "undefined" : (0, i.default)(u)) && (u = (0, r.default)(u).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(u[t])
                }).join("&")), p.send(u)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i = o(n(90)),
        r = o(n(107)),
        a = "function" == typeof r.default && "symbol" == typeof i.default ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : typeof t
        };

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = "function" == typeof r.default && "symbol" === a(i.default) ? function(t) {
        return void 0 === t ? "undefined" : a(t)
    } : function(t) {
        return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
    }
}, function(t, e, n) {
    t.exports = {
        default: n(91),
        __esModule: !0
    }
}, function(t, e, n) {
    n(92), n(102), t.exports = n(106).f("iterator")
}, function(t, e, n) {
    "use strict";
    var i = n(93)(!0);
    n(94)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var i = n(56),
        r = n(53);
    t.exports = function(t) {
        return function(e, n) {
            var a, o, c = String(r(e)),
                s = i(n),
                l = c.length;
            return s < 0 || s >= l ? t ? "" : void 0 : (a = c.charCodeAt(s)) < 55296 || a > 56319 || s + 1 === l || (o = c.charCodeAt(s + 1)) < 56320 || o > 57343 ? t ? c.charAt(s) : a : t ? c.slice(s, s + 2) : o - 56320 + (a - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(60),
        r = n(31),
        a = n(95),
        o = n(35),
        c = n(96),
        s = n(97),
        l = n(98),
        p = n(100),
        u = n(99)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    t.exports = function(t, e, n, f, x, m, g) {
        s(n, e, f);
        var v, y, b, w = function(t) {
                if (!d && t in M) return M[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            _ = e + " Iterator",
            k = "values" == x,
            S = !1,
            M = t.prototype,
            C = M[u] || M["@@iterator"] || x && M[x],
            T = C || w(x),
            P = x ? k ? w("entries") : T : void 0,
            D = "Array" == e && M.entries || C;
        if (D && (b = p(D.call(new t))) !== Object.prototype && b.next && (l(b, _, !0), i || "function" == typeof b[u] || o(b, u, h)), k && C && "values" !== C.name && (S = !0, T = function() {
                return C.call(this)
            }), i && !g || !d && !S && M[u] || o(M, u, T), c[e] = T, c[_] = h, x)
            if (v = {
                    values: k ? T : w("values"),
                    keys: m ? T : w("keys"),
                    entries: P
                }, g)
                for (y in v) y in M || a(M, y, v[y]);
            else r(r.P + r.F * (d || S), e, v);
        return v
    }
}, function(t, e, n) {
    t.exports = n(35)
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    "use strict";
    var i = n(46),
        r = n(44),
        a = n(98),
        o = {};
    n(35)(o, n(99)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(o, {
            next: r(1, n)
        }), a(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(36).f,
        r = n(45),
        a = n(99)("toStringTag");
    t.exports = function(t, e, n) {
        t && !r(t = n ? t : t.prototype, a) && i(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(59)("wks"),
        r = n(61),
        a = n(32).Symbol,
        o = "function" == typeof a;
    (t.exports = function(t) {
        return i[t] || (i[t] = o && a[t] || (o ? a : r)("Symbol." + t))
    }).store = i
}, function(t, e, n) {
    var i = n(45),
        r = n(101),
        a = n(58)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = r(t), i(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e, n) {
    var i = n(53);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e, n) {
    n(103);
    for (var i = n(32), r = n(35), a = n(96), o = n(99)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < c.length; s++) {
        var l = c[s],
            p = i[l],
            u = p && p.prototype;
        u && !u[o] && r(u, o, l), a[l] = a.Array
    }
}, function(t, e, n) {
    "use strict";
    var i = n(104),
        r = n(105),
        a = n(96),
        o = n(50);
    t.exports = n(94)(Array, "Array", function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    e.f = n(99)
}, function(t, e, n) {
    t.exports = {
        default: n(108),
        __esModule: !0
    }
}, function(t, e, n) {
    n(109), n(119), n(120), n(121), t.exports = n(17).Symbol
}, function(t, e, n) {
    "use strict";
    var i = n(32),
        r = n(45),
        a = n(40),
        o = n(31),
        c = n(95),
        s = n(110).KEY,
        l = n(41),
        p = n(59),
        u = n(98),
        d = n(61),
        h = n(99),
        f = n(106),
        x = n(111),
        m = n(112),
        g = n(115),
        v = n(37),
        y = n(38),
        b = n(50),
        w = n(43),
        _ = n(44),
        k = n(46),
        S = n(116),
        M = n(118),
        C = n(36),
        T = n(48),
        P = M.f,
        D = C.f,
        O = S.f,
        A = i.Symbol,
        I = i.JSON,
        R = I && I.stringify,
        L = h("_hidden"),
        F = h("toPrimitive"),
        E = {}.propertyIsEnumerable,
        z = p("symbol-registry"),
        N = p("symbols"),
        W = p("op-symbols"),
        V = Object.prototype,
        j = "function" == typeof A,
        B = i.QObject,
        Y = !B || !B.prototype || !B.prototype.findChild,
        H = a && l(function() {
            return 7 != k(D({}, "a", {
                get: function() {
                    return D(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, e, n) {
            var i = P(V, e);
            i && delete V[e], D(t, e, n), i && t !== V && D(V, e, i)
        } : D,
        U = function(t) {
            var e = N[t] = k(A.prototype);
            return e._k = t, e
        },
        q = j && "symbol" == typeof A.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof A
        },
        G = function(t, e, n) {
            return t === V && G(W, e, n), v(t), e = w(e, !0), v(n), r(N, e) ? (n.enumerable ? (r(t, L) && t[L][e] && (t[L][e] = !1), n = k(n, {
                enumerable: _(0, !1)
            })) : (r(t, L) || D(t, L, _(1, {})), t[L][e] = !0), H(t, e, n)) : D(t, e, n)
        },
        $ = function(t, e) {
            v(t);
            for (var n, i = m(e = b(e)), r = 0, a = i.length; a > r;) G(t, n = i[r++], e[n]);
            return t
        },
        K = function(t) {
            var e = E.call(this, t = w(t, !0));
            return !(this === V && r(N, t) && !r(W, t)) && (!(e || !r(this, t) || !r(N, t) || r(this, L) && this[L][t]) || e)
        },
        J = function(t, e) {
            if (t = b(t), e = w(e, !0), t !== V || !r(N, e) || r(W, e)) {
                var n = P(t, e);
                return !n || !r(N, e) || r(t, L) && t[L][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = O(b(t)), i = [], a = 0; n.length > a;) r(N, e = n[a++]) || e == L || e == s || i.push(e);
            return i
        },
        X = function(t) {
            for (var e, n = t === V, i = O(n ? W : b(t)), a = [], o = 0; i.length > o;) !r(N, e = i[o++]) || n && !r(V, e) || a.push(N[e]);
            return a
        };
    j || (c((A = function() {
        if (this instanceof A) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === V && e.call(W, n), r(this, L) && r(this[L], t) && (this[L][t] = !1), H(this, t, _(1, n))
            };
        return a && Y && H(V, t, {
            configurable: !0,
            set: e
        }), U(t)
    }).prototype, "toString", function() {
        return this._k
    }), M.f = J, C.f = G, n(117).f = S.f = Z, n(114).f = K, n(113).f = X, a && !n(60) && c(V, "propertyIsEnumerable", K, !0), f.f = function(t) {
        return U(h(t))
    }), o(o.G + o.W + o.F * !j, {
        Symbol: A
    });
    for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) h(Q[tt++]);
    for (var et = T(h.store), nt = 0; et.length > nt;) x(et[nt++]);
    o(o.S + o.F * !j, "Symbol", {
        for: function(t) {
            return r(z, t += "") ? z[t] : z[t] = A(t)
        },
        keyFor: function(t) {
            if (!q(t)) throw TypeError(t + " is not a symbol!");
            for (var e in z)
                if (z[e] === t) return e
        },
        useSetter: function() {
            Y = !0
        },
        useSimple: function() {
            Y = !1
        }
    }), o(o.S + o.F * !j, "Object", {
        create: function(t, e) {
            return void 0 === e ? k(t) : $(k(t), e)
        },
        defineProperty: G,
        defineProperties: $,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: X
    }), I && o(o.S + o.F * (!j || l(function() {
        var t = A();
        return "[null]" != R([t]) || "{}" != R({
            a: t
        }) || "{}" != R(Object(t))
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = e = i[1], (y(e) || void 0 !== t) && !q(t)) return g(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !q(e)) return e
            }), i[1] = e, R.apply(I, i)
        }
    }), A.prototype[F] || n(35)(A.prototype, F, A.prototype.valueOf), u(A, "Symbol"), u(Math, "Math", !0), u(i.JSON, "JSON", !0)
}, function(t, e, n) {
    var i = n(61)("meta"),
        r = n(38),
        a = n(45),
        o = n(36).f,
        c = 0,
        s = Object.isExtensible || function() {
            return !0
        },
        l = !n(41)(function() {
            return s(Object.preventExtensions({}))
        }),
        p = function(t) {
            o(t, i, {
                value: {
                    i: "O" + ++c,
                    w: {}
                }
            })
        },
        u = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function(t, e) {
                if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!a(t, i)) {
                    if (!s(t)) return "F";
                    if (!e) return "E";
                    p(t)
                }
                return t[i].i
            },
            getWeak: function(t, e) {
                if (!a(t, i)) {
                    if (!s(t)) return !0;
                    if (!e) return !1;
                    p(t)
                }
                return t[i].w
            },
            onFreeze: function(t) {
                return l && u.NEED && s(t) && !a(t, i) && p(t), t
            }
        }
}, function(t, e, n) {
    var i = n(32),
        r = n(17),
        a = n(60),
        o = n(106),
        c = n(36).f;
    t.exports = function(t) {
        var e = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || c(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, n) {
    var i = n(48),
        r = n(113),
        a = n(114);
    t.exports = function(t) {
        var e = i(t),
            n = r.f;
        if (n)
            for (var o, c = n(t), s = a.f, l = 0; c.length > l;) s.call(t, o = c[l++]) && e.push(o);
        return e
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var i = n(52);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(50),
        r = n(117).f,
        a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return o && "[object Window]" == a.call(t) ? function(t) {
            try {
                return r(t)
            } catch (t) {
                return o.slice()
            }
        }(t) : r(i(t))
    }
}, function(t, e, n) {
    var i = n(49),
        r = n(62).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, r)
    }
}, function(t, e, n) {
    var i = n(114),
        r = n(44),
        a = n(50),
        o = n(43),
        c = n(45),
        s = n(39),
        l = Object.getOwnPropertyDescriptor;
    e.f = n(40) ? l : function(t, e) {
        if (t = a(t), e = o(e, !0), s) try {
            return l(t, e)
        } catch (t) {}
        if (c(t, e)) return r(!i.f.call(t, e), t[e])
    }
}, function(t, e) {}, function(t, e, n) {
    n(111)("asyncIterator")
}, function(t, e, n) {
    n(111)("observable")
}, function(t, e, n) {
    t.exports = {
        default: n(123),
        __esModule: !0
    }
}, function(t, e, n) {
    n(124), t.exports = n(17).Object.keys
}, function(t, e, n) {
    var i = n(101),
        r = n(48);
    n(125)("keys", function() {
        return function(t) {
            return r(i(t))
        }
    })
}, function(t, e, n) {
    var i = n(31),
        r = n(17),
        a = n(41);
    t.exports = function(t, e) {
        var n = (r.Object || {})[t] || Object[t],
            o = {};
        o[t] = e(n), i(i.S + i.F * a(function() {
            n(1)
        }), "Object", o)
    }
}, function(t, e, n) {
    t.exports = {
        default: n(127),
        __esModule: !0
    }
}, function(t, e, n) {
    n(119), n(92), n(102), n(128), n(146), n(147), t.exports = n(17).Promise
}, function(t, e, n) {
    "use strict";
    var i, r, a, o, c = n(60),
        s = n(32),
        l = n(33),
        p = n(129),
        u = n(31),
        d = n(38),
        h = n(34),
        f = n(130),
        x = n(131),
        m = n(135),
        g = n(136).set,
        v = n(138)(),
        y = n(139),
        b = n(140),
        w = n(141),
        _ = n(142),
        k = s.TypeError,
        S = s.process,
        M = S && S.versions,
        C = M && M.v8 || "",
        T = s.Promise,
        P = "process" == p(S),
        D = function() {},
        O = r = y.f,
        A = !! function() {
            try {
                var t = T.resolve(1),
                    e = (t.constructor = {})[n(99)("species")] = function(t) {
                        t(D, D)
                    };
                return (P || "function" == typeof PromiseRejectionEvent) && t.then(D) instanceof e && 0 !== C.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        I = function(t) {
            var e;
            return !(!d(t) || "function" != typeof(e = t.then)) && e
        },
        R = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                v(function() {
                    for (var i = t._v, r = 1 == t._s, a = 0, o = function(e) {
                            var n, a, o, c = r ? e.ok : e.fail,
                                s = e.resolve,
                                l = e.reject,
                                p = e.domain;
                            try {
                                c ? (r || (2 == t._h && E(t), t._h = 1), !0 === c ? n = i : (p && p.enter(), n = c(i), p && (p.exit(), o = !0)), n === e.promise ? l(k("Promise-chain cycle")) : (a = I(n)) ? a.call(n, s, l) : s(n)) : l(i)
                            } catch (t) {
                                p && !o && p.exit(), l(t)
                            }
                        }; n.length > a;) o(n[a++]);
                    t._c = [], t._n = !1, e && !t._h && L(t)
                })
            }
        },
        L = function(t) {
            g.call(s, function() {
                var e, n, i, r = t._v,
                    a = F(t);
                if (a && (e = b(function() {
                        P ? S.emit("unhandledRejection", r, t) : (n = s.onunhandledrejection) ? n({
                            promise: t,
                            reason: r
                        }) : (i = s.console) && i.error && i.error("Unhandled promise rejection", r)
                    }), t._h = P || F(t) ? 2 : 1), t._a = void 0, a && e.e) throw e.v
            })
        },
        F = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        E = function(t) {
            g.call(s, function() {
                var e;
                P ? S.emit("rejectionHandled", t) : (e = s.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        z = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), R(e, !0))
        },
        N = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw k("Promise can't be resolved itself");
                    (e = I(t)) ? v(function() {
                        var i = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, l(N, i, 1), l(z, i, 1))
                        } catch (t) {
                            z.call(i, t)
                        }
                    }): (n._v = t, n._s = 1, R(n, !1))
                } catch (t) {
                    z.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    A || (T = function(t) {
        f(this, T, "Promise", "_h"), h(t), i.call(this);
        try {
            t(l(N, this, 1), l(z, this, 1))
        } catch (t) {
            z.call(this, t)
        }
    }, (i = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(143)(T.prototype, {
        then: function(t, e) {
            var n = O(m(this, T));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), a = function() {
        var t = new i;
        this.promise = t, this.resolve = l(N, t, 1), this.reject = l(z, t, 1)
    }, y.f = O = function(t) {
        return t === T || t === o ? new a(t) : r(t)
    }), u(u.G + u.W + u.F * !A, {
        Promise: T
    }), n(98)(T, "Promise"), n(144)("Promise"), o = n(17).Promise, u(u.S + u.F * !A, "Promise", {
        reject: function(t) {
            var e = O(this);
            return (0, e.reject)(t), e.promise
        }
    }), u(u.S + u.F * (c || !A), "Promise", {
        resolve: function(t) {
            return _(c && this === o ? T : this, t)
        }
    }), u(u.S + u.F * !(A && n(145)(function(t) {
        T.all(t).catch(D)
    })), "Promise", {
        all: function(t) {
            var e = this,
                n = O(e),
                i = n.resolve,
                r = n.reject,
                a = b(function() {
                    var n = [],
                        a = 0,
                        o = 1;
                    x(t, !1, function(t) {
                        var c = a++,
                            s = !1;
                        n.push(void 0), o++, e.resolve(t).then(function(t) {
                            s || (s = !0, n[c] = t, --o || i(n))
                        }, r)
                    }), --o || i(n)
                });
            return a.e && r(a.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = O(e),
                i = n.reject,
                r = b(function() {
                    x(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, i)
                    })
                });
            return r.e && i(r.v), n.promise
        }
    })
}, function(t, e, n) {
    var i = n(52),
        r = n(99)("toStringTag"),
        a = "Arguments" == i(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? n : a ? i(e) : "Object" == (o = i(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var i = n(33),
        r = n(132),
        a = n(133),
        o = n(37),
        c = n(55),
        s = n(134),
        l = {},
        p = {};
    (e = t.exports = function(t, e, n, u, d) {
        var h, f, x, m, g = d ? function() {
                return t
            } : s(t),
            v = i(n, u, e ? 2 : 1),
            y = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (a(g)) {
            for (h = c(t.length); h > y; y++)
                if ((m = e ? v(o(f = t[y])[0], f[1]) : v(t[y])) === l || m === p) return m
        } else
            for (x = g.call(t); !(f = x.next()).done;)
                if ((m = r(x, v, f.value, e)) === l || m === p) return m
    }).BREAK = l, e.RETURN = p
}, function(t, e, n) {
    var i = n(37);
    t.exports = function(t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var a = t.return;
            throw void 0 !== a && i(a.call(t)), e
        }
    }
}, function(t, e, n) {
    var i = n(96),
        r = n(99)("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || a[r] === t)
    }
}, function(t, e, n) {
    var i = n(129),
        r = n(99)("iterator"),
        a = n(96);
    t.exports = n(17).getIteratorMethod = function(t) {
        if (void 0 != t) return t[r] || t["@@iterator"] || a[i(t)]
    }
}, function(t, e, n) {
    var i = n(37),
        r = n(34),
        a = n(99)("species");
    t.exports = function(t, e) {
        var n, o = i(t).constructor;
        return void 0 === o || void 0 == (n = i(o)[a]) ? e : r(n)
    }
}, function(t, e, n) {
    var i, r, a, o = n(33),
        c = n(137),
        s = n(63),
        l = n(42),
        p = n(32),
        u = p.process,
        d = p.setImmediate,
        h = p.clearImmediate,
        f = p.MessageChannel,
        x = p.Dispatch,
        m = 0,
        g = {},
        v = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e()
            }
        },
        y = function(t) {
            v.call(t.data)
        };
    d && h || (d = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return g[++m] = function() {
            c("function" == typeof t ? t : Function(t), e)
        }, i(m), m
    }, h = function(t) {
        delete g[t]
    }, "process" == n(52)(u) ? i = function(t) {
        u.nextTick(o(v, t, 1))
    } : x && x.now ? i = function(t) {
        x.now(o(v, t, 1))
    } : f ? (a = (r = new f).port2, r.port1.onmessage = y, i = o(a.postMessage, a, 1)) : p.addEventListener && "function" == typeof postMessage && !p.importScripts ? (i = function(t) {
        p.postMessage(t + "", "*")
    }, p.addEventListener("message", y, !1)) : i = "onreadystatechange" in l("script") ? function(t) {
        s.appendChild(l("script")).onreadystatechange = function() {
            s.removeChild(this), v.call(t)
        }
    } : function(t) {
        setTimeout(o(v, t, 1), 0)
    }), t.exports = {
        set: d,
        clear: h
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var i = void 0 === n;
        switch (e.length) {
            case 0:
                return i ? t() : t.call(n);
            case 1:
                return i ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var i = n(32),
        r = n(136).set,
        a = i.MutationObserver || i.WebKitMutationObserver,
        o = i.process,
        c = i.Promise,
        s = "process" == n(52)(o);
    t.exports = function() {
        var t, e, n, l = function() {
            var i, r;
            for (s && (i = o.domain) && i.exit(); t;) {
                r = t.fn, t = t.next;
                try {
                    r()
                } catch (i) {
                    throw t ? n() : e = void 0, i
                }
            }
            e = void 0, i && i.enter()
        };
        if (s) n = function() {
            o.nextTick(l)
        };
        else if (!a || i.navigator && i.navigator.standalone)
            if (c && c.resolve) {
                var p = c.resolve(void 0);
                n = function() {
                    p.then(l)
                }
            } else n = function() {
                r.call(i, l)
            };
        else {
            var u = !0,
                d = document.createTextNode("");
            new a(l).observe(d, {
                characterData: !0
            }), n = function() {
                d.data = u = !u
            }
        }
        return function(i) {
            var r = {
                fn: i,
                next: void 0
            };
            e && (e.next = r), t || (t = r, n()), e = r
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(34);
    t.exports.f = function(t) {
        return new function(t) {
            var e, n;
            this.promise = new t(function(t, i) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = i
            }), this.resolve = i(e), this.reject = i(n)
        }(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var i = n(32).navigator;
    t.exports = i && i.userAgent || ""
}, function(t, e, n) {
    var i = n(37),
        r = n(38),
        a = n(139);
    t.exports = function(t, e) {
        if (i(t), r(e) && e.constructor === t) return e;
        var n = a.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    var i = n(35);
    t.exports = function(t, e, n) {
        for (var r in e) n && t[r] ? t[r] = e[r] : i(t, r, e[r]);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(32),
        r = n(17),
        a = n(36),
        o = n(40),
        c = n(99)("species");
    t.exports = function(t) {
        var e = "function" == typeof r[t] ? r[t] : i[t];
        o && e && !e[c] && a.f(e, c, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var i = n(99)("iterator"),
        r = !1;
    try {
        var a = [7][i]();
        a.return = function() {
            r = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !r) return !1;
        var n = !1;
        try {
            var a = [7],
                o = a[i]();
            o.next = function() {
                return {
                    done: n = !0
                }
            }, a[i] = function() {
                return o
            }, t(a)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var i = n(31),
        r = n(17),
        a = n(32),
        o = n(135),
        c = n(142);
    i(i.P + i.R, "Promise", {
        finally: function(t) {
            var e = o(this, r.Promise || a.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return c(e, t()).then(function() {
                    return n
                })
            } : t, n ? function(n) {
                return c(e, t()).then(function() {
                    throw n
                })
            } : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(31),
        r = n(139),
        a = n(140);
    i(i.S, "Promise", {
        try: function(t) {
            var e = r.f(this),
                n = a(t);
            return (n.e ? e.reject : e.resolve)(n.v), e.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        set: function(t, e, n) {
            try {
                Vue.ls.set(t, e, n)
            } catch (t) {}
        },
        get: function(t) {
            try {
                return Vue.ls.get(t)
            } catch (t) {
                return null
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        getWWWURL: function() {
            return "https://www.lendingtree.com"
        },
        isThirdPartySite: function() {
            return window.location.hostname.indexOf(".lendingtree") < 0 && window.location.hostname.indexOf("localhost") < 0
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DebtManagementTooltip = {
        "dma-credit-card-debt": {
            term: "Credit Card Debt",
            value: "<p>Enter your total credit card debt. If you have more than one card, add up all the balances and enter that number here.</p>"
        },
        "dma-personal-loans": {
            term: "Personal Loans",
            value: "<p>Enter your total personal loan debt. If you have multiple personal loans, add the debt and enter the total amount here.</p>"
        },
        "dma-medical-expenses": {
            term: "Medical Expenses",
            value: "<p>Enter any outstanding medical bills you owe.</p>"
        },
        "dma-other-debt": {
            term: "Other Debt",
            value: "<p>Enter any other debt you might have, other than student or mortgage loans. For student loans, click on the 'High Student Loans' link on the main page.</p>"
        },
        "dma-debt-settlement-option": {
            term: "Debt Settlement",
            value: "<p>Debt relief providers will typically charge a fee for their services, expert advice, and actionable steps to improve your situation. These settings are based on the default averages most customers see in savings and fees. After talking with a debt settlement company, you can adjust these numbers for more accurate savings results.</p>"
        },
        "dma-credit-card-option": {
            term: "Credit Card",
            value: "<p>Weâ€™re assuming a default minimum payment of 4 percent of your outstanding debt and APR. For more accurate savings results, enter your total current minimum payments and an average APR on your credit card debt (if you have more than one credit card). If your payments are less than 4 percent of your outstanding balance, the default will be considered for our calculations.</p>"
        },
        "dma-personal-loan-option": {
            term: "Personal Loan",
            value: "<p>This is assuming the default APR and term based on your credit rating. For more accurate savings results, adjust the APR and term.</p>"
        },
        "dma-home-equity-option": {
            term: "Home equity",
            value: "<p>This assumes you own a home and have enough equity to cover the home equity loan. Weâ€™re using the default APR and term based on your credit rating. For more accurate savings results, adjust the APR and term.</p>"
        },
        "dma-debt-settlement-savings": {
            term: "Debt Settlement",
            value: "<p>A debt settlement company will negotiate your debt to help you get better monthly payments and interest rates. Youâ€™ll then pay your debt settlement company one monthly payment to go toward all your debt.</p><p>Debt settlement companies might not be able to settle medical debt, so debt-free predictions exclude medical debt.</p>"
        },
        "dma-balance-transfer-card-savings": {
            term: "Balance Transfer Card",
            value: "<p>A balance transfer card lets you shift high-interest balances to a card that offers a lower APR. With low or zero interest, you can see immediate and substantial savings. Savings are based on the interest you would eliminate by transferring your balance(s) over the offer term.</p><p>The saving calculation assumes your total credit card balance(s) can be transferred, actual balance(s) on how much can be transferred could vary and is dependent on the chosen card. Interest calculated on your existing card is an estimation based on the minimum payments.</p><p>You might not be able to transfer a personal loan or medical debt to a balance transfer card, some cards might have a balance transfer fee associated (check the fine print of your chosen card).</p>"
        },
        "dma-home-equity-savings": {
            term: "Home Equity Loan",
            value: "<p>Assuming that you have enough equity to cover the home equity loan. Savings are based on the interest you would eliminate by transferring your balance(s).</p><p>A home equity loan delivers a lump sum at closing and is repaid in monthly installments, this allows you to pay off other debt. A home equity loan allows the homeowner to borrow against their home equity (which is the difference between the property value and the mortgage balance(s) against it).</p>"
        },
        "dma-personal-loan-savings": {
            term: "Personal Loan",
            value: "<p>Covers all types of debts, we are not accounting for any interest to be paid on medical and other debt. Savings are based on the interest you would eliminate by transferring your balance(s).</p> <p> A personal loan provides you with a lump sum of money, allowing you to pay off other debt. You replace multiple payments with a single monthly payment toward the personal loan. A personal loan has higher interest rates than secured loans like a home-equity loan, but you are not required to put up any collateral to ensure repayment.</p>"
        },
        "dma-debt-covered": {
            term: "Debt Covered",
            value: "<p>This is the Debt amount being covered under the current option.</p>"
        },
        "dma-interest": {
            term: "Interest",
            value: "<p>This is the interest you would pay over the offer term for this option.</p>"
        },
        "dma-monthly-payment": {
            term: "Monthly Payment",
            value: "<p>This is your monthly payment for this option.</p>"
        },
        "dma-debt-not-covered": {
            term: "Debt Not Covered",
            value: "<p>This is the Debt amount which is not covered under the current option</p>"
        }
    }, e.DebtManagementSavingDetail = {
        "personal-loan-detail": "A personal loan provides you with a lump sum of money, allowing you to pay off other debt. You replace multiple payments with a single monthly payment toward the personal loan. Savings are based on the interest you would eliminate by transferring your balance(s). A personal loan has higher interest rates than secured loans like a home-equity loan, but you are not required to put up any collateral to ensure repayment.",
        "home-equity-detail": "A home equity loan delivers a lump sum at closing and is repaid in monthly installments, this allows you to pay off other debt. Savings are based on the interest you would eliminate by transferring your balance(s). A home equity loan allows the homeowner to borrow against their home equity (which is the difference between the property value and the mortgage balance(s) against it).",
        "balance-transfer-card-detail": "A balance transfer card lets you shift high-interest balances to a card that offers a lower APR. With low or zero interest, you can see immediate and substantial savings. Savings are based on the interest you would eliminate by transferring your balance(s) over the offer term. The saving calculation assumes your total credit card balance(s) can be transferred, actual balance(s) on how much can be transferred could vary and is dependent on the chosen card. Interest calculated on your existing card is an estimation based on the minimum payments. You might not be able to transfer a personal loan or medical debt to a balance transfer card, some cards might have a balance transfer fee associated (check the fine print of your chosen card).",
        "debt-settlement-detail": "A debt settlement company will negotiate your debt to help you get better monthly payments and interest rates. Youâ€™ll then pay your debt settlement company one monthly payment to go toward all your debt. Debt settlement companies may not be able to settle medical debt."
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(152),
        r = n(154);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(153);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("span", [n("popper-view", {
                attrs: {
                    "hide-popper-tooltip": t.hidePopperTooltip
                },
                on: {
                    showPopper: function(e) {
                        t.showPopper(e)
                    },
                    hidePopper: function(e) {
                        t.hidePopper(e)
                    }
                }
            }, [n("div", {
                staticClass: "popper"
            }, [n("div", {
                staticClass: "close",
                on: {
                    click: function(e) {
                        t.hidePopper()
                    }
                }
            }, [t._v("\n                Ã—\n            ")]), t._v(" "), n("div", {
                domProps: {
                    innerHTML: t._s(t.popperContent)
                }
            })]), t._v(" "), t.showQuestionMark ? n("label", {
                attrs: {
                    slot: "reference"
                },
                slot: "reference"
            }, [n("a", {
                staticClass: "glyphicon glyphicon-question-sign calc-question"
            })]) : t._e()])], 1)
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(155),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(156),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = {
        props: {
            showQuestionMark: {
                default: !1
            },
            popperContent: {
                default: "Default Content"
            }
        },
        data: function() {
            return {
                hidePopperTooltip: !0
            }
        },
        methods: {
            showPopper: function() {
                this.hidePopperTooltip = !1
            },
            hidePopper: function() {
                this.hidePopperTooltip = !0
            }
        },
        components: {
            PopperView: a.default
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(157),
        r = n(159);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    n(163);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(158);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("span", [e("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !this.IsPopperHidden,
                    expression: "!IsPopperHidden"
                }]
            }, [this._t("default")], 2), this._v(" "), this._t("reference"), this._v("\n    " + this._s(this.checkPopperVisiblity) + "\n")], 2)
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(160),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(161),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };

    function o(t, e, n) {
        t && e && n && (document.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent("on" + e, n))
    }

    function c(t, e, n) {
        t && e && (document.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent("on" + e, n))
    }
    e.default = {
        props: {
            hidePopperTooltip: {
                default: !1
            }
        },
        data: function() {
            return {
                IsPopperHidden: this.hidePopperTooltip,
                referenceElm: null,
                popper: null,
                popperInstance: null
            }
        },
        computed: {
            checkPopperVisiblity: function() {
                this.IsPopperHidden = this.hidePopperTooltip
            }
        },
        methods: {
            togglePopper: function() {
                this.IsPopperHidden = !this.IsPopperHidden, this.IsPopperHidden ? this.hidePopper() : this.showPopper()
            },
            showPopper: function() {
                this.createPopperInstance(), this.$emit("showPopper", !0)
            },
            hidePopper: function() {
                this.$emit("hidePopper", !0), this.unsetPopper()
            },
            createPopperInstance: function() {
                if (this.popperInstance = new a.default(this.referenceElm, this.popper, {
                        modifiers: {
                            preventOverflow: {
                                padding: 0,
                                enabled: !0,
                                boundariesElement: "scrollParent"
                            },
                            flip: {
                                padding: 0
                            }
                        },
                        inner: {
                            enabled: !0
                        },
                        placement: "top"
                    }), "IE" == this.checkDeviceOs()) {
                    var t = this;
                    setTimeout(function() {
                        t.popperInstance.scheduleUpdate()
                    }, 50)
                } else this.popperInstance.scheduleUpdate()
            },
            handleDocumentClick: function(t) {
                "popper" != this.checkElementFocus(t) && 1 != this.IsPopperHidden && (this.IsPopperHidden = !0, this.hidePopper())
            },
            checkElementFocus: function(t) {
                if (!this.$el || !this.referenceElm || this.elementContains(this.$el, t.target) || this.elementContains(this.referenceElm, t.target) || !this.popper || this.elementContains(this.popper, t.target)) return "popper"
            },
            elementContains: function(t, e) {
                return "function" == typeof t.contains && t.contains(e)
            },
            destroyPopper: function() {
                c(this.referenceElm, "click", this.togglePopper), c(document, "click", this.handleDocumentClick), this.IsPopperHidden = !0
            },
            unsetPopper: function() {
                null != this.popperInstance && (this.popperInstance.destroy(), this.popperInstance = null)
            },
            appendArrow: function() {
                var t = document.createElement("div");
                t.setAttribute("x-arrow", ""), t.className = "popper__arrow", this.popper.appendChild(t)
            },
            onMouseOut: function(t) {
                var e = this;
                "popper" != this.checkElementFocus(t) && (clearTimeout(this._timer), this._timer = setTimeout(function() {
                    1 != e.IsPopperHidden && (e.IsPopperHidden = !0, e.hidePopper())
                }))
            },
            checkDeviceOs: function() {
                var t = navigator.userAgent,
                    e = t.indexOf("MSIE "),
                    n = t.indexOf("Trident/");
                return t.match(/Android/i) ? "android" : t.match(/webOS/i) ? "webos" : t.match(/iPhone/i) ? "iphone" : t.match(/iPod/i) ? "ipod" : t.match(/iPad/i) ? "ipad" : t.match(/Windows Phone/i) ? "windows phone" : t.match(/SymbianOS/i) ? "symbian" : t.match(/RIM/i) || t.match(/BB/i) ? "blackberry" : e > -1 || n > -1 ? "IE" : "desktop"
            }
        },
        mounted: function() {
            (this.referenceElm = this.$slots.reference[0].elm, this.popper = this.$slots.default[0].elm, o(this.referenceElm, "click", this.togglePopper), o(document, "click", this.handleDocumentClick), "desktop" != this.checkDeviceOs() && "IE" != this.checkDeviceOs()) && o(document.getElementsByClassName("help-me-calculate-modal")[0], "scroll", this.onMouseOut);
            this.appendArrow()
        },
        destroyed: function() {
            this.destroyPopper(), this.unsetPopper()
        }
    }, "ontouchstart" in document.documentElement && (document.body.style.cursor = "pointer")
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            for (

                var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, a = 0; a < i.length; a += 1)
                if (n && navigator.userAgent.indexOf(i[a]) >= 0) {
                    r = 1;
                    break
                }
            var o = n && window.Promise ? function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, window.Promise.resolve().then(function() {
                        e = !1, t()
                    }))
                }
            } : function(t) {
                var e = !1;
                return function() {
                    e || (e = !0, setTimeout(function() {
                        e = !1, t()
                    }, r))
                }
            };

            function c(t) {
                return t && "[object Function]" === {}.toString.call(t)
            }

            function s(t, e) {
                if (1 !== t.nodeType) return [];
                var n = getComputedStyle(t, null);
                return e ? n[e] : n
            }

            function l(t) {
                return "HTML" === t.nodeName ? t : t.parentNode || t.host
            }

            function p(t) {
                if (!t) return document.body;
                switch (t.nodeName) {
                    case "HTML":
                    case "BODY":
                        return t.ownerDocument.body;
                    case "#document":
                        return t.body
                }
                var e = s(t),
                    n = e.overflow,
                    i = e.overflowX,
                    r = e.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? t : p(l(t))
            }
            var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                d = n && /MSIE 10/.test(navigator.userAgent);

            function h(t) {
                return 11 === t ? u : 10 === t ? d : u || d
            }

            function f(t) {
                if (!t) return document.documentElement;
                for (var e = h(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
            }

            function x(t) {
                return null !== t.parentNode ? x(t.parentNode) : t
            }

            function m(t, e) {
                if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
                var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? t : e,
                    r = n ? e : t,
                    a = document.createRange();
                a.setStart(i, 0), a.setEnd(r, 0);
                var o, c, s = a.commonAncestorContainer;
                if (t !== s && e !== s || i.contains(r)) return "BODY" === (c = (o = s).nodeName) || "HTML" !== c && f(o.firstElementChild) !== o ? f(s) : s;
                var l = x(t);
                return l.host ? m(l.host, e) : m(t, x(e).host)
            }

            function g(t) {
                var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = t.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = t.ownerDocument.documentElement;
                    return (t.ownerDocument.scrollingElement || i)[e]
                }
                return t[e]
            }

            function v(t, e) {
                var n = "x" === e ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
            }

            function y(t, e, n, i) {
                return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], h(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
            }

            function b(t) {
                var e = t.body,
                    n = t.documentElement,
                    i = h(10) && getComputedStyle(n);
                return {
                    height: y("Height", e, n, i),
                    width: y("Width", e, n, i)
                }
            }
            var w = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                },
                _ = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) {
                        return n && t(e.prototype, n), i && t(e, i), e
                    }
                }(),
                k = function(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                },
                S = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                };

            function M(t) {
                return S({}, t, {
                    right: t.left + t.width,
                    bottom: t.top + t.height
                })
            }

            function C(t) {
                var e = {};
                try {
                    if (h(10)) {
                        e = t.getBoundingClientRect();
                        var n = g(t, "top"),
                            i = g(t, "left");
                        e.top += n, e.left += i, e.bottom += n, e.right += i
                    } else e = t.getBoundingClientRect()
                } catch (t) {}
                var r = {
                        left: e.left,
                        top: e.top,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    },
                    a = "HTML" === t.nodeName ? b(t.ownerDocument) : {},
                    o = a.width || t.clientWidth || r.right - r.left,
                    c = a.height || t.clientHeight || r.bottom - r.top,
                    l = t.offsetWidth - o,
                    p = t.offsetHeight - c;
                if (l || p) {
                    var u = s(t);
                    l -= v(u, "x"), p -= v(u, "y"), r.width -= l, r.height -= p
                }
                return M(r)
            }

            function T(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(10),
                    r = "HTML" === e.nodeName,
                    a = C(t),
                    o = C(e),
                    c = p(t),
                    l = s(e),
                    u = parseFloat(l.borderTopWidth, 10),
                    d = parseFloat(l.borderLeftWidth, 10);
                n && r && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
                var f = M({
                    top: a.top - o.top - u,
                    left: a.left - o.left - d,
                    width: a.width,
                    height: a.height
                });
                if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
                    var x = parseFloat(l.marginTop, 10),
                        m = parseFloat(l.marginLeft, 10);
                    f.top -= u - x, f.bottom -= u - x, f.left -= d - m, f.right -= d - m, f.marginTop = x, f.marginLeft = m
                }
                return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (f = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = g(e, "top"),
                        r = g(e, "left"),
                        a = n ? -1 : 1;
                    return t.top += i * a, t.bottom += i * a, t.left += r * a, t.right += r * a, t
                }(f, e)), f
            }

            function P(t) {
                if (!t || !t.parentElement || h()) return document.documentElement;
                for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
                return e || document.documentElement
            }

            function D(t, e, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    a = {
                        top: 0,
                        left: 0
                    },
                    o = r ? P(t) : m(t, e);
                if ("viewport" === i) a = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t.ownerDocument.documentElement,
                        i = T(t, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        a = Math.max(n.clientHeight, window.innerHeight || 0),
                        o = e ? 0 : g(n),
                        c = e ? 0 : g(n, "left");
                    return M({
                        top: o - i.top + i.marginTop,
                        left: c - i.left + i.marginLeft,
                        width: r,
                        height: a
                    })
                }(o, r);
                else {
                    var c = void 0;
                    "scrollParent" === i ? "BODY" === (c = p(l(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === i ? t.ownerDocument.documentElement : i;
                    var u = T(c, o, r);
                    if ("HTML" !== c.nodeName || function t(e) {
                            var n = e.nodeName;
                            return "BODY" !== n && "HTML" !== n && ("fixed" === s(e, "position") || t(l(e)))
                        }(o)) a = u;
                    else {
                        var d = b(t.ownerDocument),
                            h = d.height,
                            f = d.width;
                        a.top += u.top - u.marginTop, a.bottom = h + u.top, a.left += u.left - u.marginLeft, a.right = f + u.left
                    }
                }
                var x = "number" == typeof(n = n || 0);
                return a.left += x ? n : n.left || 0, a.top += x ? n : n.top || 0, a.right -= x ? n : n.right || 0, a.bottom -= x ? n : n.bottom || 0, a
            }

            function O(t, e, n, i, r) {
                var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === t.indexOf("auto")) return t;
                var o = D(n, i, a, r),
                    c = {
                        top: {
                            width: o.width,
                            height: e.top - o.top
                        },
                        right: {
                            width: o.right - e.right,
                            height: o.height
                        },
                        bottom: {
                            width: o.width,
                            height: o.bottom - e.bottom
                        },
                        left: {
                            width: e.left - o.left,
                            height: o.height
                        }
                    },
                    s = Object.keys(c).map(function(t) {
                        return S({
                            key: t
                        }, c[t], {
                            area: (e = c[t], e.width * e.height)
                        });
                        var e
                    }).sort(function(t, e) {
                        return e.area - t.area
                    }),
                    l = s.filter(function(t) {
                        var e = t.width,
                            i = t.height;
                        return e >= n.clientWidth && i >= n.clientHeight
                    }),
                    p = l.length > 0 ? l[0].key : s[0].key,
                    u = t.split("-")[1];
                return p + (u ? "-" + u : "")
            }

            function A(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return T(n, i ? P(e) : m(e, n), i)
            }

            function I(t) {
                var e = getComputedStyle(t),
                    n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
                    i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
                return {
                    width: t.offsetWidth + i,
                    height: t.offsetHeight + n
                }
            }

            function R(t) {
                var e = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return t.replace(/left|right|bottom|top/g, function(t) {
                    return e[t]
                })
            }

            function L(t, e, n) {
                n = n.split("-")[0];
                var i = I(t),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    a = -1 !== ["right", "left"].indexOf(n),
                    o = a ? "top" : "left",
                    c = a ? "left" : "top",
                    s = a ? "height" : "width",
                    l = a ? "width" : "height";
                return r[o] = e[o] + e[s] / 2 - i[s] / 2, r[c] = n === c ? e[c] - i[l] : e[R(c)], r
            }

            function F(t, e) {
                return Array.prototype.find ? t.find(e) : t.filter(e)[0]
            }

            function E(t, e, n) {
                return (void 0 === n ? t : t.slice(0, function(t, e, n) {
                    if (Array.prototype.findIndex) return t.findIndex(function(t) {
                        return t[e] === n
                    });
                    var i = F(t, function(t) {
                        return t[e] === n
                    });
                    return t.indexOf(i)
                }(t, "name", n))).forEach(function(t) {
                    t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = t.function || t.fn;
                    t.enabled && c(n) && (e.offsets.popper = M(e.offsets.popper), e.offsets.reference = M(e.offsets.reference), e = n(e, t))
                }), e
            }

            function z(t, e) {
                return t.some(function(t) {
                    var n = t.name;
                    return t.enabled && n === e
                })
            }

            function N(t) {
                for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                    var r = e[i],
                        a = r ? "" + r + n : t;
                    if (void 0 !== document.body.style[a]) return a
                }
                return null
            }

            function W(t) {
                var e = t.ownerDocument;
                return e ? e.defaultView : window
            }

            function V(t, e, n, i) {
                n.updateBound = i, W(t).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = p(t);
                return function t(e, n, i, r) {
                    var a = "BODY" === e.nodeName,
                        o = a ? e.ownerDocument.defaultView : e;
                    o.addEventListener(n, i, {
                        passive: !0
                    }), a || t(p(o.parentNode), n, i, r), r.push(o)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function j() {
                var t, e;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, W(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
                    t.removeEventListener("scroll", e.updateBound)
                }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
            }

            function B(t) {
                return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
            }

            function Y(t, e) {
                Object.keys(e).forEach(function(n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && B(e[n]) && (i = "px"), t.style[n] = e[n] + i
                })
            }

            function H(t, e, n) {
                var i = F(t, function(t) {
                        return t.name === e
                    }),
                    r = !!i && t.some(function(t) {
                        return t.name === n && t.enabled && t.order < i.order
                    });
                if (!r) {
                    var a = "`" + e + "`",
                        o = "`" + n + "`";
                    console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
                }
                return r
            }
            var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                q = U.slice(3);

            function G(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = q.indexOf(t),
                    i = q.slice(n + 1).concat(q.slice(0, n));
                return e ? i.reverse() : i
            }
            var $ = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function K(t, e, n, i) {
                var r = [0, 0],
                    a = -1 !== ["right", "left"].indexOf(i),
                    o = t.split(/(\+|\-)/).map(function(t) {
                        return t.trim()
                    }),
                    c = o.indexOf(F(o, function(t) {
                        return -1 !== t.search(/,|\s/)
                    }));
                o[c] && -1 === o[c].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var s = /\s*,\s*|\s+/,
                    l = -1 !== c ? [o.slice(0, c).concat([o[c].split(s)[0]]), [o[c].split(s)[1]].concat(o.slice(c + 1))] : [o];
                return (l = l.map(function(t, i) {
                    var r = (1 === i ? !a : a) ? "height" : "width",
                        o = !1;
                    return t.reduce(function(t, e) {
                        return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, o = !0, t) : o ? (t[t.length - 1] += e, o = !1, t) : t.concat(e)
                    }, []).map(function(t) {
                        return function(t, e, n, i) {
                            var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                a = +r[1],
                                o = r[2];
                            if (!a) return t;
                            if (0 === o.indexOf("%")) {
                                var c = void 0;
                                switch (o) {
                                    case "%p":
                                        c = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        c = i
                                }
                                return M(c)[e] / 100 * a
                            }
                            if ("vh" === o || "vw" === o) return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
                            return a
                        }(t, r, e, n)
                    })
                })).forEach(function(t, e) {
                    t.forEach(function(n, i) {
                        B(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
                    })
                }), r
            }
            var J = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = e.split("-")[1];
                                if (i) {
                                    var r = t.offsets,
                                        a = r.reference,
                                        o = r.popper,
                                        c = -1 !== ["bottom", "top"].indexOf(n),
                                        s = c ? "left" : "top",
                                        l = c ? "width" : "height",
                                        p = {
                                            start: k({}, s, a[s]),
                                            end: k({}, s, a[s] + a[l] - o[l])
                                        };
                                    t.offsets.popper = S({}, o, p[i])
                                }
                                return t
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.offset,
                                    i = t.placement,
                                    r = t.offsets,
                                    a = r.popper,
                                    o = r.reference,
                                    c = i.split("-")[0],
                                    s = void 0;
                                return s = B(+n) ? [+n, 0] : K(n, a, o, c), "left" === c ? (a.top += s[0], a.left -= s[1]) : "right" === c ? (a.top += s[0], a.left += s[1]) : "top" === c ? (a.left += s[0], a.top -= s[1]) : "bottom" === c && (a.left += s[0], a.top += s[1]), t.popper = a, t
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.boundariesElement || f(t.instance.popper);
                                t.instance.reference === n && (n = f(n));
                                var i = N("transform"),
                                    r = t.instance.popper.style,
                                    a = r.top,
                                    o = r.left,
                                    c = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var s = D(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                                r.top = a, r.left = o, r[i] = c, e.boundaries = s;
                                var l = e.priority,
                                    p = t.offsets.popper,
                                    u = {
                                        primary: function(t) {
                                            var n = p[t];
                                            return p[t] < s[t] && !e.escapeWithReference && (n = Math.max(p[t], s[t])), k({}, t, n)
                                        },
                                        secondary: function(t) {
                                            var n = "right" === t ? "left" : "top",
                                                i = p[n];
                                            return p[t] > s[t] && !e.escapeWithReference && (i = Math.min(p[n], s[t] - ("right" === t ? p.width : p.height))), k({}, n, i)
                                        }
                                    };
                                return l.forEach(function(t) {
                                    var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                    p = S({}, p, u[e](t))
                                }), t.offsets.popper = p, t
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(t) {
                                var e = t.offsets,
                                    n = e.popper,
                                    i = e.reference,
                                    r = t.placement.split("-")[0],
                                    a = Math.floor,
                                    o = -1 !== ["top", "bottom"].indexOf(r),
                                    c = o ? "right" : "bottom",
                                    s = o ? "left" : "top",
                                    l = o ? "width" : "height";
                                return n[c] < a(i[s]) && (t.offsets.popper[s] = a(i[s]) - n[l]), n[s] > a(i[c]) && (t.offsets.popper[s] = a(i[c])), t
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(t, e) {
                                var n;
                                if (!H(t.instance.modifiers, "arrow", "keepTogether")) return t;
                                var i = e.element;
                                if ("string" == typeof i) {
                                    if (!(i = t.instance.popper.querySelector(i))) return t
                                } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                                var r = t.placement.split("-")[0],
                                    a = t.offsets,
                                    o = a.popper,
                                    c = a.reference,
                                    l = -1 !== ["left", "right"].indexOf(r),
                                    p = l ? "height" : "width",
                                    u = l ? "Top" : "Left",
                                    d = u.toLowerCase(),
                                    h = l ? "left" : "top",
                                    f = l ? "bottom" : "right",
                                    x = I(i)[p];
                                c[f] - x < o[d] && (t.offsets.popper[d] -= o[d] - (c[f] - x)), c[d] + x > o[f] && (t.offsets.popper[d] += c[d] + x - o[f]), t.offsets.popper = M(t.offsets.popper);
                                var m = c[d] + c[p] / 2 - x / 2,
                                    g = s(t.instance.popper),
                                    v = parseFloat(g["margin" + u], 10),
                                    y = parseFloat(g["border" + u + "Width"], 10),
                                    b = m - t.offsets.popper[d] - v - y;
                                return b = Math.max(Math.min(o[p] - x, b), 0), t.arrowElement = i, t.offsets.arrow = (k(n = {}, d, Math.round(b)), k(n, h, ""), n), t
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(t, e) {
                                if (z(t.instance.modifiers, "inner")) return t;
                                if (t.flipped && t.placement === t.originalPlacement) return t;
                                var n = D(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                    i = t.placement.split("-")[0],
                                    r = R(i),
                                    a = t.placement.split("-")[1] || "",
                                    o = [];
                                switch (e.behavior) {
                                    case $.FLIP:
                                        o = [i, r];
                                        break;
                                    case $.CLOCKWISE:
                                        o = G(i);
                                        break;
                                    case $.COUNTERCLOCKWISE:
                                        o = G(i, !0);
                                        break;
                                    default:
                                        o = e.behavior
                                }
                                return o.forEach(function(c, s) {
                                    if (i !== c || o.length === s + 1) return t;
                                    i = t.placement.split("-")[0], r = R(i);
                                    var l = t.offsets.popper,
                                        p = t.offsets.reference,
                                        u = Math.floor,
                                        d = "left" === i && u(l.right) > u(p.left) || "right" === i && u(l.left) < u(p.right) || "top" === i && u(l.bottom) > u(p.top) || "bottom" === i && u(l.top) < u(p.bottom),
                                        h = u(l.left) < u(n.left),
                                        f = u(l.right) > u(n.right),
                                        x = u(l.top) < u(n.top),
                                        m = u(l.bottom) > u(n.bottom),
                                        g = "left" === i && h || "right" === i && f || "top" === i && x || "bottom" === i && m,
                                        v = -1 !== ["top", "bottom"].indexOf(i),
                                        y = !!e.flipVariations && (v && "start" === a && h || v && "end" === a && f || !v && "start" === a && x || !v && "end" === a && m);
                                    (d || g || y) && (t.flipped = !0, (d || g) && (i = o[s + 1]), y && (a = function(t) {
                                        return "end" === t ? "start" : "start" === t ? "end" : t
                                    }(a)), t.placement = i + (a ? "-" + a : ""), t.offsets.popper = S({}, t.offsets.popper, L(t.instance.popper, t.offsets.reference, t.placement)), t = E(t.instance.modifiers, t, "flip"))
                                }), t
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(t) {
                                var e = t.placement,
                                    n = e.split("-")[0],
                                    i = t.offsets,
                                    r = i.popper,
                                    a = i.reference,
                                    o = -1 !== ["left", "right"].indexOf(n),
                                    c = -1 === ["top", "left"].indexOf(n);
                                return r[o ? "left" : "top"] = a[n] - (c ? r[o ? "width" : "height"] : 0), t.placement = R(e), t.offsets.popper = M(r), t
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(t) {
                                if (!H(t.instance.modifiers, "hide", "preventOverflow")) return t;
                                var e = t.offsets.reference,
                                    n = F(t.instance.modifiers, function(t) {
                                        return "preventOverflow" === t.name
                                    }).boundaries;
                                if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                    if (!0 === t.hide) return t;
                                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === t.hide) return t;
                                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                                }
                                return t
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(t, e) {
                                var n = e.x,
                                    i = e.y,
                                    r = t.offsets.popper,
                                    a = F(t.instance.modifiers, function(t) {
                                        return "applyStyle" === t.name
                                    }).gpuAcceleration;
                                void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var o = void 0 !== a ? a : e.gpuAcceleration,
                                    c = f(t.instance.popper),
                                    s = C(c),
                                    l = {
                                        position: r.position
                                    },
                                    p = {
                                        left: Math.floor(r.left),
                                        top: Math.round(r.top),
                                        bottom: Math.round(r.bottom),
                                        right: Math.floor(r.right)
                                    },
                                    u = "bottom" === n ? "top" : "bottom",
                                    d = "right" === i ? "left" : "right",
                                    h = N("transform"),
                                    x = void 0,
                                    m = void 0;
                                if (m = "bottom" === u ? "HTML" === c.nodeName ? -c.clientHeight + p.bottom : -s.height + p.bottom : p.top, x = "right" === d ? "HTML" === c.nodeName ? -c.clientWidth + p.right : -s.width + p.right : p.left, o && h) l[h] = "translate3d(" + x + "px, " + m + "px, 0)", l[u] = 0, l[d] = 0, l.willChange = "transform";
                                else {
                                    var g = "bottom" === u ? -1 : 1,
                                        v = "right" === d ? -1 : 1;
                                    l[u] = m * g, l[d] = x * v, l.willChange = u + ", " + d
                                }
                                var y = {
                                    "x-placement": t.placement
                                };
                                return t.attributes = S({}, y, t.attributes), t.styles = S({}, l, t.styles), t.arrowStyles = S({}, t.offsets.arrow, t.arrowStyles), t
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(t) {
                                var e, n;
                                return Y(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                                    !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                                }), t.arrowElement && Object.keys(t.arrowStyles).length && Y(t.arrowElement, t.arrowStyles), t
                            },
                            onLoad: function(t, e, n, i, r) {
                                var a = A(r, e, t, n.positionFixed),
                                    o = O(n.placement, a, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return e.setAttribute("x-placement", o), Y(e, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                Z = function() {
                    function t(e, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        w(this, t), this.scheduleUpdate = function() {
                            return requestAnimationFrame(i.update)
                        }, this.update = o(this.update.bind(this)), this.options = S({}, t.Defaults, r), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(S({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                            i.options.modifiers[e] = S({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                            return S({
                                name: t
                            }, i.options.modifiers[t])
                        }).sort(function(t, e) {
                            return t.order - e.order
                        }), this.modifiers.forEach(function(t) {
                            t.enabled && c(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                        }), this.update();
                        var a = this.options.eventsEnabled;
                        a && this.enableEventListeners(), this.state.eventsEnabled = a
                    }
                    return _(t, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (!this.state.isDestroyed) {
                                    var t = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    t.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = O(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = L(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = E(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                                }
                            }.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return function() {
                                return this.state.isDestroyed = !0, z(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                            }.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return function() {
                                this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
                            }.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return j.call(this)
                        }
                    }]), t
                }();
            Z.Utils = ("undefined" != typeof window ? window : t).PopperUtils, Z.placements = U, Z.Defaults = J, e.default = Z
        }.call(this, n(162))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(164),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(165);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("5ed0b04c", i, !0, {})
}, function(t, e, n) {
    (t.exports = n(166)(!1)).push([t.i, ".popper{width:auto;background-color:#fafafa;color:#212121;text-align:center;padding:2px;display:inline-block;border-radius:3px;position:absolute;font-size:14px;font-weight:400;border:1px solid #ebebeb;z-index:200000;-moz-box-shadow:#3a3a3a 0 0 6px 0;-webkit-box-shadow:#3a3a3a 0 0 6px 0;box-shadow:0 0 6px 0 #3a3a3a}.popper .popper__arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px}.popper[x-placement^=top]{margin-bottom:5px}.popper[x-placement^=top] .popper__arrow{border-width:5px 5px 0;border-color:#fafafa transparent transparent;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=bottom]{margin-top:5px}.popper[x-placement^=bottom] .popper__arrow{border-width:0 5px 5px;border-color:transparent transparent #fafafa;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.popper[x-placement^=right]{margin-left:5px}.popper[x-placement^=right] .popper__arrow{border-width:5px 5px 5px 0;border-color:transparent #fafafa transparent transparent;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.popper[x-placement^=left]{margin-right:5px}.popper[x-placement^=left] .popper__arrow{border-width:5px 0 5px 5px;border-color:transparent transparent transparent #fafafa;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}", ""])
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        i = t[3];
                    if (!i) return n;
                    if (e && "function" == typeof btoa) {
                        var r = (o = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                            a = i.sources.map(function(t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */"
                            });
                        return [n].concat(a).concat([r]).join("\n")
                    }
                    var o;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            }).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                "number" == typeof a && (i[a] = !0)
            }
            for (r = 0; r < t.length; r++) {
                var o = t[r];
                "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
            }
        }, e
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return f
    });
    var i = n(168),
        r = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var a = {},
        o = r && (document.head || document.getElementsByTagName("head")[0]),
        c = null,
        s = 0,
        l = !1,
        p = function() {},
        u = null,
        d = "data-vue-ssr-id",
        h = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function f(t, e, n, r) {
        l = n, u = r || {};
        var o = Object(i.default)(t, e);
        return x(o),
            function(e) {
                for (var n = [], r = 0; r < o.length; r++) {
                    var c = o[r];
                    (s = a[c.id]).refs--, n.push(s)
                }
                e ? x(o = Object(i.default)(t, e)) : o = [];
                for (r = 0; r < n.length; r++) {
                    var s;
                    if (0 === (s = n[r]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete a[s.id]
                    }
                }
            }
    }

    function x(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e],
                i = a[n.id];
            if (i) {
                i.refs++;
                for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) i.parts.push(g(n.parts[r]));
                i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
            } else {
                var o = [];
                for (r = 0; r < n.parts.length; r++) o.push(g(n.parts[r]));
                a[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: o
                }
            }
        }
    }

    function m() {
        var t = document.createElement("style");
        return t.type = "text/css", o.appendChild(t), t
    }

    function g(t) {
        var e, n, i = document.querySelector("style[" + d + '~="' + t.id + '"]');
        if (i) {
            if (l) return p;
            i.parentNode.removeChild(i)
        }
        if (h) {
            var r = s++;
            i = c || (c = m()), e = b.bind(null, i, r, !1), n = b.bind(null, i, r, !0)
        } else i = m(), e = function(t, e) {
            var n = e.css,
                i = e.media,
                r = e.sourceMap;
            i && t.setAttribute("media", i);
            u.ssrId && t.setAttribute(d, e.id);
            r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, i), n = function() {
            i.parentNode.removeChild(i)
        };
        return e(t),
            function(i) {
                if (i) {
                    if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                    e(t = i)
                } else n()
            }
    }
    var v, y = (v = [], function(t, e) {
        return v[t] = e, v.filter(Boolean).join("\n")
    });

    function b(t, e, n, i) {
        var r = n ? "" : i.css;
        if (t.styleSheet) t.styleSheet.cssText = y(e, r);
        else {
            var a = document.createTextNode(r),
                o = t.childNodes;
            o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
        }
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
            var a = e[r],
                o = a[0],
                c = {
                    id: t + ":" + r,
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            i[o] ? i[o].parts.push(c) : n.push(i[o] = {
                id: o,
                parts: [c]
            })
        }
        return n
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(170),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(171);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("0dc6bc2a", i, !0, {})
}, function(t, e, n) {
    (t.exports = n(166)(!1)).push([t.i, ".calc-filter label[data-v-c0bc0f4a]{color:#444;font-weight:400;display:block}.calc-filter label .calc-question[data-v-c0bc0f4a]{top:2px}.gray-bg .calc-filter label[data-v-c0bc0f4a]{font-family:Source Sans Pro,sans-serif;color:#787878;font-weight:700;font-size:17.1px;margin-bottom:15px}", ""])
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {};
    e.default = {
        set: function(t) {
            var e = t.key.replace(/[\W]/g, "").toLowerCase();
            i[e] = t.val
        },
        get: function() {
            return i
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(174),
        r = n(176);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(175);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "form-group"
            }, [n("lt-label", {
                attrs: {
                    label: t.label,
                    "tooltip-link": t.tooltipLink,
                    showTooltip: t.showTooltip,
                    "show-question-mark": t.showQuestionMark,
                    "popper-content": t.popperContent
                }
            }), t._v(" "), n("span", {
                staticClass: "small-text"
            }, [t._v(t._s(t.smalltext))]), t._v(" "), n("select", {
                ref: "input",
                class: t.classValue,
                domProps: {
                    value: t.value
                },
                on: {
                    change: function(e) {
                        t.updateValue(e.target.value)
                    }
                }
            }, t._l(t.options, function(e) {
                return n("option", {
                    domProps: {
                        value: e.value
                    }
                }, [t._v("\n            " + t._s(e.text) + "\n        ")])
            }))], 1)
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(177),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = a(n(72)),
        r = a(n(172));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            value: {
                default: 0
            },
            label: {
                type: String,
                default: ""
            },
            options: {
                default: function() {
                    return []
                }
            },
            tooltipLink: {},
            classValue: {
                type: String,
                default: ""
            },
            smalltext: {
                type: String,
                default: ""
            },
            showTooltip: {
                default: !1
            },
            showQuestionMark: {
                default: ""
            },
            popperContent: {
                default: ""
            }
        },
        mounted: function() {
            this.formatValue(), this.setTracking()
        },
        updated: function() {
            this.setTracking()
        },
        methods: {
            updateValue: function(t) {
                this.$emit("input", t)
            },
            formatValue: function() {
                this.$refs.input.value = this.value
            },
            setTracking: function() {
                r.default.set({
                    key: this.label,
                    val: this.value
                })
            }
        },
        components: {
            LtLabel: i.default,
            trackData: r.default
        }
    }
}, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    e.__esModule = !0;
    var i, r = n(198),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = function(t, e, n) {
        return e in t ? (0, a.default)(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    t.exports = {
        default: n(199),
        __esModule: !0
    }
}, function(t, e, n) {
    n(200);
    var i = n(17).Object;
    t.exports = function(t, e, n) {
        return i.defineProperty(t, e, n)
    }
}, function(t, e, n) {
    var i = n(31);
    i(i.S + i.F * !n(40), "Object", {
        defineProperty: n(36).f
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(202),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = {
        amortizationBreakdown: function(t, e, n) {
            return function(t, e, n, i) {
                var r = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                i = i || 0;
                for (var o = a.default.getPayment(t, e, n), c = t, s = 0, l = 0, p = 0, u = 0, d = 0, h = 0, f = new Date, x = f.getMonth(), m = f.getFullYear(), g = {}, v = 1; v <= e && (s = c * n, o + i > c && (o > c ? (i = 0, o = c + s) : i = c - o), c -= l = o + i - s, 0 == Math.round(c - s) && (c = 0), void 0 === g[m] && (g[m] = new Array, p = 0, u = 0), u += l, p += s, h += l, d += s, g[m].push({
                        monthYear: r[++x % 12] + "/" + m,
                        namedMonth: r[x % 12],
                        month: x % 12,
                        year: m,
                        payment: Math.round(100 * o) / 100,
                        extraPayment: i,
                        principal: Math.round(100 * l) / 100,
                        interestPaid: Math.round(100 * s) / 100,
                        yearTotalInterest: Math.round(100 * p) / 100,
                        yearTotalPrincipal: Math.round(100 * u) / 100,
                        totalInterest: Math.round(100 * d) / 100,
                        totalPrincipal: Math.round(100 * h) / 100,
                        balance: c < 0 ? 0 : Math.round(100 * c) / 100
                    }), 0 !== c); v++) x % 12 == 11 && m++;
                return g
            }(t, a.default.convertLoanTermInMonths(e), a.default.convertInterestRatePerMonths(n), 0)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        convertLoanTermInMonths: function(t) {
            return 12 * t
        },
        convertInterestRatePerMonths: function(t) {
            return t / 1200
        },
        getPayment: function(t, e, n) {
            for (var i = 0, r = 1 + n, a = 1; a <= e; a++) i += Math.pow(r, -a);
            return t / i
        },
        monthlyPaymentUsingLoanTermInYears: function(t, e, n) {
            return this.getPayment(t, this.convertLoanTermInMonths(e), this.convertInterestRatePerMonths(n))
        },
        getMonthsLeft: function(t, e, n) {
            var i = t / 1200,
                r = -Math.log(1 - i * (e / n)),
                a = Math.log(1 + i),
                o = Math.round(r / a);
            return isNaN(o) ? 0 : o
        },
        monthlyPaymentForRefinance: function(t, e, n, i, r) {
            var a = (a = n * t - e) < 0 ? 0 : a;
            return this.monthlyPaymentUsingLoanTermInYears(e, i, r)
        },
        getIntrestRate: function(t, e, n) {
            var i = 2 * (t * e - n) / (t * n);
            return 100 * this.getFinalIntrestRate(i, t, e, n)
        },
        getFinalIntrestRate: function(t, e, n, i) {
            for (var r = 0, a = 0; Math.round(100 * t, 5) != Math.round(r, 5) && a < 20;) {
                a++;
                t = (r = t) - (n - n * Math.pow(1 + r, -e) - r * i) / (e * n * Math.pow(1 + r, -e - 1) - i)
            }
            return t
        },
        minimumPayment: function(t, e) {
            return this.convertInterestRatePerMonths(e) * t
        },
        getHomeEquityLoan: function(t, e) {
            return Math.round(.9 * t - e)
        },
        compute_PMT: function(t, e, n) {
            return t * e / (1 - Math.pow(1 + e, -1 * n)) * 100 / 100
        },
        compute_PMI: function(t, e) {
            var n = 0;
            return t >= .8 && (n = .0044 * e / 12), n
        },
        calculateHomeRates: function(t, e) {
            var n, i, r, a, o = {},
                c = parseInt(t.annualIncome) / 12,
                s = Math.round(.3 * c),
                l = parseInt(t.monthlyExpenses),
                p = 12 * parseInt(t.loanterm),
                u = parseInt(t.estimatedDownPayment),
                d = parseInt(t.hoa) / 12,
                h = parseInt(t.homeInsurance) / 12,
                f = parseFloat(t.mortgageRate) / 1200,
                x = parseFloat(t.propertyTaxes) / 1200,
                m = 0,
                g = 0,
                v = c * (t.debtToIncome / 100) - (l + d + h),
                y = (Math.pow(1 + f, p) - 1) / (Math.pow(1 + f, p) * f),
                b = 0,
                w = (v * y + u) / (1 + y * (x + b)),
                _ = w - u;
            t.pmi && ((g = _ / w) > .8 && (b = .0044 * g / 12));
            n = (i = (v * y + u) / (1 + y * (x + b))) - u, r = i * x, m = 0, t.pmi && (g = n / i, m = this.compute_PMI(g, n));
            var k = c - (a = this.compute_PMT(n, f, p) + m + d + h + r) - s - l;
            return "calculate" == e ? (v < 0 || a > c ? (o.payment = 0, o.loanamount = "$___,___", o.homeprice = "$___,___", o.isValid = !1) : (o.payment = Math.round(a), o.loanamount = Math.round(n), o.homeprice = Math.round(i), o.isValid = !0), o.debts = Math.round(l), o.leftover = Math.round(k), o.taxes = Math.round(s), o.income = Math.round(c), o) : "calculateDownpayment" == e ? "(" + Math.round(u / i * 100) + "%)" : void 0
        },
        getMonthlyPrincipalAndIntreset: function(t, e, n) {
            return t * (n * Math.pow(1 + n, e) / (Math.pow(1 + n, e) - 1))
        },
        CUMIPMT: function(t, e, n, i) {
            for (var r = n, a = 0, o = 0, c = t, s = 1; s <= e; s++) o += a = c * i, c -= r - a;

            return Math.round(o)
        }
    }
}, , , , , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = u(n(208)),
        r = u(n(64)),
        a = u(n(173)),
        o = u(n(214)),
        c = u(n(220)),
        s = u(n(222)),
        l = u(n(223)),
        p = u(n(213));

    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    u(n(5)).default.settings.currency.format = {
        pos: "%s%v",
        neg: "-%s%v",
        zero: "%s%v"
    }, e.default = {
        props: {
            hideTooltip: {
                default: 0
            }
        },
        computed: {
            DestinationURL: function() {
                return this.setDestinationBaseURL()
            }
        },
        methods: {
            updateInitialInterestRate: function(t) {
                this.NewInterestRate = t
            }
        },
        components: {
            NumberInput: r.default,
            DropDown: a.default,
            AdvertisingDisclosures: o.default,
            DefaultCalculatorLayout: i.default
        },
        mixins: [c.default, s.default, l.default, p.default]
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(209),
        r = n(211);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(210);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "calc-section yantr-tracking",
                class: t.calcBg,
                attrs: {
                    id: "lt-yantr"
                }
            }, [t.calculatorTitle ? n("h1", [t._v(t._s(t.calculatorTitle))]) : t._e(), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("div", {
                class: t.filterWidth
            }, [n("div", {
                class: t.calcFilter
            }, [!1 !== t.filterTitle ? n("h4", {
                staticClass: "text-capitalize"
            }, [t._v("\n                    " + t._s(t.filterTitle) + "\n                ")]) : t._e(), t._v(" "), t._t("filter")], 2)]), t._v(" "), n("div", {
                class: t.outputWidth
            }, [t._t("output")], 2)]), t._v(" "), t._t("footer")], 2)
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(212),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i, r = n(213),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = {
        mixins: [a.default]
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: {
            calcBg: {
                default: ""
            },
            filterWidth: {
                default: "col-xs-12 col-sm-5 col-md-4"
            },
            outputWidth: {
                default: "col-xs-12 col-sm-7 col-md-8"
            },
            calcFilter: {
                default: "calc-filter"
            },
            calculatorTitle: {},
            filterTitle: {
                default: !1
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(215),
        r = n(217);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(216);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this.$createElement;
            this._self._c;
            return this.disclosureTokens ? this._m(0) : this._e()
        },
        r = [function() {
            var t = this.$createElement;
            return (this._self._c || t)("a", {
                staticClass: "disclosure-link",
                attrs: {
                    href: this.url(),
                    target: "_blank"
                }
            }, [this._v(this._s(this.disclosureText))])
        }]
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(218),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(219);
    e.default = {
        props: {
            disclosureText: {
                default: "Advertising Disclosures"
            },
            disclosurePreText: {
                default: ""
            },
            disclosureTokens: {
                default: ""
            }
        },
        methods: {
            url: function() {
                return i.LT_WWW_URL + "/legal/advertising-disclosures-offers?disclosures=" + this.disclosureTokens
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.LT_WWW_URL = "https://www.lendingtree.com", e.LT_WWW_SPITTER_URL = "https://www.lendingtree.com/redirect/offers?id=", e.MYLT_URL = "https://my.lendingtree.com"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    n(219);
    var i, r = n(221),
        a = (i = r) && i.__esModule ? i : {
            default: i
        };
    e.default = {
        methods: {
            fetchData: function() {
                void 0 === this.interestRate && a.default.GetTokenValue(this.InterestRateToken, this.updateInitialInterestRate)
            }
        },
        created: function() {
            this.fetchData()
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = a(n(149)),
        r = a(n(88));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        GetTokenValue: function(t, e) {
            if (t && "function" == typeof e) {
                var n = this;
                n.callBackFunction = e;
                var a = {
                    url: i.default.getWWWURL() + "/wp-json/token/v1/?slug=" + t,
                    storage_key: t,
                    expTime: 9e5
                };
                return (0, r.default)(a).then(function(t) {
                    n.callBackFunction(JSON.parse(t).value)
                }, function(t) {
                    console.log("There is some issue with network call, please try again")
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(219);
    e.default = {
        methods: {
            redirectToDestinationUrl: function(t) {
                void 0 !== this.DestinationURL && "" != this.DestinationURL && (t = t ? window.open(this.DestinationURL, t) : window.open(this.DestinationURL, "_self"))
            },
            setDestinationBaseURL: function() {
                if (void 0 !== this.DestinationLinkOrId && "" != this.DestinationLinkOrId) return 0 == this.DestinationLinkOrId.indexOf("http") ? this.DestinationLinkOrId : i.LT_WWW_SPITTER_URL + this.DestinationLinkOrId
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = a(n(89)),
        r = a(n(172));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        mounted: function() {
            window.ltanalytics && this.firstInteractionTracking()
        },
        props: {
            calcName: {
                default: "no name specified"
            },
            calcParent: {
                default: "no parent specified"
            }
        },
        data: function() {
            return {
                CalcName: this.calcName,
                CalculatorUsed: this.calcName + ":" + this.calcParent,
                CalculatorUsedFlag: 0,
                eventTriggered: !1
            }
        },
        methods: {
            redirect: function(t) {
                var e = document.getElementsByTagName("base");
                window.ltanalytics && (r.default.set({
                    key: "calculator_used",
                    val: this.CalculatorUsed
                }), window.ltanalytics.track("Widget Calculator Clicked", r.default.get())), e.length > 0 && !t && (t = e[0].target), this.redirectToDestinationUrl(t)
            },
            setCalcTrackData: function() {
                var t = "",
                    e = document.getElementsByTagName("body");
                "object" == (void 0 === e ? "undefined" : (0, i.default)(e)) && e.length > 0 && (t = e[0].getAttribute("data-item-id")), t && !this.CalculatorUsedFlag && (this.CalculatorUsed += ":" + t, this.CalculatorUsedFlag = 1)
            },
            firstInteractionTracking: function() {
                this.setCalcTrackData();
                for (var t = this, e = document.querySelectorAll("#lt-yantr input, #lt-yantr select"), n = 0; n < e.length; n++) e[n].addEventListener("focus", function(e) {
                    0 == t.eventTriggered && (window.ltanalytics.track("Widget Calculator Used", {
                        calculator_used: t.CalculatorUsed
                    }), t.eventTriggered = !0)
                }, !1)
            }
        }
    }
}, , function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(226),
        r = (n(229), n(87)),
        a = Object(r.default)({}, i.render, i.staticRenderFns, !1, null, "3efe70fc", null);
    e.default = a.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(227);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "logo-wrapper"
            }, [this._m(0), this._v(" "), this._t("default")], 2)
        },
        r = [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("a", {
                staticClass: "lt-logo",
                attrs: {
                    href: "https://www.lendingtree.com/",
                    target: "_blank"
                }
            }, [e("img", {
                attrs: {
                    src: n(228)
                }
            })])
        }]
}, function(t, e, n) {
    t.exports = n.p + "./images/LT_logo.svg?6a4d3e378fc31f2fb7246afbb8212c6c"
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(230),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(231);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("e59d56b8", i, !0, {})
}, function(t, e, n) {
    (t.exports = n(166)(!1)).push([t.i, ".logo-wrapper[data-v-3efe70fc]{text-align:center;clear:both}.logo-wrapper .lt-logo[data-v-3efe70fc]{max-width:110px;margin:15px auto 0;display:inline-block}.logo-wrapper small[data-v-3efe70fc]{font-size:10px;color:#101f30;display:block}", ""])
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(233),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(234);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("4f6978dd", i, !0, {})
}, function(t, e, n) {
    var i = n(235);
       (t.exports = n(166)(!1)).push([t.i, '*{margin:0;padding:0}*,:after,:before{box-sizing:border-box}html{-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{margin:0}#lt-yantr{font-family:Lato,Arial,Sans-Serif;font-size:14px;color:#454545;line-height:1.6em;overflow-x:hidden}#lt-yantr [class*=" lt4-"],#lt-yantr [class^=lt4-]{font-family:lt5!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#lt-yantr label,#lt-yantr ol li,#lt-yantr ul li{line-height:1.6em}#lt-yantr img{max-width:100%;border:none;outline:none}#lt-yantr hr{margin:20px 0;border-top:1px solid #ddd}#lt-yantr a{color:#2F4559; cursor:pointer; text-decoration:none;transition:all .3s}#lt-yantr a:hover{color:#E93E51;text-decoration:none}#lt-yantr .h1,#lt-yantr .h2,#lt-yantr .h3,#lt-yantr .h4,#lt-yantr .h5,#lt-yantr h1,#lt-yantr h2,#lt-yantr h3,#lt-yantr h4,#lt-yantr h5{font-family:inherit;font-weight:400;line-height:1.3em;color:#101f30;margin:0}#lt-yantr .h1,#lt-yantr h1{color: #2C3F52;font-size: 34px;font-family: Roboto Slab, serif;font-weight: 700;margin-bottom:1.25em}@media (max-width:992px){#lt-yantr .h1,#lt-yantr h1{font-size:2.857em}}@media (max-width:767px){#lt-yantr .h1,#lt-yantr h1{font-size:1.929em}}#lt-yantr .h2,#lt-yantr h2{font-family:Georgia,Times New Roman,Serif;font-size:40px;margin:1.25em 0 1em}@media (max-width:992px){#lt-yantr .h2,#lt-yantr h2{font-size:2.3em;line-height:40px}}@media (max-width:767px){#lt-yantr .h2,#lt-yantr h2{font-size:1.6em}}@media (max-width:480px){#lt-yantr .h2,#lt-yantr h2{font-size:1.4em}}#lt-yantr .h3,#lt-yantr h3{font-size:27px;margin-bottom:.3em}#lt-yantr .h4,#lt-yantr h4{font-size:18px;font-weight:700;margin-bottom:1em}@media (max-width:767px){#lt-yantr .h4,#lt-yantr h4{font-size:1.24em}}#lt-yantr .h5,#lt-yantr h5{font-size:18px;font-weight:700;margin-bottom:1em;text-transform:uppercase}#lt-yantr p{font-size:17px;margin:0 0 1.5em;line-height:1.7em}#lt-yantr button,#lt-yantr input,#lt-yantr select,#lt-yantr textarea{font-family:inherit;outline:none}#lt-yantr input:-webkit-autofill,#lt-yantr input:-webkit-autofill:active,#lt-yantr input:-webkit-autofill:focus,#lt-yantr input:-webkit-autofill:hover{-webkit-box-shadow:0 0 0 1000px #fff inset;color:#fff}#lt-yantr select{font-size:16px;color:#101f30;width:100%;height:50px;background:url(' + i(n(236)) + ') center right 15px no-repeat #fff;border:1px solid #dadada;border-radius:4px;padding-left:15px;padding-right:53px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .3s;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}#lt-yantr select:focus{border-color:#2cace3}#lt-yantr select:-moz-focusring{color:transparent;text-shadow:0 0 0 #101f30}#lt-yantr select::-ms-expand{display:none}#lt-yantr select option{padding-left:15px}#lt-yantr input[type=date],#lt-yantr input[type=email],#lt-yantr input[type=number],#lt-yantr input[type=tel],#lt-yantr input[type=text]{display:inline-block;vertical-align:top;position:relative;border:1px solid #dadada;background:#fff;min-width:100px;width:100%;height:50px;color:#101f30;padding:0 15px;font-size:16px;line-height:normal;border-radius:4px;z-index:0;transition:all .3s;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}#lt-yantr input:focus[type=date],#lt-yantr input:focus[type=email],#lt-yantr input:focus[type=number],#lt-yantr input:focus[type=tel],#lt-yantr input[type=text]:focus{border:1px solid #2cace3;outline:0;box-shadow:none;background:#edf5f8}#lt-yantr input[type=date]::-ms-clear,#lt-yantr input[type=email]::-ms-clear,#lt-yantr input[type=number]::-ms-clear,#lt-yantr input[type=tel]::-ms-clear,#lt-yantr input[type=text]::-ms-clear{display:none}#lt-yantr input.error[type=date],#lt-yantr input.error[type=email],#lt-yantr input.error[type=number],#lt-yantr input.error[type=tel],#lt-yantr input[type=text].error{border-color:#e10000}#lt-yantr input[type=range]{width:100%;min-height:35px;overflow:hidden;margin:0;padding:0;border:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex}#lt-yantr input[type=range],#lt-yantr input[type=range]:focus{outline:none;box-shadow:none}#lt-yantr input::-webkit-slider-runnable-track{background:#08c177;content:"";height:10px}#lt-yantr input::-webkit-slider-thumb{height:24px;width:24px;-webkit-appearance:none;appearance:none;background:#00aeef;border-radius:50%;box-shadow:5px 0 0 -7px #c7c7c7,6px 0 0 -7px #c7c7c7,7px 0 0 -7px #c7c7c7,8px 0 0 -7px #c7c7c7,9px 0 0 -7px #c7c7c7,10px 0 0 -7px #c7c7c7,11px 0 0 -7px #c7c7c7,12px 0 0 -7px #c7c7c7,13px 0 0 -7px #c7c7c7,14px 0 0 -7px #c7c7c7,15px 0 0 -7px #c7c7c7,16px 0 0 -7px #c7c7c7,17px 0 0 -7px #c7c7c7,18px 0 0 -7px #c7c7c7,19px 0 0 -7px #c7c7c7,20px 0 0 -7px #c7c7c7,21px 0 0 -7px #c7c7c7,22px 0 0 -7px #c7c7c7,23px 0 0 -7px #c7c7c7,24px 0 0 -7px #c7c7c7,25px 0 0 -7px #c7c7c7,26px 0 0 -7px #c7c7c7,27px 0 0 -7px #c7c7c7,28px 0 0 -7px #c7c7c7,29px 0 0 -7px #c7c7c7,30px 0 0 -7px #c7c7c7,31px 0 0 -7px #c7c7c7,32px 0 0 -7px #c7c7c7,33px 0 0 -7px #c7c7c7,34px 0 0 -7px #c7c7c7,35px 0 0 -7px #c7c7c7,36px 0 0 -7px #c7c7c7,37px 0 0 -7px #c7c7c7,38px 0 0 -7px #c7c7c7,39px 0 0 -7px #c7c7c7,40px 0 0 -7px #c7c7c7,41px 0 0 -7px #c7c7c7,42px 0 0 -7px #c7c7c7,43px 0 0 -7px #c7c7c7,44px 0 0 -7px #c7c7c7,45px 0 0 -7px #c7c7c7,46px 0 0 -7px #c7c7c7,47px 0 0 -7px #c7c7c7,48px 0 0 -7px #c7c7c7,49px 0 0 -7px #c7c7c7,50px 0 0 -7px #c7c7c7,51px 0 0 -7px #c7c7c7,52px 0 0 -7px #c7c7c7,53px 0 0 -7px #c7c7c7,54px 0 0 -7px #c7c7c7,55px 0 0 -7px #c7c7c7,56px 0 0 -7px #c7c7c7,57px 0 0 -7px #c7c7c7,58px 0 0 -7px #c7c7c7,59px 0 0 -7px #c7c7c7,60px 0 0 -7px #c7c7c7,61px 0 0 -7px #c7c7c7,62px 0 0 -7px #c7c7c7,63px 0 0 -7px #c7c7c7,64px 0 0 -7px #c7c7c7,65px 0 0 -7px #c7c7c7,66px 0 0 -7px #c7c7c7,67px 0 0 -7px #c7c7c7,68px 0 0 -7px #c7c7c7,69px 0 0 -7px #c7c7c7,70px 0 0 -7px #c7c7c7,71px 0 0 -7px #c7c7c7,72px 0 0 -7px #c7c7c7,73px 0 0 -7px #c7c7c7,74px 0 0 -7px #c7c7c7,75px 0 0 -7px #c7c7c7,76px 0 0 -7px #c7c7c7,77px 0 0 -7px #c7c7c7,78px 0 0 -7px #c7c7c7,79px 0 0 -7px #c7c7c7,80px 0 0 -7px #c7c7c7,81px 0 0 -7px #c7c7c7,82px 0 0 -7px #c7c7c7,83px 0 0 -7px #c7c7c7,84px 0 0 -7px #c7c7c7,85px 0 0 -7px #c7c7c7,86px 0 0 -7px #c7c7c7,87px 0 0 -7px #c7c7c7,88px 0 0 -7px #c7c7c7,89px 0 0 -7px #c7c7c7,90px 0 0 -7px #c7c7c7,91px 0 0 -7px #c7c7c7,92px 0 0 -7px #c7c7c7,93px 0 0 -7px #c7c7c7,94px 0 0 -7px #c7c7c7,95px 0 0 -7px #c7c7c7,96px 0 0 -7px #c7c7c7,97px 0 0 -7px #c7c7c7,98px 0 0 -7px #c7c7c7,99px 0 0 -7px #c7c7c7,100px 0 0 -7px #c7c7c7,101px 0 0 -7px #c7c7c7,102px 0 0 -7px #c7c7c7,103px 0 0 -7px #c7c7c7,104px 0 0 -7px #c7c7c7,105px 0 0 -7px #c7c7c7,106px 0 0 -7px #c7c7c7,107px 0 0 -7px #c7c7c7,108px 0 0 -7px #c7c7c7,109px 0 0 -7px #c7c7c7,110px 0 0 -7px #c7c7c7,111px 0 0 -7px #c7c7c7,112px 0 0 -7px #c7c7c7,113px 0 0 -7px #c7c7c7,114px 0 0 -7px #c7c7c7,115px 0 0 -7px #c7c7c7,116px 0 0 -7px #c7c7c7,117px 0 0 -7px #c7c7c7,118px 0 0 -7px #c7c7c7,119px 0 0 -7px #c7c7c7,120px 0 0 -7px #c7c7c7,121px 0 0 -7px #c7c7c7,122px 0 0 -7px #c7c7c7,123px 0 0 -7px #c7c7c7,124px 0 0 -7px #c7c7c7,125px 0 0 -7px #c7c7c7,126px 0 0 -7px #c7c7c7,127px 0 0 -7px #c7c7c7,128px 0 0 -7px #c7c7c7,129px 0 0 -7px #c7c7c7,130px 0 0 -7px #c7c7c7,131px 0 0 -7px #c7c7c7,132px 0 0 -7px #c7c7c7,133px 0 0 -7px #c7c7c7,134px 0 0 -7px #c7c7c7,135px 0 0 -7px #c7c7c7,136px 0 0 -7px #c7c7c7,137px 0 0 -7px #c7c7c7,138px 0 0 -7px #c7c7c7,139px 0 0 -7px #c7c7c7,140px 0 0 -7px #c7c7c7,141px 0 0 -7px #c7c7c7,142px 0 0 -7px #c7c7c7,143px 0 0 -7px #c7c7c7,144px 0 0 -7px #c7c7c7,145px 0 0 -7px #c7c7c7,146px 0 0 -7px #c7c7c7,147px 0 0 -7px #c7c7c7,148px 0 0 -7px #c7c7c7,149px 0 0 -7px #c7c7c7,150px 0 0 -7px #c7c7c7,151px 0 0 -7px #c7c7c7,152px 0 0 -7px #c7c7c7,153px 0 0 -7px #c7c7c7,154px 0 0 -7px #c7c7c7,155px 0 0 -7px #c7c7c7,156px 0 0 -7px #c7c7c7,157px 0 0 -7px #c7c7c7,158px 0 0 -7px #c7c7c7,159px 0 0 -7px #c7c7c7,160px 0 0 -7px #c7c7c7,161px 0 0 -7px #c7c7c7,162px 0 0 -7px #c7c7c7,163px 0 0 -7px #c7c7c7,164px 0 0 -7px #c7c7c7,165px 0 0 -7px #c7c7c7,166px 0 0 -7px #c7c7c7,167px 0 0 -7px #c7c7c7,168px 0 0 -7px #c7c7c7,169px 0 0 -7px #c7c7c7,170px 0 0 -7px #c7c7c7,171px 0 0 -7px #c7c7c7,172px 0 0 -7px #c7c7c7,173px 0 0 -7px #c7c7c7,174px 0 0 -7px #c7c7c7,175px 0 0 -7px #c7c7c7,176px 0 0 -7px #c7c7c7,177px 0 0 -7px #c7c7c7,178px 0 0 -7px #c7c7c7,179px 0 0 -7px #c7c7c7,180px 0 0 -7px #c7c7c7,181px 0 0 -7px #c7c7c7,182px 0 0 -7px #c7c7c7,183px 0 0 -7px #c7c7c7,184px 0 0 -7px #c7c7c7,185px 0 0 -7px #c7c7c7,186px 0 0 -7px #c7c7c7,187px 0 0 -7px #c7c7c7,188px 0 0 -7px #c7c7c7,189px 0 0 -7px #c7c7c7,190px 0 0 -7px #c7c7c7,191px 0 0 -7px #c7c7c7,192px 0 0 -7px #c7c7c7,193px 0 0 -7px #c7c7c7,194px 0 0 -7px #c7c7c7,195px 0 0 -7px #c7c7c7,196px 0 0 -7px #c7c7c7,197px 0 0 -7px #c7c7c7,198px 0 0 -7px #c7c7c7,199px 0 0 -7px #c7c7c7,200px 0 0 -7px #c7c7c7,201px 0 0 -7px #c7c7c7,202px 0 0 -7px #c7c7c7,203px 0 0 -7px #c7c7c7,204px 0 0 -7px #c7c7c7,205px 0 0 -7px #c7c7c7,206px 0 0 -7px #c7c7c7,207px 0 0 -7px #c7c7c7,208px 0 0 -7px #c7c7c7,209px 0 0 -7px #c7c7c7,210px 0 0 -7px #c7c7c7,211px 0 0 -7px #c7c7c7,212px 0 0 -7px #c7c7c7,213px 0 0 -7px #c7c7c7,214px 0 0 -7px #c7c7c7,215px 0 0 -7px #c7c7c7,216px 0 0 -7px #c7c7c7,217px 0 0 -7px #c7c7c7,218px 0 0 -7px #c7c7c7,219px 0 0 -7px #c7c7c7,220px 0 0 -7px #c7c7c7,221px 0 0 -7px #c7c7c7,222px 0 0 -7px #c7c7c7,223px 0 0 -7px #c7c7c7,224px 0 0 -7px #c7c7c7,225px 0 0 -7px #c7c7c7,226px 0 0 -7px #c7c7c7,227px 0 0 -7px #c7c7c7,228px 0 0 -7px #c7c7c7,229px 0 0 -7px #c7c7c7,230px 0 0 -7px #c7c7c7,231px 0 0 -7px #c7c7c7,232px 0 0 -7px #c7c7c7,233px 0 0 -7px #c7c7c7,234px 0 0 -7px #c7c7c7,235px 0 0 -7px #c7c7c7,236px 0 0 -7px #c7c7c7,237px 0 0 -7px #c7c7c7,238px 0 0 -7px #c7c7c7,239px 0 0 -7px #c7c7c7,240px 0 0 -7px #c7c7c7,241px 0 0 -7px #c7c7c7,242px 0 0 -7px #c7c7c7,243px 0 0 -7px #c7c7c7,244px 0 0 -7px #c7c7c7,245px 0 0 -7px #c7c7c7,246px 0 0 -7px #c7c7c7,247px 0 0 -7px #c7c7c7,248px 0 0 -7px #c7c7c7,249px 0 0 -7px #c7c7c7,250px 0 0 -7px #c7c7c7,251px 0 0 -7px #c7c7c7,252px 0 0 -7px #c7c7c7,253px 0 0 -7px #c7c7c7,254px 0 0 -7px #c7c7c7,255px 0 0 -7px #c7c7c7,256px 0 0 -7px #c7c7c7,257px 0 0 -7px #c7c7c7,258px 0 0 -7px #c7c7c7,259px 0 0 -7px #c7c7c7,260px 0 0 -7px #c7c7c7,261px 0 0 -7px #c7c7c7,262px 0 0 -7px #c7c7c7,263px 0 0 -7px #c7c7c7,264px 0 0 -7px #c7c7c7,265px 0 0 -7px #c7c7c7,266px 0 0 -7px #c7c7c7,267px 0 0 -7px #c7c7c7,268px 0 0 -7px #c7c7c7,269px 0 0 -7px #c7c7c7,270px 0 0 -7px #c7c7c7,271px 0 0 -7px #c7c7c7,272px 0 0 -7px #c7c7c7,273px 0 0 -7px #c7c7c7,274px 0 0 -7px #c7c7c7,275px 0 0 -7px #c7c7c7,276px 0 0 -7px #c7c7c7,277px 0 0 -7px #c7c7c7,278px 0 0 -7px #c7c7c7,279px 0 0 -7px #c7c7c7,280px 0 0 -7px #c7c7c7,281px 0 0 -7px #c7c7c7,282px 0 0 -7px #c7c7c7,283px 0 0 -7px #c7c7c7,284px 0 0 -7px #c7c7c7,285px 0 0 -7px #c7c7c7,286px 0 0 -7px #c7c7c7,287px 0 0 -7px #c7c7c7,288px 0 0 -7px #c7c7c7,289px 0 0 -7px #c7c7c7,290px 0 0 -7px #c7c7c7,291px 0 0 -7px #c7c7c7,292px 0 0 -7px #c7c7c7,293px 0 0 -7px #c7c7c7,294px 0 0 -7px #c7c7c7,295px 0 0 -7px #c7c7c7,296px 0 0 -7px #c7c7c7,297px 0 0 -7px #c7c7c7,298px 0 0 -7px #c7c7c7,299px 0 0 -7px #c7c7c7,300px 0 0 -7px #c7c7c7,301px 0 0 -7px #c7c7c7,302px 0 0 -7px #c7c7c7,303px 0 0 -7px #c7c7c7,304px 0 0 -7px #c7c7c7,305px 0 0 -7px #c7c7c7,306px 0 0 -7px #c7c7c7,307px 0 0 -7px #c7c7c7,308px 0 0 -7px #c7c7c7,309px 0 0 -7px #c7c7c7,310px 0 0 -7px #c7c7c7,311px 0 0 -7px #c7c7c7,312px 0 0 -7px #c7c7c7,313px 0 0 -7px #c7c7c7,314px 0 0 -7px #c7c7c7,315px 0 0 -7px #c7c7c7,316px 0 0 -7px #c7c7c7,317px 0 0 -7px #c7c7c7,318px 0 0 -7px #c7c7c7,319px 0 0 -7px #c7c7c7,320px 0 0 -7px #c7c7c7,321px 0 0 -7px #c7c7c7,322px 0 0 -7px #c7c7c7,323px 0 0 -7px #c7c7c7,324px 0 0 -7px #c7c7c7,325px 0 0 -7px #c7c7c7,326px 0 0 -7px #c7c7c7,327px 0 0 -7px #c7c7c7,328px 0 0 -7px #c7c7c7,329px 0 0 -7px #c7c7c7,330px 0 0 -7px #c7c7c7,331px 0 0 -7px #c7c7c7,332px 0 0 -7px #c7c7c7,333px 0 0 -7px #c7c7c7,334px 0 0 -7px #c7c7c7,335px 0 0 -7px #c7c7c7,336px 0 0 -7px #c7c7c7,337px 0 0 -7px #c7c7c7,338px 0 0 -7px #c7c7c7,339px 0 0 -7px #c7c7c7,340px 0 0 -7px #c7c7c7,341px 0 0 -7px #c7c7c7,342px 0 0 -7px #c7c7c7,343px 0 0 -7px #c7c7c7,344px 0 0 -7px #c7c7c7,345px 0 0 -7px #c7c7c7,346px 0 0 -7px #c7c7c7,347px 0 0 -7px #c7c7c7,348px 0 0 -7px #c7c7c7,349px 0 0 -7px #c7c7c7,350px 0 0 -7px #c7c7c7,351px 0 0 -7px #c7c7c7,352px 0 0 -7px #c7c7c7,353px 0 0 -7px #c7c7c7,354px 0 0 -7px #c7c7c7,355px 0 0 -7px #c7c7c7,356px 0 0 -7px #c7c7c7,357px 0 0 -7px #c7c7c7,358px 0 0 -7px #c7c7c7,359px 0 0 -7px #c7c7c7,360px 0 0 -7px #c7c7c7,361px 0 0 -7px #c7c7c7,362px 0 0 -7px #c7c7c7,363px 0 0 -7px #c7c7c7,364px 0 0 -7px #c7c7c7,365px 0 0 -7px #c7c7c7,366px 0 0 -7px #c7c7c7,367px 0 0 -7px #c7c7c7,368px 0 0 -7px #c7c7c7,369px 0 0 -7px #c7c7c7,370px 0 0 -7px #c7c7c7,371px 0 0 -7px #c7c7c7,372px 0 0 -7px #c7c7c7,373px 0 0 -7px #c7c7c7,374px 0 0 -7px #c7c7c7,375px 0 0 -7px #c7c7c7,376px 0 0 -7px #c7c7c7,377px 0 0 -7px #c7c7c7,378px 0 0 -7px #c7c7c7,379px 0 0 -7px #c7c7c7,380px 0 0 -7px #c7c7c7,381px 0 0 -7px #c7c7c7,382px 0 0 -7px #c7c7c7,383px 0 0 -7px #c7c7c7,384px 0 0 -7px #c7c7c7,385px 0 0 -7px #c7c7c7,386px 0 0 -7px #c7c7c7,387px 0 0 -7px #c7c7c7,388px 0 0 -7px #c7c7c7,389px 0 0 -7px #c7c7c7,390px 0 0 -7px #c7c7c7,391px 0 0 -7px #c7c7c7,392px 0 0 -7px #c7c7c7,393px 0 0 -7px #c7c7c7,394px 0 0 -7px #c7c7c7,395px 0 0 -7px #c7c7c7,396px 0 0 -7px #c7c7c7,397px 0 0 -7px #c7c7c7,398px 0 0 -7px #c7c7c7,399px 0 0 -7px #c7c7c7,400px 0 0 -7px #c7c7c7,401px 0 0 -7px #c7c7c7,402px 0 0 -7px #c7c7c7,403px 0 0 -7px #c7c7c7,404px 0 0 -7px #c7c7c7,405px 0 0 -7px #c7c7c7,406px 0 0 -7px #c7c7c7,407px 0 0 -7px #c7c7c7,408px 0 0 -7px #c7c7c7,409px 0 0 -7px #c7c7c7,410px 0 0 -7px #c7c7c7,411px 0 0 -7px #c7c7c7,412px 0 0 -7px #c7c7c7,413px 0 0 -7px #c7c7c7,414px 0 0 -7px #c7c7c7,415px 0 0 -7px #c7c7c7,416px 0 0 -7px #c7c7c7,417px 0 0 -7px #c7c7c7,418px 0 0 -7px #c7c7c7,419px 0 0 -7px #c7c7c7,420px 0 0 -7px #c7c7c7,421px 0 0 -7px #c7c7c7,422px 0 0 -7px #c7c7c7,423px 0 0 -7px #c7c7c7,424px 0 0 -7px #c7c7c7,425px 0 0 -7px #c7c7c7,426px 0 0 -7px #c7c7c7,427px 0 0 -7px #c7c7c7,428px 0 0 -7px #c7c7c7,429px 0 0 -7px #c7c7c7,430px 0 0 -7px #c7c7c7,431px 0 0 -7px #c7c7c7,432px 0 0 -7px #c7c7c7,433px 0 0 -7px #c7c7c7,434px 0 0 -7px #c7c7c7,435px 0 0 -7px #c7c7c7,436px 0 0 -7px #c7c7c7,437px 0 0 -7px #c7c7c7,438px 0 0 -7px #c7c7c7,439px 0 0 -7px #c7c7c7,440px 0 0 -7px #c7c7c7,441px 0 0 -7px #c7c7c7,442px 0 0 -7px #c7c7c7,443px 0 0 -7px #c7c7c7,444px 0 0 -7px #c7c7c7,445px 0 0 -7px #c7c7c7,446px 0 0 -7px #c7c7c7,447px 0 0 -7px #c7c7c7,448px 0 0 -7px #c7c7c7,449px 0 0 -7px #c7c7c7,450px 0 0 -7px #c7c7c7,451px 0 0 -7px #c7c7c7,452px 0 0 -7px #c7c7c7,453px 0 0 -7px #c7c7c7,454px 0 0 -7px #c7c7c7,455px 0 0 -7px #c7c7c7,456px 0 0 -7px #c7c7c7,457px 0 0 -7px #c7c7c7,458px 0 0 -7px #c7c7c7,459px 0 0 -7px #c7c7c7,460px 0 0 -7px #c7c7c7,461px 0 0 -7px #c7c7c7,462px 0 0 -7px #c7c7c7,463px 0 0 -7px #c7c7c7,464px 0 0 -7px #c7c7c7,465px 0 0 -7px #c7c7c7,466px 0 0 -7px #c7c7c7,467px 0 0 -7px #c7c7c7,468px 0 0 -7px #c7c7c7,469px 0 0 -7px #c7c7c7,470px 0 0 -7px #c7c7c7,471px 0 0 -7px #c7c7c7,472px 0 0 -7px #c7c7c7,473px 0 0 -7px #c7c7c7,474px 0 0 -7px #c7c7c7,475px 0 0 -7px #c7c7c7,476px 0 0 -7px #c7c7c7,477px 0 0 -7px #c7c7c7,478px 0 0 -7px #c7c7c7,479px 0 0 -7px #c7c7c7,480px 0 0 -7px #c7c7c7,481px 0 0 -7px #c7c7c7,482px 0 0 -7px #c7c7c7,483px 0 0 -7px #c7c7c7,484px 0 0 -7px #c7c7c7,485px 0 0 -7px #c7c7c7,486px 0 0 -7px #c7c7c7,487px 0 0 -7px #c7c7c7,488px 0 0 -7px #c7c7c7,489px 0 0 -7px #c7c7c7,490px 0 0 -7px #c7c7c7,491px 0 0 -7px #c7c7c7,492px 0 0 -7px #c7c7c7,493px 0 0 -7px #c7c7c7,494px 0 0 -7px #c7c7c7,495px 0 0 -7px #c7c7c7,496px 0 0 -7px #c7c7c7,497px 0 0 -7px #c7c7c7,498px 0 0 -7px #c7c7c7,499px 0 0 -7px #c7c7c7,500px 0 0 -7px #c7c7c7,501px 0 0 -7px #c7c7c7,502px 0 0 -7px #c7c7c7,503px 0 0 -7px #c7c7c7,504px 0 0 -7px #c7c7c7,505px 0 0 -7px #c7c7c7,506px 0 0 -7px #c7c7c7,507px 0 0 -7px #c7c7c7,508px 0 0 -7px #c7c7c7,509px 0 0 -7px #c7c7c7,510px 0 0 -7px #c7c7c7,511px 0 0 -7px #c7c7c7,512px 0 0 -7px #c7c7c7,513px 0 0 -7px #c7c7c7,514px 0 0 -7px #c7c7c7,515px 0 0 -7px #c7c7c7,516px 0 0 -7px #c7c7c7,517px 0 0 -7px #c7c7c7,518px 0 0 -7px #c7c7c7,519px 0 0 -7px #c7c7c7,520px 0 0 -7px #c7c7c7,521px 0 0 -7px #c7c7c7,522px 0 0 -7px #c7c7c7,523px 0 0 -7px #c7c7c7,524px 0 0 -7px #c7c7c7,525px 0 0 -7px #c7c7c7,526px 0 0 -7px #c7c7c7,527px 0 0 -7px #c7c7c7,528px 0 0 -7px #c7c7c7,529px 0 0 -7px #c7c7c7,530px 0 0 -7px #c7c7c7,531px 0 0 -7px #c7c7c7,532px 0 0 -7px #c7c7c7,533px 0 0 -7px #c7c7c7,534px 0 0 -7px #c7c7c7,535px 0 0 -7px #c7c7c7,536px 0 0 -7px #c7c7c7,537px 0 0 -7px #c7c7c7,538px 0 0 -7px #c7c7c7,539px 0 0 -7px #c7c7c7,540px 0 0 -7px #c7c7c7,541px 0 0 -7px #c7c7c7,542px 0 0 -7px #c7c7c7,543px 0 0 -7px #c7c7c7,544px 0 0 -7px #c7c7c7,545px 0 0 -7px #c7c7c7,546px 0 0 -7px #c7c7c7,547px 0 0 -7px #c7c7c7,548px 0 0 -7px #c7c7c7,549px 0 0 -7px #c7c7c7,550px 0 0 -7px #c7c7c7,551px 0 0 -7px #c7c7c7,552px 0 0 -7px #c7c7c7,553px 0 0 -7px #c7c7c7,554px 0 0 -7px #c7c7c7,555px 0 0 -7px #c7c7c7,556px 0 0 -7px #c7c7c7,557px 0 0 -7px #c7c7c7,558px 0 0 -7px #c7c7c7,559px 0 0 -7px #c7c7c7,560px 0 0 -7px #c7c7c7,561px 0 0 -7px #c7c7c7,562px 0 0 -7px #c7c7c7,563px 0 0 -7px #c7c7c7,564px 0 0 -7px #c7c7c7,565px 0 0 -7px #c7c7c7,566px 0 0 -7px #c7c7c7,567px 0 0 -7px #c7c7c7,568px 0 0 -7px #c7c7c7,569px 0 0 -7px #c7c7c7,570px 0 0 -7px #c7c7c7,571px 0 0 -7px #c7c7c7,572px 0 0 -7px #c7c7c7,573px 0 0 -7px #c7c7c7,574px 0 0 -7px #c7c7c7,575px 0 0 -7px #c7c7c7,576px 0 0 -7px #c7c7c7,577px 0 0 -7px #c7c7c7,578px 0 0 -7px #c7c7c7,579px 0 0 -7px #c7c7c7,580px 0 0 -7px #c7c7c7,581px 0 0 -7px #c7c7c7,582px 0 0 -7px #c7c7c7,583px 0 0 -7px #c7c7c7,584px 0 0 -7px #c7c7c7,585px 0 0 -7px #c7c7c7,586px 0 0 -7px #c7c7c7,587px 0 0 -7px #c7c7c7,588px 0 0 -7px #c7c7c7,589px 0 0 -7px #c7c7c7,590px 0 0 -7px #c7c7c7,591px 0 0 -7px #c7c7c7,592px 0 0 -7px #c7c7c7,593px 0 0 -7px #c7c7c7,594px 0 0 -7px #c7c7c7,595px 0 0 -7px #c7c7c7,596px 0 0 -7px #c7c7c7,597px 0 0 -7px #c7c7c7,598px 0 0 -7px #c7c7c7,599px 0 0 -7px #c7c7c7,600px 0 0 -7px #c7c7c7,601px 0 0 -7px #c7c7c7,602px 0 0 -7px #c7c7c7,603px 0 0 -7px #c7c7c7,604px 0 0 -7px #c7c7c7,605px 0 0 -7px #c7c7c7,606px 0 0 -7px #c7c7c7,607px 0 0 -7px #c7c7c7,608px 0 0 -7px #c7c7c7,609px 0 0 -7px #c7c7c7,610px 0 0 -7px #c7c7c7,611px 0 0 -7px #c7c7c7,612px 0 0 -7px #c7c7c7,613px 0 0 -7px #c7c7c7,614px 0 0 -7px #c7c7c7,615px 0 0 -7px #c7c7c7,616px 0 0 -7px #c7c7c7,617px 0 0 -7px #c7c7c7,618px 0 0 -7px #c7c7c7,619px 0 0 -7px #c7c7c7,620px 0 0 -7px #c7c7c7,621px 0 0 -7px #c7c7c7,622px 0 0 -7px #c7c7c7,623px 0 0 -7px #c7c7c7,624px 0 0 -7px #c7c7c7,625px 0 0 -7px #c7c7c7,626px 0 0 -7px #c7c7c7,627px 0 0 -7px #c7c7c7,628px 0 0 -7px #c7c7c7,629px 0 0 -7px #c7c7c7,630px 0 0 -7px #c7c7c7,631px 0 0 -7px #c7c7c7,632px 0 0 -7px #c7c7c7,633px 0 0 -7px #c7c7c7,634px 0 0 -7px #c7c7c7,635px 0 0 -7px #c7c7c7,636px 0 0 -7px #c7c7c7,637px 0 0 -7px #c7c7c7,638px 0 0 -7px #c7c7c7,639px 0 0 -7px #c7c7c7,640px 0 0 -7px #c7c7c7,641px 0 0 -7px #c7c7c7,642px 0 0 -7px #c7c7c7,643px 0 0 -7px #c7c7c7,644px 0 0 -7px #c7c7c7,645px 0 0 -7px #c7c7c7,646px 0 0 -7px #c7c7c7,647px 0 0 -7px #c7c7c7,648px 0 0 -7px #c7c7c7,649px 0 0 -7px #c7c7c7,650px 0 0 -7px #c7c7c7,651px 0 0 -7px #c7c7c7,652px 0 0 -7px #c7c7c7,653px 0 0 -7px #c7c7c7,654px 0 0 -7px #c7c7c7,655px 0 0 -7px #c7c7c7,656px 0 0 -7px #c7c7c7,657px 0 0 -7px #c7c7c7,658px 0 0 -7px #c7c7c7,659px 0 0 -7px #c7c7c7,660px 0 0 -7px #c7c7c7,661px 0 0 -7px #c7c7c7,662px 0 0 -7px #c7c7c7,663px 0 0 -7px #c7c7c7,664px 0 0 -7px #c7c7c7,665px 0 0 -7px #c7c7c7,666px 0 0 -7px #c7c7c7,667px 0 0 -7px #c7c7c7,668px 0 0 -7px #c7c7c7,669px 0 0 -7px #c7c7c7,670px 0 0 -7px #c7c7c7,671px 0 0 -7px #c7c7c7,672px 0 0 -7px #c7c7c7,673px 0 0 -7px #c7c7c7,674px 0 0 -7px #c7c7c7,675px 0 0 -7px #c7c7c7,676px 0 0 -7px #c7c7c7,677px 0 0 -7px #c7c7c7,678px 0 0 -7px #c7c7c7,679px 0 0 -7px #c7c7c7,680px 0 0 -7px #c7c7c7,681px 0 0 -7px #c7c7c7,682px 0 0 -7px #c7c7c7,683px 0 0 -7px #c7c7c7,684px 0 0 -7px #c7c7c7,685px 0 0 -7px #c7c7c7,686px 0 0 -7px #c7c7c7,687px 0 0 -7px #c7c7c7,688px 0 0 -7px #c7c7c7,689px 0 0 -7px #c7c7c7,690px 0 0 -7px #c7c7c7,691px 0 0 -7px #c7c7c7,692px 0 0 -7px #c7c7c7,693px 0 0 -7px #c7c7c7,694px 0 0 -7px #c7c7c7,695px 0 0 -7px #c7c7c7,696px 0 0 -7px #c7c7c7,697px 0 0 -7px #c7c7c7,698px 0 0 -7px #c7c7c7,699px 0 0 -7px #c7c7c7,700px 0 0 -7px #c7c7c7,701px 0 0 -7px #c7c7c7,702px 0 0 -7px #c7c7c7,703px 0 0 -7px #c7c7c7,704px 0 0 -7px #c7c7c7,705px 0 0 -7px #c7c7c7,706px 0 0 -7px #c7c7c7,707px 0 0 -7px #c7c7c7,708px 0 0 -7px #c7c7c7,709px 0 0 -7px #c7c7c7,710px 0 0 -7px #c7c7c7,711px 0 0 -7px #c7c7c7,712px 0 0 -7px #c7c7c7,713px 0 0 -7px #c7c7c7,714px 0 0 -7px #c7c7c7,715px 0 0 -7px #c7c7c7,716px 0 0 -7px #c7c7c7,717px 0 0 -7px #c7c7c7,718px 0 0 -7px #c7c7c7,719px 0 0 -7px #c7c7c7,720px 0 0 -7px #c7c7c7,721px 0 0 -7px #c7c7c7,722px 0 0 -7px #c7c7c7,723px 0 0 -7px #c7c7c7,724px 0 0 -7px #c7c7c7,725px 0 0 -7px #c7c7c7,726px 0 0 -7px #c7c7c7,727px 0 0 -7px #c7c7c7,728px 0 0 -7px #c7c7c7,729px 0 0 -7px #c7c7c7,730px 0 0 -7px #c7c7c7,731px 0 0 -7px #c7c7c7,732px 0 0 -7px #c7c7c7,733px 0 0 -7px #c7c7c7,734px 0 0 -7px #c7c7c7,735px 0 0 -7px #c7c7c7,736px 0 0 -7px #c7c7c7,737px 0 0 -7px #c7c7c7,738px 0 0 -7px #c7c7c7,739px 0 0 -7px #c7c7c7,740px 0 0 -7px #c7c7c7,741px 0 0 -7px #c7c7c7,742px 0 0 -7px #c7c7c7,743px 0 0 -7px #c7c7c7,744px 0 0 -7px #c7c7c7,745px 0 0 -7px #c7c7c7,746px 0 0 -7px #c7c7c7,747px 0 0 -7px #c7c7c7,748px 0 0 -7px #c7c7c7,749px 0 0 -7px #c7c7c7,750px 0 0 -7px #c7c7c7,751px 0 0 -7px #c7c7c7,752px 0 0 -7px #c7c7c7,753px 0 0 -7px #c7c7c7,754px 0 0 -7px #c7c7c7,755px 0 0 -7px #c7c7c7,756px 0 0 -7px #c7c7c7,757px 0 0 -7px #c7c7c7,758px 0 0 -7px #c7c7c7,759px 0 0 -7px #c7c7c7,760px 0 0 -7px #c7c7c7,761px 0 0 -7px #c7c7c7,762px 0 0 -7px #c7c7c7,763px 0 0 -7px #c7c7c7,764px 0 0 -7px #c7c7c7,765px 0 0 -7px #c7c7c7,766px 0 0 -7px #c7c7c7,767px 0 0 -7px #c7c7c7,768px 0 0 -7px #c7c7c7,769px 0 0 -7px #c7c7c7,770px 0 0 -7px #c7c7c7,771px 0 0 -7px #c7c7c7,772px 0 0 -7px #c7c7c7,773px 0 0 -7px #c7c7c7,774px 0 0 -7px #c7c7c7,775px 0 0 -7px #c7c7c7,776px 0 0 -7px #c7c7c7,777px 0 0 -7px #c7c7c7,778px 0 0 -7px #c7c7c7,779px 0 0 -7px #c7c7c7,780px 0 0 -7px #c7c7c7,781px 0 0 -7px #c7c7c7,782px 0 0 -7px #c7c7c7,783px 0 0 -7px #c7c7c7,784px 0 0 -7px #c7c7c7,785px 0 0 -7px #c7c7c7,786px 0 0 -7px #c7c7c7,787px 0 0 -7px #c7c7c7,788px 0 0 -7px #c7c7c7,789px 0 0 -7px #c7c7c7,790px 0 0 -7px #c7c7c7,791px 0 0 -7px #c7c7c7,792px 0 0 -7px #c7c7c7,793px 0 0 -7px #c7c7c7,794px 0 0 -7px #c7c7c7,795px 0 0 -7px #c7c7c7,796px 0 0 -7px #c7c7c7,797px 0 0 -7px #c7c7c7,798px 0 0 -7px #c7c7c7,799px 0 0 -7px #c7c7c7,800px 0 0 -7px #c7c7c7,801px 0 0 -7px #c7c7c7,802px 0 0 -7px #c7c7c7,803px 0 0 -7px #c7c7c7,804px 0 0 -7px #c7c7c7,805px 0 0 -7px #c7c7c7,806px 0 0 -7px #c7c7c7,807px 0 0 -7px #c7c7c7,808px 0 0 -7px #c7c7c7,809px 0 0 -7px #c7c7c7,810px 0 0 -7px #c7c7c7,811px 0 0 -7px #c7c7c7,812px 0 0 -7px #c7c7c7,813px 0 0 -7px #c7c7c7,814px 0 0 -7px #c7c7c7,815px 0 0 -7px #c7c7c7,816px 0 0 -7px #c7c7c7,817px 0 0 -7px #c7c7c7,818px 0 0 -7px #c7c7c7,819px 0 0 -7px #c7c7c7,820px 0 0 -7px #c7c7c7,821px 0 0 -7px #c7c7c7,822px 0 0 -7px #c7c7c7,823px 0 0 -7px #c7c7c7,824px 0 0 -7px #c7c7c7,825px 0 0 -7px #c7c7c7,826px 0 0 -7px #c7c7c7,827px 0 0 -7px #c7c7c7,828px 0 0 -7px #c7c7c7,829px 0 0 -7px #c7c7c7,830px 0 0 -7px #c7c7c7,831px 0 0 -7px #c7c7c7,832px 0 0 -7px #c7c7c7,833px 0 0 -7px #c7c7c7,834px 0 0 -7px #c7c7c7,835px 0 0 -7px #c7c7c7,836px 0 0 -7px #c7c7c7,837px 0 0 -7px #c7c7c7,838px 0 0 -7px #c7c7c7,839px 0 0 -7px #c7c7c7,840px 0 0 -7px #c7c7c7,841px 0 0 -7px #c7c7c7,842px 0 0 -7px #c7c7c7,843px 0 0 -7px #c7c7c7,844px 0 0 -7px #c7c7c7,845px 0 0 -7px #c7c7c7,846px 0 0 -7px #c7c7c7,847px 0 0 -7px #c7c7c7,848px 0 0 -7px #c7c7c7,849px 0 0 -7px #c7c7c7,850px 0 0 -7px #c7c7c7,851px 0 0 -7px #c7c7c7,852px 0 0 -7px #c7c7c7,853px 0 0 -7px #c7c7c7,854px 0 0 -7px #c7c7c7,855px 0 0 -7px #c7c7c7,856px 0 0 -7px #c7c7c7,857px 0 0 -7px #c7c7c7,858px 0 0 -7px #c7c7c7,859px 0 0 -7px #c7c7c7,860px 0 0 -7px #c7c7c7,861px 0 0 -7px #c7c7c7,862px 0 0 -7px #c7c7c7,863px 0 0 -7px #c7c7c7,864px 0 0 -7px #c7c7c7,865px 0 0 -7px #c7c7c7,866px 0 0 -7px #c7c7c7,867px 0 0 -7px #c7c7c7,868px 0 0 -7px #c7c7c7,869px 0 0 -7px #c7c7c7,870px 0 0 -7px #c7c7c7,871px 0 0 -7px #c7c7c7,872px 0 0 -7px #c7c7c7,873px 0 0 -7px #c7c7c7,874px 0 0 -7px #c7c7c7,875px 0 0 -7px #c7c7c7,876px 0 0 -7px #c7c7c7,877px 0 0 -7px #c7c7c7,878px 0 0 -7px #c7c7c7,879px 0 0 -7px #c7c7c7,880px 0 0 -7px #c7c7c7,881px 0 0 -7px #c7c7c7,882px 0 0 -7px #c7c7c7,883px 0 0 -7px #c7c7c7,884px 0 0 -7px #c7c7c7,885px 0 0 -7px #c7c7c7,886px 0 0 -7px #c7c7c7,887px 0 0 -7px #c7c7c7,888px 0 0 -7px #c7c7c7,889px 0 0 -7px #c7c7c7,890px 0 0 -7px #c7c7c7,891px 0 0 -7px #c7c7c7,892px 0 0 -7px #c7c7c7,893px 0 0 -7px #c7c7c7,894px 0 0 -7px #c7c7c7,895px 0 0 -7px #c7c7c7,896px 0 0 -7px #c7c7c7,897px 0 0 -7px #c7c7c7,898px 0 0 -7px #c7c7c7,899px 0 0 -7px #c7c7c7,900px 0 0 -7px #c7c7c7,901px 0 0 -7px #c7c7c7,902px 0 0 -7px #c7c7c7,903px 0 0 -7px #c7c7c7,904px 0 0 -7px #c7c7c7,905px 0 0 -7px #c7c7c7,906px 0 0 -7px #c7c7c7,907px 0 0 -7px #c7c7c7,908px 0 0 -7px #c7c7c7,909px 0 0 -7px #c7c7c7,910px 0 0 -7px #c7c7c7,911px 0 0 -7px #c7c7c7,912px 0 0 -7px #c7c7c7,913px 0 0 -7px #c7c7c7,914px 0 0 -7px #c7c7c7,915px 0 0 -7px #c7c7c7,916px 0 0 -7px #c7c7c7,917px 0 0 -7px #c7c7c7,918px 0 0 -7px #c7c7c7,919px 0 0 -7px #c7c7c7,920px 0 0 -7px #c7c7c7,921px 0 0 -7px #c7c7c7,922px 0 0 -7px #c7c7c7,923px 0 0 -7px #c7c7c7,924px 0 0 -7px #c7c7c7,925px 0 0 -7px #c7c7c7,926px 0 0 -7px #c7c7c7,927px 0 0 -7px #c7c7c7,928px 0 0 -7px #c7c7c7,929px 0 0 -7px #c7c7c7,930px 0 0 -7px #c7c7c7,931px 0 0 -7px #c7c7c7,932px 0 0 -7px #c7c7c7,933px 0 0 -7px #c7c7c7,934px 0 0 -7px #c7c7c7,935px 0 0 -7px #c7c7c7,936px 0 0 -7px #c7c7c7,937px 0 0 -7px #c7c7c7,938px 0 0 -7px #c7c7c7,939px 0 0 -7px #c7c7c7,940px 0 0 -7px #c7c7c7,941px 0 0 -7px #c7c7c7,942px 0 0 -7px #c7c7c7,943px 0 0 -7px #c7c7c7,944px 0 0 -7px #c7c7c7,945px 0 0 -7px #c7c7c7,946px 0 0 -7px #c7c7c7,947px 0 0 -7px #c7c7c7,948px 0 0 -7px #c7c7c7,949px 0 0 -7px #c7c7c7,950px 0 0 -7px #c7c7c7,951px 0 0 -7px #c7c7c7,952px 0 0 -7px #c7c7c7,953px 0 0 -7px #c7c7c7,954px 0 0 -7px #c7c7c7,955px 0 0 -7px #c7c7c7,956px 0 0 -7px #c7c7c7,957px 0 0 -7px #c7c7c7,958px 0 0 -7px #c7c7c7,959px 0 0 -7px #c7c7c7,960px 0 0 -7px #c7c7c7,961px 0 0 -7px #c7c7c7,962px 0 0 -7px #c7c7c7,963px 0 0 -7px #c7c7c7,964px 0 0 -7px #c7c7c7,965px 0 0 -7px #c7c7c7,966px 0 0 -7px #c7c7c7,967px 0 0 -7px #c7c7c7,968px 0 0 -7px #c7c7c7,969px 0 0 -7px #c7c7c7,970px 0 0 -7px #c7c7c7,971px 0 0 -7px #c7c7c7,972px 0 0 -7px #c7c7c7,973px 0 0 -7px #c7c7c7,974px 0 0 -7px #c7c7c7,975px 0 0 -7px #c7c7c7,976px 0 0 -7px #c7c7c7,977px 0 0 -7px #c7c7c7,978px 0 0 -7px #c7c7c7,979px 0 0 -7px #c7c7c7,980px 0 0 -7px #c7c7c7,981px 0 0 -7px #c7c7c7,982px 0 0 -7px #c7c7c7,983px 0 0 -7px #c7c7c7,984px 0 0 -7px #c7c7c7,985px 0 0 -7px #c7c7c7,986px 0 0 -7px #c7c7c7,987px 0 0 -7px #c7c7c7,988px 0 0 -7px #c7c7c7,989px 0 0 -7px #c7c7c7,990px 0 0 -7px #c7c7c7,991px 0 0 -7px #c7c7c7,992px 0 0 -7px #c7c7c7,993px 0 0 -7px #c7c7c7,994px 0 0 -7px #c7c7c7,995px 0 0 -7px #c7c7c7,996px 0 0 -7px #c7c7c7,997px 0 0 -7px #c7c7c7,998px 0 0 -7px #c7c7c7,999px 0 0 -7px #c7c7c7,1000px 0 0 -7px #c7c7c7,1001px 0 0 -7px #c7c7c7,1002px 0 0 -7px #c7c7c7,1003px 0 0 -7px #c7c7c7,1004px 0 0 -7px #c7c7c7,1005px 0 0 -7px #c7c7c7,1006px 0 0 -7px #c7c7c7,1007px 0 0 -7px #c7c7c7,1008px 0 0 -7px #c7c7c7,1009px 0 0 -7px #c7c7c7,1010px 0 0 -7px #c7c7c7,1011px 0 0 -7px #c7c7c7,1012px 0 0 -7px #c7c7c7,1013px 0 0 -7px #c7c7c7,1014px 0 0 -7px #c7c7c7,1015px 0 0 -7px #c7c7c7,1016px 0 0 -7px #c7c7c7,1017px 0 0 -7px #c7c7c7,1018px 0 0 -7px #c7c7c7,1019px 0 0 -7px #c7c7c7,1020px 0 0 -7px #c7c7c7,1021px 0 0 -7px #c7c7c7,1022px 0 0 -7px #c7c7c7,1023px 0 0 -7px #c7c7c7,1024px 0 0 -7px #c7c7c7,1025px 0 0 -7px #c7c7c7,1026px 0 0 -7px #c7c7c7,1027px 0 0 -7px #c7c7c7,1028px 0 0 -7px #c7c7c7,1029px 0 0 -7px #c7c7c7,1030px 0 0 -7px #c7c7c7,1031px 0 0 -7px #c7c7c7,1032px 0 0 -7px #c7c7c7,1033px 0 0 -7px #c7c7c7,1034px 0 0 -7px #c7c7c7,1035px 0 0 -7px #c7c7c7,1036px 0 0 -7px #c7c7c7,1037px 0 0 -7px #c7c7c7,1038px 0 0 -7px #c7c7c7,1039px 0 0 -7px #c7c7c7,1040px 0 0 -7px #c7c7c7,1041px 0 0 -7px #c7c7c7,1042px 0 0 -7px #c7c7c7,1043px 0 0 -7px #c7c7c7,1044px 0 0 -7px #c7c7c7,1045px 0 0 -7px #c7c7c7,1046px 0 0 -7px #c7c7c7,1047px 0 0 -7px #c7c7c7,1048px 0 0 -7px #c7c7c7,1049px 0 0 -7px #c7c7c7,1050px 0 0 -7px #c7c7c7,1051px 0 0 -7px #c7c7c7,1052px 0 0 -7px #c7c7c7,1053px 0 0 -7px #c7c7c7,1054px 0 0 -7px #c7c7c7,1055px 0 0 -7px #c7c7c7,1056px 0 0 -7px #c7c7c7,1057px 0 0 -7px #c7c7c7,1058px 0 0 -7px #c7c7c7,1059px 0 0 -7px #c7c7c7,1060px 0 0 -7px #c7c7c7,1061px 0 0 -7px #c7c7c7,1062px 0 0 -7px #c7c7c7,1063px 0 0 -7px #c7c7c7,1064px 0 0 -7px #c7c7c7,1065px 0 0 -7px #c7c7c7,1066px 0 0 -7px #c7c7c7,1067px 0 0 -7px #c7c7c7,1068px 0 0 -7px #c7c7c7,1069px 0 0 -7px #c7c7c7,1070px 0 0 -7px #c7c7c7,1071px 0 0 -7px #c7c7c7,1072px 0 0 -7px #c7c7c7,1073px 0 0 -7px #c7c7c7,1074px 0 0 -7px #c7c7c7,1075px 0 0 -7px #c7c7c7,1076px 0 0 -7px #c7c7c7,1077px 0 0 -7px #c7c7c7,1078px 0 0 -7px #c7c7c7,1079px 0 0 -7px #c7c7c7,1080px 0 0 -7px #c7c7c7,1081px 0 0 -7px #c7c7c7,1082px 0 0 -7px #c7c7c7,1083px 0 0 -7px #c7c7c7,1084px 0 0 -7px #c7c7c7,1085px 0 0 -7px #c7c7c7,1086px 0 0 -7px #c7c7c7,1087px 0 0 -7px #c7c7c7,1088px 0 0 -7px #c7c7c7,1089px 0 0 -7px #c7c7c7,1090px 0 0 -7px #c7c7c7,1091px 0 0 -7px #c7c7c7,1092px 0 0 -7px #c7c7c7,1093px 0 0 -7px #c7c7c7,1094px 0 0 -7px #c7c7c7,1095px 0 0 -7px #c7c7c7,1096px 0 0 -7px #c7c7c7,1097px 0 0 -7px #c7c7c7,1098px 0 0 -7px #c7c7c7,1099px 0 0 -7px #c7c7c7,1100px 0 0 -7px #c7c7c7,1101px 0 0 -7px #c7c7c7,1102px 0 0 -7px #c7c7c7,1103px 0 0 -7px #c7c7c7,1104px 0 0 -7px #c7c7c7,1105px 0 0 -7px #c7c7c7,1106px 0 0 -7px #c7c7c7,1107px 0 0 -7px #c7c7c7,1108px 0 0 -7px #c7c7c7,1109px 0 0 -7px #c7c7c7,1110px 0 0 -7px #c7c7c7,1111px 0 0 -7px #c7c7c7,1112px 0 0 -7px #c7c7c7,1113px 0 0 -7px #c7c7c7,1114px 0 0 -7px #c7c7c7,1115px 0 0 -7px #c7c7c7,1116px 0 0 -7px #c7c7c7,1117px 0 0 -7px #c7c7c7,1118px 0 0 -7px #c7c7c7,1119px 0 0 -7px #c7c7c7,1120px 0 0 -7px #c7c7c7,1121px 0 0 -7px #c7c7c7,1122px 0 0 -7px #c7c7c7,1123px 0 0 -7px #c7c7c7,1124px 0 0 -7px #c7c7c7,1125px 0 0 -7px #c7c7c7,1126px 0 0 -7px #c7c7c7,1127px 0 0 -7px #c7c7c7,1128px 0 0 -7px #c7c7c7,1129px 0 0 -7px #c7c7c7,1130px 0 0 -7px #c7c7c7,1131px 0 0 -7px #c7c7c7,1132px 0 0 -7px #c7c7c7,1133px 0 0 -7px #c7c7c7,1134px 0 0 -7px #c7c7c7,1135px 0 0 -7px #c7c7c7,1136px 0 0 -7px #c7c7c7,1137px 0 0 -7px #c7c7c7,1138px 0 0 -7px #c7c7c7,1139px 0 0 -7px #c7c7c7,1140px 0 0 -7px #c7c7c7,1141px 0 0 -7px #c7c7c7,1142px 0 0 -7px #c7c7c7,1143px 0 0 -7px #c7c7c7,1144px 0 0 -7px #c7c7c7,1145px 0 0 -7px #c7c7c7,1146px 0 0 -7px #c7c7c7,1147px 0 0 -7px #c7c7c7,1148px 0 0 -7px #c7c7c7,1149px 0 0 -7px #c7c7c7,1150px 0 0 -7px #c7c7c7,1151px 0 0 -7px #c7c7c7,1152px 0 0 -7px #c7c7c7,1153px 0 0 -7px #c7c7c7,1154px 0 0 -7px #c7c7c7,1155px 0 0 -7px #c7c7c7,1156px 0 0 -7px #c7c7c7,1157px 0 0 -7px #c7c7c7,1158px 0 0 -7px #c7c7c7,1159px 0 0 -7px #c7c7c7,1160px 0 0 -7px #c7c7c7,1161px 0 0 -7px #c7c7c7,1162px 0 0 -7px #c7c7c7,1163px 0 0 -7px #c7c7c7,1164px 0 0 -7px #c7c7c7,1165px 0 0 -7px #c7c7c7,1166px 0 0 -7px #c7c7c7,1167px 0 0 -7px #c7c7c7,1168px 0 0 -7px #c7c7c7,1169px 0 0 -7px #c7c7c7,1170px 0 0 -7px #c7c7c7,1171px 0 0 -7px #c7c7c7,1172px 0 0 -7px #c7c7c7,1173px 0 0 -7px #c7c7c7,1174px 0 0 -7px #c7c7c7,1175px 0 0 -7px #c7c7c7,1176px 0 0 -7px #c7c7c7,1177px 0 0 -7px #c7c7c7,1178px 0 0 -7px #c7c7c7,1179px 0 0 -7px #c7c7c7,1180px 0 0 -7px #c7c7c7,1181px 0 0 -7px #c7c7c7,1182px 0 0 -7px #c7c7c7,1183px 0 0 -7px #c7c7c7,1184px 0 0 -7px #c7c7c7,1185px 0 0 -7px #c7c7c7,1186px 0 0 -7px #c7c7c7,1187px 0 0 -7px #c7c7c7,1188px 0 0 -7px #c7c7c7,1189px 0 0 -7px #c7c7c7,1190px 0 0 -7px #c7c7c7,1191px 0 0 -7px #c7c7c7,1192px 0 0 -7px #c7c7c7,1193px 0 0 -7px #c7c7c7,1194px 0 0 -7px #c7c7c7,1195px 0 0 -7px #c7c7c7,1196px 0 0 -7px #c7c7c7,1197px 0 0 -7px #c7c7c7,1198px 0 0 -7px #c7c7c7,1199px 0 0 -7px #c7c7c7,1200px 0 0 -7px #c7c7c7,1201px 0 0 -7px #c7c7c7,1202px 0 0 -7px #c7c7c7,1203px 0 0 -7px #c7c7c7,1204px 0 0 -7px #c7c7c7,1205px 0 0 -7px #c7c7c7,1206px 0 0 -7px #c7c7c7,1207px 0 0 -7px #c7c7c7,1208px 0 0 -7px #c7c7c7,1209px 0 0 -7px #c7c7c7,1210px 0 0 -7px #c7c7c7,1211px 0 0 -7px #c7c7c7,1212px 0 0 -7px #c7c7c7,1213px 0 0 -7px #c7c7c7,1214px 0 0 -7px #c7c7c7,1215px 0 0 -7px #c7c7c7,1216px 0 0 -7px #c7c7c7,1217px 0 0 -7px #c7c7c7,1218px 0 0 -7px #c7c7c7,1219px 0 0 -7px #c7c7c7,1220px 0 0 -7px #c7c7c7,1221px 0 0 -7px #c7c7c7,1222px 0 0 -7px #c7c7c7,1223px 0 0 -7px #c7c7c7,1224px 0 0 -7px #c7c7c7,1225px 0 0 -7px #c7c7c7,1226px 0 0 -7px #c7c7c7,1227px 0 0 -7px #c7c7c7,1228px 0 0 -7px #c7c7c7,1229px 0 0 -7px #c7c7c7,1230px 0 0 -7px #c7c7c7,1231px 0 0 -7px #c7c7c7,1232px 0 0 -7px #c7c7c7,1233px 0 0 -7px #c7c7c7,1234px 0 0 -7px #c7c7c7,1235px 0 0 -7px #c7c7c7,1236px 0 0 -7px #c7c7c7,1237px 0 0 -7px #c7c7c7,1238px 0 0 -7px #c7c7c7,1239px 0 0 -7px #c7c7c7,1240px 0 0 -7px #c7c7c7,1241px 0 0 -7px #c7c7c7,1242px 0 0 -7px #c7c7c7,1243px 0 0 -7px #c7c7c7,1244px 0 0 -7px #c7c7c7,1245px 0 0 -7px #c7c7c7,1246px 0 0 -7px #c7c7c7,1247px 0 0 -7px #c7c7c7,1248px 0 0 -7px #c7c7c7,1249px 0 0 -7px #c7c7c7,1250px 0 0 -7px #c7c7c7,1251px 0 0 -7px #c7c7c7,1252px 0 0 -7px #c7c7c7,1253px 0 0 -7px #c7c7c7,1254px 0 0 -7px #c7c7c7,1255px 0 0 -7px #c7c7c7,1256px 0 0 -7px #c7c7c7,1257px 0 0 -7px #c7c7c7,1258px 0 0 -7px #c7c7c7,1259px 0 0 -7px #c7c7c7,1260px 0 0 -7px #c7c7c7,1261px 0 0 -7px #c7c7c7,1262px 0 0 -7px #c7c7c7,1263px 0 0 -7px #c7c7c7,1264px 0 0 -7px #c7c7c7,1265px 0 0 -7px #c7c7c7,1266px 0 0 -7px #c7c7c7,1267px 0 0 -7px #c7c7c7,1268px 0 0 -7px #c7c7c7,1269px 0 0 -7px #c7c7c7,1270px 0 0 -7px #c7c7c7,1271px 0 0 -7px #c7c7c7,1272px 0 0 -7px #c7c7c7,1273px 0 0 -7px #c7c7c7,1274px 0 0 -7px #c7c7c7,1275px 0 0 -7px #c7c7c7,1276px 0 0 -7px #c7c7c7,1277px 0 0 -7px #c7c7c7,1278px 0 0 -7px #c7c7c7,1279px 0 0 -7px #c7c7c7,1280px 0 0 -7px #c7c7c7,1281px 0 0 -7px #c7c7c7,1282px 0 0 -7px #c7c7c7,1283px 0 0 -7px #c7c7c7,1284px 0 0 -7px #c7c7c7,1285px 0 0 -7px #c7c7c7,1286px 0 0 -7px #c7c7c7,1287px 0 0 -7px #c7c7c7,1288px 0 0 -7px #c7c7c7,1289px 0 0 -7px #c7c7c7,1290px 0 0 -7px #c7c7c7,1291px 0 0 -7px #c7c7c7,1292px 0 0 -7px #c7c7c7,1293px 0 0 -7px #c7c7c7,1294px 0 0 -7px #c7c7c7,1295px 0 0 -7px #c7c7c7,1296px 0 0 -7px #c7c7c7,1297px 0 0 -7px #c7c7c7,1298px 0 0 -7px #c7c7c7,1299px 0 0 -7px #c7c7c7,1300px 0 0 -7px #c7c7c7,1301px 0 0 -7px #c7c7c7,1302px 0 0 -7px #c7c7c7,1303px 0 0 -7px #c7c7c7,1304px 0 0 -7px #c7c7c7,1305px 0 0 -7px #c7c7c7,1306px 0 0 -7px #c7c7c7,1307px 0 0 -7px #c7c7c7,1308px 0 0 -7px #c7c7c7,1309px 0 0 -7px #c7c7c7,1310px 0 0 -7px #c7c7c7,1311px 0 0 -7px #c7c7c7,1312px 0 0 -7px #c7c7c7,1313px 0 0 -7px #c7c7c7,1314px 0 0 -7px #c7c7c7,1315px 0 0 -7px #c7c7c7,1316px 0 0 -7px #c7c7c7,1317px 0 0 -7px #c7c7c7,1318px 0 0 -7px #c7c7c7,1319px 0 0 -7px #c7c7c7,1320px 0 0 -7px #c7c7c7,1321px 0 0 -7px #c7c7c7,1322px 0 0 -7px #c7c7c7,1323px 0 0 -7px #c7c7c7,1324px 0 0 -7px #c7c7c7,1325px 0 0 -7px #c7c7c7,1326px 0 0 -7px #c7c7c7,1327px 0 0 -7px #c7c7c7,1328px 0 0 -7px #c7c7c7,1329px 0 0 -7px #c7c7c7,1330px 0 0 -7px #c7c7c7,1331px 0 0 -7px #c7c7c7,1332px 0 0 -7px #c7c7c7,1333px 0 0 -7px #c7c7c7,1334px 0 0 -7px #c7c7c7,1335px 0 0 -7px #c7c7c7,1336px 0 0 -7px #c7c7c7,1337px 0 0 -7px #c7c7c7,1338px 0 0 -7px #c7c7c7,1339px 0 0 -7px #c7c7c7,1340px 0 0 -7px #c7c7c7,1341px 0 0 -7px #c7c7c7,1342px 0 0 -7px #c7c7c7,1343px 0 0 -7px #c7c7c7,1344px 0 0 -7px #c7c7c7,1345px 0 0 -7px #c7c7c7,1346px 0 0 -7px #c7c7c7,1347px 0 0 -7px #c7c7c7,1348px 0 0 -7px #c7c7c7,1349px 0 0 -7px #c7c7c7,1350px 0 0 -7px #c7c7c7,1351px 0 0 -7px #c7c7c7,1352px 0 0 -7px #c7c7c7,1353px 0 0 -7px #c7c7c7,1354px 0 0 -7px #c7c7c7,1355px 0 0 -7px #c7c7c7,1356px 0 0 -7px #c7c7c7,1357px 0 0 -7px #c7c7c7,1358px 0 0 -7px #c7c7c7,1359px 0 0 -7px #c7c7c7,1360px 0 0 -7px #c7c7c7,1361px 0 0 -7px #c7c7c7,1362px 0 0 -7px #c7c7c7,1363px 0 0 -7px #c7c7c7,1364px 0 0 -7px #c7c7c7,1365px 0 0 -7px #c7c7c7,1366px 0 0 -7px #c7c7c7,1367px 0 0 -7px #c7c7c7,1368px 0 0 -7px #c7c7c7,1369px 0 0 -7px #c7c7c7,1370px 0 0 -7px #c7c7c7,1371px 0 0 -7px #c7c7c7,1372px 0 0 -7px #c7c7c7,1373px 0 0 -7px #c7c7c7,1374px 0 0 -7px #c7c7c7,1375px 0 0 -7px #c7c7c7,1376px 0 0 -7px #c7c7c7,1377px 0 0 -7px #c7c7c7,1378px 0 0 -7px #c7c7c7,1379px 0 0 -7px #c7c7c7,1380px 0 0 -7px #c7c7c7,1381px 0 0 -7px #c7c7c7,1382px 0 0 -7px #c7c7c7,1383px 0 0 -7px #c7c7c7,1384px 0 0 -7px #c7c7c7,1385px 0 0 -7px #c7c7c7,1386px 0 0 -7px #c7c7c7,1387px 0 0 -7px #c7c7c7,1388px 0 0 -7px #c7c7c7,1389px 0 0 -7px #c7c7c7,1390px 0 0 -7px #c7c7c7,1391px 0 0 -7px #c7c7c7,1392px 0 0 -7px #c7c7c7,1393px 0 0 -7px #c7c7c7,1394px 0 0 -7px #c7c7c7,1395px 0 0 -7px #c7c7c7,1396px 0 0 -7px #c7c7c7,1397px 0 0 -7px #c7c7c7,1398px 0 0 -7px #c7c7c7,1399px 0 0 -7px #c7c7c7,1400px 0 0 -7px #c7c7c7,1401px 0 0 -7px #c7c7c7,1402px 0 0 -7px #c7c7c7,1403px 0 0 -7px #c7c7c7,1404px 0 0 -7px #c7c7c7,1405px 0 0 -7px #c7c7c7,1406px 0 0 -7px #c7c7c7,1407px 0 0 -7px #c7c7c7,1408px 0 0 -7px #c7c7c7,1409px 0 0 -7px #c7c7c7,1410px 0 0 -7px #c7c7c7,1411px 0 0 -7px #c7c7c7,1412px 0 0 -7px #c7c7c7,1413px 0 0 -7px #c7c7c7,1414px 0 0 -7px #c7c7c7,1415px 0 0 -7px #c7c7c7,1416px 0 0 -7px #c7c7c7,1417px 0 0 -7px #c7c7c7,1418px 0 0 -7px #c7c7c7,1419px 0 0 -7px #c7c7c7,1420px 0 0 -7px #c7c7c7,1421px 0 0 -7px #c7c7c7,1422px 0 0 -7px #c7c7c7,1423px 0 0 -7px #c7c7c7,1424px 0 0 -7px #c7c7c7,1425px 0 0 -7px #c7c7c7,1426px 0 0 -7px #c7c7c7,1427px 0 0 -7px #c7c7c7,1428px 0 0 -7px #c7c7c7,1429px 0 0 -7px #c7c7c7,1430px 0 0 -7px #c7c7c7,1431px 0 0 -7px #c7c7c7,1432px 0 0 -7px #c7c7c7,1433px 0 0 -7px #c7c7c7,1434px 0 0 -7px #c7c7c7,1435px 0 0 -7px #c7c7c7,1436px 0 0 -7px #c7c7c7,1437px 0 0 -7px #c7c7c7,1438px 0 0 -7px #c7c7c7,1439px 0 0 -7px #c7c7c7,1440px 0 0 -7px #c7c7c7,1441px 0 0 -7px #c7c7c7,1442px 0 0 -7px #c7c7c7,1443px 0 0 -7px #c7c7c7,1444px 0 0 -7px #c7c7c7,1445px 0 0 -7px #c7c7c7,1446px 0 0 -7px #c7c7c7,1447px 0 0 -7px #c7c7c7,1448px 0 0 -7px #c7c7c7,1449px 0 0 -7px #c7c7c7,1450px 0 0 -7px #c7c7c7,1451px 0 0 -7px #c7c7c7,1452px 0 0 -7px #c7c7c7,1453px 0 0 -7px #c7c7c7,1454px 0 0 -7px #c7c7c7,1455px 0 0 -7px #c7c7c7,1456px 0 0 -7px #c7c7c7,1457px 0 0 -7px #c7c7c7,1458px 0 0 -7px #c7c7c7,1459px 0 0 -7px #c7c7c7,1460px 0 0 -7px #c7c7c7,1461px 0 0 -7px #c7c7c7,1462px 0 0 -7px #c7c7c7,1463px 0 0 -7px #c7c7c7,1464px 0 0 -7px #c7c7c7,1465px 0 0 -7px #c7c7c7,1466px 0 0 -7px #c7c7c7,1467px 0 0 -7px #c7c7c7,1468px 0 0 -7px #c7c7c7,1469px 0 0 -7px #c7c7c7,1470px 0 0 -7px #c7c7c7,1471px 0 0 -7px #c7c7c7,1472px 0 0 -7px #c7c7c7,1473px 0 0 -7px #c7c7c7,1474px 0 0 -7px #c7c7c7,1475px 0 0 -7px #c7c7c7,1476px 0 0 -7px #c7c7c7,1477px 0 0 -7px #c7c7c7,1478px 0 0 -7px #c7c7c7,1479px 0 0 -7px #c7c7c7,1480px 0 0 -7px #c7c7c7,1481px 0 0 -7px #c7c7c7,1482px 0 0 -7px #c7c7c7,1483px 0 0 -7px #c7c7c7,1484px 0 0 -7px #c7c7c7,1485px 0 0 -7px #c7c7c7,1486px 0 0 -7px #c7c7c7,1487px 0 0 -7px #c7c7c7,1488px 0 0 -7px #c7c7c7,1489px 0 0 -7px #c7c7c7,1490px 0 0 -7px #c7c7c7,1491px 0 0 -7px #c7c7c7,1492px 0 0 -7px #c7c7c7,1493px 0 0 -7px #c7c7c7,1494px 0 0 -7px #c7c7c7,1495px 0 0 -7px #c7c7c7,1496px 0 0 -7px #c7c7c7,1497px 0 0 -7px #c7c7c7,1498px 0 0 -7px #c7c7c7,1499px 0 0 -7px #c7c7c7,1500px 0 0 -7px #c7c7c7,1501px 0 0 -7px #c7c7c7,1502px 0 0 -7px #c7c7c7,1503px 0 0 -7px #c7c7c7,1504px 0 0 -7px #c7c7c7,1505px 0 0 -7px #c7c7c7,1506px 0 0 -7px #c7c7c7,1507px 0 0 -7px #c7c7c7,1508px 0 0 -7px #c7c7c7,1509px 0 0 -7px #c7c7c7,1510px 0 0 -7px #c7c7c7,1511px 0 0 -7px #c7c7c7,1512px 0 0 -7px #c7c7c7,1513px 0 0 -7px #c7c7c7,1514px 0 0 -7px #c7c7c7,1515px 0 0 -7px #c7c7c7,1516px 0 0 -7px #c7c7c7,1517px 0 0 -7px #c7c7c7,1518px 0 0 -7px #c7c7c7,1519px 0 0 -7px #c7c7c7,1520px 0 0 -7px #c7c7c7,1521px 0 0 -7px #c7c7c7,1522px 0 0 -7px #c7c7c7,1523px 0 0 -7px #c7c7c7,1524px 0 0 -7px #c7c7c7,1525px 0 0 -7px #c7c7c7,1526px 0 0 -7px #c7c7c7,1527px 0 0 -7px #c7c7c7,1528px 0 0 -7px #c7c7c7,1529px 0 0 -7px #c7c7c7,1530px 0 0 -7px #c7c7c7,1531px 0 0 -7px #c7c7c7,1532px 0 0 -7px #c7c7c7,1533px 0 0 -7px #c7c7c7,1534px 0 0 -7px #c7c7c7,1535px 0 0 -7px #c7c7c7,1536px 0 0 -7px #c7c7c7,1537px 0 0 -7px #c7c7c7,1538px 0 0 -7px #c7c7c7,1539px 0 0 -7px #c7c7c7,1540px 0 0 -7px #c7c7c7,1541px 0 0 -7px #c7c7c7,1542px 0 0 -7px #c7c7c7,1543px 0 0 -7px #c7c7c7,1544px 0 0 -7px #c7c7c7,1545px 0 0 -7px #c7c7c7,1546px 0 0 -7px #c7c7c7,1547px 0 0 -7px #c7c7c7,1548px 0 0 -7px #c7c7c7,1549px 0 0 -7px #c7c7c7,1550px 0 0 -7px #c7c7c7,1551px 0 0 -7px #c7c7c7,1552px 0 0 -7px #c7c7c7,1553px 0 0 -7px #c7c7c7,1554px 0 0 -7px #c7c7c7,1555px 0 0 -7px #c7c7c7,1556px 0 0 -7px #c7c7c7,1557px 0 0 -7px #c7c7c7,1558px 0 0 -7px #c7c7c7,1559px 0 0 -7px #c7c7c7,1560px 0 0 -7px #c7c7c7,1561px 0 0 -7px #c7c7c7,1562px 0 0 -7px #c7c7c7,1563px 0 0 -7px #c7c7c7,1564px 0 0 -7px #c7c7c7,1565px 0 0 -7px #c7c7c7,1566px 0 0 -7px #c7c7c7,1567px 0 0 -7px #c7c7c7,1568px 0 0 -7px #c7c7c7,1569px 0 0 -7px #c7c7c7,1570px 0 0 -7px #c7c7c7,1571px 0 0 -7px #c7c7c7,1572px 0 0 -7px #c7c7c7,1573px 0 0 -7px #c7c7c7,1574px 0 0 -7px #c7c7c7,1575px 0 0 -7px #c7c7c7,1576px 0 0 -7px #c7c7c7,1577px 0 0 -7px #c7c7c7,1578px 0 0 -7px #c7c7c7,1579px 0 0 -7px #c7c7c7,1580px 0 0 -7px #c7c7c7,1581px 0 0 -7px #c7c7c7,1582px 0 0 -7px #c7c7c7,1583px 0 0 -7px #c7c7c7,1584px 0 0 -7px #c7c7c7,1585px 0 0 -7px #c7c7c7,1586px 0 0 -7px #c7c7c7,1587px 0 0 -7px #c7c7c7,1588px 0 0 -7px #c7c7c7,1589px 0 0 -7px #c7c7c7,1590px 0 0 -7px #c7c7c7,1591px 0 0 -7px #c7c7c7,1592px 0 0 -7px #c7c7c7,1593px 0 0 -7px #c7c7c7,1594px 0 0 -7px #c7c7c7,1595px 0 0 -7px #c7c7c7,1596px 0 0 -7px #c7c7c7,1597px 0 0 -7px #c7c7c7,1598px 0 0 -7px #c7c7c7,1599px 0 0 -7px #c7c7c7,1600px 0 0 -7px #c7c7c7,1601px 0 0 -7px #c7c7c7,1602px 0 0 -7px #c7c7c7,1603px 0 0 -7px #c7c7c7,1604px 0 0 -7px #c7c7c7,1605px 0 0 -7px #c7c7c7,1606px 0 0 -7px #c7c7c7,1607px 0 0 -7px #c7c7c7,1608px 0 0 -7px #c7c7c7,1609px 0 0 -7px #c7c7c7,1610px 0 0 -7px #c7c7c7,1611px 0 0 -7px #c7c7c7,1612px 0 0 -7px #c7c7c7,1613px 0 0 -7px #c7c7c7,1614px 0 0 -7px #c7c7c7,1615px 0 0 -7px #c7c7c7,1616px 0 0 -7px #c7c7c7,1617px 0 0 -7px #c7c7c7,1618px 0 0 -7px #c7c7c7,1619px 0 0 -7px #c7c7c7,1620px 0 0 -7px #c7c7c7,1621px 0 0 -7px #c7c7c7,1622px 0 0 -7px #c7c7c7,1623px 0 0 -7px #c7c7c7,1624px 0 0 -7px #c7c7c7,1625px 0 0 -7px #c7c7c7,1626px 0 0 -7px #c7c7c7,1627px 0 0 -7px #c7c7c7,1628px 0 0 -7px #c7c7c7,1629px 0 0 -7px #c7c7c7,1630px 0 0 -7px #c7c7c7,1631px 0 0 -7px #c7c7c7,1632px 0 0 -7px #c7c7c7,1633px 0 0 -7px #c7c7c7,1634px 0 0 -7px #c7c7c7,1635px 0 0 -7px #c7c7c7,1636px 0 0 -7px #c7c7c7,1637px 0 0 -7px #c7c7c7,1638px 0 0 -7px #c7c7c7,1639px 0 0 -7px #c7c7c7,1640px 0 0 -7px #c7c7c7,1641px 0 0 -7px #c7c7c7,1642px 0 0 -7px #c7c7c7,1643px 0 0 -7px #c7c7c7,1644px 0 0 -7px #c7c7c7,1645px 0 0 -7px #c7c7c7,1646px 0 0 -7px #c7c7c7,1647px 0 0 -7px #c7c7c7,1648px 0 0 -7px #c7c7c7,1649px 0 0 -7px #c7c7c7,1650px 0 0 -7px #c7c7c7,1651px 0 0 -7px #c7c7c7,1652px 0 0 -7px #c7c7c7,1653px 0 0 -7px #c7c7c7,1654px 0 0 -7px #c7c7c7,1655px 0 0 -7px #c7c7c7,1656px 0 0 -7px #c7c7c7,1657px 0 0 -7px #c7c7c7,1658px 0 0 -7px #c7c7c7,1659px 0 0 -7px #c7c7c7,1660px 0 0 -7px #c7c7c7,1661px 0 0 -7px #c7c7c7,1662px 0 0 -7px #c7c7c7,1663px 0 0 -7px #c7c7c7,1664px 0 0 -7px #c7c7c7,1665px 0 0 -7px #c7c7c7,1666px 0 0 -7px #c7c7c7,1667px 0 0 -7px #c7c7c7,1668px 0 0 -7px #c7c7c7,1669px 0 0 -7px #c7c7c7,1670px 0 0 -7px #c7c7c7,1671px 0 0 -7px #c7c7c7,1672px 0 0 -7px #c7c7c7,1673px 0 0 -7px #c7c7c7,1674px 0 0 -7px #c7c7c7,1675px 0 0 -7px #c7c7c7,1676px 0 0 -7px #c7c7c7,1677px 0 0 -7px #c7c7c7,1678px 0 0 -7px #c7c7c7,1679px 0 0 -7px #c7c7c7,1680px 0 0 -7px #c7c7c7,1681px 0 0 -7px #c7c7c7,1682px 0 0 -7px #c7c7c7,1683px 0 0 -7px #c7c7c7,1684px 0 0 -7px #c7c7c7,1685px 0 0 -7px #c7c7c7,1686px 0 0 -7px #c7c7c7,1687px 0 0 -7px #c7c7c7,1688px 0 0 -7px #c7c7c7,1689px 0 0 -7px #c7c7c7,1690px 0 0 -7px #c7c7c7,1691px 0 0 -7px #c7c7c7,1692px 0 0 -7px #c7c7c7,1693px 0 0 -7px #c7c7c7,1694px 0 0 -7px #c7c7c7,1695px 0 0 -7px #c7c7c7,1696px 0 0 -7px #c7c7c7,1697px 0 0 -7px #c7c7c7,1698px 0 0 -7px #c7c7c7,1699px 0 0 -7px #c7c7c7,1700px 0 0 -7px #c7c7c7,1701px 0 0 -7px #c7c7c7,1702px 0 0 -7px #c7c7c7,1703px 0 0 -7px #c7c7c7,1704px 0 0 -7px #c7c7c7,1705px 0 0 -7px #c7c7c7,1706px 0 0 -7px #c7c7c7,1707px 0 0 -7px #c7c7c7,1708px 0 0 -7px #c7c7c7,1709px 0 0 -7px #c7c7c7,1710px 0 0 -7px #c7c7c7,1711px 0 0 -7px #c7c7c7,1712px 0 0 -7px #c7c7c7,1713px 0 0 -7px #c7c7c7,1714px 0 0 -7px #c7c7c7,1715px 0 0 -7px #c7c7c7,1716px 0 0 -7px #c7c7c7,1717px 0 0 -7px #c7c7c7,1718px 0 0 -7px #c7c7c7,1719px 0 0 -7px #c7c7c7,1720px 0 0 -7px #c7c7c7,1721px 0 0 -7px #c7c7c7,1722px 0 0 -7px #c7c7c7,1723px 0 0 -7px #c7c7c7,1724px 0 0 -7px #c7c7c7,1725px 0 0 -7px #c7c7c7,1726px 0 0 -7px #c7c7c7,1727px 0 0 -7px #c7c7c7,1728px 0 0 -7px #c7c7c7,1729px 0 0 -7px #c7c7c7,1730px 0 0 -7px #c7c7c7,1731px 0 0 -7px #c7c7c7,1732px 0 0 -7px #c7c7c7,1733px 0 0 -7px #c7c7c7,1734px 0 0 -7px #c7c7c7,1735px 0 0 -7px #c7c7c7,1736px 0 0 -7px #c7c7c7,1737px 0 0 -7px #c7c7c7,1738px 0 0 -7px #c7c7c7,1739px 0 0 -7px #c7c7c7,1740px 0 0 -7px #c7c7c7,1741px 0 0 -7px #c7c7c7,1742px 0 0 -7px #c7c7c7,1743px 0 0 -7px #c7c7c7,1744px 0 0 -7px #c7c7c7,1745px 0 0 -7px #c7c7c7,1746px 0 0 -7px #c7c7c7,1747px 0 0 -7px #c7c7c7,1748px 0 0 -7px #c7c7c7,1749px 0 0 -7px #c7c7c7,1750px 0 0 -7px #c7c7c7,1751px 0 0 -7px #c7c7c7,1752px 0 0 -7px #c7c7c7,1753px 0 0 -7px #c7c7c7,1754px 0 0 -7px #c7c7c7,1755px 0 0 -7px #c7c7c7,1756px 0 0 -7px #c7c7c7,1757px 0 0 -7px #c7c7c7,1758px 0 0 -7px #c7c7c7,1759px 0 0 -7px #c7c7c7,1760px 0 0 -7px #c7c7c7,1761px 0 0 -7px #c7c7c7,1762px 0 0 -7px #c7c7c7,1763px 0 0 -7px #c7c7c7,1764px 0 0 -7px #c7c7c7,1765px 0 0 -7px #c7c7c7,1766px 0 0 -7px #c7c7c7,1767px 0 0 -7px #c7c7c7,1768px 0 0 -7px #c7c7c7,1769px 0 0 -7px #c7c7c7,1770px 0 0 -7px #c7c7c7,1771px 0 0 -7px #c7c7c7,1772px 0 0 -7px #c7c7c7,1773px 0 0 -7px #c7c7c7,1774px 0 0 -7px #c7c7c7,1775px 0 0 -7px #c7c7c7,1776px 0 0 -7px #c7c7c7,1777px 0 0 -7px #c7c7c7,1778px 0 0 -7px #c7c7c7,1779px 0 0 -7px #c7c7c7,1780px 0 0 -7px #c7c7c7,1781px 0 0 -7px #c7c7c7,1782px 0 0 -7px #c7c7c7,1783px 0 0 -7px #c7c7c7,1784px 0 0 -7px #c7c7c7,1785px 0 0 -7px #c7c7c7,1786px 0 0 -7px #c7c7c7,1787px 0 0 -7px #c7c7c7,1788px 0 0 -7px #c7c7c7,1789px 0 0 -7px #c7c7c7,1790px 0 0 -7px #c7c7c7,1791px 0 0 -7px #c7c7c7,1792px 0 0 -7px #c7c7c7,1793px 0 0 -7px #c7c7c7,1794px 0 0 -7px #c7c7c7,1795px 0 0 -7px #c7c7c7,1796px 0 0 -7px #c7c7c7,1797px 0 0 -7px #c7c7c7,1798px 0 0 -7px #c7c7c7,1799px 0 0 -7px #c7c7c7,1800px 0 0 -7px #c7c7c7,1801px 0 0 -7px #c7c7c7,1802px 0 0 -7px #c7c7c7,1803px 0 0 -7px #c7c7c7,1804px 0 0 -7px #c7c7c7,1805px 0 0 -7px #c7c7c7,1806px 0 0 -7px #c7c7c7,1807px 0 0 -7px #c7c7c7,1808px 0 0 -7px #c7c7c7,1809px 0 0 -7px #c7c7c7,1810px 0 0 -7px #c7c7c7,1811px 0 0 -7px #c7c7c7,1812px 0 0 -7px #c7c7c7,1813px 0 0 -7px #c7c7c7,1814px 0 0 -7px #c7c7c7,1815px 0 0 -7px #c7c7c7,1816px 0 0 -7px #c7c7c7,1817px 0 0 -7px #c7c7c7,1818px 0 0 -7px #c7c7c7,1819px 0 0 -7px #c7c7c7,1820px 0 0 -7px #c7c7c7,1821px 0 0 -7px #c7c7c7,1822px 0 0 -7px #c7c7c7,1823px 0 0 -7px #c7c7c7,1824px 0 0 -7px #c7c7c7,1825px 0 0 -7px #c7c7c7,1826px 0 0 -7px #c7c7c7,1827px 0 0 -7px #c7c7c7,1828px 0 0 -7px #c7c7c7,1829px 0 0 -7px #c7c7c7,1830px 0 0 -7px #c7c7c7,1831px 0 0 -7px #c7c7c7,1832px 0 0 -7px #c7c7c7,1833px 0 0 -7px #c7c7c7,1834px 0 0 -7px #c7c7c7,1835px 0 0 -7px #c7c7c7,1836px 0 0 -7px #c7c7c7,1837px 0 0 -7px #c7c7c7,1838px 0 0 -7px #c7c7c7,1839px 0 0 -7px #c7c7c7,1840px 0 0 -7px #c7c7c7,1841px 0 0 -7px #c7c7c7,1842px 0 0 -7px #c7c7c7,1843px 0 0 -7px #c7c7c7,1844px 0 0 -7px #c7c7c7,1845px 0 0 -7px #c7c7c7,1846px 0 0 -7px #c7c7c7,1847px 0 0 -7px #c7c7c7,1848px 0 0 -7px #c7c7c7,1849px 0 0 -7px #c7c7c7,1850px 0 0 -7px #c7c7c7,1851px 0 0 -7px #c7c7c7,1852px 0 0 -7px #c7c7c7,1853px 0 0 -7px #c7c7c7,1854px 0 0 -7px #c7c7c7,1855px 0 0 -7px #c7c7c7,1856px 0 0 -7px #c7c7c7,1857px 0 0 -7px #c7c7c7,1858px 0 0 -7px #c7c7c7,1859px 0 0 -7px #c7c7c7,1860px 0 0 -7px #c7c7c7,1861px 0 0 -7px #c7c7c7,1862px 0 0 -7px #c7c7c7,1863px 0 0 -7px #c7c7c7,1864px 0 0 -7px #c7c7c7,1865px 0 0 -7px #c7c7c7,1866px 0 0 -7px #c7c7c7,1867px 0 0 -7px #c7c7c7,1868px 0 0 -7px #c7c7c7,1869px 0 0 -7px #c7c7c7,1870px 0 0 -7px #c7c7c7,1871px 0 0 -7px #c7c7c7,1872px 0 0 -7px #c7c7c7,1873px 0 0 -7px #c7c7c7,1874px 0 0 -7px #c7c7c7,1875px 0 0 -7px #c7c7c7,1876px 0 0 -7px #c7c7c7,1877px 0 0 -7px #c7c7c7,1878px 0 0 -7px #c7c7c7,1879px 0 0 -7px #c7c7c7,1880px 0 0 -7px #c7c7c7,1881px 0 0 -7px #c7c7c7,1882px 0 0 -7px #c7c7c7,1883px 0 0 -7px #c7c7c7,1884px 0 0 -7px #c7c7c7,1885px 0 0 -7px #c7c7c7,1886px 0 0 -7px #c7c7c7,1887px 0 0 -7px #c7c7c7,1888px 0 0 -7px #c7c7c7,1889px 0 0 -7px #c7c7c7,1890px 0 0 -7px #c7c7c7,1891px 0 0 -7px #c7c7c7,1892px 0 0 -7px #c7c7c7,1893px 0 0 -7px #c7c7c7,1894px 0 0 -7px #c7c7c7,1895px 0 0 -7px #c7c7c7,1896px 0 0 -7px #c7c7c7,1897px 0 0 -7px #c7c7c7,1898px 0 0 -7px #c7c7c7,1899px 0 0 -7px #c7c7c7,1900px 0 0 -7px #c7c7c7,1901px 0 0 -7px #c7c7c7,1902px 0 0 -7px #c7c7c7,1903px 0 0 -7px #c7c7c7,1904px 0 0 -7px #c7c7c7,1905px 0 0 -7px #c7c7c7,1906px 0 0 -7px #c7c7c7,1907px 0 0 -7px #c7c7c7,1908px 0 0 -7px #c7c7c7,1909px 0 0 -7px #c7c7c7,1910px 0 0 -7px #c7c7c7,1911px 0 0 -7px #c7c7c7,1912px 0 0 -7px #c7c7c7,1913px 0 0 -7px #c7c7c7,1914px 0 0 -7px #c7c7c7,1915px 0 0 -7px #c7c7c7,1916px 0 0 -7px #c7c7c7,1917px 0 0 -7px #c7c7c7,1918px 0 0 -7px #c7c7c7,1919px 0 0 -7px #c7c7c7,1920px 0 0 -7px #c7c7c7,1921px 0 0 -7px #c7c7c7,1922px 0 0 -7px #c7c7c7,1923px 0 0 -7px #c7c7c7,1924px 0 0 -7px #c7c7c7,1925px 0 0 -7px #c7c7c7,1926px 0 0 -7px #c7c7c7,1927px 0 0 -7px #c7c7c7,1928px 0 0 -7px #c7c7c7,1929px 0 0 -7px #c7c7c7,1930px 0 0 -7px #c7c7c7,1931px 0 0 -7px #c7c7c7,1932px 0 0 -7px #c7c7c7,1933px 0 0 -7px #c7c7c7,1934px 0 0 -7px #c7c7c7,1935px 0 0 -7px #c7c7c7,1936px 0 0 -7px #c7c7c7,1937px 0 0 -7px #c7c7c7,1938px 0 0 -7px #c7c7c7,1939px 0 0 -7px #c7c7c7,1940px 0 0 -7px #c7c7c7,1941px 0 0 -7px #c7c7c7,1942px 0 0 -7px #c7c7c7,1943px 0 0 -7px #c7c7c7,1944px 0 0 -7px #c7c7c7,1945px 0 0 -7px #c7c7c7,1946px 0 0 -7px #c7c7c7,1947px 0 0 -7px #c7c7c7,1948px 0 0 -7px #c7c7c7,1949px 0 0 -7px #c7c7c7,1950px 0 0 -7px #c7c7c7,1951px 0 0 -7px #c7c7c7,1952px 0 0 -7px #c7c7c7,1953px 0 0 -7px #c7c7c7,1954px 0 0 -7px #c7c7c7,1955px 0 0 -7px #c7c7c7,1956px 0 0 -7px #c7c7c7,1957px 0 0 -7px #c7c7c7,1958px 0 0 -7px #c7c7c7,1959px 0 0 -7px #c7c7c7,1960px 0 0 -7px #c7c7c7,1961px 0 0 -7px #c7c7c7,1962px 0 0 -7px #c7c7c7,1963px 0 0 -7px #c7c7c7,1964px 0 0 -7px #c7c7c7,1965px 0 0 -7px #c7c7c7,1966px 0 0 -7px #c7c7c7,1967px 0 0 -7px #c7c7c7,1968px 0 0 -7px #c7c7c7,1969px 0 0 -7px #c7c7c7,1970px 0 0 -7px #c7c7c7,1971px 0 0 -7px #c7c7c7,1972px 0 0 -7px #c7c7c7,1973px 0 0 -7px #c7c7c7,1974px 0 0 -7px #c7c7c7,1975px 0 0 -7px #c7c7c7,1976px 0 0 -7px #c7c7c7,1977px 0 0 -7px #c7c7c7,1978px 0 0 -7px #c7c7c7,1979px 0 0 -7px #c7c7c7,1980px 0 0 -7px #c7c7c7,1981px 0 0 -7px #c7c7c7,1982px 0 0 -7px #c7c7c7,1983px 0 0 -7px #c7c7c7,1984px 0 0 -7px #c7c7c7,1985px 0 0 -7px #c7c7c7,1986px 0 0 -7px #c7c7c7,1987px 0 0 -7px #c7c7c7,1988px 0 0 -7px #c7c7c7,1989px 0 0 -7px #c7c7c7,1990px 0 0 -7px #c7c7c7,1991px 0 0 -7px #c7c7c7,1992px 0 0 -7px #c7c7c7,1993px 0 0 -7px #c7c7c7,1994px 0 0 -7px #c7c7c7,1995px 0 0 -7px #c7c7c7,1996px 0 0 -7px #c7c7c7,1997px 0 0 -7px #c7c7c7,1998px 0 0 -7px #c7c7c7,1999px 0 0 -7px #c7c7c7,2000px 0 0 -7px #c7c7c7;margin-top:-7px}#lt-yantr input::-moz-range-track{width:100%;height:10px;background:#c7c7c7}#lt-yantr input::-moz-range-thumb{height:25px;width:25px;background:#00aeef;border-radius:50%;position:relative;border:none}#lt-yantr input::-moz-range-progress{height:10px;background:#08c177;border:0;margin-top:0}#lt-yantr input[type=range]::-moz-focus-inner{border:0;outline:none}#lt-yantr input::-ms-track{border:none;color:transparent;width:100%}#lt-yantr input::-ms-thumb{height:25px;width:25px;background:#00aeef;border-radius:50%;border:none;margin:0;box-shadow:none}#lt-yantr input::-ms-fill-lower{background:#08c177}#lt-yantr input::-ms-fill-upper{background:#c7c7c7}#lt-yantr input::-ms-tooltip{display:none}#lt-yantr .mb-none{margin-bottom:0!important}#lt-yantr .input-group{display:table;width:100%}#lt-yantr .input-group .form-control{margin:0}#lt-yantr .input-group .form-control:first-child{border-radius:4px 0 0 4px}#lt-yantr .input-group .form-control:last-child{border-radius:0 4px 4px 0}#lt-yantr .input-group .input-group-addon{font-size:16px;background-color:#fff;border:1px solid #dadada;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}#lt-yantr .input-group .input-group-addon:first-child{border-right:0;border-radius:4px 0 0 4px}#lt-yantr .input-group .input-group-addon:last-child{border-left:0;border-radius:0 4px 4px 0}#lt-yantr .display-none{display:none}#lt-yantr .display-block{display:block}#lt-yantr .btn{display:inline-block;padding:.65em 2.1em;margin:0;font-size:1.29em;font-weight:700;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;border-radius:4px;color:#fff;transition:all .3s}#lt-yantr .btn.active.focus,#lt-yantr .btn.active:focus,#lt-yantr .btn.focus,#lt-yantr .btn.focus:active,#lt-yantr .btn:active:focus,#lt-yantr .btn:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}#lt-yantr .btn.focus,#lt-yantr .btn:focus,#lt-yantr .btn:hover{color:#fff;text-decoration:none}#lt-yantr .btn.active,#lt-yantr .btn:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}@media (max-width:480px){#lt-yantr .btn{padding:.6em 0;width:100%;display:block}}@media (max-width:380px){#lt-yantr .btn{font-size:1.2em;padding:.4em 0 .5em}}#lt-yantr .btn span{display:inline-block;float:right;width:1em;text-align:center;font-size:1em;font-weight:800;margin:.2em -1.6em 0 .6em;padding:0;pointer-events:none}#lt-yantr .cursor-pointer{cursor:pointer}#lt-yantr .btn-block,#lt-yantr .btn-fullwidth{display:block;width:100%}#lt-yantr .btn-blue{background-color:#E93E51;outline:none;}#lt-yantr .btn-blue:active,#lt-yantr .btn-blue:focus,#lt-yantr .btn-blue:hover{background-color:#2F4559}#lt-yantr .btn-orange{background-color:#ff704d}#lt-yantr .btn-orange:active,#lt-yantr .btn-orange:focus,#lt-yantr .btn-orange:hover{background-color:#ff471a}#lt-yantr .btn-gray{background-color:#e1e1e1;color:#666}#lt-yantr .btn-gray:active,#lt-yantr .btn-gray:focus,#lt-yantr .btn-gray:hover{color:#666;background-color:#c1c1c1}#lt-yantr .btn-red{color:#fff;background-color:#d93551;border:1px solid #e61600}#lt-yantr .btn-outline{color:#00aeef;font-weight:700;background:#fff;border:1px solid #00aeef}#lt-yantr .btn-outline:active,#lt-yantr .btn-outline:focus,#lt-yantr .btn-outline:hover{outline:none;color:#fff;background:#00aeef;border-color:#00aeef}#lt-yantr .green-text{color:#08c177}#lt-yantr .error-msg,#lt-yantr .light-red-text,#lt-yantr .red-text{color:#d93551}#lt-yantr .blue-text{color:#00aeef}#lt-yantr .gray-text{color:#666}#lt-yantr .orange-text{color:#ff704d}#lt-yantr .dark-gray-text{color:#101f30}#lt-yantr .light-gray-text{color:#ccc}#lt-yantr .purple-text{color:#2087c1}#lt-yantr .purple-bg{background:#2087c1}#lt-yantr .blue-bg{background:rgba(233, 62, 81, 0.3)}#lt-yantr .red-bg{background:#da3551}#lt-yantr .green-bg{background:#E93E51}#lt-yantr .table.active .table-trigger span.lt4-ChevronRight:before{background:url(/marketplace/wp-content/themes/smarter-loan/images/calc-arrow.svg) 0 0 no-repeat;background-size: 14px;content: "" !important;width: 14px;height: 14px;display: block;background-position: center;margin: auto;top: 6px;position:relative;left: 0px;-webkit-transform: rotateZ(90deg);-ms-transform: rotateZ(90deg);-moz-transform: rotateZ(90deg);-o-transform: rotateZ(90deg);transform: rotateZ(90deg);}#lt-yantr .table .table-trigger span.lt4-ChevronRight:before{background:url(/marketplace/wp-content/themes/smarter-loan/images/calc-arrow.svg) 0 0 no-repeat;background-size: 14px;content: "";width: 14px;height: 14px;display: block;background-position: center;margin: auto;top: 5px;position:relative;left: 1px;}#lt-yantr .light-green-bg{background:rgba(233, 62, 81, 0.3)}#lt-yantr .orange-bg{background:#ff704d}#lt-yantr .dark-red-bg{background:#d60000}#lt-yantr .clear-fix{clear:both}#lt-yantr .font-sm{font-size:12px}#lt-yantr .form-radio li{list-style:none;margin-top:10px;position:relative}#lt-yantr .form-radio li [type=radio]:checked,#lt-yantr .form-radio li [type=radio]:not(:checked){position:absolute;left:-9999px}#lt-yantr .form-radio li [type=radio]:checked+label,#lt-yantr .form-radio li [type=radio]:not(:checked)+label{font-weight:400;line-height:22px;display:inline-block;position:relative;padding-left:35px;margin:0;cursor:pointer}#lt-yantr .form-radio li [type=radio]:checked+label:before,#lt-yantr .form-radio li [type=radio]:not(:checked)+label:before{content:"";width:22px;height:22px;border-radius:22px;background:#fff;border:1px solid #00aeef;position:absolute;top:0;left:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}#lt-yantr .form-radio li [type=radio]:checked+label:after,#lt-yantr .form-radio li [type=radio]:not(:checked)+label:after{content:"";width:12px;height:12px;border-radius:12px;background:#00aeef;position:absolute;top:5px;left:5px;transition:all .2s ease}#lt-yantr .form-radio li [type=radio]:not(:checked)+label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0)}#lt-yantr .form-radio li [type=radio]:checked+label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}#lt-yantr [type=checkbox]:checked,#lt-yantr [type=checkbox]:not(:checked){position:absolute;margin:0;visibility:hidden}#lt-yantr [type=checkbox]:checked+label,#lt-yantr [type=checkbox]:not(:checked)+label{font-weight:400;position:relative;cursor:pointer;margin:0;padding-left:35px}#lt-yantr [type=checkbox]:checked+label:before,#lt-yantr [type=checkbox]:not(:checked)+label:before{content:"";position:absolute;left:0;top:0;width:1.5em;height:1.5em;border:1px solid #00aeef;background:#fff;border-radius:1px;box-shadow:inset 0 1px 3px rgba(0,0,0,.1)}#lt-yantr [type=checkbox]:checked+label:after,#lt-yantr [type=checkbox]:not(:checked)+label:after{content:"\\2714";position:absolute;top:.25em;left:.3em;font-size:1.15em;line-height:.8;color:#00aeef;transition:all .3s}#lt-yantr [type=checkbox]:not(:checked)+label:after{opacity:0;transform:scale(0)}#lt-yantr [type=checkbox]:checked+label:after{opacity:1;transform:scale(1)}#lt-yantr [type=checkbox]:disabled:checked+label:before,#lt-yantr [type=checkbox]:disabled:not(:checked)+label:before{box-shadow:none;border-color:#bbb;background-color:#ddd}#lt-yantr [type=checkbox]:disabled:checked+label:after{color:#999}#lt-yantr [type=checkbox]:disabled+label{color:#aaa;cursor:not-allowed}#lt-yantr .form-checkbox{margin-bottom:10px}#lt-yantr .form-checkbox li{list-style:none;margin-top:12px;position:relative}#lt-yantr .calc-filter{background:#f1f3f3;padding:30px 40px 40px}@media (max-width:767px){#lt-yantr .calc-filter{padding:20px 20px 30px}}@media (max-width:480px){#lt-yantr .calc-filter{padding:15px 15px 25px}}#lt-yantr .calc-filter .form-group:last-child{margin-bottom:0}#lt-yantr .calc-filter .calc-question{font-size:1.1em}#lt-yantr .calc-filter .calc-tooltip{position:relative}#lt-yantr .calc-filter .calc-tooltip:hover .tooltip-content{display:block}#lt-yantr .calc-filter .calc-tooltip .tooltip-trigger{color:#00aeef;cursor:pointer}#lt-yantr .calc-filter .calc-tooltip .tooltip-content{color:#fff;font-size:13px;line-height:normal;background:#08c177;width:170px;padding:10px 15px;position:absolute;left:50%;bottom:26px;margin-left:-85px;z-index:2;display:none}#lt-yantr .calc-filter .calc-tooltip .tooltip-content:after{content:"";width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:7px solid #08c177;position:absolute;bottom:-7px;left:50%;margin-left:-10px}#lt-yantr .calc-filter .advance-calc-trigger{margin-bottom:5px;padding:10px 0;cursor:pointer;transition:all .3s}#lt-yantr .calc-filter .advance-calc-trigger.rotate-90,#lt-yantr .calc-filter .advance-calc-trigger:hover{color:#00aeef}#lt-yantr .calc-filter .advance-calc-trigger .lt{font-size:20px;font-weight:700;font-weight:normal\\9;color:#00aeef;transition:all .3s}#lt-yantr .calc-filter .advance-calc-trigger.rotate-90 .lt,#lt-yantr .calc-filter .advance-calc-trigger:hover .lt{margin-right:20px;transform:rotate(90deg)}#lt-yantr .calc-filter .advance-calc{display:none}#lt-yantr .calc-filter .btn-calc{color:#fff;margin-top:20px}#lt-yantr .calc-question{position:relative;top:2px;cursor:pointer}@media (max-width:767px){#lt-yantr .calc-question{top:1px}}#lt-yantr .calc-question:focus{text-decoration:none}#lt-yantr .rating-star{font-size:16px;max-width:100px;display:inline-block;margin-right:5px;white-space:nowrap;position:relative;top:2px}#lt-yantr .rating-star .rating-stars-top{width:60%;position:absolute;color:#ffc507;z-index:1;overflow:hidden}#lt-yantr .rating-star .rating-stars-bottom{color:#ddd}#lt-yantr .rating-bar-section{list-style:none;margin-bottom:30px}@media (max-width:767px){#lt-yantr .rating-bar-section{margin-bottom:20px}}#lt-yantr .rating-bar-section li{margin-top:7px}#lt-yantr .rating-bar-section li:after{content:"";clear:both;display:block}#lt-yantr .rating-bar-section label{display:block;line-height:1.6em;font-weight:600;color:#101f30;margin:0}@media (max-width:380px){#lt-yantr .rating-bar-section .rating-val{display:block;clear:both}}#lt-yantr .rating-bar{max-width:210px;margin:6px 10px 6px 0;white-space:nowrap;position:relative;float:left}#lt-yantr .rating-bar span{width:40px;height:10px;margin-right:2px;float:left}#lt-yantr .rating-bar .rating-bar-top{width:80%;height:10px;position:absolute;z-index:1;overflow:hidden}#lt-yantr .rating-bar .rating-bar-top span{background-color:#00aeef}#lt-yantr .rating-bar .rating-bar-bottom span{background-color:#ddd}#lt-yantr .review-breakdown .title{display:block;font-weight:600;color:#101f30}#lt-yantr .review-breakdown ul{color:#666;list-style:none;margin-bottom:0}#lt-yantr .review-breakdown ul li{float:left;width:100%;margin-top:10px;display:flex}#lt-yantr .review-breakdown ul:after{content:"";display:block;clear:both}#lt-yantr .review-breakdown .star-value{line-height:1.6em;width:55px;float:left}#lt-yantr .review-breakdown .breakdown-bar{width:80%;height:10px;float:left;margin:7px 15px 0 0;background:#e1e1e1}@media (max-width:480px){#lt-yantr .review-breakdown .breakdown-bar{margin-right:10px}}#lt-yantr .review-breakdown .breakdown-bar>div{background:#08c177;height:10px}#lt-yantr .review-breakdown .review-count{width:50px;float:right}#lt-yantr .disclosure-link{font-size:13px;line-height:normal;margin-top:10px;display:inline-block}#lt-yantr .container-width{max-width:1140px;margin:0 auto}#lt-yantr .modal-mask{font-family:inherit;position:fixed;z-index:9998;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.8);transition:opacity .3s ease;overflow-x:hidden;overflow-y:auto}#lt-yantr .modal-mask.modal-leave-active{overflow-y:hidden}#lt-yantr .modal-wrapper{text-align:left;max-width:700px;margin:0 auto;position:relative;white-space:normal;text-transform:none}#lt-yantr .modal-container{background:#fff;margin:30px 15px;overflow:auto;border-radius:3px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease}@media (max-width:380px){#lt-yantr .modal-container{margin:10px}}#lt-yantr .modal-close{font-size:22px;font-weight:600;color:#000;background:transparent;opacity:.2;text-align:center;line-height:20px;float:right;cursor:pointer;transition:all .3s;position:absolute;z-index:9999;top:15px;right:20px}@media (max-width:767px){#lt-yantr .modal-close{top:10px;right:15px}}@media (max-width:380px){#lt-yantr .modal-close{top:5px;right:10px}}#lt-yantr .modal-close:hover{color:#000;opacity:.8}#lt-yantr .modal-body{color:#666;padding:20px 30px}@media (max-width:767px){#lt-yantr .modal-body{padding:20px}}@media (max-width:380px){#lt-yantr .modal-body{padding:15px}}#lt-yantr .modal-body h3.title{border-bottom:1px solid #eee;margin-bottom:25px;padding:0 15px 15px 0}@media (max-width:480px){#lt-yantr .modal-body h3.title{font-size:1.6em}}#lt-yantr .modal-body .term{border-bottom:1px solid #e5e5e5;margin-bottom:15px;padding-bottom:15px}#lt-yantr .modal-body .term h1{font-family:Lato,Arial,Sans-Serif;font-size:27px;font-weight:400;display:inline-block;width:90%;margin:0}#lt-yantr .modal-body .content-navigation-ahead{text-align:right;border-top:1px solid #e5e5e5;padding-top:5px}#lt-yantr .modal-body .content-navigation-ahead a:after{content:"\\203A\\203A";color:#00aeef;margin-left:10px;font-size:27px;position:relative;top:2px;font-weight:300;transition:all .3s}#lt-yantr .modal-body .content-navigation-ahead a:hover:after{color:#2f86d4;margin-left:5px}#lt-yantr .modal-body .glossary-details-section{font-size:14px;text-transform:none;white-space:normal}#lt-yantr .modal-body .glossary-details-section p{margin-bottom:1.5em}#lt-yantr .modal-body .glossary-details-section h2{font-size:20px;font-family:Lato,Arial,Sans-Serif;margin:20px 0 10px}#lt-yantr .modal-body .glossary-details-section ul{line-height:1.7em;margin-left:20px;margin-bottom:0;padding-top:0!important;padding-left:0}#lt-yantr .modal-body .glossary-details-section ul li{font-size:1em;list-style:disc;margin:0;padding:0 0 .5em}#lt-yantr .modal-body .glossary-details-section .detail{line-height:1.7em;color:#101f30}#lt-yantr .modal-body .block label{display:inline-block;width:140px;text-align:right}#lt-yantr .modal-enter,#lt-yantr .modal-leave-active{opacity:0}#lt-yantr .modal-enter .modal-container,#lt-yantr .modal-leave-active .modal-container{-webkit-transform:scale(1.1);transform:scale(1.1)}#lt-yantr .table-border-none tr td{border:none}@media (max-width:767px){#lt-yantr .table-responsive table td,#lt-yantr .table-responsive table th{white-space:nowrap}}#lt-yantr .table-responsive .table-striped tr:nth-child(odd){background:#fff}#lt-yantr .table-responsive .table-striped tr:nth-child(2n){background:#f1f3f3}@media (max-width:480px){#lt-yantr .hidden-xxs{display:none}}@media (min-width:481px){#lt-yantr .visible-xxs{display:none}}#lt-yantr .loader{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2;text-align:center}#lt-yantr .loader img{margin-top:100px;-webkit-animation:rotation 2s infinite linear;-moz-animation:rotation 2s infinite linear;-o-animation:rotation 2s infinite linear;-ms-animation:rotation 2s infinite linear;animation:rotation 2s infinite linear}#lt-yantr .loader span{display:block;margin-top:5px}#lt-yantr .bullseye-nav-down{display:block;width:70px;height:70px;background:url(' + i(n(237)) + ') 50% no-repeat;border-radius:100px;margin:0 auto;-webkit-animation:pulsate 2.5s ease-out;-webkit-animation-iteration-count:infinite;animation:pulsate 2.5s ease-out;animation-iteration-count:infinite;-webkit-animation-delay:1.5s;animation-delay:1.5s;opacity:1}#lt-yantr .checklist{list-style:none}#lt-yantr .checklist li{font-size:1.29em;line-height:1.4em;padding:0 0 20px 40px;position:relative}@media (max-width:767px){#lt-yantr .checklist li{padding-left:30px}}#lt-yantr .checklist li:before{color:#08c177;font-family:lt5;font-size:18px;line-height:0;content:"\\E981";display:inline-block;width:1.5em;position:absolute;left:0;top:10px}@media (max-width:767px){#lt-yantr .checklist li:before{font-size:14px}}#lt-yantr .yantr-bullseye{position:relative;margin-bottom:0;background-size:cover;background-position:top;padding:147px 0 80px}@media (max-width:768px){#lt-yantr .yantr-bullseye{padding:60px 0}}@media (max-width:480px){#lt-yantr .yantr-bullseye{padding:30px 0 15px}}#lt-yantr .yantr-bullseye h1,#lt-yantr .yantr-bullseye h2,#lt-yantr .yantr-bullseye h3{text-align:center;margin:0;color:#fff}#lt-yantr .yantr-bullseye h1{margin-bottom:18px}@media (max-width:480px){#lt-yantr .yantr-bullseye h1{font-size:36px;font-weight:400;margin-bottom:5px}}#lt-yantr .yantr-bullseye h3{margin-bottom:20px}@media (max-width:480px){#lt-yantr .yantr-bullseye h3{font-size:18px}}#lt-yantr .yantr-bullseye .disclosure,#lt-yantr .yantr-bullseye .disclosure a{color:hsla(0,0%,100%,.75);font-size:12px}#lt-yantr .yantr-bullseye .disclosure{list-style:none;position:absolute;right:30px;bottom:12px;margin:0}#lt-yantr .yantr-bullseye .disclosure li{display:inline-block}#lt-yantr .yantr-bullseye .disclosure li:nth-last-child(2){padding:0 5px 0 3px}#lt-yantr .yantr-bullseye .disclosure li:last-child{padding-left:5px}@media (max-width:480px){#lt-yantr .yantr-bullseye .disclosure{position:static}}#lt-yantr .yantr-bullseye .disclosure a{margin:0}#lt-yantr .yantr-bullseye .disclosure a:hover{text-decoration:underline}#lt-yantr .nav-icon3{width:25px;height:10px;transition:.5s ease-in-out;cursor:pointer;position:relative;top:15px;left:89%}#lt-yantr .nav-icon3 span{display:block;position:absolute;height:5px;width:100%;background:#fff;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}#lt-yantr .nav-icon3 span:first-child{top:0}#lt-yantr .nav-icon3 span:nth-child(2),#lt-yantr .nav-icon3 span:nth-child(3){top:9px}#lt-yantr .nav-icon3 span:nth-child(4){top:18px}#lt-yantr .nav-icon3.open span:first-child{top:18px;width:0;left:50%}#lt-yantr .nav-icon3.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#lt-yantr .nav-icon3.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}#lt-yantr .nav-icon3.open span:nth-child(4){top:18px;width:0;left:50%}#lt-yantr #chartjs-tooltip,#lt-yantr #chartjs-tooltip-payoff,#lt-yantr #tooltip-monthly-pay,#lt-yantr #tooltip-weekly-pay{opacity:1;position:absolute;background:rgba(0,0,0,.7);color:#fff;-webkit-transition:all .1s ease;transition:all .1s ease;pointer-events:none;-webkit-transform:translate(-50%);transform:translate(-50%);width:150px;padding:10px 15px}#lt-yantr #chartjs-tooltip-payoff label,#lt-yantr #chartjs-tooltip label,#lt-yantr #tooltip-monthly-pay label,#lt-yantr #tooltip-weekly-pay label{font-weight:400;font-size:12px;line-height:1.45em}#lt-yantr #chartjs-tooltip-payoff label span,#lt-yantr #chartjs-tooltip label span,#lt-yantr #tooltip-monthly-pay label span,#lt-yantr #tooltip-weekly-pay label span{font-weight:700}#lt-yantr #chartjs-tooltip-payoff h3,#lt-yantr #chartjs-tooltip h3,#lt-yantr #tooltip-monthly-pay h3,#lt-yantr #tooltip-weekly-pay h3{color:#fff;font-weight:600;margin:0}#lt-yantr #chartjs-tooltip-payoff h5,#lt-yantr #chartjs-tooltip h5,#lt-yantr #tooltip-monthly-pay h5,#lt-yantr #tooltip-weekly-pay h5{color:#fff;font-weight:600;margin-bottom:6px}#lt-yantr #chartjs-tooltip-payoff:after,#lt-yantr #chartjs-tooltip:after,#lt-yantr #tooltip-monthly-pay:after,#lt-yantr #tooltip-weekly-pay:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:rgba(0,0,0,.7) transparent transparent}#lt-yantr .full-width-border{background:#e6e6e6;width:100vw;height:2px;margin-left:-50vw;position:relative;left:50%}@media (max-width:767px){#lt-yantr .full-width-border{width:auto;margin-left:-15px;margin-right:-15px;left:0}}#lt-yantr .disclosure-block{font-style:italic;background:#f1f3f3;border:1px solid #ddd;margin-top:20px;padding:15px 20px}#lt-yantr .text-center{text-align:center}#lt-yantr .input-loader{width:100%;height:100%;right:0;top:0;left:0;bottom:0;background:hsla(0,0%,95%,.5);padding:15px}#lt-yantr .input-loader img{max-width:20px;max-height:20px;margin:0;float:right}#how-to-use-mortgage-calculator h2{margin:50px 0 20px}@media (max-width:767px){#how-to-use-mortgage-calculator h2{margin-top:30px}}.green-gradient{background-image:radial-gradient(circle at 50% 0,#08c177,#078181)}.gray-gradient{background-image:radial-gradient(circle at 50% 0,#317298,#101f30)}.float-none{float:none!important}.mt-none{margin-top:0!important}@media (max-width:767px){#kampyleButtonContainer{display:none}}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.modal-open{padding-right:17px}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.modal-open{padding-right:0}}@supports (-ms-ime-align:auto){.modal-open{padding-right:12px}}@media (max-width:480px){.col-xsm-12{width:100%}}@-webkit-keyframes rotation{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@-moz-keyframes rotation{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-o-keyframes rotation{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-ms-keyframes rotation{0%{-ms-transform:rotate(0deg)}to{-ms-transform:rotate(1turn)}}@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes pulsate{0%{transform:scale(1);-webkit-transform:scale(1);opacity:1}50%{transform:scale(.9);-webkit-transform:scale(.9);opacity:.5}to{transform:scale(1);-webkit-transform:scale(1);opacity:1}}@keyframes pulsate{0%{transform:scale(1);-webkit-transform:scale(1);opacity:1}50%{transform:scale(.9);-webkit-transform:scale(.9);opacity:.5}to{transform:scale(1);-webkit-transform:scale(1);opacity:1}}', ""])
}, function(t, e) {
    t.exports = function(t) {
        return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
    }
}, function(t, e, n) {
    t.exports = n.p + "./images/select-arrow.svg?1399346e3a3547b2da0e118f0cd76e5d"
}, function(t, e, n) {
    t.exports = n.p + "./images/nav-down.svg?c9a6c36d0eaecf9e70956309605bc406"
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    t.exports = function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 2)
    }([function(t, e, n) {
        n(7);
        var i = n(5)(n(1), n(6), null, null);
        t.exports = i.exports
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
            var t = "undefined" != typeof window && window.devicePixelRatio || 1;
            return function(e) {
                return Math.round(e * t) / t
            }
        }();
        e.default = {
            name: "VueSliderComponent",
            props: {
                width: {
                    type: [Number, String],
                    default: "auto"
                },
                height: {
                    type: [Number, String],
                    default: 6
                },
                data: {
                    type: Array,
                    default: null
                },
                dotSize: {
                    type: Number,
                    default: 16
                },
                dotWidth: {
                    type: Number,
                    required: !1
                },
                dotHeight: {
                    type: Number,
                    required: !1
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 100
                },
                interval: {
                    type: Number,
                    default: 1
                },
                show: {
                    type: Boolean,
                    default: !0
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                piecewise: {
                    type: Boolean,
                    default: !1
                },
                tooltip: {
                    type: [String, Boolean],
                    default: "always"
                },
                eventType: {
                    type: String,
                    default: "auto"
                },
                direction: {
                    type: String,
                    default: "horizontal"
                },
                reverse: {
                    type: Boolean,
                    default: !1
                },
                lazy: {
                    type: Boolean,
                    default: !1
                },
                clickable: {
                    type: Boolean,
                    default: !0
                },
                speed: {
                    type: Number,
                    default: .5
                },
                realTime: {
                    type: Boolean,
                    default: !1
                },
                stopPropagation: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: [String, Number, Array, Object],
                    default: 0
                },
                piecewiseLabel: {
                    type: Boolean,
                    default: !1
                },
                debug: {
                    type: Boolean,
                    default: !0
                },
                fixed: {
                    type: Boolean,
                    default: !1
                },
                processDragable: {
                    type: Boolean,
                    default: !1
                },
                useKeyboard: {
                    type: Boolean,
                    default: !1
                },
                actionsKeyboard: {
                    type: Array,
                    default: function() {
                        return [function(t) {
                            return t - 1
                        }, function(t) {
                            return t + 1
                        }]
                    }
                },
                sliderStyle: [Array, Object, Function],
                focusStyle: [Array, Object, Function],
                tooltipDir: [Array, String],
                formatter: [String, Function],
                piecewiseStyle: Object,
                piecewiseActiveStyle: Object,
                processStyle: Object,
                bgStyle: Object,
                tooltipStyle: [Array, Object, Function],
                labelStyle: Object,
                labelActiveStyle: Object
            },
            data: function() {
                return {
                    flag: !1,
                    keydownFlag: null,
                    focusFlag: !1,
                    processFlag: !1,
                    processSign: null,
                    size: 0,
                    fixedValue: 0,
                    focusSlider: 0,
                    currentValue: 0,
                    currentSlider: 0,
                    isComponentExists: !0
                }
            },
            computed: {
                dotWidthVal: function() {
                    return "number" == typeof this.dotWidth ? this.dotWidth : this.dotSize
                },
                dotHeightVal: function() {
                    return "number" == typeof this.dotHeight ? this.dotHeight : this.dotSize
                },
                flowDirection: function() {
                    return "vue-slider-" + this.direction + (this.reverse ? "-reverse" : "")
                },
                tooltipDirection: function() {
                    var t = this.tooltipDir || ("vertical" === this.direction ? "left" : "top");
                    return Array.isArray(t) ? this.isRange ? t : t[1] : this.isRange ? [t, t] : t
                },
                tooltipStatus: function() {
                    return "hover" === this.tooltip && this.flag ? "vue-slider-always" : this.tooltip ? "vue-slider-" + this.tooltip : ""
                },
                tooltipClass: function() {
                    return ["vue-slider-tooltip-" + this.tooltipDirection, "vue-slider-tooltip"]
                },
                isDisabled: function() {
                    return "none" === this.eventType || this.disabled
                },
                disabledClass: function() {
                    return this.disabled ? "vue-slider-disabled" : ""
                },
                stateClass: function() {
                    return {
                        "vue-slider-state-process-drag": this.processFlag,
                        "vue-slider-state-drag": this.flag && !this.processFlag && !this.keydownFlag,
                        "vue-slider-state-focus": this.focusFlag
                    }
                },
                isRange: function() {
                    return Array.isArray(this.value)
                },
                slider: function() {
                    return this.isRange ? [this.$refs.dot0, this.$refs.dot1] : this.$refs.dot
                },
                minimum: function() {
                    return this.data ? 0 : this.min
                },
                val: {
                    get: function() {
                        return this.data ? this.isRange ? [this.data[this.currentValue[0]], this.data[this.currentValue[1]]] : this.data[this.currentValue] : this.currentValue
                    },
                    set: function(t) {
                        if (this.data)
                            if (this.isRange) {
                                var e = this.data.indexOf(t[0]),
                                    n = this.data.indexOf(t[1]);
                                e > -1 && n > -1 && (this.currentValue = [e, n])
                            } else {
                                var i = this.data.indexOf(t);
                                i > -1 && (this.currentValue = i)
                            } else this.currentValue = t
                    }
                },
                currentIndex: function() {
                    return this.isRange ? this.data ? this.currentValue : [this.getIndexByValue(this.currentValue[0]), this.getIndexByValue(this.currentValue[1])] : this.getIndexByValue(this.currentValue)
                },
                indexRange: function() {
                    return this.isRange ? this.currentIndex : [0, this.currentIndex]
                },
                maximum: function() {
                    return this.data ? this.data.length - 1 : this.max
                },
                multiple: function() {
                    var t = ("" + this.interval).split(".")[1];
                    return t ? Math.pow(10, t.length) : 1
                },
                spacing: function() {
                    return this.data ? 1 : this.interval
                },
                total: function() {
                    return this.data ? this.data.length - 1 : (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) != 0 && this.printError("Prop[interval] is illegal, Please make sure that the interval can be divisible"), (this.maximum - this.minimum) / this.interval)
                },
                gap: function() {
                    return this.size / this.total
                },
                position: function() {
                    return this.isRange ? [(this.currentValue[0] - this.minimum) / this.spacing * this.gap, (this.currentValue[1] - this.minimum) / this.spacing * this.gap] : (this.currentValue - this.minimum) / this.spacing * this.gap
                },
                limit: function() {
                    return this.isRange ? this.fixed ? [
                        [0, (this.maximum - this.fixedValue * this.spacing) / this.spacing * this.gap],
                        [(this.minimum + this.fixedValue * this.spacing) / this.spacing * this.gap, this.size]
                    ] : [
                        [0, this.position[1]],
                        [this.position[0], this.size]
                    ] : [0, this.size]
                },
                valueLimit: function() {
                    return this.isRange ? this.fixed ? [
                        [this.minimum, this.maximum - this.fixedValue * this.spacing],
                        [this.minimum + this.fixedValue * this.spacing, this.maximum]
                    ] : [
                        [this.minimum, this.currentValue[1]],
                        [this.currentValue[0], this.maximum]
                    ] : [this.minimum, this.maximum]
                },
                idleSlider: function() {
                    return 0 === this.currentSlider ? 1 : 0
                },
                wrapStyles: function() {
                    return "vertical" === this.direction ? {
                        height: "number" == typeof this.height ? this.height + "px" : this.height,
                        padding: this.dotHeightVal / 2 + "px " + this.dotWidthVal / 2 + "px"
                    } : {
                        width: "number" == typeof this.width ? this.width + "px" : this.width,
                        padding: this.dotHeightVal / 2 + "px " + this.dotWidthVal / 2 + "px"
                    }
                },
                sliderStyles: function() {
                    return Array.isArray(this.sliderStyle) ? this.isRange ? this.sliderStyle : this.sliderStyle[1] : "function" == typeof this.sliderStyle ? this.sliderStyle(this.val, this.currentIndex) : this.isRange ? [this.sliderStyle, this.sliderStyle] : this.sliderStyle
                },
                focusStyles: function() {
                    return Array.isArray(this.focusStyle) ? this.isRange ? this.focusStyle : this.focusStyle[1] : "function" == typeof this.focusStyle ? this.focusStyle(this.val, this.currentIndex) : this.isRange ? [this.focusStyle, this.focusStyle] : this.focusStyle
                },
                tooltipStyles: function() {
                    return Array.isArray(this.tooltipStyle) ? this.isRange ? this.tooltipStyle : this.tooltipStyle[1] : "function" == typeof this.tooltipStyle ? this.tooltipStyle(this.val, this.currentIndex) : this.isRange ? [this.tooltipStyle, this.tooltipStyle] : this.tooltipStyle
                },
                elemStyles: function() {
                    return "vertical" === this.direction ? {
                        width: this.width + "px",
                        height: "100%"
                    } : {
                        height: this.height + "px"
                    }
                },
                dotStyles: function() {
                    return "vertical" === this.direction ? {
                        width: this.dotWidthVal + "px",
                        height: this.dotHeightVal + "px",
                        left: -(this.dotWidthVal - this.width) / 2 + "px"
                    } : {
                        width: this.dotWidthVal + "px",
                        height: this.dotHeightVal + "px",
                        top: -(this.dotHeightVal - this.height) / 2 + "px"
                    }
                },
                piecewiseDotStyle: function() {
                    return "vertical" === this.direction ? {
                        width: this.width + "px",
                        height: this.width + "px"
                    } : {
                        width: this.height + "px",
                        height: this.height + "px"
                    }
                },
                piecewiseDotWrap: function() {
                    if (!this.piecewise && !this.piecewiseLabel) return !1;
                    for (var t = [], e = 0; e <= this.total; e++) {
                        var n = "vertical" === this.direction ? {
                                bottom: this.gap * e - this.width / 2 + "px",
                                left: 0
                            } : {
                                left: this.gap * e - this.height / 2 + "px",
                                top: 0
                            },
                            i = this.reverse ? this.total - e : e,
                            r = this.data ? this.data[i] : this.spacing * i + this.min;
                        t.push({
                            style: n,
                            label: this.formatter ? this.formatting(r) : r,
                            inRange: i >= this.indexRange[0] && i <= this.indexRange[1]
                        })
                    }
                    return t
                }
            },
            watch: {
                value: function(t) {
                    this.flag || this.setValue(t, !0)
                },
                max: function(t) {
                    if (t < this.min) return this.printError("The maximum value can not be less than the minimum value.");
                    var e = this.limitValue(this.val);
                    this.setValue(e), this.refresh()
                },
                min: function(t) {
                    if (t > this.max) return this.printError("The minimum value can not be greater than the maximum value.");
                    var e = this.limitValue(this.val);
                    this.setValue(e), this.refresh()
                },
                show: function(t) {
                    var e = this;
                    t && !this.size && this.$nextTick(function() {
                        e.refresh()
                    })
                },
                fixed: function() {
                    this.computedFixedValue()
                }
            },
            methods: {
                bindEvents: function() {
                    document.addEventListener("touchmove", this.moving, {
                        passive: !1
                    }), document.addEventListener("touchend", this.moveEnd, {
                        passive: !1
                    }), document.addEventListener("mousedown", this.blurSlider), document.addEventListener("mousemove", this.moving), document.addEventListener("mouseup", this.moveEnd), document.addEventListener("mouseleave", this.moveEnd), document.addEventListener("keydown", this.handleKeydown), document.addEventListener("keyup", this.handleKeyup), window.addEventListener("resize", this.refresh)
                },
                unbindEvents: function() {
                    document.removeEventListener("touchmove", this.moving), document.removeEventListener("touchend", this.moveEnd), document.removeEventListener("mousedown", this.blurSlider), document.removeEventListener("mousemove", this.moving), document.removeEventListener("mouseup", this.moveEnd), document.removeEventListener("mouseleave", this.moveEnd), document.removeEventListener("keydown", this.handleKeydown), document.removeEventListener("keyup", this.handleKeyup), window.removeEventListener("resize", this.refresh)
                },
                handleKeydown: function(t) {
                    if (!this.useKeyboard || !this.focusFlag) return !1;
                    switch (t.keyCode) {
                        case 37:
                        case 40:
                            t.preventDefault(), this.keydownFlag = !0, this.flag = !0, this.changeFocusSlider(this.actionsKeyboard[0]);
                            break;
                        case 38:
                        case 39:
                            t.preventDefault(), this.keydownFlag = !0, this.flag = !0, this.changeFocusSlider(this.actionsKeyboard[1])
                    }
                },
                handleKeyup: function() {
                    this.keydownFlag && (this.keydownFlag = !1, this.flag = !1)
                },
                changeFocusSlider: function(t) {
                    var e = this;
                    if (this.isRange) {
                        var n = this.currentIndex.map(function(n, i) {
                            if (i === e.focusSlider || e.fixed) {
                                var r = t(n),
                                    a = e.fixed ? e.valueLimit[i] : [e.minimum, e.maximum];
                                if (r <= a[1] && r >= a[0]) return r
                            }
                            return n
                        });
                        n[0] > n[1] && (this.focusSlider = 0 === this.focusSlider ? 1 : 0, n = n.reverse()), this.setIndex(n)
                    } else this.setIndex(t(this.currentIndex))
                },
                blurSlider: function(t) {
                    var e = this.isRange ? this.$refs["dot" + this.focusSlider] : this.$refs.dot;
                    if (!e || e === t.target) return !1;
                    this.focusFlag = !1
                },
                formatting: function(t) {
                    return "string" == typeof this.formatter ? this.formatter.replace(/\{value\}/, t) : this.formatter(t)
                },
                getPos: function(t) {
                    return this.realTime && this.getStaticData(), "vertical" === this.direction ? this.reverse ? t.pageY - this.offset : this.size - (t.pageY - this.offset) : this.reverse ? this.size - (t.clientX - this.offset) : t.clientX - this.offset
                },
                processClick: function(t) {
                    this.fixed && t.stopPropagation()
                },
                wrapClick: function(t) {
                    if (this.isDisabled || !this.clickable || this.processFlag) return !1;
                    var e = this.getPos(t);
                    this.isRange && (this.currentSlider = e > (this.position[1] - this.position[0]) / 2 + this.position[0] ? 1 : 0), this.setValueOnPos(e)
                },
                moveStart: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments[2];
                    if (this.isDisabled) return !1;
                    if (this.stopPropagation && t.stopPropagation(), this.isRange && (this.currentSlider = e, n)) {
                        if (!this.processDragable) return !1;
                        this.processFlag = !0, this.processSign = {
                            pos: this.position,
                            start: this.getPos(t.targetTouches && t.targetTouches[0] ? t.targetTouches[0] : t)
                        }
                    }!n && this.useKeyboard && (this.focusFlag = !0, this.focusSlider = e), this.flag = !0, this.$emit("drag-start", this)
                },
                moving: function(t) {
                    if (this.stopPropagation && t.stopPropagation(), !this.flag) return !1;
                    t.preventDefault(), t.targetTouches && t.targetTouches[0] && (t = t.targetTouches[0]), this.processFlag ? (this.currentSlider = 0, this.setValueOnPos(this.processSign.pos[0] + this.getPos(t) - this.processSign.start, !0), this.currentSlider = 1, this.setValueOnPos(this.processSign.pos[1] + this.getPos(t) - this.processSign.start, !0)) : this.setValueOnPos(this.getPos(t), !0)
                },
                moveEnd: function(t) {
                    var e = this;
                    if (this.stopPropagation && t.stopPropagation(), !this.flag) return !1;
                    this.$emit("drag-end", this), this.lazy && this.isDiff(this.val, this.value) && this.syncValue(), this.flag = !1, window.setTimeout(function() {
                        e.processFlag = !1
                    }, 0), this.setPosition()
                },
                setValueOnPos: function(t, e) {
                    var n = this.isRange ? this.limit[this.currentSlider] : this.limit,
                        i = this.isRange ? this.valueLimit[this.currentSlider] : this.valueLimit;
                    if (t >= n[0] && t <= n[1]) {
                        this.setTransform(t);
                        var r = this.getValueByIndex(Math.round(t / this.gap));
                        this.setCurrentValue(r, e), this.isRange && this.fixed && (this.setTransform(t + this.fixedValue * this.gap * (0 === this.currentSlider ? 1 : -1), !0), this.setCurrentValue(r + this.fixedValue * this.spacing * (0 === this.currentSlider ? 1 : -1), e, !0))
                    } else t < n[0] ? (this.setTransform(n[0]), this.setCurrentValue(i[0]), this.isRange && this.fixed ? (this.setTransform(this.limit[this.idleSlider][0], !0), this.setCurrentValue(this.valueLimit[this.idleSlider][0], e, !0)) : this.fixed || 1 !== this.currentSlider || (this.focusSlider = 0, this.currentSlider = 0)) : (this.setTransform(n[1]), this.setCurrentValue(i[1]), this.isRange && this.fixed ? (this.setTransform(this.limit[this.idleSlider][1], !0), this.setCurrentValue(this.valueLimit[this.idleSlider][1], e, !0)) : this.fixed || 0 !== this.currentSlider || (this.focusSlider = 1, this.currentSlider = 1))
                },
                isDiff: function(t, e) {
                    return Object.prototype.toString.call(t) !== Object.prototype.toString.call(e) || (Array.isArray(t) && t.length === e.length ? t.some(function(t, n) {
                        return t !== e[n]
                    }) : t !== e)
                },
                setCurrentValue: function(t, e, n) {
                    var i = n ? this.idleSlider : this.currentSlider;
                    if (t < this.minimum || t > this.maximum) return !1;
                    this.isRange ? this.isDiff(this.currentValue[i], t) && (this.currentValue.splice(i, 1, t), this.lazy && this.flag || this.syncValue()) : this.isDiff(this.currentValue, t) && (this.currentValue = t, this.lazy && this.flag || this.syncValue()), e || this.setPosition()
                },
                getValueByIndex: function(t) {
                    return (this.spacing * this.multiple * t + this.minimum * this.multiple) / this.multiple
                },
                getIndexByValue: function(t) {
                    return (t - this.minimum) * this.multiple / (this.spacing * this.multiple)
                },
                setIndex: function(t) {
                    if (Array.isArray(t) && this.isRange) {
                        var e = void 0;
                        e = this.data ? [this.data[t[0]], this.data[t[1]]] : [this.getValueByIndex(t[0]), this.getValueByIndex(t[1])], this.setValue(e)
                    } else t = this.getValueByIndex(t), this.isRange && (this.currentSlider = t > (this.currentValue[1] - this.currentValue[0]) / 2 + this.currentValue[0] ? 1 : 0), this.setCurrentValue(t)
                },
                setValue: function(t, e, n) {
                    var i = this;
                    if (this.isDiff(this.val, t)) {
                        var r = this.limitValue(t);
                        this.val = this.isRange ? r.concat() : r, this.computedFixedValue(), this.syncValue(e)
                    }
                    this.$nextTick(function() {
                        return i.setPosition(n)
                    })
                },
                computedFixedValue: function() {
                    if (!this.fixed) return this.fixedValue = 0, !1;
                    this.fixedValue = this.currentIndex[1] - this.currentIndex[0]
                },
                setPosition: function(t) {
                    this.flag || this.setTransitionTime(void 0 === t ? this.speed : t), this.isRange ? (this.setTransform(this.position[0], 1 === this.currentSlider), this.setTransform(this.position[1], 0 === this.currentSlider)) : this.setTransform(this.position), this.flag || this.setTransitionTime(0)
                },
                setTransform: function(t, e) {
                    var n = e ? this.idleSlider : this.currentSlider,
                        r = i(("vertical" === this.direction ? this.dotHeightVal / 2 - t : t - this.dotWidthVal / 2) * (this.reverse ? -1 : 1)),
                        a = "vertical" === this.direction ? "translateY(" + r + "px)" : "translateX(" + r + "px)",
                        o = this.fixed ? this.fixedValue * this.gap + "px" : (0 === n ? this.position[1] - t : t - this.position[0]) + "px",
                        c = this.fixed ? (0 === n ? t : t - this.fixedValue * this.gap) + "px" : (0 === n ? t : this.position[0]) + "px";
                    this.isRange ? (this.slider[n].style.transform = a, this.slider[n].style.WebkitTransform = a, this.slider[n].style.msTransform = a, "vertical" === this.direction ? (this.$refs.process.style.height = o, this.$refs.process.style[this.reverse ? "top" : "bottom"] = c) : (this.$refs.process.style.width = o, this.$refs.process.style[this.reverse ? "right" : "left"] = c)) : (this.slider.style.transform = a, this.slider.style.WebkitTransform = a, this.slider.style.msTransform = a, "vertical" === this.direction ? (this.$refs.process.style.height = t + "px", this.$refs.process.style[this.reverse ? "top" : "bottom"] = 0) : (this.$refs.process.style.width = t + "px", this.$refs.process.style[this.reverse ? "right" : "left"] = 0))
                },
                setTransitionTime: function(t) {
                    if (t || this.$refs.process.offsetWidth, this.isRange) {
                        for (var e = 0; e < this.slider.length; e++) this.slider[e].style.transitionDuration = t + "s", this.slider[e].style.WebkitTransitionDuration = t + "s";
                        this.$refs.process.style.transitionDuration = t + "s", this.$refs.process.style.WebkitTransitionDuration = t + "s"
                    } else this.slider.style.transitionDuration = t + "s", this.slider.style.WebkitTransitionDuration = t + "s", this.$refs.process.style.transitionDuration = t + "s", this.$refs.process.style.WebkitTransitionDuration = t + "s"
                },
                limitValue: function(t) {
                    var e = this;
                    if (this.data) return t;
                    var n = function(n) {
                        return n < e.min ? (e.printError("The value of the slider is " + t + ", the minimum value is " + e.min + ", the value of this slider can not be less than the minimum value"), e.min) : n > e.max ? (e.printError("The value of the slider is " + t + ", the maximum value is " + e.max + ", the value of this slider can not be greater than the maximum value"), e.max) : n
                    };
                    return this.isRange ? t.map(function(t) {
                        return n(t)
                    }) : n(t)
                },
                syncValue: function(t) {
                    var e = this.isRange ? this.val.concat() : this.val;
                    this.$emit("input", e), t || this.$emit("callback", e)
                },
                getValue: function() {
                    return this.val
                },
                getIndex: function() {
                    return this.currentIndex
                },
                getStaticData: function() {
                    this.$refs.elem && (this.size = "vertical" === this.direction ? this.$refs.elem.offsetHeight : this.$refs.elem.offsetWidth, this.offset = "vertical" === this.direction ? this.$refs.elem.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop : this.$refs.elem.getBoundingClientRect().left)
                },
                refresh: function() {
                    this.$refs.elem && (this.getStaticData(), this.computedFixedValue(), this.setPosition())
                },
                printError: function(t) {
                    this.debug && console.error("[VueSlider error]: " + t)
                }
            },
            mounted: function() {
                var t = this;
                if (this.isComponentExists = !0, "undefined" == typeof window || "undefined" == typeof document) return this.printError("window or document is undefined, can not be initialization.");
                this.$nextTick(function() {
                    t.isComponentExists && (t.getStaticData(), t.setValue(t.limitValue(t.value), !0, 0), t.bindEvents())
                })
            },
            beforeDestroy: function() {
                this.isComponentExists = !1, this.unbindEvents()
            }
        }
    }, function(t, e, n) {
        "use strict";
        var i = n(0);
        t.exports = i
    }, function(t, e, n) {
        (t.exports = n(4)()).push([t.i, '.vue-slider-component{position:relative;box-sizing:border-box;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none}.vue-slider-component.vue-slider-disabled{opacity:.5;cursor:not-allowed}.vue-slider-component.vue-slider-has-label{margin-bottom:15px}.vue-slider-component.vue-slider-disabled .vue-slider-dot{cursor:not-allowed}.vue-slider-component .vue-slider{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-component .vue-slider:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-component .vue-slider-process{position:absolute;border-radius:15px;background-color:#E93E51;transition:all 0s;z-index:1}.vue-slider-component .vue-slider-process.vue-slider-process-dragable{cursor:pointer;z-index:3}.vue-slider-component.vue-slider-horizontal .vue-slider-process{width:0;height:100%;top:0;left:0;will-change:width}.vue-slider-component.vue-slider-vertical .vue-slider-process{width:100%;height:0;bottom:0;left:0;will-change:height}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-process{width:0;height:100%;top:0;right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-process{width:100%;height:0;top:0;left:0}.vue-slider-component .vue-slider-dot{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);transition:all 0s;will-change:transform;cursor:pointer;z-index:4}.vue-slider-component .vue-slider-dot.vue-slider-dot-focus{box-shadow:0 0 2px 1px #3498db}.vue-slider-component.vue-slider-horizontal .vue-slider-dot{left:0}.vue-slider-component.vue-slider-vertical .vue-slider-dot{bottom:0}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-dot{right:0}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-dot{top:0}.vue-slider-component .vue-slider-tooltip-wrap{display:none;position:absolute;z-index:9}.vue-slider-component .vue-slider-tooltip{display:block;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #3498db;background-color:#3498db}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-top .vue-slider-tooltip:before{content:"";position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-top-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before{content:"";position:absolute;top:-10px;left:50%;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-bottom-color:inherit;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-left .vue-slider-tooltip:before{content:"";position:absolute;top:50%;right:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-left-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-right .vue-slider-tooltip:before{content:"";position:absolute;top:50%;left:-10px;width:0;height:0;border:5px solid transparent;border:6px solid transparent\\0;border-right-color:inherit;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-component .vue-slider-dot.vue-slider-hover:hover .vue-slider-tooltip-wrap{display:block}.vue-slider-component .vue-slider-dot.vue-slider-always .vue-slider-tooltip-wrap{display:block!important}.vue-slider-component .vue-slider-piecewise{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-component .vue-slider-piecewise-item{position:absolute;width:8px;height:8px}.vue-slider-component .vue-slider-piecewise-dot{position:absolute;left:50%;top:50%;width:100%;height:100%;display:inline-block;background-color:rgba(0,0,0,.16);border-radius:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:2;transition:all .3s}.vue-slider-component .vue-slider-piecewise-item:first-child .vue-slider-piecewise-dot,.vue-slider-component .vue-slider-piecewise-item:last-child .vue-slider-piecewise-dot{visibility:hidden}.vue-slider-component.vue-slider-horizontal-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-horizontal .vue-slider-piecewise-label{position:absolute;display:inline-block;top:100%;left:50%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(-50%,8px);transform:translate(-50%,8px);visibility:visible}.vue-slider-component.vue-slider-vertical-reverse .vue-slider-piecewise-label,.vue-slider-component.vue-slider-vertical .vue-slider-piecewise-label{position:absolute;display:inline-block;top:50%;left:100%;white-space:nowrap;font-size:12px;color:#333;-webkit-transform:translate(8px,-50%);transform:translate(8px,-50%);visibility:visible}.vue-slider-component .vue-slider-sr-only{clip:rect(1px,1px,1px,1px);height:1px;width:1px;overflow:hidden;position:absolute!important}', ""])
    }, function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var a = this[r][0];
                    "number" == typeof a && (i[a] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var o = e[r];
                    "number" == typeof o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
                }
            }, t
        }
    }, function(t, e) {
        t.exports = function(t, e, n, i) {
            var r, a = t = t || {},
                o = typeof t.default;
            "object" !== o && "function" !== o || (r = t, a = t.default);
            var c = "function" == typeof a ? a.options : a;
            if (e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns), n && (c._scopeId = n), i) {
                var s = Object.create(c.computed || null);
                Object.keys(i).forEach(function(t) {
                    var e = i[t];
                    s[t] = function() {
                        return e
                    }
                }), c.computed = s
            }
            return {
                esModule: r,
                exports: a,
                options: c
            }
        }
    }, function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    ref: "wrap",
                    class: ["vue-slider-component", t.flowDirection, t.disabledClass, t.stateClass, {
                        "vue-slider-has-label": t.piecewiseLabel
                    }],
                    style: t.wrapStyles,
                    on: {
                        click: t.wrapClick
                    }
                }, [n("div", {
                    ref: "elem",
                    staticClass: "vue-slider",
                    style: [t.elemStyles, t.bgStyle],
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [t.isRange ? [n("div", {
                    ref: "dot0",
                    class: [t.tooltipStatus, "vue-slider-dot", {
                        "vue-slider-dot-focus": t.focusFlag && 0 === t.focusSlider
                    }],
                    style: [t.dotStyles, t.sliderStyles[0], t.focusFlag && 0 === t.focusSlider ? t.focusStyles[0] : null],
                    on: {
                        mousedown: function(e) {
                            t.moveStart(e, 0)
                        },
                        touchstart: function(e) {
                            t.moveStart(e, 0)
                        }
                    }
                }, [n("span", {
                    class: ["vue-slider-tooltip-" + t.tooltipDirection[0], "vue-slider-tooltip-wrap"]
                }, [t._t("tooltip", [n("span", {
                    staticClass: "vue-slider-tooltip",
                    style: t.tooltipStyles[0]
                }, [t._v(t._s(t.formatter ? t.formatting(t.val[0]) : t.val[0]))])], {
                    value: t.val[0],
                    index: 0
                })], 2)]), t._v(" "), n("div", {
                    ref: "dot1",
                    class: [t.tooltipStatus, "vue-slider-dot", {
                        "vue-slider-dot-focus": t.focusFlag && 1 === t.focusSlider
                    }],
                    style: [t.dotStyles, t.sliderStyles[1], t.focusFlag && 1 === t.focusSlider ? t.focusStyles[1] : null],
                    on: {
                        mousedown: function(e) {
                            t.moveStart(e, 1)
                        },
                        touchstart: function(e) {
                            t.moveStart(e, 1)
                        }
                    }
                }, [n("span", {
                    class: ["vue-slider-tooltip-" + t.tooltipDirection[1], "vue-slider-tooltip-wrap"]
                }, [t._t("tooltip", [n("span", {
                    staticClass: "vue-slider-tooltip",
                    style: t.tooltipStyles[1]
                }, [t._v(t._s(t.formatter ? t.formatting(t.val[1]) : t.val[1]))])], {
                    value: t.val[1],
                    index: 1
                })], 2)])] : [n("div", {
                    ref: "dot",
                    class: [t.tooltipStatus, "vue-slider-dot", {
                        "vue-slider-dot-focus": t.focusFlag && 0 === t.focusSlider
                    }],
                    style: [t.dotStyles, t.sliderStyles, t.focusFlag && 0 === t.focusSlider ? t.focusStyles : null],
                    on: {
                        mousedown: t.moveStart,
                        touchstart: t.moveStart
                    }
                }, [n("span", {
                    class: ["vue-slider-tooltip-" + t.tooltipDirection, "vue-slider-tooltip-wrap"]
                }, [t._t("tooltip", [n("span", {
                    staticClass: "vue-slider-tooltip",
                    style: t.tooltipStyles
                }, [t._v(t._s(t.formatter ? t.formatting(t.val) : t.val))])], {
                    value: t.val
                })], 2)])], t._v(" "), n("ul", {
                    staticClass: "vue-slider-piecewise"
                }, t._l(t.piecewiseDotWrap, function(e, i) {
                    return n("li", {
                        key: i,
                        staticClass: "vue-slider-piecewise-item",
                        style: [t.piecewiseDotStyle, e.style]
                    }, [t._t("piecewise", [t.piecewise ? n("span", {
                        staticClass: "vue-slider-piecewise-dot",
                        style: [t.piecewiseStyle, e.inRange ? t.piecewiseActiveStyle : null]
                    }) : t._e()], {
                        label: e.label,
                        index: i,
                        first: 0 === i,
                        last: i === t.piecewiseDotWrap.length - 1,
                        active: e.inRange
                    }), t._v(" "), t._t("label", [t.piecewiseLabel ? n("span", {
                        staticClass: "vue-slider-piecewise-label",
                        style: [t.labelStyle, e.inRange ? t.labelActiveStyle : null]
                    }, [t._v("\n            " + t._s(e.label) + "\n          ")]) : t._e()], {
                        label: e.label,
                        index: i,
                        first: 0 === i,
                        last: i === t.piecewiseDotWrap.length - 1,
                        active: e.inRange
                    })], 2)
                })), t._v(" "), n("div", {
                    ref: "process",
                    class: ["vue-slider-process", {
                        "vue-slider-process-dragable": t.isRange && t.processDragable
                    }],
                    style: t.processStyle,
                    on: {
                        click: t.processClick,
                        mousedown: function(e) {
                            t.moveStart(e, 0, !0)
                        },
                        touchstart: function(e) {
                            t.moveStart(e, 0, !0)
                        }
                    }
                })], 2), t._v(" "), t.isRange || t.data ? t._e() : n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.val,
                        expression: "val"
                    }],
                    staticClass: "vue-slider-sr-only",
                    attrs: {
                        type: "range",
                        min: t.min,
                        max: t.max
                    },
                    domProps: {
                        value: t.val
                    },
                    on: {
                        __r: function(e) {
                            t.val = e.target.value
                        }
                    }
                })])
            },
            staticRenderFns: []
        }
    }, function(t, e, n) {
        var i = n(3);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]), i.locals && (t.exports = i.locals), n(8)("743d98f5", i, !0)
    }, function(t, e, n) {
        function i(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e],
                    i = l[n.id];
                if (i) {
                    i.refs++;
                    for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) i.parts.push(a(n.parts[r]));
                    i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                } else {
                    for (var o = [], r = 0; r < n.parts.length; r++) o.push(a(n.parts[r]));
                    l[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }

        function r() {
            var t = document.createElement("style");
            return t.type = "text/css", p.appendChild(t), t
        }

        function a(t) {
            var e, n, i = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
            if (i) {
                if (h) return f;
                i.parentNode.removeChild(i)
            }
            if (x) {
                var a = d++;
                i = u || (u = r()), e = o.bind(null, i, a, !1), n = o.bind(null, i, a, !0)
            } else i = r(), e = function(t, e) {
                var n = e.css,
                    i = e.media,
                    r = e.sourceMap;
                if (i && t.setAttribute("media", i), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, i), n = function() {
                i.parentNode.removeChild(i)
            };
            return e(t),
                function(i) {
                    if (i) {
                        if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return;
                        e(t = i)
                    } else n()
                }
        }

        function o(t, e, n, i) {
            var r = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = m(e, r);
            else {
                var a = document.createTextNode(r),
                    o = t.childNodes;
                o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
            }
        }
        var c = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var s = n(9),
            l = {},
            p = c && (document.head || document.getElementsByTagName("head")[0]),
            u = null,
            d = 0,
            h = !1,
            f = function() {},
            x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function(t, e, n) {
            h = n;
            var r = s(t, e);
            return i(r),
                function(e) {
                    for (var n = [], a = 0; a < r.length; a++) {
                        var o = r[a],
                            c = l[o.id];
                        c.refs--, n.push(c)
                    }
                    e ? i(r = s(t, e)) : r = [];
                    for (var a = 0; a < n.length; a++) {
                        var c = n[a];
                        if (0 === c.refs) {
                            for (var p = 0; p < c.parts.length; p++) c.parts[p]();
                            delete l[c.id]
                        }
                    }
                }
        };
        var m = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function(t, e) {
        t.exports = function(t, e) {
            for (var n = [], i = {}, r = 0; r < e.length; r++) {
                var a = e[r],
                    o = a[0],
                    c = a[1],
                    s = a[2],
                    l = a[3],
                    p = {
                        id: t + ":" + r,
                        css: c,
                        media: s,
                        sourceMap: l
                    };
                i[o] ? i[o].parts.push(p) : n.push(i[o] = {
                    id: o,
                    parts: [p]
                })
            }
            return n
        }
    }])
}, function(t, e, n) {
    var i;
    t.exports = (i = n(589), function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
    }([function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(1),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i),
            a = {
                install: function(t) {
                    t.component(r.default.name, r.default)
                }
            };
        r.default.install = a.install, e.default = r.default
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3),
            r = n.n(i),
            a = n(5),
            o = n(2),
            c = o(r.a, a.a, null, null, null);
        e.default = c.exports
    }, function(t, e) {
        t.exports = function(t, e, n, i, r) {
            var a, o = t = t || {},
                c = typeof t.default;
            "object" !== c && "function" !== c || (a = t, o = t.default);
            var s, l = "function" == typeof o ? o.options : o;
            if (e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns), i && (l._scopeId = i), r ? (s = function(t) {
                    (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(r)
                }, l._ssrRegister = s) : n && (s = n), s) {
                var p = l.functional,
                    u = p ? l.render : l.beforeCreate;
                p ? l.render = function(t, e) {
                    return s.call(e), u(t, e)
                } : l.beforeCreate = u ? [].concat(u, s) : [s]
            }
            return {
                esModule: a,
                exports: o,
                options: l
            }
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(4),
            r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i);
        e.default = {
            name: "vue-chart",
            props: {
                type: {
                    required: !0,
                    type: String
                },
                data: {
                    required: !0,
                    type: [Object, Array]
                },
                options: Object,
                width: Number,
                height: Number
            },
            data: function() {
                return {
                    chart: ""
                }
            },
            watch: {
                "data.labels": function() {
                    this.chart.update()
                },
                "data.datasets": function() {
                    this.chart.update()
                }
            },
            methods: {
                createChart: function() {
                    this.chart = new r.default(this.$refs.chart, {
                        type: this.type,
                        data: this.data,
                        options: this.options
                    })
                }
            },
            mounted: function() {
                this.createChart()
            },
            beforeDestroy: function() {
                this.chart.destroy()
            }
        }
    }, function(t, e) {
        t.exports = i
    }, function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("canvas", {
                    ref: "chart",
                    attrs: {
                        width: t.width,
                        height: t.height
                    }
                })
            },
            staticRenderFns: []
        };
        e.a = i
    }]))
}, function(t, e, n) {
    var i = n(590)();
    i.helpers = n(592), n(597)(i), i.defaults = n(591), i.Element = n(603), i.elements = n(604), i.Interaction = n(609), i.layouts = n(610), i.platform = n(611), i.plugins = n(614), i.Ticks = n(615), n(616)(i), n(617)(i), n(618)(i), n(619)(i), n(620)(i), n(621)(i), n(622)(i), n(623)(i), n(624)(i), n(625)(i), n(626)(i), n(627)(i), n(630)(i), n(631)(i), n(632)(i), n(633)(i), n(634)(i), n(635)(i), n(636)(i), n(637)(i), n(638)(i), n(639)(i), n(640)(i), n(641)(i), n(642)(i), n(643)(i);
    var r = n(644);
    for (var a in r) r.hasOwnProperty(a) && i.plugins.register(r[a]);
    i.platform.initialize(), t.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = r.legend._element, i.Title = r.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
}, function(t, e, n) {
    "use strict";
    n(591)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    }), t.exports = function() {
        var t = function(t, e) {
            return this.construct(t, e), this
        };
        return t.Chart = t, t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592);
    t.exports = {
        _set: function(t, e) {
            return i.merge(this[t] || (this[t] = {}), e)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = n(593), t.exports.easing = n(594), t.exports.canvas = n(595), t.exports.options = n(596)
}, function(t, e, n) {
    "use strict";
    var i, r = {
        noop: function() {},
        uid: (i = 0, function() {
            return i++
        }),
        isNullOrUndef: function(t) {
            return null === t || void 0 === t
        },
        isArray: Array.isArray ? Array.isArray : function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        isObject: function(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t)
        },
        valueOrDefault: function(t, e) {
            return void 0 === t ? e : t
        },
        valueAtIndexOrDefault: function(t, e, n) {
            return r.valueOrDefault(r.isArray(t) ? t[e] : t, n)
        },
        callback: function(t, e, n) {
            if (t && "function" == typeof t.call) return t.apply(n, e)
        },
        each: function(t, e, n, i) {
            var a, o, c;
            if (r.isArray(t))
                if (o = t.length, i)
                    for (a = o - 1; a >= 0; a--) e.call(n, t[a], a);
                else
                    for (a = 0; a < o; a++) e.call(n, t[a], a);
            else if (r.isObject(t))
                for (o = (c = Object.keys(t)).length, a = 0; a < o; a++) e.call(n, t[c[a]], c[a])
        },
        arrayEquals: function(t, e) {
            var n, i, a, o;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, i = t.length; n < i; ++n)
                if (a = t[n], o = e[n], a instanceof Array && o instanceof Array) {
                    if (!r.arrayEquals(a, o)) return !1
                } else if (a !== o) return !1;
            return !0
        },
        clone: function(t) {
            if (r.isArray(t)) return t.map(r.clone);
            if (r.isObject(t)) {
                for (var e = {}, n = Object.keys(t), i = n.length, a = 0; a < i; ++a) e[n[a]] = r.clone(t[n[a]]);
                return e
            }
            return t
        },
        _merger: function(t, e, n, i) {
            var a = e[t],
                o = n[t];
            r.isObject(a) && r.isObject(o) ? r.merge(a, o, i) : e[t] = r.clone(o)
        },
        _mergerIf: function(t, e, n) {
            var i = e[t],
                a = n[t];
            r.isObject(i) && r.isObject(a) ? r.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = r.clone(a))
        },
        merge: function(t, e, n) {
            var i, a, o, c, s, l = r.isArray(e) ? e : [e],
                p = l.length;
            if (!r.isObject(t)) return t;
            for (i = (n = n || {}).merger || r._merger, a = 0; a < p; ++a)
                if (e = l[a], r.isObject(e))
                    for (s = 0, c = (o = Object.keys(e)).length; s < c; ++s) i(o[s], t, e, n);
            return t
        },
        mergeIf: function(t, e) {
            return r.merge(t, e, {
                merger: r._mergerIf
            })
        },
        extend: function(t) {
            for (var e = function(e, n) {
                    t[n] = e
                }, n = 1, i = arguments.length; n < i; ++n) r.each(arguments[n], e);
            return t
        },
        inherits: function(t) {
            var e = this,
                n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return e.apply(this, arguments)
                },
                i = function() {
                    this.constructor = n
                };
            return i.prototype = e.prototype, n.prototype = new i, n.extend = r.inherits, t && r.extend(n.prototype, t), n.__super__ = e.prototype, n
        }
    };
    t.exports = r, r.callCallback = r.callback, r.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n)
    }, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
}, function(t, e, n) {
    "use strict";
    var i = n(593),
        r = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return (t -= 1) * t * t + 1
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -((t -= 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return (t -= 1) * t * t * t * t + 1
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return 1 - Math.cos(t * (Math.PI / 2))
            },
            easeOutSine: function(t) {
                return Math.sin(t * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
            },
            easeOutCirc: function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    n = 0,
                    i = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - r.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            },
            easeInOutBounce: function(t) {
                return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
            }
        };
    t.exports = {
        effects: r
    }, i.easingEffects = r
}, function(t, e, n) {
    "use strict";
    var i = n(593);
    e = t.exports = {
        clear: function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        },
        roundedRect: function(t, e, n, i, r, a) {
            if (a) {
                var o = Math.min(a, i / 2),
                    c = Math.min(a, r / 2);
                t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + c), t.lineTo(e + i, n + r - c), t.quadraticCurveTo(e + i, n + r, e + i - o, n + r), t.lineTo(e + o, n + r), t.quadraticCurveTo(e, n + r, e, n + r - c), t.lineTo(e, n + c), t.quadraticCurveTo(e, n, e + o, n)
            } else t.rect(e, n, i, r)
        },
        drawPoint: function(t, e, n, i, r) {
            var a, o, c, s, l, p;
            if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
                if (!(isNaN(n) || n <= 0)) {
                    switch (e) {
                        default: t.beginPath(),
                        t.arc(i, r, n, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fill();
                        break;
                        case "triangle":
                                t.beginPath(),
                            l = (o = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2,
                            t.moveTo(i - o / 2, r + l / 3),
                            t.lineTo(i + o / 2, r + l / 3),
                            t.lineTo(i, r - 2 * l / 3),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rect":
                                p = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.fillRect(i - p, r - p, 2 * p, 2 * p),
                            t.strokeRect(i - p, r - p, 2 * p, 2 * p);
                            break;
                        case "rectRounded":
                                var u = n / Math.SQRT2,
                                d = i - u,
                                h = r - u,
                                f = Math.SQRT2 * n;t.beginPath(),
                            this.roundedRect(t, d, h, f, f, n / 2),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rectRot":
                                p = 1 / Math.SQRT2 * n,
                            t.beginPath(),
                            t.moveTo(i - p, r),
                            t.lineTo(i, r + p),
                            t.lineTo(i + p, r),
                            t.lineTo(i, r - p),
                            t.closePath(),
                            t.fill();
                            break;
                        case "cross":
                                t.beginPath(),
                            t.moveTo(i, r + n),
                            t.lineTo(i, r - n),
                            t.moveTo(i - n, r),
                            t.lineTo(i + n, r),
                            t.closePath();
                            break;
                        case "crossRot":
                                t.beginPath(),
                            c = Math.cos(Math.PI / 4) * n,
                            s = Math.sin(Math.PI / 4) * n,
                            t.moveTo(i - c, r - s),
                            t.lineTo(i + c, r + s),
                            t.moveTo(i - c, r + s),
                            t.lineTo(i + c, r - s),
                            t.closePath();
                            break;
                        case "star":
                                t.beginPath(),
                            t.moveTo(i, r + n),
                            t.lineTo(i, r - n),
                            t.moveTo(i - n, r),
                            t.lineTo(i + n, r),
                            c = Math.cos(Math.PI / 4) * n,
                            s = Math.sin(Math.PI / 4) * n,
                            t.moveTo(i - c, r - s),
                            t.lineTo(i + c, r + s),
                            t.moveTo(i - c, r + s),
                            t.lineTo(i + c, r - s),
                            t.closePath();
                            break;
                        case "line":
                                t.beginPath(),
                            t.moveTo(i - n, r),
                            t.lineTo(i + n, r),
                            t.closePath();
                            break;
                        case "dash":
                                t.beginPath(),
                            t.moveTo(i, r),
                            t.lineTo(i + n, r),
                            t.closePath()
                    }
                    t.stroke()
                }
            } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height)
        },
        clipArea: function(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
        },
        unclipArea: function(t) {
            t.restore()
        },
        lineTo: function(t, e, n, i) {
            if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
            n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y)
        }
    };
    i.clear = e.clear, i.drawRoundedRectangle = function(t) {
        t.beginPath(), e.roundedRect.apply(e, arguments), t.closePath()
    }
}, function(t, e, n) {
    "use strict";
    var i = n(593);
    t.exports = {
        toLineHeight: function(t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (t = +n[2], n[3]) {
                case "px":
                    return t;
                case "%":
                    t /= 100
            }
            return e * t
        },
        toPadding: function(t) {
            var e, n, r, a;
            return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, r = +t.bottom || 0, a = +t.left || 0) : e = n = r = a = +t || 0, {
                top: e,
                right: n,
                bottom: r,
                left: a,
                height: e + r,
                width: a + n
            }
        },
        resolve: function(t, e, n) {
            var r, a, o;
            for (r = 0, a = t.length; r < a; ++r)
                if (void 0 !== (o = t[r]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== n && i.isArray(o) && (o = o[n]), void 0 !== o)) return o
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(598),
        r = n(591),
        a = n(592);
    t.exports = function(t) {
        function e(t, e, n) {
            var i;
            return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i
        }

        function n(t) {
            return void 0 !== t && null !== t && "none" !== t
        }

        function o(t, i, r) {
            var a = document.defaultView,
                o = t.parentNode,
                c = a.getComputedStyle(t)[i],
                s = a.getComputedStyle(o)[i],
                l = n(c),
                p = n(s),
                u = Number.POSITIVE_INFINITY;
            return l || p ? Math.min(l ? e(c, t, r) : u, p ? e(s, o, r) : u) : "none"
        }
        a.configMerge = function() {
            return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, n, i, r) {
                    var o = n[e] || {},
                        c = i[e];
                    "scales" === e ? n[e] = a.scaleMerge(o, c) : "scale" === e ? n[e] = a.merge(o, [t.scaleService.getScaleDefaults(c.type), c]) : a._merger(e, n, i, r)
                }
            })
        }, a.scaleMerge = function() {
            return a.merge(a.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function(e, n, i, r) {
                    if ("xAxes" === e || "yAxes" === e) {
                        var o, c, s, l = i[e].length;
                        for (n[e] || (n[e] = []), o = 0; o < l; ++o) s = i[e][o], c = a.valueOrDefault(s.type, "xAxes" === e ? "category" : "linear"), o >= n[e].length && n[e].push({}), !n[e][o].type || s.type && s.type !== n[e][o].type ? a.merge(n[e][o], [t.scaleService.getScaleDefaults(c), s]) : a.merge(n[e][o], s)
                    } else a._merger(e, n, i, r)
                }
            })
        }, a.where = function(t, e) {
            if (a.isArray(t) && Array.prototype.filter) return t.filter(e);
            var n = [];
            return a.each(t, function(t) {
                e(t) && n.push(t)
            }), n
        }, a.findIndex = Array.prototype.findIndex ? function(t, e, n) {
            return t.findIndex(e, n)
        } : function(t, e, n) {
            n = void 0 === n ? t : n;
            for (var i = 0, r = t.length; i < r; ++i)
                if (e.call(n, t[i], i, t)) return i;
            return -1
        }, a.findNextWhere = function(t, e, n) {
            a.isNullOrUndef(n) && (n = -1);
            for (var i = n + 1; i < t.length; i++) {
                var r = t[i];
                if (e(r)) return r
            }
        }, a.findPreviousWhere = function(t, e, n) {
            a.isNullOrUndef(n) && (n = t.length);
            for (var i = n - 1; i >= 0; i--) {
                var r = t[i];
                if (e(r)) return r
            }
        }, a.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, a.almostEquals = function(t, e, n) {
            return Math.abs(t - e) < n
        }, a.almostWhole = function(t, e) {
            var n = Math.round(t);
            return n - e < t && n + e > t
        }, a.max = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e)
            }, Number.NEGATIVE_INFINITY)
        }, a.min = function(t) {
            return t.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e)
            }, Number.POSITIVE_INFINITY)
        }, a.sign = Math.sign ? function(t) {
            return Math.sign(t)
        } : function(t) {
            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
        }, a.log10 = Math.log10 ? function(t) {
            return Math.log10(t)
        } : function(t) {
            var e = Math.log(t) * Math.LOG10E,
                n = Math.round(e);
            return t === Math.pow(10, n) ? n : e
        }, a.toRadians = function(t) {
            return t * (Math.PI / 180)
        }, a.toDegrees = function(t) {
            return t * (180 / Math.PI)
        }, a.getAngleFromPoint = function(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y,
                r = Math.sqrt(n * n + i * i),
                a = Math.atan2(i, n);
            return a < -.5 * Math.PI && (a += 2 * Math.PI), {
                angle: a,
                distance: r
            }
        }, a.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }, a.aliasPixel = function(t) {
            return t % 2 == 0 ? 0 : .5
        }, a.splineCurve = function(t, e, n, i) {
            var r = t.skip ? e : t,
                a = e,
                o = n.skip ? e : n,
                c = Math.sqrt(Math.pow(a.x - r.x, 2) + Math.pow(a.y - r.y, 2)),
                s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                l = c / (c + s),
                p = s / (c + s),
                u = i * (l = isNaN(l) ? 0 : l),
                d = i * (p = isNaN(p) ? 0 : p);
            return {
                previous: {
                    x: a.x - u * (o.x - r.x),
                    y: a.y - u * (o.y - r.y)
                },
                next: {
                    x: a.x + d * (o.x - r.x),
                    y: a.y + d * (o.y - r.y)
                }
            }
        }, a.EPSILON = Number.EPSILON || 1e-14, a.splineCurveMonotone = function(t) {
            var e, n, i, r, o, c, s, l, p, u = (t || []).map(function(t) {
                    return {
                        model: t._model,
                        deltaK: 0,
                        mK: 0
                    }
                }),
                d = u.length;
            for (e = 0; e < d; ++e)
                if (!(i = u[e]).model.skip) {
                    if (n = e > 0 ? u[e - 1] : null, (r = e < d - 1 ? u[e + 1] : null) && !r.model.skip) {
                        var h = r.model.x - i.model.x;
                        i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0
                    }!n || n.model.skip ? i.mK = i.deltaK : !r || r.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2
                }
            for (e = 0; e < d - 1; ++e) i = u[e], r = u[e + 1], i.model.skip || r.model.skip || (a.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, c = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(c, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = c * s * i.deltaK)));
            for (e = 0; e < d; ++e)(i = u[e]).model.skip || (n = e > 0 ? u[e - 1] : null, r = e < d - 1 ? u[e + 1] : null, n && !n.model.skip && (p = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - p, i.model.controlPointPreviousY = i.model.y - p * i.mK), r && !r.model.skip && (p = (r.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + p, i.model.controlPointNextY = i.model.y + p * i.mK))
        }, a.nextItem = function(t, e, n) {
            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
        }, a.previousItem = function(t, e, n) {
            return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
        }, a.niceNum = function(t, e) {
            var n = Math.floor(a.log10(t)),
                i = t / Math.pow(10, n);
            return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n)
        }, a.requestAnimFrame = "undefined" == typeof window ? function(t) {
            t()
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }, a.getRelativePosition = function(t, e) {
            var n, i, r = t.originalEvent || t,
                o = t.currentTarget || t.srcElement,
                c = o.getBoundingClientRect(),
                s = r.touches;
            s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);
            var l = parseFloat(a.getStyle(o, "padding-left")),
                p = parseFloat(a.getStyle(o, "padding-top")),
                u = parseFloat(a.getStyle(o, "padding-right")),
                d = parseFloat(a.getStyle(o, "padding-bottom")),
                h = c.right - c.left - l - u,
                f = c.bottom - c.top - p - d;
            return {
                x: n = Math.round((n - c.left - l) / h * o.width / e.currentDevicePixelRatio),
                y: i = Math.round((i - c.top - p) / f * o.height / e.currentDevicePixelRatio)
            }
        }, a.getConstraintWidth = function(t) {
            return o(t, "max-width", "clientWidth")
        }, a.getConstraintHeight = function(t) {
            return o(t, "max-height", "clientHeight")
        }, a.getMaximumWidth = function(t) {
            var e = t.parentNode;
            if (!e) return t.clientWidth;
            var n = parseInt(a.getStyle(e, "padding-left"), 10),
                i = parseInt(a.getStyle(e, "padding-right"), 10),
                r = e.clientWidth - n - i,
                o = a.getConstraintWidth(t);
            return isNaN(o) ? r : Math.min(r, o)
        }, a.getMaximumHeight = function(t) {
            var e = t.parentNode;
            if (!e) return t.clientHeight;
            var n = parseInt(a.getStyle(e, "padding-top"), 10),
                i = parseInt(a.getStyle(e, "padding-bottom"), 10),
                r = e.clientHeight - n - i,
                o = a.getConstraintHeight(t);
            return isNaN(o) ? r : Math.min(r, o)
        }, a.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
        }, a.retinaScale = function(t, e) {
            var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
            if (1 !== n) {
                var i = t.canvas,
                    r = t.height,
                    a = t.width;
                i.height = r * n, i.width = a * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = a + "px")
            }
        }, a.fontString = function(t, e, n) {
            return e + " " + t + "px " + n
        }, a.longestText = function(t, e, n, i) {
            var r = (i = i || {}).data = i.data || {},
                o = i.garbageCollect = i.garbageCollect || [];
            i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;
            var c = 0;
            a.each(n, function(e) {
                void 0 !== e && null !== e && !0 !== a.isArray(e) ? c = a.measureText(t, r, o, c, e) : a.isArray(e) && a.each(e, function(e) {
                    void 0 === e || null === e || a.isArray(e) || (c = a.measureText(t, r, o, c, e))
                })
            });
            var s = o.length / 2;
            if (s > n.length) {
                for (var l = 0; l < s; l++) delete r[o[l]];
                o.splice(0, s)
            }
            return c
        }, a.measureText = function(t, e, n, i, r) {
            var a = e[r];
            return a || (a = e[r] = t.measureText(r).width, n.push(r)), a > i && (i = a), i
        }, a.numberOfLabelLines = function(t) {
            var e = 1;
            return a.each(t, function(t) {
                a.isArray(t) && t.length > e && (e = t.length)
            }), e
        }, a.color = i ? function(t) {
            return t instanceof CanvasGradient && (t = r.global.defaultColor), i(t)
        } : function(t) {
            return console.error("Color.js not found!"), t
        }, a.getHoverColor = function(t) {
            return t instanceof CanvasPattern ? t : a.color(t).saturate(.5).darken(.1).rgbString()
        }
    }
}, function(t, e, n) {
    var i = n(599),
        r = n(601),
        a = function(t) {
            return t instanceof a ? t : this instanceof a ? (this.valid = !1, this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1
            }, void("string" == typeof t ? (e = r.getRgba(t)) ? this.setValues("rgb", e) : (e = r.getHsla(t)) ? this.setValues("hsl", e) : (e = r.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new a(t);
            var e
        };
    a.prototype = {
        isValid: function() {
            return this.valid
        },
        rgb: function() {
            return this.setSpace("rgb", arguments)
        },
        hsl: function() {
            return this.setSpace("hsl", arguments)
        },
        hsv: function() {
            return this.setSpace("hsv", arguments)
        },
        hwb: function() {
            return this.setSpace("hwb", arguments)
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments)
        },
        rgbArray: function() {
            return this.values.rgb
        },
        hslArray: function() {
            return this.values.hsl
        },
        hsvArray: function() {
            return this.values.hsv
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
        },
        cmykArray: function() {
            return this.values.cmyk
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([t.alpha])
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([t.alpha])
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t)
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t)
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t)
        },
        hue: function(t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t)
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t)
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t)
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t)
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t)
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t)
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t)
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t)
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t)
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t)
        },
        hexString: function() {
            return r.hexString(this.values.rgb)
        },
        rgbString: function() {
            return r.rgbString(this.values.rgb, this.values.alpha)
        },
        rgbaString: function() {
            return r.rgbaString(this.values.rgb, this.values.alpha)
        },
        percentString: function() {
            return r.percentString(this.values.rgb, this.values.alpha)
        },
        hslString: function() {
            return r.hslString(this.values.hsl, this.values.alpha)
        },
        hslaString: function() {
            return r.hslaString(this.values.hsl, this.values.alpha)
        },
        hwbString: function() {
            return r.hwbString(this.values.hwb, this.values.alpha)
        },
        keyword: function() {
            return r.keyword(this.values.rgb, this.values.alpha)
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2]
        },
        luminosity: function() {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
        },
        contrast: function(t) {
            var e = this.luminosity(),
                n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
        },
        light: function() {
            return !this.dark()
        },
        negate: function() {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this
        },
        greyscale: function() {
            var t = this.values.rgb,
                e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [e, e, e]), this
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this
        },
        rotate: function(t) {
            var e = this.values.hsl,
                n = (e[0] + t) % 360;
            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this
        },
        mix: function(t, e) {
            var n = t,
                i = void 0 === e ? .5 : e,
                r = 2 * i - 1,
                a = this.alpha() - n.alpha(),
                o = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
                c = 1 - o;
            return this.rgb(o * this.red() + c * n.red(), o * this.green() + c * n.green(), o * this.blue() + c * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
        },
        toJSON: function() {
            return this.rgb()
        },
        clone: function() {
            var t, e, n = new a,
                i = this.values,
                r = n.values;
            for (var o in i) i.hasOwnProperty(o) && (t = i[o], "[object Array]" === (e = {}.toString.call(t)) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
            return n
        }
    }, a.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
    }, a.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
    }, a.prototype.getValues = function(t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n
    }, a.prototype.setValues = function(t, e) {
        var n, r, a = this.values,
            o = this.spaces,
            c = this.maxes,
            s = 1;
        if (this.valid = !0, "alpha" === t) s = e;
        else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            s = e.a
        } else if (void 0 !== e[o[t][0]]) {
            var l = o[t];
            for (n = 0; n < t.length; n++) a[t][n] = e[l[n]];
            s = e.alpha
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
        for (n = 0; n < t.length; n++) r = Math.max(0, Math.min(c[t][n], a[t][n])), a[t][n] = Math.round(r);
        for (var p in o) p !== t && (a[p] = i[t][p](a[t]));
        return !0
    }, a.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this)
    }, a.prototype.setChannel = function(t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this)
    }, "undefined" != typeof window && (window.Color = a), t.exports = a
}, function(t, e, n) {
    var i = n(600),
        r = function() {
            return new l
        };
    for (var a in i) {
        r[a + "Raw"] = function(t) {
            return function(e) {
                return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e)
            }
        }(a);
        var o = /(\w+)2(\w+)/.exec(a),
            c = o[1],
            s = o[2];
        (r[c] = r[c] || {})[s] = r[a] = function(t) {
            return function(e) {
                "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                var n = i[t](e);
                if ("string" == typeof n || void 0 === n) return n;
                for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
                return n
            }
        }(a)
    }
    var l = function() {
        this.convs = {}
    };
    l.prototype.routeSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n))
    }, l.prototype.setValues = function(t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this
    }, l.prototype.getValues = function(t) {
        var e = this.convs[t];
        if (!e) {
            var n = this.space,
                i = this.convs[n];
            e = r[n][t](i), this.convs[t] = e
        }
        return e
    }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
        l.prototype[t] = function(e) {
            return this.routeSpace(t, arguments)
        }
    }), t.exports = r
}, function(t, e) {
    function n(t) {
        var e, n, i = t[0] / 255,
            r = t[1] / 255,
            a = t[2] / 255,
            o = Math.min(i, r, a),
            c = Math.max(i, r, a),
            s = c - o;
        return c == o ? e = 0 : i == c ? e = (r - a) / s : r == c ? e = 2 + (a - i) / s : a == c && (e = 4 + (i - r) / s), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + c) / 2, [e, 100 * (c == o ? 0 : n <= .5 ? s / (c + o) : s / (2 - c - o)), 100 * n]
    }

    function i(t) {
        var e, n, i = t[0],
            r = t[1],
            a = t[2],
            o = Math.min(i, r, a),
            c = Math.max(i, r, a),
            s = c - o;
        return n = 0 == c ? 0 : s / c * 1e3 / 10, c == o ? e = 0 : i == c ? e = (r - a) / s : r == c ? e = 2 + (a - i) / s : a == c && (e = 4 + (i - r) / s), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, c / 255 * 1e3 / 10]
    }

    function a(t) {
        var e = t[0],
            i = t[1],
            r = t[2];
        return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(i, r)))]
    }

    function o(t) {
        var e, n = t[0] / 255,
            i = t[1] / 255,
            r = t[2] / 255;
        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e]
    }

    function c(t) {
        return S[JSON.stringify(t)]
    }

    function s(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)]
    }

    function l(t) {
        var e = s(t),
            n = e[0],
            i = e[1],
            r = e[2];
        return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
    }

    function p(t) {
        var e, n, i, r, a, o = t[0] / 360,
            c = t[1] / 100,
            s = t[2] / 100;
        if (0 == c) return [a = 255 * s, a, a];
        e = 2 * s - (n = s < .5 ? s * (1 + c) : s + c - s * c), r = [0, 0, 0];
        for (var l = 0; l < 3; l++)(i = o + 1 / 3 * -(l - 1)) < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, r[l] = 255 * a;
        return r
    }

    function u(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            r = Math.floor(e) % 6,
            a = e - Math.floor(e),
            o = 255 * i * (1 - n),
            c = 255 * i * (1 - n * a),
            s = 255 * i * (1 - n * (1 - a));
        i *= 255;
        switch (r) {
            case 0:
                return [i, s, o];
            case 1:
                return [c, i, o];
            case 2:
                return [o, i, s];
            case 3:
                return [o, c, i];
            case 4:
                return [s, o, i];
            case 5:
                return [i, o, c]
        }
    }

    function d(t) {
        var e, n, i, a, o = t[0] / 360,
            c = t[1] / 100,
            s = t[2] / 100,
            l = c + s;
        switch (l > 1 && (c /= l, s /= l), n = 1 - s, i = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (i = 1 - i), a = c + i * (n - c), e) {
            default:
                case 6:
                case 0:
                r = n,
            g = a,
            b = c;
            break;
            case 1:
                    r = a,
                g = n,
                b = c;
                break;
            case 2:
                    r = c,
                g = n,
                b = a;
                break;
            case 3:
                    r = c,
                g = a,
                b = n;
                break;
            case 4:
                    r = a,
                g = c,
                b = n;
                break;
            case 5:
                    r = n,
                g = c,
                b = a
        }
        return [255 * r, 255 * g, 255 * b]
    }

    function h(t) {
        var e = t[0] / 100,
            n = t[1] / 100,
            i = t[2] / 100,
            r = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r))]
    }

    function f(t) {
        var e, n, i, r = t[0] / 100,
            a = t[1] / 100,
            o = t[2] / 100;
        return n = -.9689 * r + 1.8758 * a + .0415 * o, i = .0557 * r + -.204 * a + 1.057 * o, e = (e = 3.2406 * r + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))]
    }

    function x(t) {
        var e = t[0],
            n = t[1],
            i = t[2];
        return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
    }

    function m(t) {
        var e, n, i, r, a = t[0],
            o = t[1],
            c = t[2];
        return a <= 8 ? r = (n = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((a + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (o / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(o / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - c / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - c / 200, 3)]
    }

    function v(t) {
        var e, n = t[0],
            i = t[1],
            r = t[2];
        return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e]
    }

    function y(t) {
        return f(m(t))
    }

    function w(t) {
        var e, n = t[0],
            i = t[1];
        return e = t[2] / 360 * 2 * Math.PI, [n, i * Math.cos(e), i * Math.sin(e)]
    }

    function _(t) {
        return k[t]
    }
    t.exports = {
        rgb2hsl: n,
        rgb2hsv: i,
        rgb2hwb: a,
        rgb2cmyk: o,
        rgb2keyword: c,
        rgb2xyz: s,
        rgb2lab: l,
        rgb2lch: function(t) {
            return v(l(t))
        },
        hsl2rgb: p,
        hsl2hsv: function(t) {
            var e = t[0],
                n = t[1] / 100,
                i = t[2] / 100;
            if (0 === i) return [0, 0, 0];
            return [e, 100 * (2 * (n *= (i *= 2) <= 1 ? i : 2 - i) / (i + n)), 100 * ((i + n) / 2)]
        },
        hsl2hwb: function(t) {
            return a(p(t))
        },
        hsl2cmyk: function(t) {
            return o(p(t))
        },
        hsl2keyword: function(t) {
            return c(p(t))
        },
        hsv2rgb: u,
        hsv2hsl: function(t) {
            var e, n, i = t[0],
                r = t[1] / 100,
                a = t[2] / 100;
            return e = r * a, [i, 100 * (e = (e /= (n = (2 - r) * a) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)]
        },
        hsv2hwb: function(t) {
            return a(u(t))
        },
        hsv2cmyk: function(t) {
            return o(u(t))
        },
        hsv2keyword: function(t) {
            return c(u(t))
        },
        hwb2rgb: d,
        hwb2hsl: function(t) {
            return n(d(t))
        },
        hwb2hsv: function(t) {
            return i(d(t))
        },
        hwb2cmyk: function(t) {
            return o(d(t))
        },
        hwb2keyword: function(t) {
            return c(d(t))
        },
        cmyk2rgb: h,
        cmyk2hsl: function(t) {
            return n(h(t))
        },
        cmyk2hsv: function(t) {
            return i(h(t))
        },
        cmyk2hwb: function(t) {
            return a(h(t))
        },
        cmyk2keyword: function(t) {
            return c(h(t))
        },
        keyword2rgb: _,
        keyword2hsl: function(t) {
            return n(_(t))
        },
        keyword2hsv: function(t) {
            return i(_(t))
        },
        keyword2hwb: function(t) {
            return a(_(t))
        },
        keyword2cmyk: function(t) {
            return o(_(t))
        },
        keyword2lab: function(t) {
            return l(_(t))
        },
        keyword2xyz: function(t) {
            return s(_(t))
        },
        xyz2rgb: f,
        xyz2lab: x,
        xyz2lch: function(t) {
            return v(x(t))
        },
        lab2xyz: m,
        lab2rgb: y,
        lab2lch: v,
        lch2lab: w,
        lch2xyz: function(t) {
            return m(w(t))
        },
        lch2rgb: function(t) {
            return y(w(t))
        }
    };
    var k = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50]
        },
        S = {};
    for (var M in k) S[JSON.stringify(k[M])] = M
}, function(t, e, n) {
    var i = n(602);

    function r(t) {
        if (t) {
            var e = [0, 0, 0],
                n = 1,
                r = t.match(/^#([a-fA-F0-9]{3})$/i);
            if (r) {
                r = r[1];
                for (var a = 0; a < e.length; a++) e[a] = parseInt(r[a] + r[a], 16)
            } else if (r = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                r = r[1];
                for (a = 0; a < e.length; a++) e[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16)
            } else if (r = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (a = 0; a < e.length; a++) e[a] = parseInt(r[a + 1]);
                n = parseFloat(r[4])
            } else if (r = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(r[a + 1]));
                n = parseFloat(r[4])
            } else if (r = t.match(/(\w+)/)) {
                if ("transparent" == r[1]) return [0, 0, 0, 0];
                if (!(e = i[r[1]])) return
            }
            for (a = 0; a < e.length; a++) e[a] = p(e[a], 0, 255);
            return n = n || 0 == n ? p(n, 0, 1) : 1, e[3] = n, e
        }
    }

    function a(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function o(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [p(parseInt(e[1]), 0, 360), p(parseFloat(e[2]), 0, 100), p(parseFloat(e[3]), 0, 100), p(isNaN(n) ? 1 : n, 0, 1)]
            }
        }
    }

    function c(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
    }

    function s(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
    }

    function l(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
    }

    function p(t, e, n) {
        return Math.min(Math.max(e, t), n)
    }

    function u(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e
    }
    t.exports = {
        getRgba: r,
        getHsla: a,
        getRgb: function(t) {
            var e = r(t);
            return e && e.slice(0, 3)
        },
        getHsl: function(t) {
            var e = a(t);
            return e && e.slice(0, 3)
        },
        getHwb: o,
        getAlpha: function(t) {
            var e = r(t);
            if (e) return e[3];
            if (e = a(t)) return e[3];
            if (e = o(t)) return e[3]
        },
        hexString: function(t) {
            return "#" + u(t[0]) + u(t[1]) + u(t[2])
        },
        rgbString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return c(t, e);
            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        },
        rgbaString: c,
        percentString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return s(t, e);
            var n = Math.round(t[0] / 255 * 100),
                i = Math.round(t[1] / 255 * 100),
                r = Math.round(t[2] / 255 * 100);
            return "rgb(" + n + "%, " + i + "%, " + r + "%)"
        },
        percentaString: s,
        hslString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return l(t, e);
            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
        },
        hslaString: l,
        hwbString: function(t, e) {
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
        },
        keyword: function(t) {
            return d[t.slice(0, 3)]
        }
    };
    var d = {};
    for (var h in i) d[i[h]] = h
}, function(t, e, n) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}, function(t, e, n) {
    "use strict";
    var i = n(598),
        r = n(592);
    var a = function(t) {
        r.extend(this, t), this.initialize.apply(this, arguments)
    };
    r.extend(a.prototype, {
        initialize: function() {
            this.hidden = !1
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = r.clone(t._model)), t._start = {}, t
        },
        transition: function(t) {
            var e = this,
                n = e._model,
                r = e._start,
                a = e._view;
            return n && 1 !== t ? (a || (a = e._view = {}), r || (r = e._start = {}), function(t, e, n, r) {
                var a, o, c, s, l, p, u, d, h, f = Object.keys(n);
                for (a = 0, o = f.length; a < o; ++a)
                    if (p = n[c = f[a]], e.hasOwnProperty(c) || (e[c] = p), (s = e[c]) !== p && "_" !== c[0]) {
                        if (t.hasOwnProperty(c) || (t[c] = s), (u = typeof p) == typeof(l = t[c]))
                            if ("string" === u) {
                                if ((d = i(l)).valid && (h = i(p)).valid) {
                                    e[c] = h.mix(d, r).rgbString();
                                    continue
                                }
                            } else if ("number" === u && isFinite(l) && isFinite(p)) {
                            e[c] = l + (p - l) * r;
                            continue
                        }
                        e[c] = p
                    }
            }(r, a, n, t), e) : (e._view = n, e._start = null, e)
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            }
        },
        hasValue: function() {
            return r.isNumber(this._model.x) && r.isNumber(this._model.y)
        }
    }), a.extend = r.inherits, t.exports = a
}, function(t, e, n) {
    "use strict";
    t.exports = {}, t.exports.Arc = n(605), t.exports.Line = n(606), t.exports.Point = n(607), t.exports.Rectangle = n(608)
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592);
    i._set("global", {
        elements: {
            arc: {
                backgroundColor: i.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2
            }
        }
    }), t.exports = r.extend({
        inLabelRange: function(t) {
            var e = this._view;
            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
        },
        inRange: function(t, e) {
            var n = this._view;
            if (n) {
                for (var i = a.getAngleFromPoint(n, {
                        x: t,
                        y: e
                    }), r = i.angle, o = i.distance, c = n.startAngle, s = n.endAngle; s < c;) s += 2 * Math.PI;
                for (; r > s;) r -= 2 * Math.PI;
                for (; r < c;) r += 2 * Math.PI;
                var l = r >= c && r <= s,
                    p = o >= n.innerRadius && o <= n.outerRadius;
                return l && p
            }
            return !1
        },
        getCenterPoint: function() {
            var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            }
        },
        getArea: function() {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
        },
        tooltipPosition: function() {
            var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            }
        },
        draw: function() {
            var t = this._chart.ctx,
                e = this._view,
                n = e.startAngle,
                i = e.endAngle;
            t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592),
        o = i.global;
    i._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: o.defaultColor,
                borderWidth: 3,
                borderColor: o.defaultColor,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    }), t.exports = r.extend({
        draw: function() {
            var t, e, n, i, r = this._view,
                c = this._chart.ctx,
                s = r.spanGaps,
                l = this._children.slice(),
                p = o.elements.line,
                u = -1;
            for (this._loop && l.length && l.push(l[0]), c.save(), c.lineCap = r.borderCapStyle || p.borderCapStyle, c.setLineDash && c.setLineDash(r.borderDash || p.borderDash), c.lineDashOffset = r.borderDashOffset || p.borderDashOffset, c.lineJoin = r.borderJoinStyle || p.borderJoinStyle, c.lineWidth = r.borderWidth || p.borderWidth, c.strokeStyle = r.borderColor || o.defaultColor, c.beginPath(), u = -1, t = 0; t < l.length; ++t) e = l[t], n = a.previousItem(l, t), i = e._view, 0 === t ? i.skip || (c.moveTo(i.x, i.y), u = t) : (n = -1 === u ? n : l[u], i.skip || (u !== t - 1 && !s || -1 === u ? c.moveTo(i.x, i.y) : a.canvas.lineTo(c, n._view, e._view), u = t));
            c.stroke(), c.restore()
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592),
        o = i.global.defaultColor;

    function c(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
    }
    i._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: o,
                borderColor: o,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    }), t.exports = r.extend({
        inRange: function(t, e) {
            var n = this._view;
            return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
        },
        inLabelRange: c,
        inXRange: c,
        inYRange: function(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
        },
        getCenterPoint: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            }
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2)
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y,
                padding: t.radius + t.borderWidth
            }
        },
        draw: function(t) {
            var e = this._view,
                n = this._model,
                r = this._chart.ctx,
                c = e.pointStyle,
                s = e.radius,
                l = e.x,
                p = e.y,
                u = a.color,
                d = 0;
            e.skip || (r.strokeStyle = e.borderColor || o, r.lineWidth = a.valueOrDefault(e.borderWidth, i.global.elements.point.borderWidth), r.fillStyle = e.backgroundColor || o, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? d = (l - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? d = (n.x - l) / (n.x - t.right) : n.y < t.top ? d = (p - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (d = (n.y - p) / (n.y - t.bottom)), d = Math.round(100 * d) / 100, r.strokeStyle = u(r.strokeStyle).alpha(d).rgbString(), r.fillStyle = u(r.fillStyle).alpha(d).rgbString()), a.canvas.drawPoint(r, c, s, l, p))
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603);

    function a(t) {
        return void 0 !== t._view.width
    }

    function o(t) {
        var e, n, i, r, o = t._view;
        if (a(t)) {
            var c = o.width / 2;
            e = o.x - c, n = o.x + c, i = Math.min(o.y, o.base), r = Math.max(o.y, o.base)
        } else {
            var s = o.height / 2;
            e = Math.min(o.x, o.base), n = Math.max(o.x, o.base), i = o.y - s, r = o.y + s
        }
        return {
            left: e,
            top: i,
            right: n,
            bottom: r
        }
    }
    i._set("global", {
        elements: {
            rectangle: {
                backgroundColor: i.global.defaultColor,
                borderColor: i.global.defaultColor,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    }), t.exports = r.extend({
        draw: function() {
            var t, e, n, i, r, a, o, c = this._chart.ctx,
                s = this._view,
                l = s.borderWidth;
            if (s.horizontal ? (t = s.base, e = s.x, n = s.y - s.height / 2, i = s.y + s.height / 2, r = e > t ? 1 : -1, a = 1, o = s.borderSkipped || "left") : (t = s.x - s.width / 2, e = s.x + s.width / 2, n = s.y, r = 1, a = (i = s.base) > n ? 1 : -1, o = s.borderSkipped || "bottom"), l) {
                var p = Math.min(Math.abs(t - e), Math.abs(n - i)),
                    u = (l = l > p ? p : l) / 2,
                    d = t + ("left" !== o ? u * r : 0),
                    h = e + ("right" !== o ? -u * r : 0),
                    f = n + ("top" !== o ? u * a : 0),
                    x = i + ("bottom" !== o ? -u * a : 0);
                d !== h && (n = f, i = x), f !== x && (t = d, e = h)
            }
            c.beginPath(), c.fillStyle = s.backgroundColor, c.strokeStyle = s.borderColor, c.lineWidth = l;
            var m = [
                    [t, i],
                    [t, n],
                    [e, n],
                    [e, i]
                ],
                g = ["bottom", "left", "top", "right"].indexOf(o, 0);

            function v(t) {
                return m[(g + t) % 4]
            } - 1 === g && (g = 0);
            var y = v(0);
            c.moveTo(y[0], y[1]);
            for (var b = 1; b < 4; b++) y = v(b), c.lineTo(y[0], y[1]);
            c.fill(), l && c.stroke()
        },
        height: function() {
            var t = this._view;
            return t.base - t.y
        },
        inRange: function(t, e) {
            var n = !1;
            if (this._view) {
                var i = o(this);
                n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom
            }
            return n
        },
        inLabelRange: function(t, e) {
            if (!this._view) return !1;
            var n = o(this);
            return a(this) ? t >= n.left && t <= n.right : e >= n.top && e <= n.bottom
        },
        inXRange: function(t) {
            var e = o(this);
            return t >= e.left && t <= e.right
        },
        inYRange: function(t) {
            var e = o(this);
            return t >= e.top && t <= e.bottom
        },
        getCenterPoint: function() {
            var t, e, n = this._view;
            return a(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                x: t,
                y: e
            }
        },
        getArea: function() {
            var t = this._view;
            return t.width * Math.abs(t.y - t.base)
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(592);

    function r(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : i.getRelativePosition(t, e)
    }

    function a(t, e) {
        var n, i, r, a, o;
        for (i = 0, a = t.data.datasets.length; i < a; ++i)
            if (t.isDatasetVisible(i))
                for (r = 0, o = (n = t.getDatasetMeta(i)).data.length; r < o; ++r) {
                    var c = n.data[r];
                    c._view.skip || e(c)
                }
    }

    function o(t, e) {
        var n = [];
        return a(t, function(t) {
            t.inRange(e.x, e.y) && n.push(t)
        }), n
    }

    function c(t, e, n, i) {
        var r = Number.POSITIVE_INFINITY,
            o = [];
        return a(t, function(t) {
            if (!n || t.inRange(e.x, e.y)) {
                var a = t.getCenterPoint(),
                    c = i(e, a);
                c < r ? (o = [t], r = c) : c === r && o.push(t)
            }
        }), o
    }

    function s(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function(t, i) {
            var r = e ? Math.abs(t.x - i.x) : 0,
                a = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
        }
    }

    function l(t, e, n) {
        var i = r(e, t);
        n.axis = n.axis || "x";
        var a = s(n.axis),
            l = n.intersect ? o(t, i) : c(t, i, !1, a),
            p = [];
        return l.length ? (t.data.datasets.forEach(function(e, n) {
            if (t.isDatasetVisible(n)) {
                var i = t.getDatasetMeta(n).data[l[0]._index];
                i && !i._view.skip && p.push(i)
            }
        }), p) : []
    }
    t.exports = {
        modes: {
            single: function(t, e) {
                var n = r(e, t),
                    i = [];
                return a(t, function(t) {
                    if (t.inRange(n.x, n.y)) return i.push(t), i
                }), i.slice(0, 1)
            },
            label: l,
            index: l,
            dataset: function(t, e, n) {
                var i = r(e, t);
                n.axis = n.axis || "xy";
                var a = s(n.axis),
                    l = n.intersect ? o(t, i) : c(t, i, !1, a);
                return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l
            },
            "x-axis": function(t, e) {
                return l(t, e, {
                    intersect: !1
                })
            },
            point: function(t, e) {
                return o(t, r(e, t))
            },
            nearest: function(t, e, n) {
                var i = r(e, t);
                n.axis = n.axis || "xy";
                var a = s(n.axis),
                    o = c(t, i, n.intersect, a);
                return o.length > 1 && o.sort(function(t, e) {
                    var n = t.getArea() - e.getArea();
                    return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                }), o.slice(0, 1)
            },
            x: function(t, e, n) {
                var i = r(e, t),
                    o = [],
                    c = !1;
                return a(t, function(t) {
                    t.inXRange(i.x) && o.push(t), t.inRange(i.x, i.y) && (c = !0)
                }), n.intersect && !c && (o = []), o
            },
            y: function(t, e, n) {
                var i = r(e, t),
                    o = [],
                    c = !1;
                return a(t, function(t) {
                    t.inYRange(i.y) && o.push(t), t.inRange(i.x, i.y) && (c = !0)
                }), n.intersect && !c && (o = []), o
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592);

    function r(t, e) {
        return i.where(t, function(t) {
            return t.position === e
        })
    }

    function a(t, e) {
        t.forEach(function(t, e) {
            return t._tmpIndex_ = e, t
        }), t.sort(function(t, n) {
            var i = e ? n : t,
                r = e ? t : n;
            return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight
        }), t.forEach(function(t) {
            delete t._tmpIndex_
        })
    }
    t.exports = {
        defaults: {},
        addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
        },
        removeBox: function(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
        },
        configure: function(t, e, n) {
            for (var i, r = ["fullWidth", "position", "weight"], a = r.length, o = 0; o < a; ++o) i = r[o], n.hasOwnProperty(i) && (e[i] = n[i])
        },
        update: function(t, e, n) {
            if (t) {
                var o = t.options.layout || {},
                    c = i.options.toPadding(o.padding),
                    s = c.left,
                    l = c.right,
                    p = c.top,
                    u = c.bottom,
                    d = r(t.boxes, "left"),
                    h = r(t.boxes, "right"),
                    f = r(t.boxes, "top"),
                    x = r(t.boxes, "bottom"),
                    m = r(t.boxes, "chartArea");
                a(d, !0), a(h, !1), a(f, !0), a(x, !1);
                var g = e - s - l,
                    v = n - p - u,
                    y = v / 2,
                    b = (e - g / 2) / (d.length + h.length),
                    w = (n - y) / (f.length + x.length),
                    _ = g,
                    k = v,
                    S = [];
                i.each(d.concat(h, f, x), function(t) {
                    var e, n = t.isHorizontal();
                    n ? (e = t.update(t.fullWidth ? g : _, w), k -= e.height) : (e = t.update(b, k), _ -= e.width), S.push({
                        horizontal: n,
                        minSize: e,
                        box: t
                    })
                });
                var M = 0,
                    C = 0,
                    T = 0,
                    P = 0;
                i.each(f.concat(x), function(t) {
                    if (t.getPadding) {
                        var e = t.getPadding();
                        M = Math.max(M, e.left), C = Math.max(C, e.right)
                    }
                }), i.each(d.concat(h), function(t) {
                    if (t.getPadding) {
                        var e = t.getPadding();
                        T = Math.max(T, e.top), P = Math.max(P, e.bottom)
                    }
                });
                var D = s,
                    O = l,
                    A = p,
                    I = u;
                i.each(d.concat(h), W), i.each(d, function(t) {
                    D += t.width
                }), i.each(h, function(t) {
                    O += t.width
                }), i.each(f.concat(x), W), i.each(f, function(t) {
                    A += t.height
                }), i.each(x, function(t) {
                    I += t.height
                }), i.each(d.concat(h), function(t) {
                    var e = i.findNextWhere(S, function(e) {
                            return e.box === t
                        }),
                        n = {
                            left: 0,
                            right: 0,
                            top: A,
                            bottom: I
                        };
                    e && t.update(e.minSize.width, k, n)
                }), D = s, O = l, A = p, I = u, i.each(d, function(t) {
                    D += t.width
                }), i.each(h, function(t) {
                    O += t.width
                }), i.each(f, function(t) {
                    A += t.height
                }), i.each(x, function(t) {
                    I += t.height
                });
                var R = Math.max(M - D, 0);
                D += R, O += Math.max(C - O, 0);
                var L = Math.max(T - A, 0);
                A += L, I += Math.max(P - I, 0);
                var F = n - A - I,
                    E = e - D - O;
                E === _ && F === k || (i.each(d, function(t) {
                    t.height = F
                }), i.each(h, function(t) {
                    t.height = F
                }), i.each(f, function(t) {
                    t.fullWidth || (t.width = E)
                }), i.each(x, function(t) {
                    t.fullWidth || (t.width = E)
                }), k = F, _ = E);
                var z = s + R,
                    N = p + L;
                i.each(d.concat(f), V), z += _, N += k, i.each(h, V), i.each(x, V), t.chartArea = {
                    left: D,
                    top: A,
                    right: D + _,
                    bottom: A + k
                }, i.each(m, function(e) {
                    e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(_, k)
                })
            }

            function W(t) {
                var e = i.findNextWhere(S, function(e) {
                    return e.box === t
                });
                if (e)
                    if (t.isHorizontal()) {
                        var n = {
                            left: Math.max(D, M),
                            right: Math.max(O, C),
                            top: 0,
                            bottom: 0
                        };
                        t.update(t.fullWidth ? g : _, v / 2, n)
                    } else t.update(e.minSize.width, k)
            }

            function V(t) {
                t.isHorizontal() ? (t.left = t.fullWidth ? s : D, t.right = t.fullWidth ? e - l : D + _, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = z, t.right = z + t.width, t.top = A, t.bottom = A + k, z = t.right)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592),
        r = n(612),
        a = n(613),
        o = a._enabled ? a : r;
    t.exports = i.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, o)
}, function(t, e) {
    t.exports = {
        acquireContext: function(t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592),
        r = "$chartjs",
        a = "chartjs-",
        o = a + "render-monitor",
        c = a + "render-animation",
        s = ["animationstart", "webkitAnimationStart"],
        l = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        };

    function p(t, e) {
        var n = i.getStyle(t, e),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? Number(r[1]) : void 0
    }
    var u = !! function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("e", null, e)
        } catch (t) {}
        return t
    }() && {
        passive: !0
    };

    function d(t, e, n) {
        t.addEventListener(e, n, u)
    }

    function h(t, e, n) {
        t.removeEventListener(e, n, u)
    }

    function f(t, e, n, i, r) {
        return {
            type: t,
            chart: e,
            native: r || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
        }
    }

    function x(t, e, n) {
        var l, p, u, h, x = t[r] || (t[r] = {}),
            m = x.resizer = function(t) {
                var e = document.createElement("div"),
                    n = a + "size-monitor",
                    i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                var r = e.childNodes[0],
                    o = e.childNodes[1];
                e._reset = function() {
                    r.scrollLeft = 1e6, r.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                };
                var c = function() {
                    e._reset(), t()
                };
                return d(r, "scroll", c.bind(r, "expand")), d(o, "scroll", c.bind(o, "shrink")), e
            }((l = function() {
                if (x.resizer) return e(f("resize", n))
            }, u = !1, h = [], function() {
                h = Array.prototype.slice.call(arguments), p = p || this, u || (u = !0, i.requestAnimFrame.call(window, function() {
                    u = !1, l.apply(p, h)
                }))
            }));
        ! function(t, e) {
            var n = t[r] || (t[r] = {}),
                a = n.renderProxy = function(t) {
                    t.animationName === c && e()
                };
            i.each(s, function(e) {
                d(t, e, a)
            }), n.reflow = !!t.offsetParent, t.classList.add(o)
        }(t, function() {
            if (x.resizer) {
                var e = t.parentNode;
                e && e !== m.parentNode && e.insertBefore(m, e.firstChild), m._reset()
            }
        })
    }

    function m(t) {
        var e = t[r] || {},
            n = e.resizer;
        delete e.resizer,
            function(t) {
                var e = t[r] || {},
                    n = e.renderProxy;
                n && (i.each(s, function(e) {
                    h(t, e, n)
                }), delete e.renderProxy), t.classList.remove(o)
            }(t), n && n.parentNode && n.parentNode.removeChild(n)
    }
    t.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function() {
            var t, e, n, i = "from{opacity:0.99}to{opacity:1}";
            e = "@-webkit-keyframes " + c + "{" + i + "}@keyframes " + c + "{" + i + "}." + o + "{-webkit-animation:" + c + " 0.001s;animation:" + c + " 0.001s;}", n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))
        },
        acquireContext: function(t, e) {
            "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (function(t, e) {
                var n = t.style,
                    i = t.getAttribute("height"),
                    a = t.getAttribute("width");
                if (t[r] = {
                        initial: {
                            height: i,
                            width: a,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", null === a || "" === a) {
                    var o = p(t, "width");
                    void 0 !== o && (t.width = o)
                }
                if (null === i || "" === i)
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var c = p(t, "height");
                        void 0 !== o && (t.height = c)
                    }
            }(t, e), n) : null
        },
        releaseContext: function(t) {
            var e = t.canvas;
            if (e[r]) {
                var n = e[r].initial;
                ["height", "width"].forEach(function(t) {
                    var r = n[t];
                    i.isNullOrUndef(r) ? e.removeAttribute(t) : e.setAttribute(t, r)
                }), i.each(n.style || {}, function(t, n) {
                    e.style[n] = t
                }), e.width = e.width, delete e[r]
            }
        },
        addEventListener: function(t, e, n) {
            var a = t.canvas;
            if ("resize" !== e) {
                var o = n[r] || (n[r] = {});
                d(a, e, (o.proxies || (o.proxies = {}))[t.id + "_" + e] = function(e) {
                    n(function(t, e) {
                        var n = l[t.type] || t.type,
                            r = i.getRelativePosition(t, e);
                        return f(n, e, r.x, r.y, t)
                    }(e, t))
                })
            } else x(a, n, t)
        },
        removeEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var a = ((n[r] || {}).proxies || {})[t.id + "_" + e];
                a && h(i, e, a)
            } else m(i)
        }
    }, i.addEvent = d, i.removeEvent = h
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(592);
    i._set("global", {
        plugins: {}
    }), t.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t)
            }), this._cacheId++
        },
        unregister: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
            }), this._cacheId++
        },
        clear: function() {
            this._plugins = [], this._cacheId++
        },
        count: function() {
            return this._plugins.length
        },
        getAll: function() {
            return this._plugins
        },
        notify: function(t, e, n) {
            var i, r, a, o, c, s = this.descriptors(t),
                l = s.length;
            for (i = 0; i < l; ++i)
                if ("function" == typeof(c = (a = (r = s[i]).plugin)[e]) && ((o = [t].concat(n || [])).push(r.options), !1 === c.apply(a, o))) return !1;
            return !0
        },
        descriptors: function(t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
                a = [],
                o = t && t.config || {},
                c = o.options && o.options.plugins || {};
            return this._plugins.concat(o.plugins || []).forEach(function(t) {
                if (-1 === n.indexOf(t)) {
                    var e = t.id,
                        o = c[e];
                    !1 !== o && (!0 === o && (o = r.clone(i.global.plugins[e])), n.push(t), a.push({
                        plugin: t,
                        options: o || {}
                    }))
                }
            }), e.descriptors = a, e.id = this._cacheId, a
        },
        _invalidate: function(t) {
            delete t.$plugins
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592);
    t.exports = {
        formatters: {
            values: function(t) {
                return i.isArray(t) ? t : "" + t
            },
            linear: function(t, e, n) {
                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(r) > 1 && t !== Math.floor(t) && (r = t - Math.floor(t));
                var a = i.log10(Math.abs(r)),
                    o = "";
                if (0 !== t) {
                    var c = -1 * Math.floor(a);
                    c = Math.max(Math.min(c, 20), 0), o = t.toFixed(c)
                } else o = "0";
                return o
            },
            logarithmic: function(t, e, n) {
                var r = t / Math.pow(10, Math.floor(i.log10(t)));
                return 0 === t ? "0" : 1 === r || 2 === r || 5 === r || 0 === e || e === n.length - 1 ? t.toExponential() : ""
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592);
    i._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: a.noop,
            onComplete: a.noop
        }
    }), t.exports = function(t) {
        t.Animation = r.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null
        }), t.animationService = {
            frameDuration: 17,
            animations: [],
            dropFrames: 0,
            request: null,
            addAnimation: function(t, e, n, i) {
                var r, a, o = this.animations;
                for (e.chart = t, i || (t.animating = !0), r = 0, a = o.length; r < a; ++r)
                    if (o[r].chart === t) return void(o[r] = e);
                o.push(e), 1 === o.length && this.requestAnimationFrame()
            },
            cancelAnimation: function(t) {
                var e = a.findIndex(this.animations, function(e) {
                    return e.chart === t
                }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
            },
            requestAnimationFrame: function() {
                var t = this;
                null === t.request && (t.request = a.requestAnimFrame.call(window, function() {
                    t.request = null, t.startDigest()
                }))
            },
            startDigest: function() {
                var t = this,
                    e = Date.now(),
                    n = 0;
                t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
                var i = Date.now();
                t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
            },
            advance: function(t) {
                for (var e, n, i = this.animations, r = 0; r < i.length;) n = (e = i[r]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), a.callback(e.render, [n, e], n), a.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (a.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(r, 1)) : ++r
            }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
            get: function() {
                return this
            }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
            get: function() {
                return this.chart
            },
            set: function(t) {
                this.chart = t
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(592),
        a = n(609),
        o = n(610),
        c = n(611),
        s = n(614);
    t.exports = function(t) {
        function e(t) {
            return "top" === t || "bottom" === t
        }
        t.types = {}, t.instances = {}, t.controllers = {}, r.extend(t.prototype, {
            construct: function(e, n) {
                var a = this;
                n = function(t) {
                    var e = (t = t || {}).data = t.data || {};
                    return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = r.configMerge(i.global, i[t.type], t.options || {}), t
                }(n);
                var o = c.acquireContext(e, n),
                    s = o && o.canvas,
                    l = s && s.height,
                    p = s && s.width;
                a.id = r.uid(), a.ctx = o, a.canvas = s, a.config = n, a.width = p, a.height = l, a.aspectRatio = l ? p / l : null, a.options = n.options, a._bufferedRender = !1, a.chart = a, a.controller = a, t.instances[a.id] = a, Object.defineProperty(a, "data", {
                    get: function() {
                        return a.config.data
                    },
                    set: function(t) {
                        a.config.data = t
                    }
                }), o && s ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
            },
            initialize: function() {
                var t = this;
                return s.notify(t, "beforeInit"), r.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), s.notify(t, "afterInit"), t
            },
            clear: function() {
                return r.canvas.clear(this), this
            },
            stop: function() {
                return t.animationService.cancelAnimation(this), this
            },
            resize: function(t) {
                var e = this,
                    n = e.options,
                    i = e.canvas,
                    a = n.maintainAspectRatio && e.aspectRatio || null,
                    o = Math.max(0, Math.floor(r.getMaximumWidth(i))),
                    c = Math.max(0, Math.floor(a ? o / a : r.getMaximumHeight(i)));
                if ((e.width !== o || e.height !== c) && (i.width = e.width = o, i.height = e.height = c, i.style.width = o + "px", i.style.height = c + "px", r.retinaScale(e, n.devicePixelRatio), !t)) {
                    var l = {
                        width: o,
                        height: c
                    };
                    s.notify(e, "resize", [l]), e.options.onResize && e.options.onResize(e, l), e.stop(), e.update(e.options.responsiveAnimationDuration)
                }
            },
            ensureScalesHaveIDs: function() {
                var t = this.options,
                    e = t.scales || {},
                    n = t.scale;
                r.each(e.xAxes, function(t, e) {
                    t.id = t.id || "x-axis-" + e
                }), r.each(e.yAxes, function(t, e) {
                    t.id = t.id || "y-axis-" + e
                }), n && (n.id = n.id || "scale")
            },
            buildOrUpdateScales: function() {
                var n = this,
                    i = n.options,
                    a = n.scales || {},
                    o = [],
                    c = Object.keys(a).reduce(function(t, e) {
                        return t[e] = !1, t
                    }, {});
                i.scales && (o = o.concat((i.scales.xAxes || []).map(function(t) {
                    return {
                        options: t,
                        dtype: "category",
                        dposition: "bottom"
                    }
                }), (i.scales.yAxes || []).map(function(t) {
                    return {
                        options: t,
                        dtype: "linear",
                        dposition: "left"
                    }
                }))), i.scale && o.push({
                    options: i.scale,
                    dtype: "radialLinear",
                    isDefault: !0,
                    dposition: "chartArea"
                }), r.each(o, function(i) {
                    var o = i.options,
                        s = o.id,
                        l = r.valueOrDefault(o.type, i.dtype);
                    e(o.position) !== e(i.dposition) && (o.position = i.dposition), c[s] = !0;
                    var p = null;
                    if (s in a && a[s].type === l)(p = a[s]).options = o, p.ctx = n.ctx, p.chart = n;
                    else {
                        var u = t.scaleService.getScaleConstructor(l);
                        if (!u) return;
                        p = new u({
                            id: s,
                            type: l,
                            options: o,
                            ctx: n.ctx,
                            chart: n
                        }), a[p.id] = p
                    }
                    p.mergeTicksOptions(), i.isDefault && (n.scale = p)
                }), r.each(c, function(t, e) {
                    t || delete a[e]
                }), n.scales = a, t.scaleService.addScalesToLayout(this)
            },
            buildOrUpdateControllers: function() {
                var e = this,
                    n = [],
                    i = [];
                return r.each(e.data.datasets, function(r, a) {
                    var o = e.getDatasetMeta(a),
                        c = r.type || e.config.type;
                    if (o.type && o.type !== c && (e.destroyDatasetMeta(a), o = e.getDatasetMeta(a)), o.type = c, n.push(o.type), o.controller) o.controller.updateIndex(a), o.controller.linkScales();
                    else {
                        var s = t.controllers[o.type];
                        if (void 0 === s) throw new Error('"' + o.type + '" is not a chart type.');
                        o.controller = new s(e, a), i.push(o.controller)
                    }
                }, e), i
            },
            resetElements: function() {
                var t = this;
                r.each(t.data.datasets, function(e, n) {
                    t.getDatasetMeta(n).controller.reset()
                }, t)
            },
            reset: function() {
                this.resetElements(), this.tooltip.initialize()
            },
            update: function(e) {
                var n, i, a = this;
                if (e && "object" == typeof e || (e = {
                        duration: e,
                        lazy: arguments[1]
                    }), i = (n = a).options, r.each(n.scales, function(t) {
                        o.removeBox(n, t)
                    }), i = r.configMerge(t.defaults.global, t.defaults[n.config.type], i), n.options = n.config.options = i, n.ensureScalesHaveIDs(), n.buildOrUpdateScales(), n.tooltip._options = i.tooltips, n.tooltip.initialize(), s._invalidate(a), !1 !== s.notify(a, "beforeUpdate")) {
                    a.tooltip._data = a.data;
                    var c = a.buildOrUpdateControllers();
                    r.each(a.data.datasets, function(t, e) {
                        a.getDatasetMeta(e).controller.buildOrUpdateElements()
                    }, a), a.updateLayout(), a.options.animation && a.options.animation.duration && r.each(c, function(t) {
                        t.reset()
                    }), a.updateDatasets(), a.tooltip.initialize(), a.lastActive = [], s.notify(a, "afterUpdate"), a._bufferedRender ? a._bufferedRequest = {
                        duration: e.duration,
                        easing: e.easing,
                        lazy: e.lazy
                    } : a.render(e)
                }
            },
            updateLayout: function() {
                !1 !== s.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), s.notify(this, "afterScaleUpdate"), s.notify(this, "afterLayout"))
            },
            updateDatasets: function() {
                if (!1 !== s.notify(this, "beforeDatasetsUpdate")) {
                    for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                    s.notify(this, "afterDatasetsUpdate")
                }
            },
            updateDataset: function(t) {
                var e = this.getDatasetMeta(t),
                    n = {
                        meta: e,
                        index: t
                    };
                !1 !== s.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), s.notify(this, "afterDatasetUpdate", [n]))
            },
            render: function(e) {
                var n = this;
                e && "object" == typeof e || (e = {
                    duration: e,
                    lazy: arguments[1]
                });
                var i = e.duration,
                    a = e.lazy;
                if (!1 !== s.notify(n, "beforeRender")) {
                    var o = n.options.animation,
                        c = function(t) {
                            s.notify(n, "afterRender"), r.callback(o && o.onComplete, [t], n)
                        };
                    if (o && (void 0 !== i && 0 !== i || void 0 === i && 0 !== o.duration)) {
                        var l = new t.Animation({
                            numSteps: (i || o.duration) / 16.66,
                            easing: e.easing || o.easing,
                            render: function(t, e) {
                                var n = r.easing.effects[e.easing],
                                    i = e.currentStep,
                                    a = i / e.numSteps;
                                t.draw(n(a), a, i)
                            },
                            onAnimationProgress: o.onProgress,
                            onAnimationComplete: c
                        });
                        t.animationService.addAnimation(n, l, i, a)
                    } else n.draw(), c(new t.Animation({
                        numSteps: 0,
                        chart: n
                    }));
                    return n
                }
            },
            draw: function(t) {
                var e = this;
                e.clear(), r.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== s.notify(e, "beforeDraw", [t]) && (r.each(e.boxes, function(t) {
                    t.draw(e.chartArea)
                }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, "afterDraw", [t]))
            },
            transition: function(t) {
                for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                this.tooltip.transition(t)
            },
            drawDatasets: function(t) {
                var e = this;
                if (!1 !== s.notify(e, "beforeDatasetsDraw", [t])) {
                    for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) e.isDatasetVisible(n) && e.drawDataset(n, t);
                    s.notify(e, "afterDatasetsDraw", [t])
                }
            },
            drawDataset: function(t, e) {
                var n = this.getDatasetMeta(t),
                    i = {
                        meta: n,
                        index: t,
                        easingValue: e
                    };
                !1 !== s.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), s.notify(this, "afterDatasetDraw", [i]))
            },
            _drawTooltip: function(t) {
                var e = this.tooltip,
                    n = {
                        tooltip: e,
                        easingValue: t
                    };
                !1 !== s.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), s.notify(this, "afterTooltipDraw", [n]))
            },
            getElementAtEvent: function(t) {
                return a.modes.single(this, t)
            },
            getElementsAtEvent: function(t) {
                return a.modes.label(this, t, {
                    intersect: !0
                })
            },
            getElementsAtXAxis: function(t) {
                return a.modes["x-axis"](this, t, {
                    intersect: !0
                })
            },
            getElementsAtEventForMode: function(t, e, n) {
                var i = a.modes[e];
                return "function" == typeof i ? i(this, t, n) : []
            },
            getDatasetAtEvent: function(t) {
                return a.modes.dataset(this, t, {
                    intersect: !0
                })
            },
            getDatasetMeta: function(t) {
                var e = this.data.datasets[t];
                e._meta || (e._meta = {});
                var n = e._meta[this.id];
                return n || (n = e._meta[this.id] = {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null
                }), n
            },
            getVisibleDatasetCount: function() {
                for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) this.isDatasetVisible(e) && t++;
                return t
            },
            isDatasetVisible: function(t) {
                var e = this.getDatasetMeta(t);
                return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
            },
            generateLegend: function() {
                return this.options.legendCallback(this)
            },
            destroyDatasetMeta: function(t) {
                var e = this.id,
                    n = this.data.datasets[t],
                    i = n._meta && n._meta[e];
                i && (i.controller.destroy(), delete n._meta[e])
            },
            destroy: function() {
                var e, n, i = this,
                    a = i.canvas;
                for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) i.destroyDatasetMeta(e);
                a && (i.unbindEvents(), r.canvas.clear(i), c.releaseContext(i.ctx), i.canvas = null, i.ctx = null), s.notify(i, "destroy"), delete t.instances[i.id]
            },
            toBase64Image: function() {
                return this.canvas.toDataURL.apply(this.canvas, arguments)
            },
            initToolTip: function() {
                var e = this;
                e.tooltip = new t.Tooltip({
                    _chart: e,
                    _chartInstance: e,
                    _data: e.data,
                    _options: e.options.tooltips
                }, e)
            },
            bindEvents: function() {
                var t = this,
                    e = t._listeners = {},
                    n = function() {
                        t.eventHandler.apply(t, arguments)
                    };
                r.each(t.options.events, function(i) {
                    c.addEventListener(t, i, n), e[i] = n
                }), t.options.responsive && (n = function() {
                    t.resize()
                }, c.addEventListener(t, "resize", n), e.resize = n)
            },
            unbindEvents: function() {
                var t = this,
                    e = t._listeners;
                e && (delete t._listeners, r.each(e, function(e, n) {
                    c.removeEventListener(t, n, e)
                }))
            },
            updateHoverStyle: function(t, e, n) {
                var i, r, a, o = n ? "setHoverStyle" : "removeHoverStyle";
                for (r = 0, a = t.length; r < a; ++r)(i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[o](i)
            },
            eventHandler: function(t) {
                var e = this,
                    n = e.tooltip;
                if (!1 !== s.notify(e, "beforeEvent", [t])) {
                    e._bufferedRender = !0, e._bufferedRequest = null;
                    var i = e.handleEvent(t);
                    n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), s.notify(e, "afterEvent", [t]);
                    var r = e._bufferedRequest;
                    return r ? e.render(r) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                }
            },
            handleEvent: function(t) {
                var e, n = this,
                    i = n.options || {},
                    a = i.hover;
                return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), r.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !r.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e
            }
        }), t.Controller = t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592);
    t.exports = function(t) {
        var e = ["push", "pop", "shift", "splice", "unshift"];

        function n(t, n) {
            var i = t._chartjs;
            if (i) {
                var r = i.listeners,
                    a = r.indexOf(n); - 1 !== a && r.splice(a, 1), r.length > 0 || (e.forEach(function(e) {
                    delete t[e]
                }), delete t._chartjs)
            }
        }
        t.DatasetController = function(t, e) {
            this.initialize(t, e)
        }, i.extend(t.DatasetController.prototype, {
            datasetElementType: null,
            dataElementType: null,
            initialize: function(t, e) {
                this.chart = t, this.index = e, this.linkScales(), this.addElements()
            },
            updateIndex: function(t) {
                this.index = t
            },
            linkScales: function() {
                var t = this,
                    e = t.getMeta(),
                    n = t.getDataset();
                null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id)
            },
            getDataset: function() {
                return this.chart.data.datasets[this.index]
            },
            getMeta: function() {
                return this.chart.getDatasetMeta(this.index)
            },
            getScaleForId: function(t) {
                return this.chart.scales[t]
            },
            reset: function() {
                this.update(!0)
            },
            destroy: function() {
                this._data && n(this._data, this)
            },
            createMetaDataset: function() {
                var t = this.datasetElementType;
                return t && new t({
                    _chart: this.chart,
                    _datasetIndex: this.index
                })
            },
            createMetaData: function(t) {
                var e = this.dataElementType;
                return e && new e({
                    _chart: this.chart,
                    _datasetIndex: this.index,
                    _index: t
                })
            },
            addElements: function() {
                var t, e, n = this.getMeta(),
                    i = this.getDataset().data || [],
                    r = n.data;
                for (t = 0, e = i.length; t < e; ++t) r[t] = r[t] || this.createMetaData(t);
                n.dataset = n.dataset || this.createMetaDataset()
            },
            addElementAndReset: function(t) {
                var e = this.createMetaData(t);
                this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
            },
            buildOrUpdateElements: function() {
                var t, r, a = this,
                    o = a.getDataset(),
                    c = o.data || (o.data = []);
                a._data !== c && (a._data && n(a._data, a), r = a, (t = c)._chartjs ? t._chartjs.listeners.push(r) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [r]
                    }
                }), e.forEach(function(e) {
                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                        r = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            var e = Array.prototype.slice.call(arguments),
                                a = r.apply(this, e);
                            return i.each(t._chartjs.listeners, function(t) {
                                "function" == typeof t[n] && t[n].apply(t, e)
                            }), a
                        }
                    })
                })), a._data = c), a.resyncElements()
            },
            update: i.noop,
            transition: function(t) {
                for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) n[r].transition(t);
                e.dataset && e.dataset.transition(t)
            },
            draw: function() {
                var t = this.getMeta(),
                    e = t.data || [],
                    n = e.length,
                    i = 0;
                for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw()
            },
            removeHoverStyle: function(t, e) {
                var n = this.chart.data.datasets[t._datasetIndex],
                    r = t._index,
                    a = t.custom || {},
                    o = i.valueAtIndexOrDefault,
                    c = t._model;
                c.backgroundColor = a.backgroundColor ? a.backgroundColor : o(n.backgroundColor, r, e.backgroundColor), c.borderColor = a.borderColor ? a.borderColor : o(n.borderColor, r, e.borderColor), c.borderWidth = a.borderWidth ? a.borderWidth : o(n.borderWidth, r, e.borderWidth)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    r = t.custom || {},
                    a = i.valueAtIndexOrDefault,
                    o = i.getHoverColor,
                    c = t._model;
                c.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : a(e.hoverBackgroundColor, n, o(c.backgroundColor)), c.borderColor = r.hoverBorderColor ? r.hoverBorderColor : a(e.hoverBorderColor, n, o(c.borderColor)), c.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : a(e.hoverBorderWidth, n, c.borderWidth)
            },
            resyncElements: function() {
                var t = this.getMeta(),
                    e = this.getDataset().data,
                    n = t.data.length,
                    i = e.length;
                i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n)
            },
            insertElements: function(t, e) {
                for (var n = 0; n < e; ++n) this.addElementAndReset(t + n)
            },
            onDataPush: function() {
                this.insertElements(this.getDataset().data.length - 1, arguments.length)
            },
            onDataPop: function() {
                this.getMeta().data.pop()
            },
            onDataShift: function() {
                this.getMeta().data.shift()
            },
            onDataSplice: function(t, e) {
                this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
            },
            onDataUnshift: function() {
                this.insertElements(0, arguments.length)
            }
        }), t.DatasetController.extend = i.inherits
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(592),
        a = n(610);
    t.exports = function(t) {
        t.scaleService = {
            constructors: {},
            defaults: {},
            registerScaleType: function(t, e, n) {
                this.constructors[t] = e, this.defaults[t] = r.clone(n)
            },
            getScaleConstructor: function(t) {
                return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
            },
            getScaleDefaults: function(t) {
                return this.defaults.hasOwnProperty(t) ? r.merge({}, [i.scale, this.defaults[t]]) : {}
            },
            updateScaleDefaults: function(t, e) {
                this.defaults.hasOwnProperty(t) && (this.defaults[t] = r.extend(this.defaults[t], e))
            },
            addScalesToLayout: function(t) {
                r.each(t.scales, function(e) {
                    e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, a.addBox(t, e)
                })
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592),
        o = n(615);

    function c(t) {
        var e, n, i = [];
        for (e = 0, n = t.length; e < n; ++e) i.push(t[e].label);
        return i
    }

    function s(t, e, n) {
        var i = t.getPixelForTick(e);
        return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i
    }
    i._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            lineHeight: 1.2,
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: o.formatters.values,
            minor: {},
            major: {}
        }
    }), t.exports = function(t) {
        function e(t, e, n) {
            return a.isArray(e) ? a.longestText(t, n, e) : t.measureText(e).width
        }

        function n(t) {
            var e = a.valueOrDefault,
                n = i.global,
                r = e(t.fontSize, n.defaultFontSize),
                o = e(t.fontStyle, n.defaultFontStyle),
                c = e(t.fontFamily, n.defaultFontFamily);
            return {
                size: r,
                style: o,
                family: c,
                font: a.fontString(r, o, c)
            }
        }

        function o(t) {
            return a.options.toLineHeight(a.valueOrDefault(t.lineHeight, 1.2), a.valueOrDefault(t.fontSize, i.global.defaultFontSize))
        }
        t.Scale = r.extend({
            getPadding: function() {
                return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0
                }
            },
            getTicks: function() {
                return this._ticks
            },
            mergeTicksOptions: function() {
                var t = this.options.ticks;
                for (var e in !1 === t.minor && (t.minor = {
                        display: !1
                    }), !1 === t.major && (t.major = {
                        display: !1
                    }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
            },
            beforeUpdate: function() {
                a.callback(this.options.beforeUpdate, [this])
            },
            update: function(t, e, n) {
                var i, r, o, c, s, l, p = this;
                for (p.beforeUpdate(), p.maxWidth = t, p.maxHeight = e, p.margins = a.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, n), p.longestTextCache = p.longestTextCache || {}, p.beforeSetDimensions(), p.setDimensions(), p.afterSetDimensions(), p.beforeDataLimits(), p.determineDataLimits(), p.afterDataLimits(), p.beforeBuildTicks(), s = p.buildTicks() || [], p.afterBuildTicks(), p.beforeTickToLabelConversion(), o = p.convertTicksToLabels(s) || p.ticks, p.afterTickToLabelConversion(), p.ticks = o, i = 0, r = o.length; i < r; ++i) c = o[i], (l = s[i]) ? l.label = c : s.push(l = {
                    label: c,
                    major: !1
                });
                return p._ticks = s, p.beforeCalculateTickRotation(), p.calculateTickRotation(), p.afterCalculateTickRotation(), p.beforeFit(), p.fit(), p.afterFit(), p.afterUpdate(), p.minSize
            },
            afterUpdate: function() {
                a.callback(this.options.afterUpdate, [this])
            },
            beforeSetDimensions: function() {
                a.callback(this.options.beforeSetDimensions, [this])
            },
            setDimensions: function() {
                var t = this;
                t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
            },
            afterSetDimensions: function() {
                a.callback(this.options.afterSetDimensions, [this])
            },
            beforeDataLimits: function() {
                a.callback(this.options.beforeDataLimits, [this])
            },
            determineDataLimits: a.noop,
            afterDataLimits: function() {
                a.callback(this.options.afterDataLimits, [this])
            },
            beforeBuildTicks: function() {
                a.callback(this.options.beforeBuildTicks, [this])
            },
            buildTicks: a.noop,
            afterBuildTicks: function() {
                a.callback(this.options.afterBuildTicks, [this])
            },
            beforeTickToLabelConversion: function() {
                a.callback(this.options.beforeTickToLabelConversion, [this])
            },
            convertTicksToLabels: function() {
                var t = this.options.ticks;
                this.ticks = this.ticks.map(t.userCallback || t.callback, this)
            },
            afterTickToLabelConversion: function() {
                a.callback(this.options.afterTickToLabelConversion, [this])
            },
            beforeCalculateTickRotation: function() {
                a.callback(this.options.beforeCalculateTickRotation, [this])
            },
            calculateTickRotation: function() {
                var t = this,
                    e = t.ctx,
                    i = t.options.ticks,
                    r = c(t._ticks),
                    o = n(i);
                e.font = o.font;
                var s = i.minRotation || 0;
                if (r.length && t.options.display && t.isHorizontal())
                    for (var l, p = a.longestText(e, o.font, r, t.longestTextCache), u = p, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u > d && s < i.maxRotation;) {
                        var h = a.toRadians(s);
                        if (l = Math.cos(h), Math.sin(h) * p > t.maxHeight) {
                            s--;
                            break
                        }
                        s++, u = l * p
                    }
                t.labelRotation = s
            },
            afterCalculateTickRotation: function() {
                a.callback(this.options.afterCalculateTickRotation, [this])
            },
            beforeFit: function() {
                a.callback(this.options.beforeFit, [this])
            },
            fit: function() {
                var t = this,
                    i = t.minSize = {
                        width: 0,
                        height: 0
                    },
                    r = c(t._ticks),
                    s = t.options,
                    l = s.ticks,
                    p = s.scaleLabel,
                    u = s.gridLines,
                    d = s.display,
                    h = t.isHorizontal(),
                    f = n(l),
                    x = s.gridLines.tickMarkLength;
                if (i.width = h ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : d && u.drawTicks ? x : 0, i.height = h ? d && u.drawTicks ? x : 0 : t.maxHeight, p.display && d) {
                    var m = o(p) + a.options.toPadding(p.padding).height;
                    h ? i.height += m : i.width += m
                }
                if (l.display && d) {
                    var g = a.longestText(t.ctx, f.font, r, t.longestTextCache),
                        v = a.numberOfLabelLines(r),
                        y = .5 * f.size,
                        b = t.options.ticks.padding;
                    if (h) {
                        t.longestLabelWidth = g;
                        var w = a.toRadians(t.labelRotation),
                            _ = Math.cos(w),
                            k = Math.sin(w) * g + f.size * v + y * (v - 1) + y;
                        i.height = Math.min(t.maxHeight, i.height + k + b), t.ctx.font = f.font;
                        var S = e(t.ctx, r[0], f.font),
                            M = e(t.ctx, r[r.length - 1], f.font);
                        0 !== t.labelRotation ? (t.paddingLeft = "bottom" === s.position ? _ * S + 3 : _ * y + 3, t.paddingRight = "bottom" === s.position ? _ * y + 3 : _ * M + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = M / 2 + 3)
                    } else l.mirror ? g = 0 : g += b + y, i.width = Math.min(t.maxWidth, i.width + g), t.paddingTop = f.size / 2, t.paddingBottom = f.size / 2
                }
                t.handleMargins(), t.width = i.width, t.height = i.height
            },
            handleMargins: function() {
                var t = this;
                t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
            },
            afterFit: function() {
                a.callback(this.options.afterFit, [this])
            },
            isHorizontal: function() {
                return "top" === this.options.position || "bottom" === this.options.position
            },
            isFullWidth: function() {
                return this.options.fullWidth
            },
            getRightValue: function(t) {
                if (a.isNullOrUndef(t)) return NaN;
                if ("number" == typeof t && !isFinite(t)) return NaN;
                if (t)
                    if (this.isHorizontal()) {
                        if (void 0 !== t.x) return this.getRightValue(t.x)
                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                return t
            },
            getLabelForIndex: a.noop,
            getPixelForValue: a.noop,
            getValueForPixel: a.noop,
            getPixelForTick: function(t) {
                var e = this,
                    n = e.options.offset;
                if (e.isHorizontal()) {
                    var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                        r = i * t + e.paddingLeft;
                    n && (r += i / 2);
                    var a = e.left + Math.round(r);
                    return a += e.isFullWidth() ? e.margins.left : 0
                }
                var o = e.height - (e.paddingTop + e.paddingBottom);
                return e.top + t * (o / (e._ticks.length - 1))
            },
            getPixelForDecimal: function(t) {
                var e = this;
                if (e.isHorizontal()) {
                    var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                        i = e.left + Math.round(n);
                    return i += e.isFullWidth() ? e.margins.left : 0
                }
                return e.top + t * e.height
            },
            getBasePixel: function() {
                return this.getPixelForValue(this.getBaseValue())
            },
            getBaseValue: function() {
                var t = this.min,
                    e = this.max;
                return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
            },
            _autoSkip: function(t) {
                var e, n, i, r, o = this,
                    c = o.isHorizontal(),
                    s = o.options.ticks.minor,
                    l = t.length,
                    p = a.toRadians(o.labelRotation),
                    u = Math.cos(p),
                    d = o.longestLabelWidth * u,
                    h = [];
                for (s.maxTicksLimit && (r = s.maxTicksLimit), c && (e = !1, (d + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((d + s.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), r && l > r && (e = Math.max(e, Math.floor(l / r)))), n = 0; n < l; n++) i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= l) && n !== l - 1 && delete i.label, h.push(i);
                return h
            },
            draw: function(t) {
                var e = this,
                    r = e.options;
                if (r.display) {
                    var c = e.ctx,
                        l = i.global,
                        p = r.ticks.minor,
                        u = r.ticks.major || p,
                        d = r.gridLines,
                        h = r.scaleLabel,
                        f = 0 !== e.labelRotation,
                        x = e.isHorizontal(),
                        m = p.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                        g = a.valueOrDefault(p.fontColor, l.defaultFontColor),
                        v = n(p),
                        y = a.valueOrDefault(u.fontColor, l.defaultFontColor),
                        b = n(u),
                        w = d.drawTicks ? d.tickMarkLength : 0,
                        _ = a.valueOrDefault(h.fontColor, l.defaultFontColor),
                        k = n(h),
                        S = a.options.toPadding(h.padding),
                        M = a.toRadians(e.labelRotation),
                        C = [],
                        T = e.options.gridLines.lineWidth,
                        P = "right" === r.position ? e.right : e.right - T - w,
                        D = "right" === r.position ? e.right + w : e.right,
                        O = "bottom" === r.position ? e.top + T : e.bottom - w - T,
                        A = "bottom" === r.position ? e.top + T + w : e.bottom + T;
                    if (a.each(m, function(n, i) {
                            if (!a.isNullOrUndef(n.label)) {
                                var o, c, u, h, g, v, y, b, _, k, S, I, R, L, F = n.label;
                                i === e.zeroLineIndex && r.offset === d.offsetGridLines ? (o = d.zeroLineWidth, c = d.zeroLineColor, u = d.zeroLineBorderDash, h = d.zeroLineBorderDashOffset) : (o = a.valueAtIndexOrDefault(d.lineWidth, i), c = a.valueAtIndexOrDefault(d.color, i), u = a.valueOrDefault(d.borderDash, l.borderDash), h = a.valueOrDefault(d.borderDashOffset, l.borderDashOffset));
                                var E = "middle",
                                    z = "middle",
                                    N = p.padding;
                                if (x) {
                                    var W = w + N;
                                    "bottom" === r.position ? (z = f ? "middle" : "top", E = f ? "right" : "center", L = e.top + W) : (z = f ? "middle" : "bottom", E = f ? "left" : "center", L = e.bottom - W);
                                    var V = s(e, i, d.offsetGridLines && m.length > 1);
                                    V < e.left && (c = "rgba(0,0,0,0)"), V += a.aliasPixel(o), R = e.getPixelForTick(i) + p.labelOffset, g = y = _ = S = V, v = O, b = A, k = t.top, I = t.bottom + T
                                } else {
                                    var j, B = "left" === r.position;
                                    p.mirror ? (E = B ? "left" : "right", j = N) : (E = B ? "right" : "left", j = w + N), R = B ? e.right - j : e.left + j;
                                    var Y = s(e, i, d.offsetGridLines && m.length > 1);
                                    Y < e.top && (c = "rgba(0,0,0,0)"), Y += a.aliasPixel(o), L = e.getPixelForTick(i) + p.labelOffset, g = P, y = D, _ = t.left, S = t.right + T, v = b = k = I = Y
                                }
                                C.push({
                                    tx1: g,
                                    ty1: v,
                                    tx2: y,
                                    ty2: b,
                                    x1: _,
                                    y1: k,
                                    x2: S,
                                    y2: I,
                                    labelX: R,
                                    labelY: L,
                                    glWidth: o,
                                    glColor: c,
                                    glBorderDash: u,
                                    glBorderDashOffset: h,
                                    rotation: -1 * M,
                                    label: F,
                                    major: n.major,
                                    textBaseline: z,
                                    textAlign: E
                                })
                            }
                        }), a.each(C, function(t) {
                            if (d.display && (c.save(), c.lineWidth = t.glWidth, c.strokeStyle = t.glColor, c.setLineDash && (c.setLineDash(t.glBorderDash), c.lineDashOffset = t.glBorderDashOffset), c.beginPath(), d.drawTicks && (c.moveTo(t.tx1, t.ty1), c.lineTo(t.tx2, t.ty2)), d.drawOnChartArea && (c.moveTo(t.x1, t.y1), c.lineTo(t.x2, t.y2)), c.stroke(), c.restore()), p.display) {
                                c.save(), c.translate(t.labelX, t.labelY), c.rotate(t.rotation), c.font = t.major ? b.font : v.font, c.fillStyle = t.major ? y : g, c.textBaseline = t.textBaseline, c.textAlign = t.textAlign;
                                var n = t.label;
                                if (a.isArray(n))
                                    for (var i = n.length, r = 1.5 * v.size, o = e.isHorizontal() ? 0 : -r * (i - 1) / 2, s = 0; s < i; ++s) c.fillText("" + n[s], 0, o), o += r;
                                else c.fillText(n, 0, 0);
                                c.restore()
                            }
                        }), h.display) {
                        var I, R, L = 0,
                            F = o(h) / 2;
                        if (x) I = e.left + (e.right - e.left) / 2, R = "bottom" === r.position ? e.bottom - F - S.bottom : e.top + F + S.top;
                        else {
                            var E = "left" === r.position;
                            I = E ? e.left + F + S.top : e.right - F - S.top, R = e.top + (e.bottom - e.top) / 2, L = E ? -.5 * Math.PI : .5 * Math.PI
                        }
                        c.save(), c.translate(I, R), c.rotate(L), c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = _, c.font = k.font, c.fillText(h.labelString, 0, 0), c.restore()
                    }
                    if (d.drawBorder) {
                        c.lineWidth = a.valueAtIndexOrDefault(d.lineWidth, 0), c.strokeStyle = a.valueAtIndexOrDefault(d.color, 0);
                        var z = e.left,
                            N = e.right + T,
                            W = e.top,
                            V = e.bottom + T,
                            j = a.aliasPixel(c.lineWidth);
                        x ? (W = V = "top" === r.position ? e.bottom : e.top, W += j, V += j) : (z = N = "left" === r.position ? e.right : e.left, z += j, N += j), c.beginPath(), c.moveTo(z, W), c.lineTo(N, V), c.stroke()
                    }
                }
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592);
    i._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: a.noop,
                title: function(t, e) {
                    var n = "",
                        i = e.labels,
                        r = i ? i.length : 0;
                    if (t.length > 0) {
                        var a = t[0];
                        a.xLabel ? n = a.xLabel : r > 0 && a.index < r && (n = i[a.index])
                    }
                    return n
                },
                afterTitle: a.noop,
                beforeBody: a.noop,
                beforeLabel: a.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), n += t.yLabel
                },
                labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: n.borderColor,
                        backgroundColor: n.backgroundColor
                    }
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor
                },
                afterLabel: a.noop,
                afterBody: a.noop,
                beforeFooter: a.noop,
                footer: a.noop,
                afterFooter: a.noop
            }
        }
    }), t.exports = function(t) {
        function e(t, e) {
            var n = a.color(t);
            return n.alpha(e * n.alpha()).rgbaString()
        }

        function n(t, e) {
            return e && (a.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }

        function o(t) {
            var e = i.global,
                n = a.valueOrDefault;
            return {
                xPadding: t.xPadding,
                yPadding: t.yPadding,
                xAlign: t.xAlign,
                yAlign: t.yAlign,
                bodyFontColor: t.bodyFontColor,
                _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
                _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
                _bodyAlign: t.bodyAlign,
                bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
                bodySpacing: t.bodySpacing,
                titleFontColor: t.titleFontColor,
                _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
                _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
                titleFontSize: n(t.titleFontSize, e.defaultFontSize),
                _titleAlign: t.titleAlign,
                titleSpacing: t.titleSpacing,
                titleMarginBottom: t.titleMarginBottom,
                footerFontColor: t.footerFontColor,
                _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
                _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
                footerFontSize: n(t.footerFontSize, e.defaultFontSize),
                _footerAlign: t.footerAlign,
                footerSpacing: t.footerSpacing,
                footerMarginTop: t.footerMarginTop,
                caretSize: t.caretSize,
                cornerRadius: t.cornerRadius,
                backgroundColor: t.backgroundColor,
                opacity: 0,
                legendColorBackground: t.multiKeyBackground,
                displayColors: t.displayColors,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth
            }
        }
        t.Tooltip = r.extend({
            initialize: function() {
                this._model = o(this._options), this._lastActive = []
            },
            getTitle: function() {
                var t = this._options.callbacks,
                    e = t.beforeTitle.apply(this, arguments),
                    i = t.title.apply(this, arguments),
                    r = t.afterTitle.apply(this, arguments),
                    a = [];
                return a = n(a = n(a = n(a, e), i), r)
            },
            getBeforeBody: function() {
                var t = this._options.callbacks.beforeBody.apply(this, arguments);
                return a.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getBody: function(t, e) {
                var i = this,
                    r = i._options.callbacks,
                    o = [];
                return a.each(t, function(t) {
                    var a = {
                        before: [],
                        lines: [],
                        after: []
                    };
                    n(a.before, r.beforeLabel.call(i, t, e)), n(a.lines, r.label.call(i, t, e)), n(a.after, r.afterLabel.call(i, t, e)), o.push(a)
                }), o
            },
            getAfterBody: function() {
                var t = this._options.callbacks.afterBody.apply(this, arguments);
                return a.isArray(t) ? t : void 0 !== t ? [t] : []
            },
            getFooter: function() {
                var t = this._options.callbacks,
                    e = t.beforeFooter.apply(this, arguments),
                    i = t.footer.apply(this, arguments),
                    r = t.afterFooter.apply(this, arguments),
                    a = [];
                return a = n(a = n(a = n(a, e), i), r)
            },
            update: function(e) {
                var n, i, r, c, s, l, p, u = this,
                    d = u._options,
                    h = u._model,
                    f = u._model = o(d),
                    x = u._active,
                    m = u._data,
                    g = {
                        xAlign: h.xAlign,
                        yAlign: h.yAlign
                    },
                    v = {
                        x: h.x,
                        y: h.y
                    },
                    y = {
                        width: h.width,
                        height: h.height
                    },
                    b = {
                        x: h.caretX,
                        y: h.caretY
                    };
                if (x.length) {
                    f.opacity = 1;
                    var w = [],
                        _ = [];
                    b = t.Tooltip.positioners[d.position].call(u, x, u._eventPosition);
                    var k = [];
                    for (n = 0, i = x.length; n < i; ++n) k.push((r = x[n], c = void 0, s = void 0, void 0, void 0, c = r._xScale, s = r._yScale || r._scale, l = r._index, p = r._datasetIndex, {
                        xLabel: c ? c.getLabelForIndex(l, p) : "",
                        yLabel: s ? s.getLabelForIndex(l, p) : "",
                        index: l,
                        datasetIndex: p,
                        x: r._model.x,
                        y: r._model.y
                    }));
                    d.filter && (k = k.filter(function(t) {
                        return d.filter(t, m)
                    })), d.itemSort && (k = k.sort(function(t, e) {
                        return d.itemSort(t, e, m)
                    })), a.each(k, function(t) {
                        w.push(d.callbacks.labelColor.call(u, t, u._chart)), _.push(d.callbacks.labelTextColor.call(u, t, u._chart))
                    }), f.title = u.getTitle(k, m), f.beforeBody = u.getBeforeBody(k, m), f.body = u.getBody(k, m), f.afterBody = u.getAfterBody(k, m), f.footer = u.getFooter(k, m), f.x = Math.round(b.x), f.y = Math.round(b.y), f.caretPadding = d.caretPadding, f.labelColors = w, f.labelTextColors = _, f.dataPoints = k, v = function(t, e, n, i) {
                        var r = t.x,
                            a = t.y,
                            o = t.caretSize,
                            c = t.caretPadding,
                            s = t.cornerRadius,
                            l = n.xAlign,
                            p = n.yAlign,
                            u = o + c,
                            d = s + c;
                        return "right" === l ? r -= e.width : "center" === l && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === p ? a += u : a -= "bottom" === p ? e.height + u : e.height / 2, "center" === p ? "left" === l ? r += u : "right" === l && (r -= u) : "left" === l ? r -= d : "right" === l && (r += d), {
                            x: r,
                            y: a
                        }
                    }(f, y = function(t, e) {
                        var n = t._chart.ctx,
                            i = 2 * e.yPadding,
                            r = 0,
                            o = e.body,
                            c = o.reduce(function(t, e) {
                                return t + e.before.length + e.lines.length + e.after.length
                            }, 0);
                        c += e.beforeBody.length + e.afterBody.length;
                        var s = e.title.length,
                            l = e.footer.length,
                            p = e.titleFontSize,
                            u = e.bodyFontSize,
                            d = e.footerFontSize;
                        i += s * p, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += c * u, i += c ? (c - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * d, i += l ? (l - 1) * e.footerSpacing : 0;
                        var h = 0,
                            f = function(t) {
                                r = Math.max(r, n.measureText(t).width + h)
                            };
                        return n.font = a.fontString(p, e._titleFontStyle, e._titleFontFamily), a.each(e.title, f), n.font = a.fontString(u, e._bodyFontStyle, e._bodyFontFamily), a.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? u + 2 : 0, a.each(o, function(t) {
                            a.each(t.before, f), a.each(t.lines, f), a.each(t.after, f)
                        }), h = 0, n.font = a.fontString(d, e._footerFontStyle, e._footerFontFamily), a.each(e.footer, f), {
                            width: r += 2 * e.xPadding,
                            height: i
                        }
                    }(this, f), g = function(t, e) {
                        var n, i, r, a, o, c = t._model,
                            s = t._chart,
                            l = t._chart.chartArea,
                            p = "center",
                            u = "center";
                        c.y < e.height ? u = "top" : c.y > s.height - e.height && (u = "bottom");
                        var d = (l.left + l.right) / 2,
                            h = (l.top + l.bottom) / 2;
                        "center" === u ? (n = function(t) {
                            return t <= d
                        }, i = function(t) {
                            return t > d
                        }) : (n = function(t) {
                            return t <= e.width / 2
                        }, i = function(t) {
                            return t >= s.width - e.width / 2
                        }), r = function(t) {
                            return t + e.width + c.caretSize + c.caretPadding > s.width
                        }, a = function(t) {
                            return t - e.width - c.caretSize - c.caretPadding < 0
                        }, o = function(t) {
                            return t <= h ? "top" : "bottom"
                        }, n(c.x) ? (p = "left", r(c.x) && (p = "center", u = o(c.y))) : i(c.x) && (p = "right", a(c.x) && (p = "center", u = o(c.y)));
                        var f = t._options;
                        return {
                            xAlign: f.xAlign ? f.xAlign : p,
                            yAlign: f.yAlign ? f.yAlign : u
                        }
                    }(this, y), u._chart)
                } else f.opacity = 0;
                return f.xAlign = g.xAlign, f.yAlign = g.yAlign, f.x = v.x, f.y = v.y, f.width = y.width, f.height = y.height, f.caretX = b.x, f.caretY = b.y, u._model = f, e && d.custom && d.custom.call(u, f), u
            },
            drawCaret: function(t, e) {
                var n = this._chart.ctx,
                    i = this._view,
                    r = this.getCaretPosition(t, e, i);
                n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
            },
            getCaretPosition: function(t, e, n) {
                var i, r, a, o, c, s, l = n.caretSize,
                    p = n.cornerRadius,
                    u = n.xAlign,
                    d = n.yAlign,
                    h = t.x,
                    f = t.y,
                    x = e.width,
                    m = e.height;
                if ("center" === d) c = f + m / 2, "left" === u ? (r = (i = h) - l, a = i, o = c + l, s = c - l) : (r = (i = h + x) + l, a = i, o = c - l, s = c + l);
                else if ("left" === u ? (i = (r = h + p + l) - l, a = r + l) : "right" === u ? (i = (r = h + x - p - l) - l, a = r + l) : (i = (r = n.caretX) - l, a = r + l), "top" === d) c = (o = f) - l, s = o;
                else {
                    c = (o = f + m) + l, s = o;
                    var g = a;
                    a = i, i = g
                }
                return {
                    x1: i,
                    x2: r,
                    x3: a,
                    y1: o,
                    y2: c,
                    y3: s
                }
            },
            drawTitle: function(t, n, i, r) {
                var o = n.title;
                if (o.length) {
                    i.textAlign = n._titleAlign, i.textBaseline = "top";
                    var c, s, l = n.titleFontSize,
                        p = n.titleSpacing;
                    for (i.fillStyle = e(n.titleFontColor, r), i.font = a.fontString(l, n._titleFontStyle, n._titleFontFamily), c = 0, s = o.length; c < s; ++c) i.fillText(o[c], t.x, t.y), t.y += l + p, c + 1 === o.length && (t.y += n.titleMarginBottom - p)
                }
            },
            drawBody: function(t, n, i, r) {
                var o = n.bodyFontSize,
                    c = n.bodySpacing,
                    s = n.body;
                i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = a.fontString(o, n._bodyFontStyle, n._bodyFontFamily);
                var l = 0,
                    p = function(e) {
                        i.fillText(e, t.x + l, t.y), t.y += o + c
                    };
                i.fillStyle = e(n.bodyFontColor, r), a.each(n.beforeBody, p);
                var u = n.displayColors;
                l = u ? o + 2 : 0, a.each(s, function(c, s) {
                    var l = e(n.labelTextColors[s], r);
                    i.fillStyle = l, a.each(c.before, p), a.each(c.lines, function(a) {
                        u && (i.fillStyle = e(n.legendColorBackground, r), i.fillRect(t.x, t.y, o, o), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[s].borderColor, r), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(n.labelColors[s].backgroundColor, r), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = l), p(a)
                    }), a.each(c.after, p)
                }), l = 0, a.each(n.afterBody, p), t.y -= c
            },
            drawFooter: function(t, n, i, r) {
                var o = n.footer;
                o.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, r), i.font = a.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), a.each(o, function(e) {
                    i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing
                }))
            },
            drawBackground: function(t, n, i, r, a) {
                i.fillStyle = e(n.backgroundColor, a), i.strokeStyle = e(n.borderColor, a), i.lineWidth = n.borderWidth;
                var o = n.xAlign,
                    c = n.yAlign,
                    s = t.x,
                    l = t.y,
                    p = r.width,
                    u = r.height,
                    d = n.cornerRadius;
                i.beginPath(), i.moveTo(s + d, l), "top" === c && this.drawCaret(t, r), i.lineTo(s + p - d, l), i.quadraticCurveTo(s + p, l, s + p, l + d), "center" === c && "right" === o && this.drawCaret(t, r), i.lineTo(s + p, l + u - d), i.quadraticCurveTo(s + p, l + u, s + p - d, l + u), "bottom" === c && this.drawCaret(t, r), i.lineTo(s + d, l + u), i.quadraticCurveTo(s, l + u, s, l + u - d), "center" === c && "left" === o && this.drawCaret(t, r), i.lineTo(s, l + d), i.quadraticCurveTo(s, l, s + d, l), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke()
            },
            draw: function() {
                var t = this._chart.ctx,
                    e = this._view;
                if (0 !== e.opacity) {
                    var n = {
                            width: e.width,
                            height: e.height
                        },
                        i = {
                            x: e.x,
                            y: e.y
                        },
                        r = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                        a = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                    this._options.enabled && a && (this.drawBackground(i, e, t, n, r), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, r), this.drawBody(i, e, t, r), this.drawFooter(i, e, t, r))
                }
            },
            handleEvent: function(t) {
                var e, n = this,
                    i = n._options;
                return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !a.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                    x: t.x,
                    y: t.y
                }, n.update(!0), n.pivot())), e
            }
        }), t.Tooltip.positioners = {
            average: function(t) {
                if (!t.length) return !1;
                var e, n, i = 0,
                    r = 0,
                    a = 0;
                for (e = 0, n = t.length; e < n; ++e) {
                    var o = t[e];
                    if (o && o.hasValue()) {
                        var c = o.tooltipPosition();
                        i += c.x, r += c.y, ++a
                    }
                }
                return {
                    x: Math.round(i / a),
                    y: Math.round(r / a)
                }
            },
            nearest: function(t, e) {
                var n, i, r, o = e.x,
                    c = e.y,
                    s = Number.POSITIVE_INFINITY;
                for (n = 0, i = t.length; n < i; ++n) {
                    var l = t[n];
                    if (l && l.hasValue()) {
                        var p = l.getCenterPoint(),
                            u = a.distanceBetweenPoints(e, p);
                        u < s && (s = u, r = l)
                    }
                }
                if (r) {
                    var d = r.tooltipPosition();
                    o = d.x, c = d.y
                }
                return {
                    x: o,
                    y: c
                }
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592);
    t.exports = function(t) {
        var e = i.noop;
        t.LinearScaleBase = t.Scale.extend({
            getRightValue: function(e) {
                return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
            },
            handleTickRangeOptions: function() {
                var t = this,
                    e = t.options.ticks;
                if (e.beginAtZero) {
                    var n = i.sign(t.min),
                        r = i.sign(t.max);
                    n < 0 && r < 0 ? t.max = 0 : n > 0 && r > 0 && (t.min = 0)
                }
                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                    o = void 0 !== e.max || void 0 !== e.suggestedMax;
                void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
            },
            getTickLimit: e,
            handleDirectionalChanges: e,
            buildTicks: function() {
                var t = this,
                    e = t.options.ticks,
                    n = t.getTickLimit(),
                    r = {
                        maxTicks: n = Math.max(2, n),
                        min: e.min,
                        max: e.max,
                        stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
                    },
                    a = t.ticks = function(t, e) {
                        var n, r = [];
                        if (t.stepSize && t.stepSize > 0) n = t.stepSize;
                        else {
                            var a = i.niceNum(e.max - e.min, !1);
                            n = i.niceNum(a / (t.maxTicks - 1), !0)
                        }
                        var o = Math.floor(e.min / n) * n,
                            c = Math.ceil(e.max / n) * n;
                        t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (o = t.min, c = t.max);
                        var s = (c - o) / n;
                        s = i.almostEquals(s, Math.round(s), n / 1e3) ? Math.round(s) : Math.ceil(s);
                        var l = 1;
                        n < 1 && (l = Math.pow(10, n.toString().length - 2), o = Math.round(o * l) / l, c = Math.round(c * l) / l), r.push(void 0 !== t.min ? t.min : o);
                        for (var p = 1; p < s; ++p) r.push(Math.round((o + p * n) * l) / l);
                        return r.push(void 0 !== t.max ? t.max : c), r
                    }(r, t);
                t.handleDirectionalChanges(), t.max = i.max(a), t.min = i.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
            },
            convertTicksToLabels: function() {
                var e = this;
                e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = t.Scale.extend({
            getLabels: function() {
                var t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
            },
            determineDataLimits: function() {
                var t, e = this,
                    n = e.getLabels();
                e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex]
            },
            buildTicks: function() {
                var t = this,
                    e = t.getLabels();
                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
            },
            getLabelForIndex: function(t, e) {
                var n = this,
                    i = n.chart.data,
                    r = n.isHorizontal();
                return i.yLabels && !r ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex]
            },
            getPixelForValue: function(t, e) {
                var n, i = this,
                    r = i.options.offset,
                    a = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);
                if (void 0 !== t && null !== t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
                    var o = i.getLabels();
                    t = n || t;
                    var c = o.indexOf(t);
                    e = -1 !== c ? c : e
                }
                if (i.isHorizontal()) {
                    var s = i.width / a,
                        l = s * (e - i.minIndex);
                    return r && (l += s / 2), i.left + Math.round(l)
                }
                var p = i.height / a,
                    u = p * (e - i.minIndex);
                return r && (u += p / 2), i.top + Math.round(u)
            },
            getPixelForTick: function(t) {
                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
            },
            getValueForPixel: function(t) {
                var e = this,
                    n = e.options.offset,
                    i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                    r = e.isHorizontal(),
                    a = (r ? e.width : e.height) / i;
                return t -= r ? e.left : e.top, n && (t -= a / 2), (t <= 0 ? 0 : Math.round(t / a)) + e.minIndex
            },
            getBasePixel: function() {
                return this.bottom
            }
        });
        t.scaleService.registerScaleType("category", e, {
            position: "bottom"
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(592),
        a = n(615);
    t.exports = function(t) {
        var e = {
                position: "left",
                ticks: {
                    callback: a.formatters.linear
                }
            },
            n = t.LinearScaleBase.extend({
                determineDataLimits: function() {
                    var t = this,
                        e = t.options,
                        n = t.chart,
                        i = n.data.datasets,
                        a = t.isHorizontal();

                    function o(e) {
                        return a ? e.xAxisID === t.id : e.yAxisID === t.id
                    }
                    t.min = null, t.max = null;
                    var c = e.stacked;
                    if (void 0 === c && r.each(i, function(t, e) {
                            if (!c) {
                                var i = n.getDatasetMeta(e);
                                n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (c = !0)
                            }
                        }), e.stacked || c) {
                        var s = {};
                        r.each(i, function(i, a) {
                            var c = n.getDatasetMeta(a),
                                l = [c.type, void 0 === e.stacked && void 0 === c.stack ? a : "", c.stack].join(".");
                            void 0 === s[l] && (s[l] = {
                                positiveValues: [],
                                negativeValues: []
                            });
                            var p = s[l].positiveValues,
                                u = s[l].negativeValues;
                            n.isDatasetVisible(a) && o(c) && r.each(i.data, function(n, i) {
                                var r = +t.getRightValue(n);
                                isNaN(r) || c.data[i].hidden || (p[i] = p[i] || 0, u[i] = u[i] || 0, e.relativePoints ? p[i] = 100 : r < 0 ? u[i] += r : p[i] += r)
                            })
                        }), r.each(s, function(e) {
                            var n = e.positiveValues.concat(e.negativeValues),
                                i = r.min(n),
                                a = r.max(n);
                            t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a)
                        })
                    } else r.each(i, function(e, i) {
                        var a = n.getDatasetMeta(i);
                        n.isDatasetVisible(i) && o(a) && r.each(e.data, function(e, n) {
                            var i = +t.getRightValue(e);
                            isNaN(i) || a.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i))
                        })
                    });
                    t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                },
                getTickLimit: function() {
                    var t, e = this.options.ticks;
                    if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                    else {
                        var n = r.valueOrDefault(e.fontSize, i.global.defaultFontSize);
                        t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * n)))
                    }
                    return t
                },
                handleDirectionalChanges: function() {
                    this.isHorizontal() || this.ticks.reverse()
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForValue: function(t) {
                    var e = this,
                        n = e.start,
                        i = +e.getRightValue(t),
                        r = e.end - n;
                    return e.isHorizontal() ? e.left + e.width / r * (i - n) : e.bottom - e.height / r * (i - n)
                },
                getValueForPixel: function(t) {
                    var e = this,
                        n = e.isHorizontal(),
                        i = n ? e.width : e.height,
                        r = (n ? t - e.left : e.bottom - t) / i;
                    return e.start + (e.end - e.start) * r
                },
                getPixelForTick: function(t) {
                    return this.getPixelForValue(this.ticksAsNumbers[t])
                }
            });
        t.scaleService.registerScaleType("linear", n, e)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(592),
        r = n(615);
    t.exports = function(t) {
        var e = {
                position: "left",
                ticks: {
                    callback: r.formatters.logarithmic
                }
            },
            n = t.Scale.extend({
                determineDataLimits: function() {
                    var t = this,
                        e = t.options,
                        n = t.chart,
                        r = n.data.datasets,
                        a = t.isHorizontal();

                    function o(e) {
                        return a ? e.xAxisID === t.id : e.yAxisID === t.id
                    }
                    t.min = null, t.max = null, t.minNotZero = null;
                    var c = e.stacked;
                    if (void 0 === c && i.each(r, function(t, e) {
                            if (!c) {
                                var i = n.getDatasetMeta(e);
                                n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (c = !0)
                            }
                        }), e.stacked || c) {
                        var s = {};
                        i.each(r, function(r, a) {
                            var c = n.getDatasetMeta(a),
                                l = [c.type, void 0 === e.stacked && void 0 === c.stack ? a : "", c.stack].join(".");
                            n.isDatasetVisible(a) && o(c) && (void 0 === s[l] && (s[l] = []), i.each(r.data, function(e, n) {
                                var i = s[l],
                                    r = +t.getRightValue(e);
                                isNaN(r) || c.data[n].hidden || r < 0 || (i[n] = i[n] || 0, i[n] += r)
                            }))
                        }), i.each(s, function(e) {
                            if (e.length > 0) {
                                var n = i.min(e),
                                    r = i.max(e);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r)
                            }
                        })
                    } else i.each(r, function(e, r) {
                        var a = n.getDatasetMeta(r);
                        n.isDatasetVisible(r) && o(a) && i.each(e.data, function(e, n) {
                            var i = +t.getRightValue(e);
                            isNaN(i) || a.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i))
                        })
                    });
                    this.handleTickRangeOptions()
                },
                handleTickRangeOptions: function() {
                    var t = this,
                        e = t.options.ticks,
                        n = i.valueOrDefault;
                    t.min = n(e.min, t.min), t.max = n(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(i.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(i.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(i.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(i.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(i.log10(t.max))) : t.minNotZero = 1)
                },
                buildTicks: function() {
                    var t = this,
                        e = t.options.ticks,
                        n = !t.isHorizontal(),
                        r = {
                            min: e.min,
                            max: e.max
                        },
                        a = t.ticks = function(t, e) {
                            var n, r, a = [],
                                o = i.valueOrDefault,
                                c = o(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                                s = Math.floor(i.log10(e.max)),
                                l = Math.ceil(e.max / Math.pow(10, s));
                            0 === c ? (n = Math.floor(i.log10(e.minNotZero)), r = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(c), c = r * Math.pow(10, n)) : (n = Math.floor(i.log10(c)), r = Math.floor(c / Math.pow(10, n)));
                            var p = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                            do {
                                a.push(c), 10 == ++r && (r = 1, p = ++n >= 0 ? 1 : p), c = Math.round(r * Math.pow(10, n) * p) / p
                            } while (n < s || n === s && r < l);
                            var u = o(t.max, c);
                            return a.push(u), a
                        }(r, t);
                    t.max = i.max(a), t.min = i.min(a), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && a.reverse()
                },
                convertTicksToLabels: function() {
                    this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                },
                getLabelForIndex: function(t, e) {
                    return +this.getRightValue(this.chart.data.datasets[e].data[t])
                },
                getPixelForTick: function(t) {
                    return this.getPixelForValue(this.tickValues[t])
                },
                _getFirstTickValue: function(t) {
                    var e = Math.floor(i.log10(t));
                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                },
                getPixelForValue: function(e) {
                    var n, r, a, o, c, s = this,
                        l = s.options.ticks.reverse,
                        p = i.log10,
                        u = s._getFirstTickValue(s.minNotZero),
                        d = 0;
                    return e = +s.getRightValue(e), l ? (a = s.end, o = s.start, c = -1) : (a = s.start, o = s.end, c = 1), s.isHorizontal() ? (n = s.width, r = l ? s.right : s.left) : (n = s.height, c *= -1, r = l ? s.top : s.bottom), e !== a && (0 === a && (n -= d = i.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize), a = u), 0 !== e && (d += n / (p(o) - p(a)) * (p(e) - p(a))), r += c * d), r
                },
                getValueForPixel: function(e) {
                    var n, r, a, o, c = this,
                        s = c.options.ticks.reverse,
                        l = i.log10,
                        p = c._getFirstTickValue(c.minNotZero);
                    if (s ? (r = c.end, a = c.start) : (r = c.start, a = c.end), c.isHorizontal() ? (n = c.width, o = s ? c.right - e : e - c.left) : (n = c.height, o = s ? e - c.top : c.bottom - e), o !== r) {
                        if (0 === r) {
                            var u = i.getValueOrDefault(c.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                            o -= u, n -= u, r = p
                        }
                        o *= l(a) - l(r), o /= n, o = Math.pow(10, l(r) + o)
                    }
                    return o
                }
            });
        t.scaleService.registerScaleType("logarithmic", n, e)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(592),
        a = n(615);
    t.exports = function(t) {
        var e = i.global,
            n = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1
                },
                gridLines: {
                    circular: !1
                },
                ticks: {
                    showLabelBackdrop: !0,
                    backdropColor: "rgba(255,255,255,0.75)",
                    backdropPaddingY: 2,
                    backdropPaddingX: 2,
                    callback: a.formatters.linear
                },
                pointLabels: {
                    display: !0,
                    fontSize: 10,
                    callback: function(t) {
                        return t
                    }
                }
            };

        function o(t) {
            var e = t.options;
            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
        }

        function c(t) {
            var n = t.options.pointLabels,
                i = r.valueOrDefault(n.fontSize, e.defaultFontSize),
                a = r.valueOrDefault(n.fontStyle, e.defaultFontStyle),
                o = r.valueOrDefault(n.fontFamily, e.defaultFontFamily);
            return {
                size: i,
                style: a,
                family: o,
                font: r.fontString(i, a, o)
            }
        }

        function s(t, e, n, i, r) {
            return t === i || t === r ? {
                start: e - n / 2,
                end: e + n / 2
            } : t < i || t > r ? {
                start: e - n - 5,
                end: e
            } : {
                start: e,
                end: e + n + 5
            }
        }

        function l(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
        }

        function p(t, e, n, i) {
            if (r.isArray(e))
                for (var a = n.y, o = 1.5 * i, c = 0; c < e.length; ++c) t.fillText(e[c], n.x, a), a += o;
            else t.fillText(e, n.x, n.y)
        }

        function u(t, e, n) {
            90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
        }

        function d(t) {
            return r.isNumber(t) ? t : 0
        }
        var h = t.LinearScaleBase.extend({
            setDimensions: function() {
                var t = this,
                    n = t.options,
                    i = n.ticks;
                t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                var a = r.min([t.height, t.width]),
                    o = r.valueOrDefault(i.fontSize, e.defaultFontSize);
                t.drawingArea = n.display ? a / 2 - (o / 2 + i.backdropPaddingY) : a / 2
            },
            determineDataLimits: function() {
                var t = this,
                    e = t.chart,
                    n = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                r.each(e.data.datasets, function(a, o) {
                    if (e.isDatasetVisible(o)) {
                        var c = e.getDatasetMeta(o);
                        r.each(a.data, function(e, r) {
                            var a = +t.getRightValue(e);
                            isNaN(a) || c.data[r].hidden || (n = Math.min(a, n), i = Math.max(a, i))
                        })
                    }
                }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions()
            },
            getTickLimit: function() {
                var t = this.options.ticks,
                    n = r.valueOrDefault(t.fontSize, e.defaultFontSize);
                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * n)))
            },
            convertTicksToLabels: function() {
                var e = this;
                t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
            },
            getLabelForIndex: function(t, e) {
                return +this.getRightValue(this.chart.data.datasets[e].data[t])
            },
            fit: function() {
                var t, e;
                this.options.pointLabels.display ? function(t) {
                    var e, n, i, a = c(t),
                        l = Math.min(t.height / 2, t.width / 2),
                        p = {
                            r: t.width,
                            l: 0,
                            t: t.height,
                            b: 0
                        },
                        u = {};
                    t.ctx.font = a.font, t._pointLabelSizes = [];
                    var d, h, f, x = o(t);
                    for (e = 0; e < x; e++) {
                        i = t.getPointPosition(e, l), d = t.ctx, h = a.size, f = t.pointLabels[e] || "", n = r.isArray(f) ? {
                            w: r.longestText(d, d.font, f),
                            h: f.length * h + 1.5 * (f.length - 1) * h
                        } : {
                            w: d.measureText(f).width,
                            h: h
                        }, t._pointLabelSizes[e] = n;
                        var m = t.getIndexAngle(e),
                            g = r.toDegrees(m) % 360,
                            v = s(g, i.x, n.w, 0, 180),
                            y = s(g, i.y, n.h, 90, 270);
                        v.start < p.l && (p.l = v.start, u.l = m), v.end > p.r && (p.r = v.end, u.r = m), y.start < p.t && (p.t = y.start, u.t = m), y.end > p.b && (p.b = y.end, u.b = m)
                    }
                    t.setReductions(l, p, u)
                }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
            },
            setReductions: function(t, e, n) {
                var i = e.l / Math.sin(n.l),
                    r = Math.max(e.r - this.width, 0) / Math.sin(n.r),
                    a = -e.t / Math.cos(n.t),
                    o = -Math.max(e.b - this.height, 0) / Math.cos(n.b);
                i = d(i), r = d(r), a = d(a), o = d(o), this.drawingArea = Math.min(Math.round(t - (i + r) / 2), Math.round(t - (a + o) / 2)), this.setCenterPoint(i, r, a, o)
            },
            setCenterPoint: function(t, e, n, i) {
                var r = this,
                    a = r.width - e - r.drawingArea,
                    o = t + r.drawingArea,
                    c = n + r.drawingArea,
                    s = r.height - i - r.drawingArea;
                r.xCenter = Math.round((o + a) / 2 + r.left), r.yCenter = Math.round((c + s) / 2 + r.top)
            },
            getIndexAngle: function(t) {
                return t * (2 * Math.PI / o(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
            },
            getDistanceFromCenterForValue: function(t) {
                var e = this;
                if (null === t) return 0;
                var n = e.drawingArea / (e.max - e.min);
                return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n
            },
            getPointPosition: function(t, e) {
                var n = this.getIndexAngle(t) - Math.PI / 2;
                return {
                    x: Math.round(Math.cos(n) * e) + this.xCenter,
                    y: Math.round(Math.sin(n) * e) + this.yCenter
                }
            },
            getPointPositionForValue: function(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
            },
            getBasePosition: function() {
                var t = this.min,
                    e = this.max;
                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
            },
            draw: function() {
                var t = this,
                    n = t.options,
                    i = n.gridLines,
                    a = n.ticks,
                    s = r.valueOrDefault;
                if (n.display) {
                    var d = t.ctx,
                        h = this.getIndexAngle(0),
                        f = s(a.fontSize, e.defaultFontSize),
                        x = s(a.fontStyle, e.defaultFontStyle),
                        m = s(a.fontFamily, e.defaultFontFamily),
                        g = r.fontString(f, x, m);
                    r.each(t.ticks, function(n, c) {
                        if (c > 0 || a.reverse) {
                            var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[c]);
                            if (i.display && 0 !== c && function(t, e, n, i) {
                                    var a = t.ctx;
                                    if (a.strokeStyle = r.valueAtIndexOrDefault(e.color, i - 1), a.lineWidth = r.valueAtIndexOrDefault(e.lineWidth, i - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                    else {
                                        var c = o(t);
                                        if (0 === c) return;
                                        a.beginPath();
                                        var s = t.getPointPosition(0, n);
                                        a.moveTo(s.x, s.y);
                                        for (var l = 1; l < c; l++) s = t.getPointPosition(l, n), a.lineTo(s.x, s.y);
                                        a.closePath(), a.stroke()
                                    }
                                }(t, i, l, c), a.display) {
                                var p = s(a.fontColor, e.defaultFontColor);
                                if (d.font = g, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(h), a.showLabelBackdrop) {
                                    var u = d.measureText(n).width;
                                    d.fillStyle = a.backdropColor, d.fillRect(-u / 2 - a.backdropPaddingX, -l - f / 2 - a.backdropPaddingY, u + 2 * a.backdropPaddingX, f + 2 * a.backdropPaddingY)
                                }
                                d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = p, d.fillText(n, 0, -l), d.restore()
                            }
                        }
                    }), (n.angleLines.display || n.pointLabels.display) && function(t) {
                        var n = t.ctx,
                            i = t.options,
                            a = i.angleLines,
                            s = i.pointLabels;
                        n.lineWidth = a.lineWidth, n.strokeStyle = a.color;
                        var d = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                            h = c(t);
                        n.textBaseline = "top";
                        for (var f = o(t) - 1; f >= 0; f--) {
                            if (a.display) {
                                var x = t.getPointPosition(f, d);
                                n.beginPath(), n.moveTo(t.xCenter, t.yCenter), n.lineTo(x.x, x.y), n.stroke(), n.closePath()
                            }
                            if (s.display) {
                                var m = t.getPointPosition(f, d + 5),
                                    g = r.valueAtIndexOrDefault(s.fontColor, f, e.defaultFontColor);
                                n.font = h.font, n.fillStyle = g;
                                var v = t.getIndexAngle(f),
                                    y = r.toDegrees(v);
                                n.textAlign = l(y), u(y, t._pointLabelSizes[f], m), p(n, t.pointLabels[f] || "", m, h.size)
                            }
                        }
                    }(t)
                }
            }
        });
        t.scaleService.registerScaleType("radialLinear", h, n)
    }
}, function(t, e, n) {
    "use strict";
    var i = n(628);
    i = "function" == typeof i ? i : window.moment;
    var r = n(591),
        a = n(592),
        o = Number.MIN_SAFE_INTEGER || -9007199254740991,
        c = Number.MAX_SAFE_INTEGER || 9007199254740991,
        s = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        l = Object.keys(s);

    function p(t, e) {
        return t - e
    }

    function u(t) {
        var e, n, i, r = {},
            a = [];
        for (e = 0, n = t.length; e < n; ++e) r[i = t[e]] || (r[i] = !0, a.push(i));
        return a
    }

    function d(t, e, n, i) {
        var r = function(t, e, n) {
                for (var i, r, a, o = 0, c = t.length - 1; o >= 0 && o <= c;) {
                    if (r = t[(i = o + c >> 1) - 1] || null, a = t[i], !r) return {
                        lo: null,
                        hi: a
                    };
                    if (a[e] < n) o = i + 1;
                    else {
                        if (!(r[e] > n)) return {
                            lo: r,
                            hi: a
                        };
                        c = i - 1
                    }
                }
                return {
                    lo: a,
                    hi: null
                }
            }(t, e, n),
            a = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
            o = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
            c = o[e] - a[e],
            s = c ? (n - a[e]) / c : 0,
            l = (o[i] - a[i]) * s;
        return a[i] + l
    }

    function h(t, e) {
        var n = e.parser,
            r = e.parser || e.format;
        return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof r ? i(t, r) : (t instanceof i || (t = i(t)), t.isValid() ? t : "function" == typeof r ? r(t) : t)
    }

    function f(t, e) {
        if (a.isNullOrUndef(t)) return null;
        var n = e.options.time,
            i = h(e.getRightValue(t), n);
        return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null
    }

    function x(t) {
        for (var e = l.indexOf(t) + 1, n = l.length; e < n; ++e)
            if (s[l[e]].common) return l[e]
    }

    function m(t, e, n, r) {
        var o, p = r.time,
            u = p.unit || function(t, e, n, i) {
                var r, a, o, p = l.length;
                for (r = l.indexOf(t); r < p - 1; ++r)
                    if (o = (a = s[l[r]]).steps ? a.steps[a.steps.length - 1] : c, a.common && Math.ceil((n - e) / (o * a.size)) <= i) return l[r];
                return l[p - 1]
            }(p.minUnit, t, e, n),
            d = x(u),
            h = a.valueOrDefault(p.stepSize, p.unitStepSize),
            f = "week" === u && p.isoWeekday,
            m = r.ticks.major.enabled,
            g = s[u],
            v = i(t),
            y = i(e),
            b = [];
        for (h || (h = function(t, e, n, i) {
                var r, a, o, c = e - t,
                    l = s[n],
                    p = l.size,
                    u = l.steps;
                if (!u) return Math.ceil(c / (i * p));
                for (r = 0, a = u.length; r < a && (o = u[r], !(Math.ceil(c / (p * o)) <= i)); ++r);
                return o
            }(t, e, u, n)), f && (v = v.isoWeekday(f), y = y.isoWeekday(f)), v = v.startOf(f ? "day" : u), (y = y.startOf(f ? "day" : u)) < e && y.add(1, u), o = i(v), m && d && !f && !p.round && (o.startOf(d), o.add(~~((v - o) / (g.size * h)) * h, u)); o < y; o.add(h, u)) b.push(+o);
        return b.push(+o), b
    }
    t.exports = function(t) {
        var e = t.Scale.extend({
            initialize: function() {
                if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
            },
            update: function() {
                var e = this.options;
                return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
            },
            getRightValue: function(e) {
                return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
            },
            determineDataLimits: function() {
                var t, e, n, r, s, l, d = this,
                    h = d.chart,
                    x = d.options.time,
                    m = x.unit || "day",
                    g = c,
                    v = o,
                    y = [],
                    b = [],
                    w = [];
                for (t = 0, n = h.data.labels.length; t < n; ++t) w.push(f(h.data.labels[t], d));
                for (t = 0, n = (h.data.datasets || []).length; t < n; ++t)
                    if (h.isDatasetVisible(t))
                        if (s = h.data.datasets[t].data, a.isObject(s[0]))
                            for (b[t] = [], e = 0, r = s.length; e < r; ++e) l = f(s[e], d), y.push(l), b[t][e] = l;
                        else y.push.apply(y, w), b[t] = w.slice(0);
                else b[t] = [];
                w.length && (w = u(w).sort(p), g = Math.min(g, w[0]), v = Math.max(v, w[w.length - 1])), y.length && (y = u(y).sort(p), g = Math.min(g, y[0]), v = Math.max(v, y[y.length - 1])), g = f(x.min, d) || g, v = f(x.max, d) || v, g = g === c ? +i().startOf(m) : g, v = v === o ? +i().endOf(m) + 1 : v, d.min = Math.min(g, v), d.max = Math.max(g + 1, v), d._horizontal = d.isHorizontal(), d._table = [], d._timestamps = {
                    data: y,
                    datasets: b,
                    labels: w
                }
            },
            buildTicks: function() {
                var t, e, n, r = this,
                    a = r.min,
                    o = r.max,
                    c = r.options,
                    p = c.time,
                    u = [],
                    g = [];
                switch (c.ticks.source) {
                    case "data":
                        u = r._timestamps.data;
                        break;
                    case "labels":
                        u = r._timestamps.labels;
                        break;
                    case "auto":
                    default:
                        u = m(a, o, r.getLabelCapacity(a), c)
                }
                for ("ticks" === c.bounds && u.length && (a = u[0], o = u[u.length - 1]), a = f(p.min, r) || a, o = f(p.max, r) || o, t = 0, e = u.length; t < e; ++t)(n = u[t]) >= a && n <= o && g.push(n);
                return r.min = a, r.max = o, r._unit = p.unit || function(t, e, n, r) {
                        var a, o, c = i.duration(i(r).diff(i(n)));
                        for (a = l.length - 1; a >= l.indexOf(e); a--)
                            if (o = l[a], s[o].common && c.as(o) >= t.length) return o;
                        return l[e ? l.indexOf(e) : 0]
                    }(g, p.minUnit, r.min, r.max), r._majorUnit = x(r._unit), r._table = function(t, e, n, i) {
                        if ("linear" === i || !t.length) return [{
                            time: e,
                            pos: 0
                        }, {
                            time: n,
                            pos: 1
                        }];
                        var r, a, o, c, s, l = [],
                            p = [e];
                        for (r = 0, a = t.length; r < a; ++r)(c = t[r]) > e && c < n && p.push(c);
                        for (p.push(n), r = 0, a = p.length; r < a; ++r) s = p[r + 1], o = p[r - 1], c = p[r], void 0 !== o && void 0 !== s && Math.round((s + o) / 2) === c || l.push({
                            time: c,
                            pos: r / (a - 1)
                        });
                        return l
                    }(r._timestamps.data, a, o, c.distribution), r._offsets = function(t, e, n, i, r) {
                        var a, o, c = 0,
                            s = 0;
                        return r.offset && e.length && (r.time.min || (a = e.length > 1 ? e[1] : i, o = e[0], c = (d(t, "time", a, "pos") - d(t, "time", o, "pos")) / 2), r.time.max || (a = e[e.length - 1], o = e.length > 1 ? e[e.length - 2] : n, s = (d(t, "time", a, "pos") - d(t, "time", o, "pos")) / 2)), {
                            left: c,
                            right: s
                        }
                    }(r._table, g, a, o, c), r._labelFormat = function(t, e) {
                        var n, i, r, a = t.length;
                        for (n = 0; n < a; n++) {
                            if (0 !== (i = h(t[n], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                            0 === i.second() && 0 === i.minute() && 0 === i.hour() || (r = !0)
                        }
                        return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                    }(r._timestamps.data, p),
                    function(t, e) {
                        var n, r, a, o, c = [];
                        for (n = 0, r = t.length; n < r; ++n) a = t[n], o = !!e && a === +i(a).startOf(e), c.push({
                            value: a,
                            major: o
                        });
                        return c
                    }(g, r._majorUnit)
            },
            getLabelForIndex: function(t, e) {
                var n = this.chart.data,
                    i = this.options.time,
                    r = n.labels && t < n.labels.length ? n.labels[t] : "",
                    o = n.datasets[e].data[t];
                return a.isObject(o) && (r = this.getRightValue(o)), i.tooltipFormat ? h(r, i).format(i.tooltipFormat) : "string" == typeof r ? r : h(r, i).format(this._labelFormat)
            },
            tickFormatFunction: function(t, e, n, i) {
                var r = this.options,
                    o = t.valueOf(),
                    c = r.time.displayFormats,
                    s = c[this._unit],
                    l = this._majorUnit,
                    p = c[l],
                    u = t.clone().startOf(l).valueOf(),
                    d = r.ticks.major,
                    h = d.enabled && l && p && o === u,
                    f = t.format(i || (h ? p : s)),
                    x = h ? d : r.ticks.minor,
                    m = a.valueOrDefault(x.callback, x.userCallback);
                return m ? m(f, e, n) : f
            },
            convertTicksToLabels: function(t) {
                var e, n, r = [];
                for (e = 0, n = t.length; e < n; ++e) r.push(this.tickFormatFunction(i(t[e].value), e, t));
                return r
            },
            getPixelForOffset: function(t) {
                var e = this,
                    n = e._horizontal ? e.width : e.height,
                    i = e._horizontal ? e.left : e.top,
                    r = d(e._table, "time", t, "pos");
                return i + n * (e._offsets.left + r) / (e._offsets.left + 1 + e._offsets.right)
            },
            getPixelForValue: function(t, e, n) {
                var i = null;
                if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = f(t, this)), null !== i) return this.getPixelForOffset(i)
            },
            getPixelForTick: function(t) {
                var e = this.getTicks();
                return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
            },
            getValueForPixel: function(t) {
                var e = this,
                    n = e._horizontal ? e.width : e.height,
                    r = e._horizontal ? e.left : e.top,
                    a = (n ? (t - r) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                    o = d(e._table, "pos", a, "time");
                return i(o)
            },
            getLabelWidth: function(t) {
                var e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = a.toRadians(e.maxRotation),
                    o = Math.cos(i),
                    c = Math.sin(i);
                return n * o + a.valueOrDefault(e.fontSize, r.global.defaultFontSize) * c
            },
            getLabelCapacity: function(t) {
                var e = this,
                    n = e.options.time.displayFormats.millisecond,
                    r = e.tickFormatFunction(i(t), 0, [], n),
                    a = e.getLabelWidth(r),
                    o = e.isHorizontal() ? e.width : e.height,
                    c = Math.floor(o / a);
                return c > 0 ? c : 1
            }
        });
        t.scaleService.registerScaleType("time", e, {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            time: {
                parser: !1,
                format: !1,
                unit: !1,
                round: !1,
                displayFormat: !1,
                isoWeekday: !1,
                minUnit: "millisecond",
                displayFormats: {
                    millisecond: "h:mm:ss.SSS a",
                    second: "h:mm:ss a",
                    minute: "h:mm a",
                    hour: "hA",
                    day: "MMM D",
                    week: "ll",
                    month: "MMM YYYY",
                    quarter: "[Q]Q - YYYY",
                    year: "YYYY"
                }
            },
            ticks: {
                autoSkip: !1,
                source: "auto",
                major: {
                    enabled: !1
                }
            }
        })
    }
}, function(t, e, n) {
    (function(t) {
        t.exports = function() {
            "use strict";
            var e, n;

            function i() {
                return e.apply(null, arguments)
            }

            function r(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function a(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function o(t) {
                return void 0 === t
            }

            function c(t) {
                return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function l(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                return i
            }

            function p(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function u(t, e) {
                for (var n in e) p(e, n) && (t[n] = e[n]);
                return p(e, "toString") && (t.toString = e.toString), p(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function d(t, e, n, i) {
                return Pe(t, e, n, i, !0).utc()
            }

            function h(t) {
                return null == t._pf && (t._pf = {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }), t._pf
            }

            function f(t) {
                if (null == t._isValid) {
                    var e = h(t),
                        i = n.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                    if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
                    t._isValid = r
                }
                return t._isValid
            }

            function x(t) {
                var e = d(NaN);
                return null != t ? u(h(e), t) : h(e).userInvalidated = !0, e
            }
            n = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                    if (i in e && t.call(this, e[i], i, e)) return !0;
                return !1
            };
            var m = i.momentProperties = [];

            function g(t, e) {
                var n, i, r;
                if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = h(e)), o(e._locale) || (t._locale = e._locale), m.length > 0)
                    for (n = 0; n < m.length; n++) i = m[n], o(r = e[i]) || (t[i] = r);
                return t
            }
            var v = !1;

            function y(t) {
                g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1)
            }

            function b(t) {
                return t instanceof y || null != t && null != t._isAMomentObject
            }

            function w(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function _(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = w(e)), n
            }

            function k(t, e, n) {
                var i, r = Math.min(t.length, e.length),
                    a = Math.abs(t.length - e.length),
                    o = 0;
                for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && _(t[i]) !== _(e[i])) && o++;
                return o + a
            }

            function S(t) {
                !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function M(t, e) {
                var n = !0;
                return u(function() {
                    if (null != i.deprecationHandler && i.deprecationHandler(null, t), n) {
                        for (var r, a = [], o = 0; o < arguments.length; o++) {
                            if (r = "", "object" == typeof arguments[o]) {
                                for (var c in r += "\n[" + o + "] ", arguments[0]) r += c + ": " + arguments[0][c] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[o];
                            a.push(r)
                        }
                        S(t + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }
            var C, T = {};

            function P(t, e) {
                null != i.deprecationHandler && i.deprecationHandler(t, e), T[t] || (S(e), T[t] = !0)
            }

            function D(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function O(t, e) {
                var n, i = u({}, t);
                for (n in e) p(e, n) && (a(t[n]) && a(e[n]) ? (i[n] = {}, u(i[n], t[n]), u(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t) p(t, n) && !p(e, n) && a(t[n]) && (i[n] = u({}, i[n]));
                return i
            }

            function A(t) {
                null != t && this.set(t)
            }
            i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, C = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t) p(t, e) && n.push(e);
                return n
            };
            var I = {};

            function R(t, e) {
                var n = t.toLowerCase();
                I[n] = I[n + "s"] = I[e] = t
            }

            function L(t) {
                return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0
            }

            function F(t) {
                var e, n, i = {};
                for (n in t) p(t, n) && (e = L(n)) && (i[e] = t[n]);
                return i
            }
            var E = {};

            function z(t, e) {
                E[t] = e
            }

            function N(t, e, n) {
                var i = "" + Math.abs(t),
                    r = e - i.length,
                    a = t >= 0;
                return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
            }
            var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                V = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                j = {},
                B = {};

            function Y(t, e, n, i) {
                var r = i;
                "string" == typeof i && (r = function() {
                    return this[i]()
                }), t && (B[t] = r), e && (B[e[0]] = function() {
                    return N(r.apply(this, arguments), e[1], e[2])
                }), n && (B[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                })
            }

            function H(t, e) {
                return t.isValid() ? (e = U(e, t.localeData()), j[e] = j[e] || function(t) {
                    var e, n, i, r = t.match(W);
                    for (e = 0, n = r.length; e < n; e++) B[r[e]] ? r[e] = B[r[e]] : r[e] = (i = r[e]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
                    return function(e) {
                        var i, a = "";
                        for (i = 0; i < n; i++) a += D(r[i]) ? r[i].call(e, t) : r[i];
                        return a
                    }
                }(e), j[e](t)) : t.localeData().invalidDate()
            }

            function U(t, e) {
                var n = 5;

                function i(t) {
                    return e.longDateFormat(t) || t
                }
                for (V.lastIndex = 0; n >= 0 && V.test(t);) t = t.replace(V, i), V.lastIndex = 0, n -= 1;
                return t
            }
            var q = /\d/,
                G = /\d\d/,
                $ = /\d{3}/,
                K = /\d{4}/,
                J = /[+-]?\d{6}/,
                Z = /\d\d?/,
                X = /\d\d\d\d?/,
                Q = /\d\d\d\d\d\d?/,
                tt = /\d{1,3}/,
                et = /\d{1,4}/,
                nt = /[+-]?\d{1,6}/,
                it = /\d+/,
                rt = /[+-]?\d+/,
                at = /Z|[+-]\d\d:?\d\d/gi,
                ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
                ct = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                st = {};

            function lt(t, e, n) {
                st[t] = D(e) ? e : function(t, i) {
                    return t && n ? n : e
                }
            }

            function pt(t, e) {
                return p(st, t) ? st[t](e._strict, e._locale) : new RegExp(ut(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                    return e || n || i || r
                })))
            }

            function ut(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var dt = {};

            function ht(t, e) {
                var n, i = e;
                for ("string" == typeof t && (t = [t]), c(e) && (i = function(t, n) {
                        n[e] = _(t)
                    }), n = 0; n < t.length; n++) dt[t[n]] = i
            }

            function ft(t, e) {
                ht(t, function(t, n, i, r) {
                    i._w = i._w || {}, e(t, i._w, i, r)
                })
            }

            function xt(t, e, n) {
                null != e && p(dt, t) && dt[t](e, n._a, n, t)
            }
            var mt = 0,
                gt = 1,
                vt = 2,
                yt = 3,
                bt = 4,
                wt = 5,
                _t = 6,
                kt = 7,
                St = 8;

            function Mt(t) {
                return Ct(t) ? 366 : 365
            }

            function Ct(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
            Y("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), Y(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), Y(0, ["YYYY", 4], 0, "year"), Y(0, ["YYYYY", 5], 0, "year"), Y(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), z("year", 1), lt("Y", rt), lt("YY", Z, G), lt("YYYY", et, K), lt("YYYYY", nt, J), lt("YYYYYY", nt, J), ht(["YYYYY", "YYYYYY"], mt), ht("YYYY", function(t, e) {
                e[mt] = 2 === t.length ? i.parseTwoDigitYear(t) : _(t)
            }), ht("YY", function(t, e) {
                e[mt] = i.parseTwoDigitYear(t)
            }), ht("Y", function(t, e) {
                e[mt] = parseInt(t, 10)
            }), i.parseTwoDigitYear = function(t) {
                return _(t) + (_(t) > 68 ? 1900 : 2e3)
            };
            var Tt, Pt = Dt("FullYear", !0);

            function Dt(t, e) {
                return function(n) {
                    return null != n ? (At(this, t, n), i.updateOffset(this, e), this) : Ot(this, t)
                }
            }

            function Ot(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function At(t, e, n) {
                t.isValid() && !isNaN(n) && ("FullYear" === e && Ct(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), It(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
            }

            function It(t, e) {
                if (isNaN(t) || isNaN(e)) return NaN;
                var n, i = (e % (n = 12) + n) % n;
                return t += (e - i) / 12, 1 === i ? Ct(t) ? 29 : 28 : 31 - i % 7 % 2
            }
            Tt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            }, Y("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), Y("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), Y("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), R("month", "M"), z("month", 8), lt("M", Z), lt("MM", Z, G), lt("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), lt("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), ht(["M", "MM"], function(t, e) {
                e[gt] = _(t) - 1
            }), ht(["MMM", "MMMM"], function(t, e, n, i) {
                var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[gt] = r : h(n).invalidMonth = t
            });
            var Rt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                Lt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Ft = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Et(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = _(e);
                    else if (!c(e = t.localeData().monthsParse(e))) return t;
                return n = Math.min(t.date(), It(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function zt(t) {
                return null != t ? (Et(this, t), i.updateOffset(this, !0), this) : Ot(this, "Month")
            }
            var Nt = ct,
                Wt = ct;

            function Vt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i = [],
                    r = [],
                    a = [];
                for (e = 0; e < 12; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
                for (i.sort(t), r.sort(t), a.sort(t), e = 0; e < 12; e++) i[e] = ut(i[e]), r[e] = ut(r[e]);
                for (e = 0; e < 24; e++) a[e] = ut(a[e]);
                this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function jt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function Bt(t, e, n) {
                var i = 7 + e - n,
                    r = (7 + jt(t, 0, i).getUTCDay() - e) % 7;
                return -r + i - 1
            }

            function Yt(t, e, n, i, r) {
                var a, o, c = (7 + n - i) % 7,
                    s = Bt(t, i, r),
                    l = 1 + 7 * (e - 1) + c + s;
                return l <= 0 ? o = Mt(a = t - 1) + l : l > Mt(t) ? (a = t + 1, o = l - Mt(t)) : (a = t, o = l), {
                    year: a,
                    dayOfYear: o
                }
            }

            function Ht(t, e, n) {
                var i, r, a = Bt(t.year(), e, n),
                    o = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
                return o < 1 ? (r = t.year() - 1, i = o + Ut(r, e, n)) : o > Ut(t.year(), e, n) ? (i = o - Ut(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = o), {
                    week: i,
                    year: r
                }
            }

            function Ut(t, e, n) {
                var i = Bt(t, e, n),
                    r = Bt(t + 1, e, n);
                return (Mt(t) - i + r) / 7
            }
            Y("w", ["ww", 2], "wo", "week"), Y("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), z("week", 5), z("isoWeek", 5), lt("w", Z), lt("ww", Z, G), lt("W", Z), lt("WW", Z, G), ft(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = _(t)
            }), Y("d", 0, "do", "day"), Y("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), Y("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), Y("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), Y("e", 0, 0, "weekday"), Y("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), z("day", 11), z("weekday", 11), z("isoWeekday", 11), lt("d", Z), lt("e", Z), lt("E", Z), lt("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), lt("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), lt("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), ft(["dd", "ddd", "dddd"], function(t, e, n, i) {
                var r = n._locale.weekdaysParse(t, i, n._strict);
                null != r ? e.d = r : h(n).invalidWeekday = t
            }), ft(["d", "e", "E"], function(t, e, n, i) {
                e[i] = _(t)
            });
            var qt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Gt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Kt = ct,
                Jt = ct,
                Zt = ct;

            function Xt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i, r, a, o = [],
                    c = [],
                    s = [],
                    l = [];
                for (e = 0; e < 7; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), o.push(i), c.push(r), s.push(a), l.push(i), l.push(r), l.push(a);
                for (o.sort(t), c.sort(t), s.sort(t), l.sort(t), e = 0; e < 7; e++) c[e] = ut(c[e]), s[e] = ut(s[e]), l[e] = ut(l[e]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
            }

            function Qt() {
                return this.hours() % 12 || 12
            }

            function te(t, e) {
                Y(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function ee(t, e) {
                return e._meridiemParse
            }
            Y("H", ["HH", 2], 0, "hour"), Y("h", ["hh", 2], 0, Qt), Y("k", ["kk", 2], 0, function() {
                return this.hours() || 24
            }), Y("hmm", 0, 0, function() {
                return "" + Qt.apply(this) + N(this.minutes(), 2)
            }), Y("hmmss", 0, 0, function() {
                return "" + Qt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), Y("Hmm", 0, 0, function() {
                return "" + this.hours() + N(this.minutes(), 2)
            }), Y("Hmmss", 0, 0, function() {
                return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
            }), te("a", !0), te("A", !1), R("hour", "h"), z("hour", 13), lt("a", ee), lt("A", ee), lt("H", Z), lt("h", Z), lt("k", Z), lt("HH", Z, G), lt("hh", Z, G), lt("kk", Z, G), lt("hmm", X), lt("hmmss", Q), lt("Hmm", X), lt("Hmmss", Q), ht(["H", "HH"], yt), ht(["k", "kk"], function(t, e, n) {
                var i = _(t);
                e[yt] = 24 === i ? 0 : i
            }), ht(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), ht(["h", "hh"], function(t, e, n) {
                e[yt] = _(t), h(n).bigHour = !0
            }), ht("hmm", function(t, e, n) {
                var i = t.length - 2;
                e[yt] = _(t.substr(0, i)), e[bt] = _(t.substr(i)), h(n).bigHour = !0
            }), ht("hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[yt] = _(t.substr(0, i)), e[bt] = _(t.substr(i, 2)), e[wt] = _(t.substr(r)), h(n).bigHour = !0
            }), ht("Hmm", function(t, e, n) {
                var i = t.length - 2;
                e[yt] = _(t.substr(0, i)), e[bt] = _(t.substr(i))
            }), ht("Hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[yt] = _(t.substr(0, i)), e[bt] = _(t.substr(i, 2)), e[wt] = _(t.substr(r))
            });
            var ne, ie = Dt("Hours", !0),
                re = {
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    longDateFormat: {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    months: Lt,
                    monthsShort: Ft,
                    week: {
                        dow: 0,
                        doy: 6
                    },
                    weekdays: qt,
                    weekdaysMin: $t,
                    weekdaysShort: Gt,
                    meridiemParse: /[ap]\.?m?\.?/i
                },
                ae = {},
                oe = {};

            function ce(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function se(e) {
                var n = null;
                if (!ae[e] && void 0 !== t && t && t.exports) try {
                    n = ne._abbr, ! function() {
                        var t = new Error('Cannot find module "undefined"');
                        throw t.code = "MODULE_NOT_FOUND", t
                    }(), le(n)
                } catch (t) {}
                return ae[e]
            }

            function le(t, e) {
                var n;
                return t && ((n = o(e) ? ue(t) : pe(t, e)) ? ne = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ne._abbr
            }

            function pe(t, e) {
                if (null !== e) {
                    var n, i = re;
                    if (e.abbr = t, null != ae[t]) P("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ae[t]._config;
                    else if (null != e.parentLocale)
                        if (null != ae[e.parentLocale]) i = ae[e.parentLocale]._config;
                        else {
                            if (null == (n = se(e.parentLocale))) return oe[e.parentLocale] || (oe[e.parentLocale] = []), oe[e.parentLocale].push({
                                name: t,
                                config: e
                            }), null;
                            i = n._config
                        }
                    return ae[t] = new A(O(i, e)), oe[t] && oe[t].forEach(function(t) {
                        pe(t.name, t.config)
                    }), le(t), ae[t]
                }
                return delete ae[t], null
            }

            function ue(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ne;
                if (!r(t)) {
                    if (e = se(t)) return e;
                    t = [t]
                }
                return function(t) {
                    for (var e, n, i, r, a = 0; a < t.length;) {
                        for (r = ce(t[a]).split("-"), e = r.length, n = (n = ce(t[a + 1])) ? n.split("-") : null; e > 0;) {
                            if (i = se(r.slice(0, e).join("-"))) return i;
                            if (n && n.length >= e && k(r, n, !0) >= e - 1) break;
                            e--
                        }
                        a++
                    }
                    return ne
                }(t)
            }

            function de(t) {
                var e, n = t._a;
                return n && -2 === h(t).overflow && (e = n[gt] < 0 || n[gt] > 11 ? gt : n[vt] < 1 || n[vt] > It(n[mt], n[gt]) ? vt : n[yt] < 0 || n[yt] > 24 || 24 === n[yt] && (0 !== n[bt] || 0 !== n[wt] || 0 !== n[_t]) ? yt : n[bt] < 0 || n[bt] > 59 ? bt : n[wt] < 0 || n[wt] > 59 ? wt : n[_t] < 0 || n[_t] > 999 ? _t : -1, h(t)._overflowDayOfYear && (e < mt || e > vt) && (e = vt), h(t)._overflowWeeks && -1 === e && (e = kt), h(t)._overflowWeekday && -1 === e && (e = St), h(t).overflow = e), t
            }

            function he(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function fe(t) {
                var e, n, r, a, o, c = [];
                if (!t._d) {
                    for (r = function(t) {
                            var e = new Date(i.now());
                            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
                        }(t), t._w && null == t._a[vt] && null == t._a[gt] && function(t) {
                            var e, n, i, r, a, o, c, s;
                            if (null != (e = t._w).GG || null != e.W || null != e.E) a = 1, o = 4, n = he(e.GG, t._a[mt], Ht(De(), 1, 4).year), i = he(e.W, 1), ((r = he(e.E, 1)) < 1 || r > 7) && (s = !0);
                            else {
                                a = t._locale._week.dow, o = t._locale._week.doy;
                                var l = Ht(De(), a, o);
                                n = he(e.gg, t._a[mt], l.year), i = he(e.w, l.week), null != e.d ? ((r = e.d) < 0 || r > 6) && (s = !0) : null != e.e ? (r = e.e + a, (e.e < 0 || e.e > 6) && (s = !0)) : r = a
                            }
                            i < 1 || i > Ut(n, a, o) ? h(t)._overflowWeeks = !0 : null != s ? h(t)._overflowWeekday = !0 : (c = Yt(n, i, r, a, o), t._a[mt] = c.year, t._dayOfYear = c.dayOfYear)
                        }(t), null != t._dayOfYear && (o = he(t._a[mt], r[mt]), (t._dayOfYear > Mt(o) || 0 === t._dayOfYear) && (h(t)._overflowDayOfYear = !0), n = jt(o, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[vt] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = c[e] = r[e];
                    for (; e < 7; e++) t._a[e] = c[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[yt] && 0 === t._a[bt] && 0 === t._a[wt] && 0 === t._a[_t] && (t._nextDay = !0, t._a[yt] = 0), t._d = (t._useUTC ? jt : function(t, e, n, i, r, a, o) {
                        var c = new Date(t, e, n, i, r, a, o);
                        return t < 100 && t >= 0 && isFinite(c.getFullYear()) && c.setFullYear(t), c
                    }).apply(null, c), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[yt] = 24), t._w && void 0 !== t._w.d && t._w.d !== a && (h(t).weekdayMismatch = !0)
                }
            }
            var xe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                ge = /Z|[+-]\d\d(?::?\d\d)?/,
                ve = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                ye = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                be = /^\/?Date\((\-?\d+)/i;

            function we(t) {
                var e, n, i, r, a, o, c = t._i,
                    s = xe.exec(c) || me.exec(c);
                if (s) {
                    for (h(t).iso = !0, e = 0, n = ve.length; e < n; e++)
                        if (ve[e][1].exec(s[1])) {
                            r = ve[e][0], i = !1 !== ve[e][2];
                            break
                        }
                    if (null == r) return void(t._isValid = !1);
                    if (s[3]) {
                        for (e = 0, n = ye.length; e < n; e++)
                            if (ye[e][1].exec(s[3])) {
                                a = (s[2] || " ") + ye[e][0];
                                break
                            }
                        if (null == a) return void(t._isValid = !1)
                    }
                    if (!i && null != a) return void(t._isValid = !1);
                    if (s[4]) {
                        if (!ge.exec(s[4])) return void(t._isValid = !1);
                        o = "Z"
                    }
                    t._f = r + (a || "") + (o || ""), Ce(t)
                } else t._isValid = !1
            }
            var _e = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function ke(t, e, n, i, r, a) {
                var o = [function(t) {
                    var e = parseInt(t, 10);
                    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
                }(t), Ft.indexOf(e), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
                return a && o.push(parseInt(a, 10)), o
            }
            var Se = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

            function Me(t) {
                var e = _e.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
                if (e) {
                    var n = ke(e[4], e[3], e[2], e[5], e[6], e[7]);
                    if (! function(t, e, n) {
                            if (t) {
                                var i = Gt.indexOf(t),
                                    r = new Date(e[0], e[1], e[2]).getDay();
                                if (i !== r) return h(n).weekdayMismatch = !0, n._isValid = !1, !1
                            }
                            return !0
                        }(e[1], n, t)) return;
                    t._a = n, t._tzm = function(t, e, n) {
                        if (t) return Se[t];
                        if (e) return 0;
                        var i = parseInt(n, 10),
                            r = i % 100,
                            a = (i - r) / 100;
                        return 60 * a + r
                    }(e[8], e[9], e[10]), t._d = jt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), h(t).rfc2822 = !0
                } else t._isValid = !1
            }

            function Ce(t) {
                if (t._f !== i.ISO_8601)
                    if (t._f !== i.RFC_2822) {
                        t._a = [], h(t).empty = !0;
                        var e, n, r, a, o, c = "" + t._i,
                            s = c.length,
                            l = 0;
                        for (r = U(t._f, t._locale).match(W) || [], e = 0; e < r.length; e++) a = r[e], (n = (c.match(pt(a, t)) || [])[0]) && ((o = c.substr(0, c.indexOf(n))).length > 0 && h(t).unusedInput.push(o), c = c.slice(c.indexOf(n) + n.length), l += n.length), B[a] ? (n ? h(t).empty = !1 : h(t).unusedTokens.push(a), xt(a, n, t)) : t._strict && !n && h(t).unusedTokens.push(a);
                        h(t).charsLeftOver = s - l, c.length > 0 && h(t).unusedInput.push(c), t._a[yt] <= 12 && !0 === h(t).bigHour && t._a[yt] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[yt] = (p = t._locale, u = t._a[yt], null == (d = t._meridiem) ? u : null != p.meridiemHour ? p.meridiemHour(u, d) : null != p.isPM ? ((f = p.isPM(d)) && u < 12 && (u += 12), f || 12 !== u || (u = 0), u) : u), fe(t), de(t)
                    } else Me(t);
                else we(t);
                var p, u, d, f
            }

            function Te(t) {
                var e = t._i,
                    n = t._f;
                return t._locale = t._locale || ue(t._l), null === e || void 0 === n && "" === e ? x({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), b(e) ? new y(de(e)) : (s(e) ? t._d = e : r(n) ? function(t) {
                    var e, n, i, r, a;
                    if (0 === t._f.length) return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
                    for (r = 0; r < t._f.length; r++) a = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], Ce(e), f(e) && (a += h(e).charsLeftOver, a += 10 * h(e).unusedTokens.length, h(e).score = a, (null == i || a < i) && (i = a, n = e));
                    u(t, n || e)
                }(t) : n ? Ce(t) : function(t) {
                    var e = t._i;
                    o(e) ? t._d = new Date(i.now()) : s(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
                        var e = be.exec(t._i);
                        null === e ? (we(t), !1 === t._isValid && (delete t._isValid, Me(t), !1 === t._isValid && (delete t._isValid, i.createFromInputFallback(t)))) : t._d = new Date(+e[1])
                    }(t) : r(e) ? (t._a = l(e.slice(0), function(t) {
                        return parseInt(t, 10)
                    }), fe(t)) : a(e) ? function(t) {
                        if (!t._d) {
                            var e = F(t._i);
                            t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                                return t && parseInt(t, 10)
                            }), fe(t)
                        }
                    }(t) : c(e) ? t._d = new Date(e) : i.createFromInputFallback(t)
                }(t), f(t) || (t._d = null), t))
            }

            function Pe(t, e, n, i, o) {
                var c, s = {};
                return !0 !== n && !1 !== n || (i = n, n = void 0), (a(t) && function(t) {
                    if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
                    var e;
                    for (e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }(t) || r(t) && 0 === t.length) && (t = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = o, s._l = n, s._i = t, s._f = e, s._strict = i, (c = new y(de(Te(s))))._nextDay && (c.add(1, "d"), c._nextDay = void 0), c
            }

            function De(t, e, n, i) {
                return Pe(t, e, n, i, !1)
            }
            i.createFromInputFallback = M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
            var Oe = M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = De.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : x()
                }),
                Ae = M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = De.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : x()
                });

            function Ie(t, e) {
                var n, i;
                if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return De();
                for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }
            var Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Le(t) {
                var e = F(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    r = e.month || 0,
                    a = e.week || 0,
                    o = e.day || 0,
                    c = e.hour || 0,
                    s = e.minute || 0,
                    l = e.second || 0,
                    p = e.millisecond || 0;
                this._isValid = function(t) {
                    for (var e in t)
                        if (-1 === Tt.call(Re, e) || null != t[e] && isNaN(t[e])) return !1;
                    for (var n = !1, i = 0; i < Re.length; ++i)
                        if (t[Re[i]]) {
                            if (n) return !1;
                            parseFloat(t[Re[i]]) !== _(t[Re[i]]) && (n = !0)
                        }
                    return !0
                }(e), this._milliseconds = +p + 1e3 * l + 6e4 * s + 1e3 * c * 60 * 60, this._days = +o + 7 * a, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ue(), this._bubble()
            }

            function Fe(t) {
                return t instanceof Le
            }

            function Ee(t) {
                return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
            }

            function ze(t, e) {
                Y(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
                })
            }
            ze("Z", ":"), ze("ZZ", ""), lt("Z", ot), lt("ZZ", ot), ht(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = We(ot, t)
            });
            var Ne = /([\+\-]|\d\d)/gi;

            function We(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var i = n[n.length - 1] || [],
                    r = (i + "").match(Ne) || ["-", 0, 0],
                    a = 60 * r[1] + _(r[2]);
                return 0 === a ? 0 : "+" === r[0] ? a : -a
            }

            function Ve(t, e) {
                var n, r;
                return e._isUTC ? (n = e.clone(), r = (b(t) || s(t) ? t.valueOf() : De(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : De(t).local()
            }

            function je(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Be() {
                return !!this.isValid() && this._isUTC && 0 === this._offset
            }
            i.updateOffset = function() {};
            var Ye = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                He = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function Ue(t, e) {
                var n, i, r, a, o, s, l = t,
                    u = null;
                return Fe(t) ? l = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : c(t) ? (l = {}, e ? l[e] = t : l.milliseconds = t) : (u = Ye.exec(t)) ? (n = "-" === u[1] ? -1 : 1, l = {
                    y: 0,
                    d: _(u[vt]) * n,
                    h: _(u[yt]) * n,
                    m: _(u[bt]) * n,
                    s: _(u[wt]) * n,
                    ms: _(Ee(1e3 * u[_t])) * n
                }) : (u = He.exec(t)) ? (n = "-" === u[1] ? -1 : (u[1], 1), l = {
                    y: qe(u[2], n),
                    M: qe(u[3], n),
                    w: qe(u[4], n),
                    d: qe(u[5], n),
                    h: qe(u[6], n),
                    m: qe(u[7], n),
                    s: qe(u[8], n)
                }) : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (a = De(l.from), o = De(l.to), r = a.isValid() && o.isValid() ? (o = Ve(o, a), a.isBefore(o) ? s = Ge(a, o) : ((s = Ge(o, a)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
                    milliseconds: 0,
                    months: 0
                }, (l = {}).ms = r.milliseconds, l.M = r.months), i = new Le(l), Fe(t) && p(t, "_locale") && (i._locale = t._locale), i
            }

            function qe(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Ge(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function $e(t, e) {
                return function(n, i) {
                    var r;
                    return null === i || isNaN(+i) || (P(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Ke(this, Ue(n = "string" == typeof n ? +n : n, i), t), this
                }
            }

            function Ke(t, e, n, r) {
                var a = e._milliseconds,
                    o = Ee(e._days),
                    c = Ee(e._months);
                t.isValid() && (r = null == r || r, c && Et(t, Ot(t, "Month") + c * n), o && At(t, "Date", Ot(t, "Date") + o * n), a && t._d.setTime(t._d.valueOf() + a * n), r && i.updateOffset(t, o || c))
            }
            Ue.fn = Le.prototype, Ue.invalid = function() {
                return Ue(NaN)
            };
            var Je = $e(1, "add"),
                Ze = $e(-1, "subtract");

            function Xe(t, e) {
                var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    a = t.clone().add(r, "months");
                return e - a < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - a) / (a - n)) : (n = t.clone().add(r + 1, "months"), i = (e - a) / (n - a)), -(r + i) || 0
            }

            function Qe(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (null != (e = ue(t)) && (this._locale = e), this)
            }
            i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var tn = M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });

            function en() {
                return this._locale
            }

            function nn(t, e) {
                Y(0, [t, t.length], 0, e)
            }

            function rn(t, e, n, i, r) {
                var a;
                return null == t ? Ht(this, i, r).year : (a = Ut(t, i, r), e > a && (e = a), function(t, e, n, i, r) {
                    var a = Yt(t, e, n, i, r),
                        o = jt(a.year, 0, a.dayOfYear);
                    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
                }.call(this, t, e, n, i, r))
            }
            Y(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), Y(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), nn("gggg", "weekYear"), nn("ggggg", "weekYear"), nn("GGGG", "isoWeekYear"), nn("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), z("weekYear", 1), z("isoWeekYear", 1), lt("G", rt), lt("g", rt), lt("GG", Z, G), lt("gg", Z, G), lt("GGGG", et, K), lt("gggg", et, K), lt("GGGGG", nt, J), lt("ggggg", nt, J), ft(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = _(t)
            }), ft(["gg", "GG"], function(t, e, n, r) {
                e[r] = i.parseTwoDigitYear(t)
            }), Y("Q", 0, "Qo", "quarter"), R("quarter", "Q"), z("quarter", 7), lt("Q", q), ht("Q", function(t, e) {
                e[gt] = 3 * (_(t) - 1)
            }), Y("D", ["DD", 2], "Do", "date"), R("date", "D"), z("date", 9), lt("D", Z), lt("DD", Z, G), lt("Do", function(t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }), ht(["D", "DD"], vt), ht("Do", function(t, e) {
                e[vt] = _(t.match(Z)[0])
            });
            var an = Dt("Date", !0);
            Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), z("dayOfYear", 4), lt("DDD", tt), lt("DDDD", $), ht(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = _(t)
            }), Y("m", ["mm", 2], 0, "minute"), R("minute", "m"), z("minute", 14), lt("m", Z), lt("mm", Z, G), ht(["m", "mm"], bt);
            var on = Dt("Minutes", !1);
            Y("s", ["ss", 2], 0, "second"), R("second", "s"), z("second", 15), lt("s", Z), lt("ss", Z, G), ht(["s", "ss"], wt);
            var cn, sn = Dt("Seconds", !1);
            for (Y("S", 0, 0, function() {
                    return ~~(this.millisecond() / 100)
                }), Y(0, ["SS", 2], 0, function() {
                    return ~~(this.millisecond() / 10)
                }), Y(0, ["SSS", 3], 0, "millisecond"), Y(0, ["SSSS", 4], 0, function() {
                    return 10 * this.millisecond()
                }), Y(0, ["SSSSS", 5], 0, function() {
                    return 100 * this.millisecond()
                }), Y(0, ["SSSSSS", 6], 0, function() {
                    return 1e3 * this.millisecond()
                }), Y(0, ["SSSSSSS", 7], 0, function() {
                    return 1e4 * this.millisecond()
                }), Y(0, ["SSSSSSSS", 8], 0, function() {
                    return 1e5 * this.millisecond()
                }), Y(0, ["SSSSSSSSS", 9], 0, function() {
                    return 1e6 * this.millisecond()
                }), R("millisecond", "ms"), z("millisecond", 16), lt("S", tt, q), lt("SS", tt, G), lt("SSS", tt, $), cn = "SSSS"; cn.length <= 9; cn += "S") lt(cn, it);

            function ln(t, e) {
                e[_t] = _(1e3 * ("0." + t))
            }
            for (cn = "S"; cn.length <= 9; cn += "S") ht(cn, ln);
            var pn = Dt("Milliseconds", !1);
            Y("z", 0, 0, "zoneAbbr"), Y("zz", 0, 0, "zoneName");
            var un = y.prototype;

            function dn(t) {
                return t
            }
            un.add = Je, un.calendar = function(t, e) {
                var n = t || De(),
                    r = Ve(n, this).startOf("day"),
                    a = i.calendarFormat(this, r) || "sameElse",
                    o = e && (D(e[a]) ? e[a].call(this, n) : e[a]);
                return this.format(o || this.localeData().calendar(a, this, De(n)))
            }, un.clone = function() {
                return new y(this)
            }, un.diff = function(t, e, n) {
                var i, r, a;
                if (!this.isValid()) return NaN;
                if (!(i = Ve(t, this)).isValid()) return NaN;
                switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = L(e)) {
                    case "year":
                        a = Xe(this, i) / 12;
                        break;
                    case "month":
                        a = Xe(this, i);
                        break;
                    case "quarter":
                        a = Xe(this, i) / 3;
                        break;
                    case "second":
                        a = (this - i) / 1e3;
                        break;
                    case "minute":
                        a = (this - i) / 6e4;
                        break;
                    case "hour":
                        a = (this - i) / 36e5;
                        break;
                    case "day":
                        a = (this - i - r) / 864e5;
                        break;
                    case "week":
                        a = (this - i - r) / 6048e5;
                        break;
                    default:
                        a = this - i
                }
                return n ? a : w(a)
            }, un.endOf = function(t) {
                return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }, un.format = function(t) {
                t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
                var e = H(this, t);
                return this.localeData().postformat(e)
            }, un.from = function(t, e) {
                return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, un.fromNow = function(t) {
                return this.from(De(), t)
            }, un.to = function(t, e) {
                return this.isValid() && (b(t) && t.isValid() || De(t).isValid()) ? Ue({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }, un.toNow = function(t) {
                return this.to(De(), t)
            }, un.get = function(t) {
                return D(this[t = L(t)]) ? this[t]() : this
            }, un.invalidAt = function() {
                return h(this).overflow
            }, un.isAfter = function(t, e) {
                var n = b(t) ? t : De(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }, un.isBefore = function(t, e) {
                var n = b(t) ? t : De(t);
                return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = L(o(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }, un.isBetween = function(t, e, n, i) {
                return ("(" === (i = i || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }, un.isSame = function(t, e) {
                var n, i = b(t) ? t : De(t);
                return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = L(e || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }, un.isSameOrAfter = function(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }, un.isSameOrBefore = function(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }, un.isValid = function() {
                return f(this)
            }, un.lang = tn, un.locale = Qe, un.localeData = en, un.max = Ae, un.min = Oe, un.parsingFlags = function() {
                return u({}, h(this))
            }, un.set = function(t, e) {
                if ("object" == typeof t)
                    for (var n = function(t) {
                            var e = [];
                            for (var n in t) e.push({
                                unit: n,
                                priority: E[n]
                            });
                            return e.sort(function(t, e) {
                                return t.priority - e.priority
                            }), e
                        }(t = F(t)), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit]);
                else if (D(this[t = L(t)])) return this[t](e);
                return this
            }, un.startOf = function(t) {
                switch (t = L(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }, un.subtract = Ze, un.toArray = function() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }, un.toObject = function() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }, un.toDate = function() {
                return new Date(this.valueOf())
            }, un.toISOString = function(t) {
                if (!this.isValid()) return null;
                var e = !0 !== t,
                    n = e ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? H(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", H(n, "Z")) : H(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }, un.inspect = function() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var n = "[" + t + '("]',
                    i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    r = e + '[")]';
                return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
            }, un.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }, un.toString = function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }, un.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }, un.valueOf = function() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }, un.creationData = function() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }, un.year = Pt, un.isLeapYear = function() {
                return Ct(this.year())
            }, un.weekYear = function(t) {
                return rn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }, un.isoWeekYear = function(t) {
                return rn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }, un.quarter = un.quarters = function(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }, un.month = zt, un.daysInMonth = function() {
                return It(this.year(), this.month())
            }, un.week = un.weeks = function(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }, un.isoWeek = un.isoWeeks = function(t) {
                var e = Ht(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }, un.weeksInYear = function() {
                var t = this.localeData()._week;
                return Ut(this.year(), t.dow, t.doy)
            }, un.isoWeeksInYear = function() {
                return Ut(this.year(), 1, 4)
            }, un.date = an, un.day = un.days = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = function(t, e) {
                    return "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10)
                }(t, this.localeData()), this.add(t - e, "d")) : e
            }, un.weekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }, un.isoWeekday = function(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    var e = function(t, e) {
                        return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
                    }(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }, un.dayOfYear = function(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }, un.hour = un.hours = ie, un.minute = un.minutes = on, un.second = un.seconds = sn, un.millisecond = un.milliseconds = pn, un.utcOffset = function(t, e, n) {
                var r, a = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    if ("string" == typeof t) {
                        if (null === (t = We(ot, t))) return this
                    } else Math.abs(t) < 16 && !n && (t *= 60);
                    return !this._isUTC && e && (r = je(this)), this._offset = t, this._isUTC = !0, null != r && this.add(r, "m"), a !== t && (!e || this._changeInProgress ? Ke(this, Ue(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? a : je(this)
            }, un.utc = function(t) {
                return this.utcOffset(0, t)
            }, un.local = function(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(je(this), "m")), this
            }, un.parseZone = function() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) {
                    var t = We(at, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }, un.hasAlignedHourOffset = function(t) {
                return !!this.isValid() && (t = t ? De(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
            }, un.isDST = function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }, un.isLocal = function() {
                return !!this.isValid() && !this._isUTC
            }, un.isUtcOffset = function() {
                return !!this.isValid() && this._isUTC
            }, un.isUtc = Be, un.isUTC = Be, un.zoneAbbr = function() {
                return this._isUTC ? "UTC" : ""
            }, un.zoneName = function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }, un.dates = M("dates accessor is deprecated. Use date instead.", an), un.months = M("months accessor is deprecated. Use month instead", zt), un.years = M("years accessor is deprecated. Use year instead", Pt), un.zone = M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }), un.isDSTShifted = M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (g(t, this), (t = Te(t))._a) {
                    var e = t._isUTC ? d(t._a) : De(t._a);
                    this._isDSTShifted = this.isValid() && k(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            });
            var hn = A.prototype;

            function fn(t, e, n, i) {
                var r = ue(),
                    a = d().set(i, e);
                return r[n](a, t)
            }

            function xn(t, e, n) {
                if (c(t) && (e = t, t = void 0), t = t || "", null != e) return fn(t, e, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++) r[i] = fn(t, i, n, "month");
                return r
            }

            function mn(t, e, n, i) {
                "boolean" == typeof t ? (c(e) && (n = e, e = void 0), e = e || "") : (n = e = t, t = !1, c(e) && (n = e, e = void 0), e = e || "");
                var r, a = ue(),
                    o = t ? a._week.dow : 0;
                if (null != n) return fn(e, (n + o) % 7, i, "day");
                var s = [];
                for (r = 0; r < 7; r++) s[r] = fn(e, (r + o) % 7, i, "day");
                return s
            }
            hn.calendar = function(t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return D(i) ? i.call(e, n) : i
            }, hn.longDateFormat = function(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }, hn.invalidDate = function() {
                return this._invalidDate
            }, hn.ordinal = function(t) {
                return this._ordinal.replace("%d", t)
            }, hn.preparse = dn, hn.postformat = dn, hn.relativeTime = function(t, e, n, i) {
                var r = this._relativeTime[n];
                return D(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
            }, hn.pastFuture = function(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return D(n) ? n(e) : n.replace(/%s/i, e)
            }, hn.set = function(t) {
                var e, n;
                for (n in t) D(e = t[n]) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }, hn.months = function(t, e) {
                return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Rt).test(e) ? "format" : "standalone"][t.month()] : r(this._months) ? this._months : this._months.standalone
            }, hn.monthsShort = function(t, e) {
                return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Rt.test(e) ? "format" : "standalone"][t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }, hn.monthsParse = function(t, e, n) {
                var i, r, a;
                if (this._monthsParseExact) return function(t, e, n) {
                    var i, r, a, o = t.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) a = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase();
                    return n ? "MMM" === e ? -1 !== (r = Tt.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = Tt.call(this._longMonthsParse, o)) ? r : null : "MMM" === e ? -1 !== (r = Tt.call(this._shortMonthsParse, o)) ? r : -1 !== (r = Tt.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = Tt.call(this._longMonthsParse, o)) ? r : -1 !== (r = Tt.call(this._shortMonthsParse, o)) ? r : null
                }.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                    if (!n && this._monthsParse[i].test(t)) return i
                }
            }, hn.monthsRegex = function(t) {
                return this._monthsParseExact ? (p(this, "_monthsRegex") || Vt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (p(this, "_monthsRegex") || (this._monthsRegex = Wt), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }, hn.monthsShortRegex = function(t) {
                return this._monthsParseExact ? (p(this, "_monthsRegex") || Vt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (p(this, "_monthsShortRegex") || (this._monthsShortRegex = Nt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }, hn.week = function(t) {
                return Ht(t, this._week.dow, this._week.doy).week
            }, hn.firstDayOfYear = function() {
                return this._week.doy
            }, hn.firstDayOfWeek = function() {
                return this._week.dow
            }, hn.weekdays = function(t, e) {
                return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }, hn.weekdaysMin = function(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }, hn.weekdaysShort = function(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }, hn.weekdaysParse = function(t, e, n) {
                var i, r, a;
                if (this._weekdaysParseExact) return function(t, e, n) {
                    var i, r, a, o = t.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) a = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase();
                    return n ? "dddd" === e ? -1 !== (r = Tt.call(this._weekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = Tt.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = Tt.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === e ? -1 !== (r = Tt.call(this._weekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === e ? -1 !== (r = Tt.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._weekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = Tt.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._weekdaysParse, o)) ? r : -1 !== (r = Tt.call(this._shortWeekdaysParse, o)) ? r : null
                }.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                    if (!n && this._weekdaysParse[i].test(t)) return i
                }
            }, hn.weekdaysRegex = function(t) {
                return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (p(this, "_weekdaysRegex") || (this._weekdaysRegex = Kt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }, hn.weekdaysShortRegex = function(t) {
                return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (p(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }, hn.weekdaysMinRegex = function(t) {
                return this._weekdaysParseExact ? (p(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (p(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Zt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }, hn.isPM = function(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }, hn.meridiem = function(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }, le("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10,
                        n = 1 === _(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }), i.lang = M("moment.lang is deprecated. Use moment.locale instead.", le), i.langData = M("moment.langData is deprecated. Use moment.localeData instead.", ue);
            var gn = Math.abs;

            function vn(t, e, n, i) {
                var r = Ue(e, n);
                return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
            }

            function yn(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function bn(t) {
                return 4800 * t / 146097
            }

            function wn(t) {
                return 146097 * t / 4800
            }

            function _n(t) {
                return function() {
                    return this.as(t)
                }
            }
            var kn = _n("ms"),
                Sn = _n("s"),
                Mn = _n("m"),
                Cn = _n("h"),
                Tn = _n("d"),
                Pn = _n("w"),
                Dn = _n("M"),
                On = _n("y");

            function An(t) {
                return function() {
                    return this.isValid() ? this._data[t] : NaN
                }
            }
            var In = An("milliseconds"),
                Rn = An("seconds"),
                Ln = An("minutes"),
                Fn = An("hours"),
                En = An("days"),
                zn = An("months"),
                Nn = An("years"),
                Wn = Math.round,
                Vn = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                jn = Math.abs;

            function Bn(t) {
                return (t > 0) - (t < 0) || +t
            }

            function Yn() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t, e, n = jn(this._milliseconds) / 1e3,
                    i = jn(this._days),
                    r = jn(this._months);
                t = w(n / 60), e = w(t / 60), n %= 60, t %= 60;
                var a = w(r / 12),
                    o = r %= 12,
                    c = i,
                    s = e,
                    l = t,
                    p = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    u = this.asSeconds();
                if (!u) return "P0D";
                var d = u < 0 ? "-" : "",
                    h = Bn(this._months) !== Bn(u) ? "-" : "",
                    f = Bn(this._days) !== Bn(u) ? "-" : "",
                    x = Bn(this._milliseconds) !== Bn(u) ? "-" : "";
                return d + "P" + (a ? h + a + "Y" : "") + (o ? h + o + "M" : "") + (c ? f + c + "D" : "") + (s || l || p ? "T" : "") + (s ? x + s + "H" : "") + (l ? x + l + "M" : "") + (p ? x + p + "S" : "")
            }
            var Hn = Le.prototype;
            return Hn.isValid = function() {
                return this._isValid
            }, Hn.abs = function() {
                var t = this._data;
                return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), this._months = gn(this._months), t.milliseconds = gn(t.milliseconds), t.seconds = gn(t.seconds), t.minutes = gn(t.minutes), t.hours = gn(t.hours), t.months = gn(t.months), t.years = gn(t.years), this
            }, Hn.add = function(t, e) {
                return vn(this, t, e, 1)
            }, Hn.subtract = function(t, e) {
                return vn(this, t, e, -1)
            }, Hn.as = function(t) {
                if (!this.isValid()) return NaN;
                var e, n, i = this._milliseconds;
                if ("month" === (t = L(t)) || "year" === t) return e = this._days + i / 864e5, n = this._months + bn(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(wn(this._months)), t) {
                    case "week":
                        return e / 7 + i / 6048e5;
                    case "day":
                        return e + i / 864e5;
                    case "hour":
                        return 24 * e + i / 36e5;
                    case "minute":
                        return 1440 * e + i / 6e4;
                    case "second":
                        return 86400 * e + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }, Hn.asMilliseconds = kn, Hn.asSeconds = Sn, Hn.asMinutes = Mn, Hn.asHours = Cn, Hn.asDays = Tn, Hn.asWeeks = Pn, Hn.asMonths = Dn, Hn.asYears = On, Hn.valueOf = function() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12) : NaN
            }, Hn._bubble = function() {
                var t, e, n, i, r, a = this._milliseconds,
                    o = this._days,
                    c = this._months,
                    s = this._data;
                return a >= 0 && o >= 0 && c >= 0 || a <= 0 && o <= 0 && c <= 0 || (a += 864e5 * yn(wn(c) + o), o = 0, c = 0), s.milliseconds = a % 1e3, t = w(a / 1e3), s.seconds = t % 60, e = w(t / 60), s.minutes = e % 60, n = w(e / 60), s.hours = n % 24, o += w(n / 24), r = w(bn(o)), c += r, o -= yn(wn(r)), i = w(c / 12), c %= 12, s.days = o, s.months = c, s.years = i, this
            }, Hn.clone = function() {
                return Ue(this)
            }, Hn.get = function(t) {
                return t = L(t), this.isValid() ? this[t + "s"]() : NaN
            }, Hn.milliseconds = In, Hn.seconds = Rn, Hn.minutes = Ln, Hn.hours = Fn, Hn.days = En, Hn.weeks = function() {
                return w(this.days() / 7)
            }, Hn.months = zn, Hn.years = Nn, Hn.humanize = function(t) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e = this.localeData(),
                    n = function(t, e, n) {
                        var i = Ue(t).abs(),
                            r = Wn(i.as("s")),
                            a = Wn(i.as("m")),
                            o = Wn(i.as("h")),
                            c = Wn(i.as("d")),
                            s = Wn(i.as("M")),
                            l = Wn(i.as("y")),
                            p = r <= Vn.ss && ["s", r] || r < Vn.s && ["ss", r] || a <= 1 && ["m"] || a < Vn.m && ["mm", a] || o <= 1 && ["h"] || o < Vn.h && ["hh", o] || c <= 1 && ["d"] || c < Vn.d && ["dd", c] || s <= 1 && ["M"] || s < Vn.M && ["MM", s] || l <= 1 && ["y"] || ["yy", l];
                        return p[2] = e, p[3] = +t > 0, p[4] = n,
                            function(t, e, n, i, r) {
                                return r.relativeTime(e || 1, !!n, t, i)
                            }.apply(null, p)
                    }(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }, Hn.toISOString = Yn, Hn.toString = Yn, Hn.toJSON = Yn, Hn.locale = Qe, Hn.localeData = en, Hn.toIsoString = M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yn), Hn.lang = tn, Y("X", 0, 0, "unix"), Y("x", 0, 0, "valueOf"), lt("x", rt), lt("X", /[+-]?\d+(\.\d{1,3})?/), ht("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), ht("x", function(t, e, n) {
                n._d = new Date(_(t))
            }), i.version = "2.22.1", e = De, i.fn = un, i.min = function() {
                return Ie("isBefore", [].slice.call(arguments, 0))
            }, i.max = function() {
                return Ie("isAfter", [].slice.call(arguments, 0))
            }, i.now = function() {
                return Date.now ? Date.now() : +new Date
            }, i.utc = d, i.unix = function(t) {
                return De(1e3 * t)
            }, i.months = function(t, e) {
                return xn(t, e, "months")
            }, i.isDate = s, i.locale = le, i.invalid = x, i.duration = Ue, i.isMoment = b, i.weekdays = function(t, e, n) {
                return mn(t, e, n, "weekdays")
            }, i.parseZone = function() {
                return De.apply(null, arguments).parseZone()
            }, i.localeData = ue, i.isDuration = Fe, i.monthsShort = function(t, e) {
                return xn(t, e, "monthsShort")
            }, i.weekdaysMin = function(t, e, n) {
                return mn(t, e, n, "weekdaysMin")
            }, i.defineLocale = pe, i.updateLocale = function(t, e) {
                if (null != e) {
                    var n, i, r = re;
                    null != (i = se(t)) && (r = i._config), e = O(r, e), (n = new A(e)).parentLocale = ae[t], ae[t] = n, le(t)
                } else null != ae[t] && (null != ae[t].parentLocale ? ae[t] = ae[t].parentLocale : null != ae[t] && delete ae[t]);
                return ae[t]
            }, i.locales = function() {
                return C(ae)
            }, i.weekdaysShort = function(t, e, n) {
                return mn(t, e, n, "weekdaysShort")
            }, i.normalizeUnits = L, i.relativeTimeRounding = function(t) {
                return void 0 === t ? Wn : "function" == typeof t && (Wn = t, !0)
            }, i.relativeTimeThreshold = function(t, e) {
                return void 0 !== Vn[t] && (void 0 === e ? Vn[t] : (Vn[t] = e, "s" === t && (Vn.ss = e - 1), !0))
            }, i.calendarFormat = function(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }, i.prototype = un, i.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, i
        }()
    }).call(this, n(629)(t))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }],
            yAxes: [{
                type: "linear"
            }]
        }
    }), i._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                position: "left",
                type: "category",
                categoryPercentage: .8,
                barPercentage: .9,
                offset: !0,
                gridLines: {
                    offsetGridLines: !0
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            callbacks: {
                title: function(t, e) {
                    var n = "";
                    return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n
                },
                label: function(t, e) {
                    return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                }
            },
            mode: "index",
            axis: "y"
        }
    }), t.exports = function(t) {
        t.controllers.bar = t.DatasetController.extend({
            dataElementType: r.Rectangle,
            initialize: function() {
                var e;
                t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
            },
            update: function(t) {
                var e, n, i = this.getMeta().data;
                for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) this.updateElement(i[e], e, t)
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = i.chart,
                    o = i.getMeta(),
                    c = i.getDataset(),
                    s = t.custom || {},
                    l = r.options.elements.rectangle;
                t._xScale = i.getScaleForId(o.xAxisID), t._yScale = i.getScaleForId(o.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                    datasetLabel: c.label,
                    label: r.data.labels[e],
                    borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                    backgroundColor: s.backgroundColor ? s.backgroundColor : a.valueAtIndexOrDefault(c.backgroundColor, e, l.backgroundColor),
                    borderColor: s.borderColor ? s.borderColor : a.valueAtIndexOrDefault(c.borderColor, e, l.borderColor),
                    borderWidth: s.borderWidth ? s.borderWidth : a.valueAtIndexOrDefault(c.borderWidth, e, l.borderWidth)
                }, i.updateElementGeometry(t, e, n), t.pivot()
            },
            updateElementGeometry: function(t, e, n) {
                var i = this,
                    r = t._model,
                    a = i.getValueScale(),
                    o = a.getBasePixel(),
                    c = a.isHorizontal(),
                    s = i._ruler || i.getRuler(),
                    l = i.calculateBarValuePixels(i.index, e),
                    p = i.calculateBarIndexPixels(i.index, e, s);
                r.horizontal = c, r.base = n ? o : l.base, r.x = c ? n ? o : l.head : p.center, r.y = c ? p.center : n ? o : l.head, r.height = c ? p.size : void 0, r.width = c ? void 0 : p.size
            },
            getValueScaleId: function() {
                return this.getMeta().yAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().xAxisID
            },
            getValueScale: function() {
                return this.getScaleForId(this.getValueScaleId())
            },
            getIndexScale: function() {
                return this.getScaleForId(this.getIndexScaleId())
            },
            _getStacks: function(t) {
                var e, n, i = this.chart,
                    r = this.getIndexScale().options.stacked,
                    a = void 0 === t ? i.data.datasets.length : t + 1,
                    o = [];
                for (e = 0; e < a; ++e)(n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === r || !0 === r && -1 === o.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === o.indexOf(n.stack))) && o.push(n.stack);
                return o
            },
            getStackCount: function() {
                return this._getStacks().length
            },
            getStackIndex: function(t, e) {
                var n = this._getStacks(t),
                    i = void 0 !== e ? n.indexOf(e) : -1;
                return -1 === i ? n.length - 1 : i
            },
            getRuler: function() {
                var t, e, n = this.getIndexScale(),
                    i = this.getStackCount(),
                    r = this.index,
                    o = n.isHorizontal(),
                    c = o ? n.left : n.top,
                    s = c + (o ? n.width : n.height),
                    l = [];
                for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(n.getPixelForValue(null, t, r));
                return {
                    min: a.isNullOrUndef(n.options.barThickness) ? function(t, e) {
                        var n, i, r, a, o = t.isHorizontal() ? t.width : t.height,
                            c = t.getTicks();
                        for (r = 1, a = e.length; r < a; ++r) o = Math.min(o, e[r] - e[r - 1]);
                        for (r = 0, a = c.length; r < a; ++r) i = t.getPixelForTick(r), o = r > 0 ? Math.min(o, i - n) : o, n = i;
                        return o
                    }(n, l) : -1,
                    pixels: l,
                    start: c,
                    end: s,
                    stackCount: i,
                    scale: n
                }
            },
            calculateBarValuePixels: function(t, e) {
                var n, i, r, a, o, c, s = this.chart,
                    l = this.getMeta(),
                    p = this.getValueScale(),
                    u = s.data.datasets,
                    d = p.getRightValue(u[t].data[e]),
                    h = p.options.stacked,
                    f = l.stack,
                    x = 0;
                if (h || void 0 === h && void 0 !== f)
                    for (n = 0; n < t; ++n)(i = s.getDatasetMeta(n)).bar && i.stack === f && i.controller.getValueScaleId() === p.id && s.isDatasetVisible(n) && (r = p.getRightValue(u[n].data[e]), (d < 0 && r < 0 || d >= 0 && r > 0) && (x += r));
                return a = p.getPixelForValue(x), {
                    size: c = ((o = p.getPixelForValue(x + d)) - a) / 2,
                    base: a,
                    head: o,
                    center: o + c / 2
                }
            },
            calculateBarIndexPixels: function(t, e, n) {
                var i = n.scale.options,
                    r = "flex" === i.barThickness ? function(t, e, n) {
                        var i, r = e.pixels,
                            a = r[t],
                            o = t > 0 ? r[t - 1] : null,
                            c = t < r.length - 1 ? r[t + 1] : null,
                            s = n.categoryPercentage;
                        return null === o && (o = a - (null === c ? e.end - a : c - a)), null === c && (c = a + a - o), i = a - (a - o) / 2 * s, {
                            chunk: (c - o) / 2 * s / e.stackCount,
                            ratio: n.barPercentage,
                            start: i
                        }
                    }(e, n, i) : function(t, e, n) {
                        var i, r, o = n.barThickness,
                            c = e.stackCount,
                            s = e.pixels[t];
                        return a.isNullOrUndef(o) ? (i = e.min * n.categoryPercentage, r = n.barPercentage) : (i = o * c, r = 1), {
                            chunk: i / c,
                            ratio: r,
                            start: s - i / 2
                        }
                    }(e, n, i),
                    o = this.getStackIndex(t, this.getMeta().stack),
                    c = r.start + r.chunk * o + r.chunk / 2,
                    s = Math.min(a.valueOrDefault(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);
                return {
                    base: c - s / 2,
                    head: c + s / 2,
                    center: c,
                    size: s
                }
            },
            draw: function() {
                var t = this.chart,
                    e = this.getValueScale(),
                    n = this.getMeta().data,
                    i = this.getDataset(),
                    r = n.length,
                    o = 0;
                for (a.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) isNaN(e.getRightValue(i.data[o])) || n[o].draw();
                a.canvas.unclipArea(t.ctx)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    r = t._model;
                r.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : a.valueAtIndexOrDefault(e.hoverBackgroundColor, n, a.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor ? i.hoverBorderColor : a.valueAtIndexOrDefault(e.hoverBorderColor, n, a.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : a.valueAtIndexOrDefault(e.hoverBorderWidth, n, r.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    r = t._model,
                    o = this.chart.options.elements.rectangle;
                r.backgroundColor = i.backgroundColor ? i.backgroundColor : a.valueAtIndexOrDefault(e.backgroundColor, n, o.backgroundColor), r.borderColor = i.borderColor ? i.borderColor : a.valueAtIndexOrDefault(e.borderColor, n, o.borderColor), r.borderWidth = i.borderWidth ? i.borderWidth : a.valueAtIndexOrDefault(e.borderWidth, n, o.borderWidth)
            }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
            getValueScaleId: function() {
                return this.getMeta().xAxisID
            },
            getIndexScaleId: function() {
                return this.getMeta().yAxisID
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                type: "linear",
                position: "bottom",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                position: "left",
                id: "y-axis-0"
            }]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "",
                        i = e.datasets[t.datasetIndex].data[t.index];
                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.bubble = t.DatasetController.extend({
            dataElementType: r.Point,
            update: function(t) {
                var e = this,
                    n = e.getMeta().data;
                a.each(n, function(n, i) {
                    e.updateElement(n, i, t)
                })
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = i.getMeta(),
                    a = t.custom || {},
                    o = i.getScaleForId(r.xAxisID),
                    c = i.getScaleForId(r.yAxisID),
                    s = i._resolveElementOptions(t, e),
                    l = i.getDataset().data[e],
                    p = i.index,
                    u = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof l ? l : NaN, e, p),
                    d = n ? c.getBasePixel() : c.getPixelForValue(l, e, p);
                t._xScale = o, t._yScale = c, t._options = s, t._datasetIndex = p, t._index = e, t._model = {
                    backgroundColor: s.backgroundColor,
                    borderColor: s.borderColor,
                    borderWidth: s.borderWidth,
                    hitRadius: s.hitRadius,
                    pointStyle: s.pointStyle,
                    radius: n ? 0 : s.radius,
                    skip: a.skip || isNaN(u) || isNaN(d),
                    x: u,
                    y: d
                }, t.pivot()
            },
            setHoverStyle: function(t) {
                var e = t._model,
                    n = t._options;
                e.backgroundColor = a.valueOrDefault(n.hoverBackgroundColor, a.getHoverColor(n.backgroundColor)), e.borderColor = a.valueOrDefault(n.hoverBorderColor, a.getHoverColor(n.borderColor)), e.borderWidth = a.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius
            },
            removeHoverStyle: function(t) {
                var e = t._model,
                    n = t._options;
                e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius
            },
            _resolveElementOptions: function(t, e) {
                var n, i, r, o = this.chart,
                    c = o.data.datasets[this.index],
                    s = t.custom || {},
                    l = o.options.elements.point,
                    p = a.options.resolve,
                    u = c.data[e],
                    d = {},
                    h = {
                        chart: o,
                        dataIndex: e,
                        dataset: c,
                        datasetIndex: this.index
                    },
                    f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                for (n = 0, i = f.length; n < i; ++n) d[r = f[n]] = p([s[r], c[r], l[r]], h, e);
                return d.radius = p([s.radius, u ? u.r : void 0, c.radius, l.radius], h, e), d
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                i = n.datasets,
                r = n.labels;
            if (i.length)
                for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), r[a] && e.push(r[a]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                        var r = t.getDatasetMeta(0),
                            o = e.datasets[0],
                            c = r.data[i],
                            s = c && c.custom || {},
                            l = a.valueAtIndexOrDefault,
                            p = t.options.elements.arc;
                        return {
                            text: n,
                            fillStyle: s.backgroundColor ? s.backgroundColor : l(o.backgroundColor, i, p.backgroundColor),
                            strokeStyle: s.borderColor ? s.borderColor : l(o.borderColor, i, p.borderColor),
                            lineWidth: s.borderWidth ? s.borderWidth : l(o.borderWidth, i, p.borderWidth),
                            hidden: isNaN(o.data[i]) || r.data[i].hidden,
                            index: i
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var n, i, r, a = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a] && (r.data[a].hidden = !r.data[a].hidden);
                o.update()
            }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    var n = e.labels[t.index],
                        i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return a.isArray(n) ? (n = n.slice())[0] += i : n += i, n
                }
            }
        }
    }), i._set("pie", a.clone(i.doughnut)), i._set("pie", {
        cutoutPercentage: 0
    }), t.exports = function(t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
            dataElementType: r.Arc,
            linkScales: a.noop,
            getRingIndex: function(t) {
                for (var e = 0, n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && ++e;
                return e
            },
            update: function(t) {
                var e = this,
                    n = e.chart,
                    i = n.chartArea,
                    r = n.options,
                    o = r.elements.arc,
                    c = i.right - i.left - o.borderWidth,
                    s = i.bottom - i.top - o.borderWidth,
                    l = Math.min(c, s),
                    p = {
                        x: 0,
                        y: 0
                    },
                    u = e.getMeta(),
                    d = r.cutoutPercentage,
                    h = r.circumference;
                if (h < 2 * Math.PI) {
                    var f = r.rotation % (2 * Math.PI),
                        x = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + h,
                        m = {
                            x: Math.cos(f),
                            y: Math.sin(f)
                        },
                        g = {
                            x: Math.cos(x),
                            y: Math.sin(x)
                        },
                        v = f <= 0 && x >= 0 || f <= 2 * Math.PI && 2 * Math.PI <= x,
                        y = f <= .5 * Math.PI && .5 * Math.PI <= x || f <= 2.5 * Math.PI && 2.5 * Math.PI <= x,
                        b = f <= -Math.PI && -Math.PI <= x || f <= Math.PI && Math.PI <= x,
                        w = f <= .5 * -Math.PI && .5 * -Math.PI <= x || f <= 1.5 * Math.PI && 1.5 * Math.PI <= x,
                        _ = d / 100,
                        k = {
                            x: b ? -1 : Math.min(m.x * (m.x < 0 ? 1 : _), g.x * (g.x < 0 ? 1 : _)),
                            y: w ? -1 : Math.min(m.y * (m.y < 0 ? 1 : _), g.y * (g.y < 0 ? 1 : _))
                        },
                        S = {
                            x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : _), g.x * (g.x > 0 ? 1 : _)),
                            y: y ? 1 : Math.max(m.y * (m.y > 0 ? 1 : _), g.y * (g.y > 0 ? 1 : _))
                        },
                        M = {
                            width: .5 * (S.x - k.x),
                            height: .5 * (S.y - k.y)
                        };
                    l = Math.min(c / M.width, s / M.height), p = {
                        x: -.5 * (S.x + k.x),
                        y: -.5 * (S.y + k.y)
                    }
                }
                n.borderWidth = e.getMaxBorderWidth(u.data), n.outerRadius = Math.max((l - n.borderWidth) / 2, 0), n.innerRadius = Math.max(d ? n.outerRadius / 100 * d : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = p.x * n.outerRadius, n.offsetY = p.y * n.outerRadius, u.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), a.each(u.data, function(n, i) {
                    e.updateElement(n, i, t)
                })
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = i.chart,
                    o = r.chartArea,
                    c = r.options,
                    s = c.animation,
                    l = (o.left + o.right) / 2,
                    p = (o.top + o.bottom) / 2,
                    u = c.rotation,
                    d = c.rotation,
                    h = i.getDataset(),
                    f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (c.circumference / (2 * Math.PI)),
                    x = n && s.animateScale ? 0 : i.innerRadius,
                    m = n && s.animateScale ? 0 : i.outerRadius,
                    g = a.valueAtIndexOrDefault;
                a.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _model: {
                        x: l + r.offsetX,
                        y: p + r.offsetY,
                        startAngle: u,
                        endAngle: d,
                        circumference: f,
                        outerRadius: m,
                        innerRadius: x,
                        label: g(h.label, e, r.data.labels[e])
                    }
                });
                var v = t._model;
                this.removeHoverStyle(t), n && s.animateRotate || (v.startAngle = 0 === e ? c.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
            },
            removeHoverStyle: function(e) {
                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            calculateTotal: function() {
                var t, e = this.getDataset(),
                    n = this.getMeta(),
                    i = 0;
                return a.each(n.data, function(n, r) {
                    t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t))
                }), i
            },
            calculateCircumference: function(t) {
                var e = this.getMeta().total;
                return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
            },
            getMaxBorderWidth: function(t) {
                for (var e, n, i = 0, r = this.index, a = t.length, o = 0; o < a; o++) e = t[o]._model ? t[o]._model.borderWidth : 0, i = (n = t[o]._chart ? t[o]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
                return i
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [{
                type: "category",
                id: "x-axis-0"
            }],
            yAxes: [{
                type: "linear",
                id: "y-axis-0"
            }]
        }
    }), t.exports = function(t) {
        function e(t, e) {
            return a.valueOrDefault(t.showLine, e.showLines)
        }
        t.controllers.line = t.DatasetController.extend({
            datasetElementType: r.Line,
            dataElementType: r.Point,
            update: function(t) {
                var n, i, r, o = this,
                    c = o.getMeta(),
                    s = c.dataset,
                    l = c.data || [],
                    p = o.chart.options,
                    u = p.elements.line,
                    d = o.getScaleForId(c.yAxisID),
                    h = o.getDataset(),
                    f = e(h, p);
                for (f && (r = s.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), s._scale = d, s._datasetIndex = o.index, s._children = l, s._model = {
                        spanGaps: h.spanGaps ? h.spanGaps : p.spanGaps,
                        tension: r.tension ? r.tension : a.valueOrDefault(h.lineTension, u.tension),
                        backgroundColor: r.backgroundColor ? r.backgroundColor : h.backgroundColor || u.backgroundColor,
                        borderWidth: r.borderWidth ? r.borderWidth : h.borderWidth || u.borderWidth,
                        borderColor: r.borderColor ? r.borderColor : h.borderColor || u.borderColor,
                        borderCapStyle: r.borderCapStyle ? r.borderCapStyle : h.borderCapStyle || u.borderCapStyle,
                        borderDash: r.borderDash ? r.borderDash : h.borderDash || u.borderDash,
                        borderDashOffset: r.borderDashOffset ? r.borderDashOffset : h.borderDashOffset || u.borderDashOffset,
                        borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : h.borderJoinStyle || u.borderJoinStyle,
                        fill: r.fill ? r.fill : void 0 !== h.fill ? h.fill : u.fill,
                        steppedLine: r.steppedLine ? r.steppedLine : a.valueOrDefault(h.steppedLine, u.stepped),
                        cubicInterpolationMode: r.cubicInterpolationMode ? r.cubicInterpolationMode : a.valueOrDefault(h.cubicInterpolationMode, u.cubicInterpolationMode)
                    }, s.pivot()), n = 0, i = l.length; n < i; ++n) o.updateElement(l[n], n, t);
                for (f && 0 !== s._model.tension && o.updateBezierControlPoints(), n = 0, i = l.length; n < i; ++n) l[n].pivot()
            },
            getPointBackgroundColor: function(t, e) {
                var n = this.chart.options.elements.point.backgroundColor,
                    i = this.getDataset(),
                    r = t.custom || {};
                return r.backgroundColor ? n = r.backgroundColor : i.pointBackgroundColor ? n = a.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n
            },
            getPointBorderColor: function(t, e) {
                var n = this.chart.options.elements.point.borderColor,
                    i = this.getDataset(),
                    r = t.custom || {};
                return r.borderColor ? n = r.borderColor : i.pointBorderColor ? n = a.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n
            },
            getPointBorderWidth: function(t, e) {
                var n = this.chart.options.elements.point.borderWidth,
                    i = this.getDataset(),
                    r = t.custom || {};
                return isNaN(r.borderWidth) ? !isNaN(i.pointBorderWidth) || a.isArray(i.pointBorderWidth) ? n = a.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = r.borderWidth, n
            },
            updateElement: function(t, e, n) {
                var i, r, o = this,
                    c = o.getMeta(),
                    s = t.custom || {},
                    l = o.getDataset(),
                    p = o.index,
                    u = l.data[e],
                    d = o.getScaleForId(c.yAxisID),
                    h = o.getScaleForId(c.xAxisID),
                    f = o.chart.options.elements.point;
                void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), i = h.getPixelForValue("object" == typeof u ? u : NaN, e, p), r = n ? d.getBasePixel() : o.calculatePointY(u, e, p), t._xScale = h, t._yScale = d, t._datasetIndex = p, t._index = e, t._model = {
                    x: i,
                    y: r,
                    skip: s.skip || isNaN(i) || isNaN(r),
                    radius: s.radius || a.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
                    pointStyle: s.pointStyle || a.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
                    backgroundColor: o.getPointBackgroundColor(t, e),
                    borderColor: o.getPointBorderColor(t, e),
                    borderWidth: o.getPointBorderWidth(t, e),
                    tension: c.dataset._model ? c.dataset._model.tension : 0,
                    steppedLine: !!c.dataset._model && c.dataset._model.steppedLine,
                    hitRadius: s.hitRadius || a.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius)
                }
            },
            calculatePointY: function(t, e, n) {
                var i, r, a, o = this.chart,
                    c = this.getMeta(),
                    s = this.getScaleForId(c.yAxisID),
                    l = 0,
                    p = 0;
                if (s.options.stacked) {
                    for (i = 0; i < n; i++)
                        if (r = o.data.datasets[i], "line" === (a = o.getDatasetMeta(i)).type && a.yAxisID === s.id && o.isDatasetVisible(i)) {
                            var u = Number(s.getRightValue(r.data[e]));
                            u < 0 ? p += u || 0 : l += u || 0
                        }
                    var d = Number(s.getRightValue(t));
                    return d < 0 ? s.getPixelForValue(p + d) : s.getPixelForValue(l + d)
                }
                return s.getPixelForValue(t)
            },
            updateBezierControlPoints: function() {
                var t, e, n, i, r = this.getMeta(),
                    o = this.chart.chartArea,
                    c = r.data || [];

                function s(t, e, n) {
                    return Math.max(Math.min(t, n), e)
                }
                if (r.dataset._model.spanGaps && (c = c.filter(function(t) {
                        return !t._model.skip
                    })), "monotone" === r.dataset._model.cubicInterpolationMode) a.splineCurveMonotone(c);
                else
                    for (t = 0, e = c.length; t < e; ++t) n = c[t]._model, i = a.splineCurve(a.previousItem(c, t)._model, n, a.nextItem(c, t)._model, r.dataset._model.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
                if (this.chart.options.elements.line.capBezierPoints)
                    for (t = 0, e = c.length; t < e; ++t)(n = c[t]._model).controlPointPreviousX = s(n.controlPointPreviousX, o.left, o.right), n.controlPointPreviousY = s(n.controlPointPreviousY, o.top, o.bottom), n.controlPointNextX = s(n.controlPointNextX, o.left, o.right), n.controlPointNextY = s(n.controlPointNextY, o.top, o.bottom)
            },
            draw: function() {
                var t = this.chart,
                    n = this.getMeta(),
                    i = n.data || [],
                    r = t.chartArea,
                    o = i.length,
                    c = 0;
                for (a.canvas.clipArea(t.ctx, r), e(this.getDataset(), t.options) && n.dataset.draw(), a.canvas.unclipArea(t.ctx); c < o; ++c) i[c].draw(r)
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t._index,
                    i = t.custom || {},
                    r = t._model;
                r.radius = i.hoverRadius || a.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), r.backgroundColor = i.hoverBackgroundColor || a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, a.getHoverColor(r.backgroundColor)), r.borderColor = i.hoverBorderColor || a.valueAtIndexOrDefault(e.pointHoverBorderColor, n, a.getHoverColor(r.borderColor)), r.borderWidth = i.hoverBorderWidth || a.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, r.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this,
                    n = e.chart.data.datasets[t._datasetIndex],
                    i = t._index,
                    r = t.custom || {},
                    o = t._model;
                void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), o.radius = r.radius || a.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, i), o.borderColor = e.getPointBorderColor(t, i), o.borderWidth = e.getPointBorderWidth(t, i)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            var n = t.data,
                i = n.datasets,
                r = n.labels;
            if (i.length)
                for (var a = 0; a < i[0].data.length; ++a) e.push('<li><span style="background-color:' + i[0].backgroundColor[a] + '"></span>'), r[a] && e.push(r[a]), e.push("</li>");
            return e.push("</ul>"), e.join("")
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                        var r = t.getDatasetMeta(0),
                            o = e.datasets[0],
                            c = r.data[i].custom || {},
                            s = a.valueAtIndexOrDefault,
                            l = t.options.elements.arc;
                        return {
                            text: n,
                            fillStyle: c.backgroundColor ? c.backgroundColor : s(o.backgroundColor, i, l.backgroundColor),
                            strokeStyle: c.borderColor ? c.borderColor : s(o.borderColor, i, l.borderColor),
                            lineWidth: c.borderWidth ? c.borderWidth : s(o.borderWidth, i, l.borderWidth),
                            hidden: isNaN(o.data[i]) || r.data[i].hidden,
                            index: i
                        }
                    }) : []
                }
            },
            onClick: function(t, e) {
                var n, i, r, a = e.index,
                    o = this.chart;
                for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)(r = o.getDatasetMeta(n)).data[a].hidden = !r.data[a].hidden;
                o.update()
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.polarArea = t.DatasetController.extend({
            dataElementType: r.Arc,
            linkScales: a.noop,
            update: function(t) {
                var e = this,
                    n = e.chart,
                    i = n.chartArea,
                    r = e.getMeta(),
                    o = n.options,
                    c = o.elements.arc,
                    s = Math.min(i.right - i.left, i.bottom - i.top);
                n.outerRadius = Math.max((s - c.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(o.cutoutPercentage ? n.outerRadius / 100 * o.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, r.count = e.countVisibleElements(), a.each(r.data, function(n, i) {
                    e.updateElement(n, i, t)
                })
            },
            updateElement: function(t, e, n) {
                for (var i = this, r = i.chart, o = i.getDataset(), c = r.options, s = c.animation, l = r.scale, p = r.data.labels, u = i.calculateCircumference(o.data[e]), d = l.xCenter, h = l.yCenter, f = 0, x = i.getMeta(), m = 0; m < e; ++m) isNaN(o.data[m]) || x.data[m].hidden || ++f;
                var g = c.startAngle,
                    v = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                    y = g + u * f,
                    b = y + (t.hidden ? 0 : u),
                    w = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]);
                a.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _scale: l,
                    _model: {
                        x: d,
                        y: h,
                        innerRadius: 0,
                        outerRadius: n ? w : v,
                        startAngle: n && s.animateRotate ? g : y,
                        endAngle: n && s.animateRotate ? g : b,
                        label: a.valueAtIndexOrDefault(p, e, p[e])
                    }
                }), i.removeHoverStyle(t), t.pivot()
            },
            removeHoverStyle: function(e) {
                t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
            },
            countVisibleElements: function() {
                var t = this.getDataset(),
                    e = this.getMeta(),
                    n = 0;
                return a.each(e.data, function(e, i) {
                    isNaN(t.data[i]) || e.hidden || n++
                }), n
            },
            calculateCircumference: function(t) {
                var e = this.getMeta().count;
                return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("radar", {
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                tension: 0
            }
        }
    }), t.exports = function(t) {
        t.controllers.radar = t.DatasetController.extend({
            datasetElementType: r.Line,
            dataElementType: r.Point,
            linkScales: a.noop,
            update: function(t) {
                var e = this,
                    n = e.getMeta(),
                    i = n.dataset,
                    r = n.data,
                    o = i.custom || {},
                    c = e.getDataset(),
                    s = e.chart.options.elements.line,
                    l = e.chart.scale;
                void 0 !== c.tension && void 0 === c.lineTension && (c.lineTension = c.tension), a.extend(n.dataset, {
                    _datasetIndex: e.index,
                    _scale: l,
                    _children: r,
                    _loop: !0,
                    _model: {
                        tension: o.tension ? o.tension : a.valueOrDefault(c.lineTension, s.tension),
                        backgroundColor: o.backgroundColor ? o.backgroundColor : c.backgroundColor || s.backgroundColor,
                        borderWidth: o.borderWidth ? o.borderWidth : c.borderWidth || s.borderWidth,
                        borderColor: o.borderColor ? o.borderColor : c.borderColor || s.borderColor,
                        fill: o.fill ? o.fill : void 0 !== c.fill ? c.fill : s.fill,
                        borderCapStyle: o.borderCapStyle ? o.borderCapStyle : c.borderCapStyle || s.borderCapStyle,
                        borderDash: o.borderDash ? o.borderDash : c.borderDash || s.borderDash,
                        borderDashOffset: o.borderDashOffset ? o.borderDashOffset : c.borderDashOffset || s.borderDashOffset,
                        borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : c.borderJoinStyle || s.borderJoinStyle
                    }
                }), n.dataset.pivot(), a.each(r, function(n, i) {
                    e.updateElement(n, i, t)
                }, e), e.updateBezierControlPoints()
            },
            updateElement: function(t, e, n) {
                var i = this,
                    r = t.custom || {},
                    o = i.getDataset(),
                    c = i.chart.scale,
                    s = i.chart.options.elements.point,
                    l = c.getPointPositionForValue(e, o.data[e]);
                void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), a.extend(t, {
                    _datasetIndex: i.index,
                    _index: e,
                    _scale: c,
                    _model: {
                        x: n ? c.xCenter : l.x,
                        y: n ? c.yCenter : l.y,
                        tension: r.tension ? r.tension : a.valueOrDefault(o.lineTension, i.chart.options.elements.line.tension),
                        radius: r.radius ? r.radius : a.valueAtIndexOrDefault(o.pointRadius, e, s.radius),
                        backgroundColor: r.backgroundColor ? r.backgroundColor : a.valueAtIndexOrDefault(o.pointBackgroundColor, e, s.backgroundColor),
                        borderColor: r.borderColor ? r.borderColor : a.valueAtIndexOrDefault(o.pointBorderColor, e, s.borderColor),
                        borderWidth: r.borderWidth ? r.borderWidth : a.valueAtIndexOrDefault(o.pointBorderWidth, e, s.borderWidth),
                        pointStyle: r.pointStyle ? r.pointStyle : a.valueAtIndexOrDefault(o.pointStyle, e, s.pointStyle),
                        hitRadius: r.hitRadius ? r.hitRadius : a.valueAtIndexOrDefault(o.pointHitRadius, e, s.hitRadius)
                    }
                }), t._model.skip = r.skip ? r.skip : isNaN(t._model.x) || isNaN(t._model.y)
            },
            updateBezierControlPoints: function() {
                var t = this.chart.chartArea,
                    e = this.getMeta();
                a.each(e.data, function(n, i) {
                    var r = n._model,
                        o = a.splineCurve(a.previousItem(e.data, i, !0)._model, r, a.nextItem(e.data, i, !0)._model, r.tension);
                    r.controlPointPreviousX = Math.max(Math.min(o.previous.x, t.right), t.left), r.controlPointPreviousY = Math.max(Math.min(o.previous.y, t.bottom), t.top), r.controlPointNextX = Math.max(Math.min(o.next.x, t.right), t.left), r.controlPointNextY = Math.max(Math.min(o.next.y, t.bottom), t.top), n.pivot()
                })
            },
            setHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    i = t._index,
                    r = t._model;
                r.radius = n.hoverRadius ? n.hoverRadius : a.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : a.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : a.valueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : a.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, r.borderWidth)
            },
            removeHoverStyle: function(t) {
                var e = this.chart.data.datasets[t._datasetIndex],
                    n = t.custom || {},
                    i = t._index,
                    r = t._model,
                    o = this.chart.options.elements.point;
                r.radius = n.radius ? n.radius : a.valueAtIndexOrDefault(e.pointRadius, i, o.radius), r.backgroundColor = n.backgroundColor ? n.backgroundColor : a.valueAtIndexOrDefault(e.pointBackgroundColor, i, o.backgroundColor), r.borderColor = n.borderColor ? n.borderColor : a.valueAtIndexOrDefault(e.pointBorderColor, i, o.borderColor), r.borderWidth = n.borderWidth ? n.borderWidth : a.valueAtIndexOrDefault(e.pointBorderWidth, i, o.borderWidth)
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    n(591)._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [{
                id: "x-axis-1",
                type: "linear",
                position: "bottom"
            }],
            yAxes: [{
                id: "y-axis-1",
                type: "linear",
                position: "left"
            }]
        },
        showLines: !1,
        tooltips: {
            callbacks: {
                title: function() {
                    return ""
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")"
                }
            }
        }
    }), t.exports = function(t) {
        t.controllers.scatter = t.controllers.line
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Bar = function(e, n) {
            return n.type = "bar", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Bubble = function(e, n) {
            return n.type = "bubble", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Doughnut = function(e, n) {
            return n.type = "doughnut", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Line = function(e, n) {
            return n.type = "line", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.PolarArea = function(e, n) {
            return n.type = "polarArea", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Radar = function(e, n) {
            return n.type = "radar", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        t.Scatter = function(e, n) {
            return n.type = "scatter", new t(e, n)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {}, t.exports.filler = n(645), t.exports.legend = n(646), t.exports.title = n(647)
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(604),
        a = n(592);
    i._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var o = {
        dataset: function(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                r = i && n.isDatasetVisible(e) && i.dataset._children || [],
                a = r.length || 0;
            return a ? function(t, e) {
                return e < a && r[e]._view || null
            } : null
        },
        boundary: function(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return function(t) {
                return {
                    x: null === n ? t.x : n,
                    y: null === i ? t.y : i
                }
            }
        }
    };

    function c(t, e, n) {
        var i, r = t._model || {},
            a = r.fill;
        if (void 0 === a && (a = !!r.backgroundColor), !1 === a || null === a) return !1;
        if (!0 === a) return "origin";
        if (i = parseFloat(a, 10), isFinite(i) && Math.floor(i) === i) return "-" !== a[0] && "+" !== a[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
        switch (a) {
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return a;
            default:
                return !1
        }
    }

    function s(t) {
        var e, n = t.el._model || {},
            i = t.el._scale || {},
            r = t.fill,
            a = null;
        if (isFinite(r)) return null;
        if ("start" === r ? a = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? a = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : i.getBasePosition ? a = i.getBasePosition() : i.getBasePixel && (a = i.getBasePixel()), void 0 !== a && null !== a) {
            if (void 0 !== a.x && void 0 !== a.y) return a;
            if ("number" == typeof a && isFinite(a)) return {
                x: (e = i.isHorizontal()) ? a : null,
                y: e ? null : a
            }
        }
        return null
    }

    function l(t, e, n) {
        var i, r = t[e].fill,
            a = [e];
        if (!n) return r;
        for (; !1 !== r && -1 === a.indexOf(r);) {
            if (!isFinite(r)) return r;
            if (!(i = t[r])) return !1;
            if (i.visible) return r;
            a.push(r), r = i.fill
        }
        return !1
    }

    function p(t) {
        var e = t.fill,
            n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), o[n](t))
    }

    function u(t) {
        return t && !t.skip
    }

    function d(t, e, n, i, r) {
        var o;
        if (i && r) {
            for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) a.canvas.lineTo(t, e[o - 1], e[o]);
            for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) a.canvas.lineTo(t, n[o], n[o - 1], !0)
        }
    }
    t.exports = {
        id: "filler",
        afterDatasetsUpdate: function(t, e) {
            var n, i, a, o, u = (t.data.datasets || []).length,
                d = e.propagate,
                h = [];
            for (i = 0; i < u; ++i) o = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof r.Line && (o = {
                visible: t.isDatasetVisible(i),
                fill: c(a, i, u),
                chart: t,
                el: a
            }), n.$filler = o, h.push(o);
            for (i = 0; i < u; ++i)(o = h[i]) && (o.fill = l(h, i, d), o.boundary = s(o), o.mapper = p(o))
        },
        beforeDatasetDraw: function(t, e) {
            var n = e.meta.$filler;
            if (n) {
                var r = t.ctx,
                    o = n.el,
                    c = o._view,
                    s = o._children || [],
                    l = n.mapper,
                    p = c.backgroundColor || i.global.defaultColor;
                l && p && s.length && (a.canvas.clipArea(r, t.chartArea), function(t, e, n, i, r, a) {
                    var o, c, s, l, p, h, f, x = e.length,
                        m = i.spanGaps,
                        g = [],
                        v = [],
                        y = 0,
                        b = 0;
                    for (t.beginPath(), o = 0, c = x + !!a; o < c; ++o) p = n(l = e[s = o % x]._view, s, i), h = u(l), f = u(p), h && f ? (y = g.push(l), b = v.push(p)) : y && b && (m ? (h && g.push(l), f && v.push(p)) : (d(t, g, v, y, b), y = b = 0, g = [], v = []));
                    d(t, g, v, y, b), t.closePath(), t.fillStyle = r, t.fill()
                }(r, s, l, c, p, o._loop), a.canvas.unclipArea(r))
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592),
        o = n(610),
        c = a.noop;

    function s(t, e) {
        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
    }
    i._set("global", {
        legend: {
            display: !0,
            position: "top",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex,
                    i = this.chart,
                    r = i.getDatasetMeta(n);
                r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update()
            },
            onHover: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data;
                    return a.isArray(e.datasets) ? e.datasets.map(function(e, n) {
                        return {
                            text: e.label,
                            fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                            hidden: !t.isDatasetVisible(n),
                            lineCap: e.borderCapStyle,
                            lineDash: e.borderDash,
                            lineDashOffset: e.borderDashOffset,
                            lineJoin: e.borderJoinStyle,
                            lineWidth: e.borderWidth,
                            strokeStyle: e.borderColor,
                            pointStyle: e.pointStyle,
                            datasetIndex: n
                        }
                    }, this) : []
                }
            }
        },
        legendCallback: function(t) {
            var e = [];
            e.push('<ul class="' + t.id + '-legend">');
            for (var n = 0; n < t.data.datasets.length; n++) e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
            return e.push("</ul>"), e.join("")
        }
    });
    var l = r.extend({
        initialize: function(t) {
            a.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
        },
        beforeUpdate: c,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: c,
        beforeSetDimensions: c,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: c,
        beforeBuildLabels: c,
        buildLabels: function() {
            var t = this,
                e = t.options.labels || {},
                n = a.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(function(n) {
                return e.filter(n, t.chart.data)
            })), t.options.reverse && n.reverse(), t.legendItems = n
        },
        afterBuildLabels: c,
        beforeFit: c,
        fit: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                r = e.display,
                o = t.ctx,
                c = i.global,
                l = a.valueOrDefault,
                p = l(n.fontSize, c.defaultFontSize),
                u = l(n.fontStyle, c.defaultFontStyle),
                d = l(n.fontFamily, c.defaultFontFamily),
                h = a.fontString(p, u, d),
                f = t.legendHitBoxes = [],
                x = t.minSize,
                m = t.isHorizontal();
            if (m ? (x.width = t.maxWidth, x.height = r ? 10 : 0) : (x.width = r ? 10 : 0, x.height = t.maxHeight), r)
                if (o.font = h, m) {
                    var g = t.lineWidths = [0],
                        v = t.legendItems.length ? p + n.padding : 0;
                    o.textAlign = "left", o.textBaseline = "top", a.each(t.legendItems, function(e, i) {
                        var r = s(n, p) + p / 2 + o.measureText(e.text).width;
                        g[g.length - 1] + r + n.padding >= t.width && (v += p + n.padding, g[g.length] = t.left), f[i] = {
                            left: 0,
                            top: 0,
                            width: r,
                            height: p
                        }, g[g.length - 1] += r + n.padding
                    }), x.height += v
                } else {
                    var y = n.padding,
                        b = t.columnWidths = [],
                        w = n.padding,
                        _ = 0,
                        k = 0,
                        S = p + y;
                    a.each(t.legendItems, function(t, e) {
                        var i = s(n, p) + p / 2 + o.measureText(t.text).width;
                        k + S > x.height && (w += _ + n.padding, b.push(_), _ = 0, k = 0), _ = Math.max(_, i), k += S, f[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: p
                        }
                    }), w += _, b.push(_), x.width += w
                }
            t.width = x.width, t.height = x.height
        },
        afterFit: c,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position
        },
        draw: function() {
            var t = this,
                e = t.options,
                n = e.labels,
                r = i.global,
                o = r.elements.line,
                c = t.width,
                l = t.lineWidths;
            if (e.display) {
                var p, u = t.ctx,
                    d = a.valueOrDefault,
                    h = d(n.fontColor, r.defaultFontColor),
                    f = d(n.fontSize, r.defaultFontSize),
                    x = d(n.fontStyle, r.defaultFontStyle),
                    m = d(n.fontFamily, r.defaultFontFamily),
                    g = a.fontString(f, x, m);
                u.textAlign = "left", u.textBaseline = "middle", u.lineWidth = .5, u.strokeStyle = h, u.fillStyle = h, u.font = g;
                var v = s(n, f),
                    y = t.legendHitBoxes,
                    b = t.isHorizontal();
                p = b ? {
                    x: t.left + (c - l[0]) / 2,
                    y: t.top + n.padding,
                    line: 0
                } : {
                    x: t.left + n.padding,
                    y: t.top + n.padding,
                    line: 0
                };
                var w = f + n.padding;
                a.each(t.legendItems, function(i, s) {
                    var h = u.measureText(i.text).width,
                        x = v + f / 2 + h,
                        m = p.x,
                        g = p.y;
                    b ? m + x >= c && (g = p.y += w, p.line++, m = p.x = t.left + (c - l[p.line]) / 2) : g + w > t.bottom && (m = p.x = m + t.columnWidths[p.line] + n.padding, g = p.y = t.top + n.padding, p.line++),
                        function(t, n, i) {
                            if (!(isNaN(v) || v <= 0)) {
                                u.save(), u.fillStyle = d(i.fillStyle, r.defaultColor), u.lineCap = d(i.lineCap, o.borderCapStyle), u.lineDashOffset = d(i.lineDashOffset, o.borderDashOffset), u.lineJoin = d(i.lineJoin, o.borderJoinStyle), u.lineWidth = d(i.lineWidth, o.borderWidth), u.strokeStyle = d(i.strokeStyle, r.defaultColor);
                                var c = 0 === d(i.lineWidth, o.borderWidth);
                                if (u.setLineDash && u.setLineDash(d(i.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                                    var s = f * Math.SQRT2 / 2,
                                        l = s / Math.SQRT2,
                                        p = t + l,
                                        h = n + l;
                                    a.canvas.drawPoint(u, i.pointStyle, s, p, h)
                                } else c || u.strokeRect(t, n, v, f), u.fillRect(t, n, v, f);
                                u.restore()
                            }
                        }(m, g, i), y[s].left = m, y[s].top = g,
                        function(t, e, n, i) {
                            var r = f / 2,
                                a = v + r + t,
                                o = e + r;
                            u.fillText(n.text, a, o), n.hidden && (u.beginPath(), u.lineWidth = 2, u.moveTo(a, o), u.lineTo(a + i, o), u.stroke())
                        }(m, g, i, h), b ? p.x += x + n.padding : p.y += w
                })
            }
        },
        handleEvent: function(t) {
            var e = this,
                n = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                r = !1;
            if ("mousemove" === i) {
                if (!n.onHover) return
            } else {
                if ("click" !== i) return;
                if (!n.onClick) return
            }
            var a = t.x,
                o = t.y;
            if (a >= e.left && a <= e.right && o >= e.top && o <= e.bottom)
                for (var c = e.legendHitBoxes, s = 0; s < c.length; ++s) {
                    var l = c[s];
                    if (a >= l.left && a <= l.left + l.width && o >= l.top && o <= l.top + l.height) {
                        if ("click" === i) {
                            n.onClick.call(e, t.native, e.legendItems[s]), r = !0;
                            break
                        }
                        if ("mousemove" === i) {
                            n.onHover.call(e, t.native, e.legendItems[s]), r = !0;
                            break
                        }
                    }
                }
            return r
        }
    });

    function p(t, e) {
        var n = new l({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        o.configure(t, n, e), o.addBox(t, n), t.legend = n
    }
    t.exports = {
        id: "legend",
        _element: l,
        beforeInit: function(t) {
            var e = t.options.legend;
            e && p(t, e)
        },
        beforeUpdate: function(t) {
            var e = t.options.legend,
                n = t.legend;
            e ? (a.mergeIf(e, i.global.legend), n ? (o.configure(t, n, e), n.options = e) : p(t, e)) : n && (o.removeBox(t, n), delete t.legend)
        },
        afterEvent: function(t, e) {
            var n = t.legend;
            n && n.handleEvent(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(591),
        r = n(603),
        a = n(592),
        o = n(610),
        c = a.noop;
    i._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            lineHeight: 1.2,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var s = r.extend({
        initialize: function(t) {
            a.extend(this, t), this.legendHitBoxes = []
        },
        beforeUpdate: c,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize
        },
        afterUpdate: c,
        beforeSetDimensions: c,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            }
        },
        afterSetDimensions: c,
        beforeBuildLabels: c,
        buildLabels: c,
        afterBuildLabels: c,
        beforeFit: c,
        fit: function() {
            var t = this,
                e = a.valueOrDefault,
                n = t.options,
                r = n.display,
                o = e(n.fontSize, i.global.defaultFontSize),
                c = t.minSize,
                s = a.isArray(n.text) ? n.text.length : 1,
                l = a.options.toLineHeight(n.lineHeight, o),
                p = r ? s * l + 2 * n.padding : 0;
            t.isHorizontal() ? (c.width = t.maxWidth, c.height = p) : (c.width = p, c.height = t.maxHeight), t.width = c.width, t.height = c.height
        },
        afterFit: c,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t
        },
        draw: function() {
            var t = this,
                e = t.ctx,
                n = a.valueOrDefault,
                r = t.options,
                o = i.global;
            if (r.display) {
                var c, s, l, p = n(r.fontSize, o.defaultFontSize),
                    u = n(r.fontStyle, o.defaultFontStyle),
                    d = n(r.fontFamily, o.defaultFontFamily),
                    h = a.fontString(p, u, d),
                    f = a.options.toLineHeight(r.lineHeight, p),
                    x = f / 2 + r.padding,
                    m = 0,
                    g = t.top,
                    v = t.left,
                    y = t.bottom,
                    b = t.right;
                e.fillStyle = n(r.fontColor, o.defaultFontColor), e.font = h, t.isHorizontal() ? (s = v + (b - v) / 2, l = g + x, c = b - v) : (s = "left" === r.position ? v + x : b - x, l = g + (y - g) / 2, c = y - g, m = Math.PI * ("left" === r.position ? -.5 : .5)), e.save(), e.translate(s, l), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                var w = r.text;
                if (a.isArray(w))
                    for (var _ = 0, k = 0; k < w.length; ++k) e.fillText(w[k], 0, _, c), _ += f;
                else e.fillText(w, 0, 0, c);
                e.restore()
            }
        }
    });

    function l(t, e) {
        var n = new s({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        o.configure(t, n, e), o.addBox(t, n), t.titleBlock = n
    }
    t.exports = {
        id: "title",
        _element: s,
        beforeInit: function(t) {
            var e = t.options.title;
            e && l(t, e)
        },
        beforeUpdate: function(t) {
            var e = t.options.title,
                n = t.titleBlock;
            e ? (a.mergeIf(e, i.global.title), n ? (o.configure(t, n, e), n.options = e) : l(t, e)) : n && (o.removeBox(t, n), delete t.titleBlock)
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        customTooltips: function(t) {
            var e = document.getElementById("chartjs-tooltip");
            if (e || ((e = document.createElement("div")).id = "chartjs-tooltip", e.innerHTML = "<div></div>", this._chart.canvas.parentNode.appendChild(e)), 0 !== t.opacity) {
                if (t.displayColors = !1, e.classList.remove("above", "below", "no-transform"), t.yAlign ? e.classList.add(t.yAlign) : e.classList.add("no-transform"), t.body) {
                    var n = "",
                        i = t.title || [],
                        r = t.body.map(function(t) {
                            return t.lines
                        });
                    i.forEach(function(t) {
                        n += "<label>" + t + "</label>"
                    }), r.forEach(function(t, e) {
                        var i = t[0].split(":"),
                            r = i[0].split("$");
                        n += "<label>" + r[0] + "<span> $" + r[1] + "</span></label>", n += "<h3>" + i[1] + "%</h3>"
                    }), e.querySelector("div").innerHTML = n
                }
                var a = this._chart.canvas.offsetTop,
                    o = this._chart.canvas.offsetLeft;
                e.style.opacity = 1, e.style.left = o + t.caretX + "px", e.style.top = a - 102 + t.caretY + "px", e.style.height = "100px"
            } else e.style.opacity = 0
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(722),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(723);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("73ad818b", i, !0, {})
}, function(t, e, n) {
    (t.exports = n(166)(!1)).push([t.i, '#lt-yantr .amortization-table-btn{width:340px;padding:.4em 4em;position:absolute;right:0;top:-75px}@media (max-width:767px){#lt-yantr .amortization-table-btn{font-size:1.2em;top:-63px}}@media (max-width:580px){#lt-yantr .amortization-table-btn{width:100%;padding:.4em 0}}#lt-yantr .payment-chart-table{margin-top:30px;position:relative}#lt-yantr .payment-chart-table li{display:block}#lt-yantr .payment-chart-table .table-responsive{border:none}#lt-yantr .payment-chart-table .table{color:#666;font-size:14px;margin:0 0 10px}@media (max-width:992px){#lt-yantr .payment-chart-table .table{width:1024px}}@media (max-width:768px){#lt-yantr .payment-chart-table .table{font-size:13px;width:800px}}#lt-yantr .payment-chart-table .table.active tbody{display:table-header-group}#lt-yantr .payment-chart-table .table.active .table-trigger span.lt4-ChevronRight:before{content:"\\E988"}#lt-yantr .payment-chart-table .table thead tr{background:#f1f3f3}#lt-yantr .payment-chart-table .table tbody{display:none}#lt-yantr .payment-chart-table .table tbody tr:nth-child(odd){background:#fff}#lt-yantr .payment-chart-table .table tbody tr:nth-child(2n){background:#f1f3f3}#lt-yantr .payment-chart-table .table td,#lt-yantr .payment-chart-table .table th{font-size:inherit;font-weight:400;text-align:right;text-transform:capitalize;vertical-align:middle;padding:10px 16px 10px 10px;border:none;border-left:1px solid #ddd;white-space:nowrap;background:transparent}#lt-yantr .payment-chart-table .table td:first-child,#lt-yantr .payment-chart-table .table th:first-child{text-align:left;border-left:none;padding-left:50px}@media (max-width:767px){#lt-yantr .payment-chart-table .table td:first-child,#lt-yantr .payment-chart-table .table th:first-child{padding-left:15px}}#lt-yantr .payment-chart-table .table th:first-child{padding-left:20px}@media (max-width:767px){#lt-yantr .payment-chart-table .table th:first-child{padding-left:15px}}#lt-yantr .payment-chart-table .table .table-trigger{color:#2F4559;font-size:27px;font-weight:700;margin-bottom:0;cursor:pointer;white-space:nowrap}@media (max-width:767px){#lt-yantr .payment-chart-table .table .table-trigger{font-size:18px}}#lt-yantr .payment-chart-table .table .table-trigger span{color:#fff;font-size:10px;font-weight:600;line-height:26px;text-align:center;background:#2F4559;width:24px;height:24px;display:inline-block;border-radius:100%;vertical-align:top;position:relative;top:10px}@media (max-width:767px){#lt-yantr .payment-chart-table .table .table-trigger span{font-size:8px;line-height:22px;width:20px;height:20px;top:4px}}#lt-yantr .payment-chart-table .table .table-trigger span.lt4-ChevronRight{line-height:24px}@media (max-width:767px){#lt-yantr .payment-chart-table .table .table-trigger span.lt4-ChevronRight{line-height:20px}}#lt-yantr .payment-chart-table .table big{font-weight:600;color:#2F4559;display:block;margin-top:3px}@media (max-width:767px){#lt-yantr .payment-chart-table .table big{font-size:14px}}', ""])
}, , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(739),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(740);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("da2052ea", i, !0, {})
}, function(t, e, n) {
    (t.exports = n(166)(!1)).push([t.i, "#lt-yantr .payment-schedule{text-align:center;padding:50px 0}@media (max-width:767px){#lt-yantr .payment-schedule{padding:30px 0}}@media (max-width:767px){#lt-yantr .payment-schedule h2{font-weight:600;line-height:normal;margin-bottom:15px}}#lt-yantr .payment-schedule h4{font-weight:400;color:#666}#lt-yantr .payment-schedule .payment-chart .tab-name{margin-bottom:30px}@media (max-width:380px){#lt-yantr .payment-schedule .payment-chart .tab-name{margin-bottom:20px}}#lt-yantr .payment-schedule .payment-chart .tab-name li{color:#2F4559;font-weight:600;text-transform:uppercase;display:inline-block;padding:10px 20px;border-bottom:5px solid transparent;cursor:pointer}@media (max-width:480px){#lt-yantr .payment-schedule .payment-chart .tab-name li{font-size:13px;padding:10px;border-bottom-width:4px}}@media (max-width:380px){#lt-yantr .payment-schedule .payment-chart .tab-name li{font-size:12px;padding:10px 4px}}#lt-yantr .payment-schedule .payment-chart .tab-name li.active{border-bottom-color:#2F4559}#lt-yantr .payment-schedule .payment-chart .tab-content{padding:0 15px}#lt-yantr .payment-schedule .payment-chart .tab-content>.row{display:none;margin-bottom:15px}#lt-yantr .payment-schedule .payment-chart .tab-content>.row.active{display:block}#lt-yantr .payment-schedule .payment-chart .tab-content>.row .chart-title{color:#00aeef;font-weight:600;text-transform:uppercase;margin-bottom:10px}#lt-yantr .payment-schedule .bar-chart{position:relative}@media (max-width:1024px){#lt-yantr .payment-schedule .bar-chart{overflow-y:hidden}}#lt-yantr .payment-schedule .bar-chart>div{width:1210px;padding-left:25px}#lt-yantr .payment-schedule .chart-details{margin:20px 0 30px}@media (max-width:767px){#lt-yantr .payment-schedule .chart-details{margin:0 0 20px}}@media (max-width:580px){#lt-yantr .payment-schedule .chart-details{text-align:center;display:inline-block;margin:0}}#lt-yantr .payment-schedule .chart-details .chart-info{text-align:left;display:block;float:left}@media (max-width:580px){#lt-yantr .payment-schedule .chart-details .chart-info{text-align:center;float:none;margin-bottom:15px}}@media (max-width:580px){#lt-yantr .payment-schedule .chart-details .chart-info li{margin-top:0}}#lt-yantr .payment-schedule #tooltip-monthly-pay,#lt-yantr .payment-schedule #tooltip-weekly-pay{text-align:left}#lt-yantr .payment-schedule #tooltip-monthly-pay label,#lt-yantr .payment-schedule #tooltip-weekly-pay label{margin-bottom:0;display:block;white-space:nowrap}#lt-yantr #lt-yantr .sub-heading{font-size:17px;color:#666;font-weight:400;line-height:1.56;max-width:700px;margin:0 auto 20px;display:block}", ""])
}, function(t, e, n) {
    t.exports = function() {
        "use strict";
        var t = 4,
            e = .001,
            n = 1e-7,
            i = 10,
            r = 11,
            a = 1 / (r - 1),
            o = "function" == typeof Float32Array;

        function c(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function s(t, e) {
            return 3 * e - 6 * t
        }

        function l(t) {
            return 3 * t
        }

        function p(t, e, n) {
            return ((c(e, n) * t + s(e, n)) * t + l(e)) * t
        }

        function u(t, e, n) {
            return 3 * c(e, n) * t * t + 2 * s(e, n) * t + l(e)
        }
        var d = function(c, s, l, d) {
                if (!(0 <= c && c <= 1 && 0 <= l && l <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                var h = o ? new Float32Array(r) : new Array(r);
                if (c !== s || l !== d)
                    for (var f = 0; f < r; ++f) h[f] = p(f * a, c, l);

                function x(o) {
                    for (var s = 0, d = 1, f = r - 1; d !== f && h[d] <= o; ++d) s += a;
                    var x = (o - h[--d]) / (h[d + 1] - h[d]),
                        m = s + x * a,
                        g = u(m, c, l);
                    return g >= e ? function(e, n, i, r) {
                        for (var a = 0; a < t; ++a) {
                            var o = u(n, i, r);
                            if (0 === o) return n;
                            var c = p(n, i, r) - e;
                            n -= c / o
                        }
                        return n
                    }(o, m, c, l) : 0 === g ? m : function(t, e, r, a, o) {
                        var c, s, l = 0;
                        do {
                            (c = p(s = e + (r - e) / 2, a, o) - t) > 0 ? r = s : e = s
                        } while (Math.abs(c) > n && ++l < i);
                        return s
                    }(o, s, s + a, c, l)
                }
                return function(t) {
                    return c === s && l === d ? t : 0 === t ? 0 : 1 === t ? 1 : p(x(t), s, d)
                }
            },
            h = {
                ease: [.25, .1, .25, 1],
                linear: [0, 0, 1, 1],
                "ease-in": [.42, 0, 1, 1],
                "ease-out": [0, 0, .58, 1],
                "ease-in-out": [.42, 0, .58, 1]
            },
            f = !1;
        try {
            var x = Object.defineProperty({}, "passive", {
                get: function() {
                    f = !0
                }
            });
            window.addEventListener("test", null, x)
        } catch (t) {}
        var m = {
                $: function(t) {
                    return "string" != typeof t ? t : document.querySelector(t)
                },
                on: function(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        passive: !1
                    };
                    e instanceof Array || (e = [e]);
                    for (var r = 0; r < e.length; r++) t.addEventListener(e[r], n, !!f && i)
                },
                off: function(t, e, n) {
                    e instanceof Array || (e = [e]);
                    for (var i = 0; i < e.length; i++) t.removeEventListener(e[i], n)
                },
                cumulativeOffset: function(t) {
                    var e = 0,
                        n = 0;
                    do {
                        e += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent
                    } while (t);
                    return {
                        top: e,
                        left: n
                    }
                }
            },
            g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            v = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            y = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"],
            b = {
                container: "body",
                duration: 500,
                easing: "ease",
                offset: 0,
                cancelable: !0,
                onStart: !1,
                onDone: !1,
                onCancel: !1,
                x: !1,
                y: !0
            };

        function w(t) {
            b = v({}, b, t)
        }
        var _ = function() {
                var t = void 0,
                    e = void 0,
                    n = void 0,
                    i = void 0,
                    r = void 0,
                    a = void 0,
                    o = void 0,
                    c = void 0,
                    s = void 0,
                    l = void 0,
                    p = void 0,
                    u = void 0,
                    f = void 0,
                    x = void 0,
                    v = void 0,
                    w = void 0,
                    _ = void 0,
                    k = void 0,
                    S = void 0,
                    M = function(t) {
                        a && (S = t, k = !0)
                    },
                    C = void 0,
                    T = void 0,
                    P = void 0,
                    D = void 0;

                function O(t) {
                    if (k) return A();
                    T || (T = t), P = t - T, D = Math.min(P / n, 1), D = C(D), I(e, x + _ * D, u + w * D), P < n ? window.requestAnimationFrame(O) : A()
                }

                function A() {
                    k || I(e, v, f), T = !1, m.off(e, y, M), k && s && s(S, t), !k && c && c(t)
                }

                function I(t, e, n) {
                    p && (t.scrollTop = e), l && (t.scrollLeft = n), "body" === t.tagName.toLowerCase() && (p && (document.documentElement.scrollTop = e), l && (document.documentElement.scrollLeft = n))
                }
                return function(T, P) {
                    var D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if ("object" === (void 0 === P ? "undefined" : g(P)) ? D = P : "number" == typeof P && (D.duration = P), !(t = m.$(T))) return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + T);
                    e = m.$(D.container || b.container), n = D.duration || b.duration, i = D.easing || b.easing, r = D.offset || b.offset, a = D.hasOwnProperty("cancelable") ? !1 !== D.cancelable : b.cancelable, o = D.onStart || b.onStart, c = D.onDone || b.onDone, s = D.onCancel || b.onCancel, l = void 0 === D.x ? b.x : D.x, p = void 0 === D.y ? b.y : D.y;
                    var A = m.cumulativeOffset(e),
                        I = m.cumulativeOffset(t);
                    return "function" == typeof r && (r = r()), x = function(t) {
                        var e = t.scrollTop;
                        return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollTop), e
                    }(e), v = I.top - A.top + r, u = function(t) {
                        var e = t.scrollLeft;
                        return "body" === t.tagName.toLowerCase() && (e = e || document.documentElement.scrollLeft), e
                    }(e), f = I.left - A.left + r, k = !1, _ = v - x, w = f - u, "string" == typeof i && (i = h[i] || h.ease), C = d.apply(d, i), _ || w ? (o && o(t), m.on(e, y, M, {
                        passive: !0
                    }), window.requestAnimationFrame(O), function() {
                        S = null, k = !0
                    }) : void 0
                }
            }(),
            k = [];

        function S(t) {
            var e = function(t) {
                for (var e = 0; e < k.length; ++e)
                    if (k[e].el === t) return k[e]
            }(t);
            return e || (k.push(e = {
                el: t,
                binding: {}
            }), e)
        }

        function M(t) {
            t.preventDefault();
            var e = S(this).binding;
            if ("string" == typeof e.value) return _(e.value);
            _(e.value.el || e.value.element, e.value)
        }
        var C = {
                bind: function(t, e) {
                    S(t).binding = e, m.on(t, "click", M)
                },
                unbind: function(t) {
                    ! function(t) {
                        for (var e = 0; e < k.length; ++e)
                            if (k[e].el === t) return k.splice(e, 1), !0
                    }(t), m.off(t, "click", M)
                },
                update: function(t, e) {
                    S(t).binding = e
                },
                scrollTo: _,
                bindings: k
            },
            T = function(t, e) {
                e && w(e), t.directive("scroll-to", C), t.prototype.$scrollTo = C.scrollTo
            };
        return "undefined" != typeof window && window.Vue && (window.VueScrollTo = C, window.VueScrollTo.setDefaults = w, Vue.use(T)), C.install = T, C
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(797),
        r = n(799);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    n(738);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(798);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "payment-schedule"
            }, [n("div", {
                staticClass: "container-width"
            }, [n("h2", {
                staticClass: "section-title"
            }, [t._v("Your monthly payment broken down")]), t._v(" "), n("label", {
                staticClass: "sub-heading"
            }, [t._v("Use this chart to see how much principal and interest you are paying with each payment")]), t._v(" "), n("div", {
                staticClass: "payment-chart"
            }, [t._m(0), t._v(" "), t.ChartMonthlyPayScheduleGraph ? n("div", {
                staticClass: "tab-content"
            }, [n("div", {
                staticClass: "row active"
            }, [n("div", {
                staticClass: "bar-chart"
            }, [n("div", [n("vue-chart", {
                attrs: {
                    type: "bar",
                    data: t.ChartMonthlyPayScheduleGraph,
                    width: t.chartWidth,
                    height: t.chartHeight,
                    options: t.tooltipOptions("tooltip-monthly-pay")
                }
            })], 1)])])]) : t._e()]), t._v(" "), t._m(1)])])
        },
        r = [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("ul", {
                staticClass: "tab-name"
            }, [e("li", {
                staticClass: "active"
            }, [this._v("\n                    Monthly Payment\n                ")])])
        }, function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("div", {
                staticClass: "chart-details"
            }, [e("ul", {
                staticClass: "chart-info"
            }, [e("li", [e("span", {
                staticClass: "green-bg"
            }), this._v(" Principal")]), this._v(" "), e("li", [e("span", {
                staticClass: "blue-bg"
            }), this._v(" Interest")])])])
        }]
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(800),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = o(n(588)),
        r = o(n(72)),
        a = o(n(5));

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            loanData: {
                default: []
            }
        },
        data: function() {
            return {
                chartWidth: 1140,
                chartHeight: 270,
                LastDate: null,
                ChartMonthlyPayScheduleGraph: null,
                YearBalance: []
            }
        },
        computed: {
            chartMonthlyPaySchedule: function() {
                var t = [],
                    e = [],
                    n = [],
                    i = 0;
                for (var r in this.loanData) {
                    t.push(parseInt(r));
                    for (var a = 0, o = 0, c = 0; c < this.loanData[r].length; c++) a += this.loanData[r][c].principal, o += this.loanData[r][c].interestPaid, c == this.loanData[r].length - 1 && (i = this.loanData[r][c].balance);
                    e.push(a), n.push(o), this.YearBalance[r] = i
                }
                return {
                    labels: t,
                    datasets: [{
                        label: "Principal",
                        backgroundColor: "rgba(233, 62, 81, 1)",
                        hoverBackgroundColor: "rgba(210, 55, 70, 0.7)",
                        data: e
                    }, {
                        label: "Interest",
                        backgroundColor: "rgba(215, 55, 75, 0.3)",
                        hoverBackgroundColor: "rgba(210,50, 70, 0.2)",
                        data: n
                    }]
                }
            }
        },
        watch: {
            chartMonthlyPaySchedule: function() {
                var t = this;
                t.ChartMonthlyPayScheduleGraph = null, setTimeout(function() {
                    t.ChartMonthlyPayScheduleGraph = t.chartMonthlyPaySchedule
                }, 50)
            }
        },
        mounted: function() {
            this.ChartMonthlyPayScheduleGraph = this.chartMonthlyPaySchedule
        },
        methods: {
            tooltipOptions: function(t) {
                var e = this.YearBalance;
                return {
                    legend: {
                        display: !1
                    },
                    gridLines: !1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0,
                                callback: function(t, e, n) {
                                    return a.default.formatMoney("$" + t, {
                                        precision: 0
                                    })
                                }
                            },
                            afterTickToLabelConversion: function(t) {
                                t.ticks[t.ticks.length - 1] = null
                            }
                        }],
                        xAxes: [{
                            afterTickToLabelConversion: function(t) {
                                var e = t.ticks;
                                e.forEach(function(t, n) {
                                    n % 2 == 1 && (e[n] = "")
                                })
                            },
                            gridLines: {
                                drawOnChartArea: !1
                            }
                        }]
                    },
                    responsive: !1,
                    tooltips: {
                        enabled: !1,
                        mode: "index",
                        custom: function(n) {
                            var i = document.getElementById(t);
                            if (i || ((i = document.createElement("div")).id = t, i.innerHTML = "<div></div>", this._chart.canvas.parentNode.appendChild(i)), 0 !== n.opacity) {
                                if (n.displayColors = !1, i.classList.remove("above", "below", "no-transform"), n.yAlign ? i.classList.add(n.yAlign) : i.classList.add("no-transform"), n.body) {
                                    var r = "",
                                        o = n.title || [],
                                        c = n.body.map(function(t) {
                                            return t.lines
                                        });
                                    o.forEach(function(t) {
                                        r += "<h5>" + t + "</h5>"
                                    });
                                    var s = c[0][0].split(":");
                                    r += "<label>" + s[0] + ': <b class="green-text">' + a.default.formatMoney(s[1], {
                                        precision: 2
                                    }) + "</b></label>";
                                    var l = c[1][0].split(":");
                                    r += "<label>" + l[0] + ': <b class="blue-text">' + a.default.formatMoney(l[1], {
                                        precision: 2
                                    }) + "</b></label>", r += "<label>Balance: <b>" + a.default.formatMoney(e[o[0]], {
                                        precision: 2
                                    }) + "</b></label>", i.querySelector("div").innerHTML = r
                                }
                                var p = this._chart.canvas.offsetTop,
                                    u = this._chart.canvas.offsetLeft;
                                i.style.opacity = 1, i.style.left = u + n.caretX + "px", i.style.top = p - 110 + n.caretY + "px", i.style.height = "100px"
                            } else i.style.opacity = 0
                        }
                    }
                }
            }
        },
        components: {
            VueChart: i.default,
            LtLabel: r.default,
            Accounting: a.default
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(802),
        r = n(804);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    n(721);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(803);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "payment-chart-table"
            }, [n("button", {
                staticClass: "btn btn-blue amortization-table-btn",
                on: {
                    click: function(e) {
                        t.viewAmortizationTable()
                    }
                }
            }, [t._v(t._s(t.ShowAmortizationTable ? "Close" : "View") + " Amortization Table")]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.ShowAmortizationTable,
                    expression: "ShowAmortizationTable"
                }],
                staticClass: "table-responsive"
            }, t._l(t.amortizationBreakdown, function(e, i) {
                return n("table", {
                    staticClass: "table",
                    class: {
                        active: t.isActive[i]
                    }
                }, [n("thead", [n("tr", [n("th", {
                    attrs: {
                        width: "20%"
                    }
                }, [n("label", {
                    staticClass: "table-trigger",
                    on: {
                        click: function(e) {
                            t.toggleActive(i)
                        }
                    }
                }, [n("span", {
                    staticClass: "lt4-ChevronRight"
                }), t._v(" " + t._s(i) + "\n                        ")])]), t._v(" "), n("th", {
                    attrs: {
                        width: "16%"
                    }
                }, [n("big", [t._v("Payment")])], 1), t._v(" "), n("th", {
                    attrs: {
                        width: "16%"
                    }
                }, [n("big", [t._v("Principal")])], 1), t._v(" "), n("th", {
                    attrs: {
                        width: "16%"
                    }
                }, [n("big", [t._v("Interest Paid")])], 1), t._v(" "), n("th", {
                    attrs: {
                        width: "16%"
                    }
                }, [n("big", [t._v("Total Interest")])], 1), t._v(" "), n("th", {
                    attrs: {
                        width: "16%"
                    }
                }, [n("big", [t._v("Balance")])], 1)])]), t._v(" "), n("tbody", t._l(e, function(e) {
                    return n("tr", [n("td", [t._v(t._s(e.namedMonth))]), t._v(" "), n("td", [t._v("$" + t._s(t.currencyFilter(e.payment)))]), t._v(" "), n("td", [t._v("$" + t._s(t.currencyFilter(e.principal)))]), t._v(" "), n("td", [t._v("$" + t._s(t.currencyFilter(e.interestPaid)))]), t._v(" "), n("td", [t._v("$" + t._s(t.currencyFilter(e.totalInterest)))]), t._v(" "), n("td", [t._v("$" + t._s(t.currencyFilter(e.balance)))])])
                }))])
            }))])
        },
        r = []
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(805),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = c(n(122)),
        r = c(n(197)),
        a = c(n(72)),
        o = c(n(5));

    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            showAmortizationTable: {
                default: !0
            },
            amortizationBreakdown: {
                default: []
            }
        },
        data: function() {
            var t;
            return {
                isActive: (t = {
                    2017: !1,
                    2018: !1,
                    2019: !1,
                    2020: !1,
                    2021: !1,
                    2022: !1,
                    2023: !1,
                    2024: !1,
                    2025: !1,
                    2026: !1,
                    2027: !1,
                    2028: !1,
                    2029: !1,
                    2030: !1,
                    2031: !1,
                    2032: !1,
                    2033: !1,
                    2034: !1,
                    2035: !1,
                    2036: !1,
                    2037: !1,
                    2038: !1,
                    2039: !1,
                    2040: !1,
                    2041: !1,
                    2042: !1,
                    2043: !1,
                    2044: !1,
                    2045: !1,
                    2046: !1,
                    2047: !1,
                    2048: !1,
                    2049: !1,
                    2050: !1,
                    2051: !1,
                    2052: !1,
                    2053: !1,
                    2054: !1,
                    2055: !1,
                    2056: !1,
                    2057: !1,
                    2058: !1,
                    2059: !1,
                    2060: !1,
                    2061: !1,
                    2062: !1,
                    2063: !1,
                    2064: !1,
                    2065: !1,
                    2066: !1
                }, (0, r.default)(t, "2017", !1), (0, r.default)(t, "2018", !1), (0, r.default)(t, "2019", !1), (0, r.default)(t, "2020", !1), (0, r.default)(t, "2021", !1), (0, r.default)(t, "2022", !1), (0, r.default)(t, "2023", !1), (0, r.default)(t, "2024", !1), (0, r.default)(t, "2025", !1), (0, r.default)(t, "2026", !1), (0, r.default)(t, "2027", !1), (0, r.default)(t, "2028", !1), (0, r.default)(t, "2029", !1), (0, r.default)(t, "2030", !1), (0, r.default)(t, "2031", !1), (0, r.default)(t, "2032", !1), (0, r.default)(t, "2033", !1), (0, r.default)(t, "2034", !1), (0, r.default)(t, "2035", !1), (0, r.default)(t, "2036", !1), (0, r.default)(t, "2037", !1), (0, r.default)(t, "2038", !1), (0, r.default)(t, "2039", !1), (0, r.default)(t, "2040", !1), (0, r.default)(t, "2041", !1), (0, r.default)(t, "2042", !1), (0, r.default)(t, "2043", !1), (0, r.default)(t, "2044", !1), (0, r.default)(t, "2045", !1), (0, r.default)(t, "2046", !1), (0, r.default)(t, "2047", !1), (0, r.default)(t, "2048", !1), (0, r.default)(t, "2049", !1), (0, r.default)(t, "2050", !1), (0, r.default)(t, "2051", !1), (0, r.default)(t, "2052", !1), (0, r.default)(t, "2053", !1), (0, r.default)(t, "2054", !1), (0, r.default)(t, "2055", !1), (0, r.default)(t, "2056", !1), (0, r.default)(t, "2057", !1), (0, r.default)(t, "2058", !1), (0, r.default)(t, "2059", !1), (0, r.default)(t, "2060", !1), (0, r.default)(t, "2061", !1), (0, r.default)(t, "2062", !1), (0, r.default)(t, "2063", !1), (0, r.default)(t, "2064", !1), (0, r.default)(t, "2065", !1), (0, r.default)(t, "2066", !1), (0, r.default)(t, 2067, !1), (0, r.default)(t, 2068, !1), (0, r.default)(t, 2069, !1), (0, r.default)(t, 2070, !1), (0, r.default)(t, 2071, !1), (0, r.default)(t, 2072, !1), (0, r.default)(t, 2073, !1), (0, r.default)(t, 2074, !1), (0, r.default)(t, 2075, !1), (0, r.default)(t, 2076, !1), t),
                ShowAmortizationTable: this.showAmortizationTable
            }
        },
        computed: {
            AmortizationTable: function() {
                return this.amortizationBreakdown
            }
        },
        methods: {
            viewAmortizationTable: function() {
                this.ShowAmortizationTable = !this.ShowAmortizationTable
            },
            toggleActive: function(t) {
                this.isActive[t] = !this.isActive[t]
            },
            currencyFilter: function(t) {
                return o.default.formatNumber(t, {
                    precision: 2
                })
            }
        },
        mounted: function() {
            this.isActive[(0, i.default)(this.AmortizationTable)[0]] = !0
        },
        components: {
            LtLabel: a.default,
            Accounting: o.default
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(807),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    var i = n(808);
    "string" == typeof i && (i = [
        [t.i, i, ""]
    ]), i.locals && (t.exports = i.locals);
    (0, n(167).default)("bf51c03c", i, !0, {})
}, function(t, e, n) {
   (t.exports = n(166)(!1)).push([t.i, 'body{overflow-x:hidden}#lt-yantr{overflow-x:inherit}#lt-yantr .section-title{text-align:center;margin:0 0 20px}@media (max-width:380px){#lt-yantr .section-title{font-size:1.7em}}#lt-yantr .loan-pay-filter-graph{padding-bottom:60px; padding-top:50px;}@media (max-width:767px){#lt-yantr .loan-pay-filter-graph{padding-bottom:30px}}#lt-yantr .filter-block{max-width:880px;margin:0 auto 60px}@media (max-width:992px){#lt-yantr .filter-block{margin-bottom:30px}}@media (max-width:480px){#lt-yantr .filter-block{margin-bottom:15px}}#lt-yantr .filter-block:after{content:"";clear:both;display:block}#lt-yantr .disclosure-block{margin-top:0}#lt-yantr .loan-pay-slider{width:43%;float:left;min-width:380px;margin:15px 0 25px}@media (max-width:992px){#lt-yantr .loan-pay-slider{width:100%;min-width:100%;float:none}}#lt-yantr .loan-pay-slider li{text-align:center;list-style:none;margin-top:30px}@media (max-width:767px){#lt-yantr .loan-pay-slider li{margin-top:20px}}#lt-yantr .loan-pay-slider li:first-child{margin-top:0}#lt-yantr .loan-pay-slider li>label{font-weight:400}#lt-yantr .loan-pay-slider li .chart-info li span{border-radius:100%}#lt-yantr .range-slider{margin-bottom:5px}@media (max-width:767px){#lt-yantr .range-slider{padding:0 10px}}#lt-yantr .range-slider .vue-slider-component .vue-slider-dot{background:#E93E51;box-shadow:0 0 0 7px rgba(233, 62, 81, 0.3)}#lt-yantr .range-slider .slider-val{margin-bottom:10px;padding:0 8px}#lt-yantr .range-slider .slider-val:after{content:"";clear:both;display:block}#lt-yantr .range-slider .slider-val div{display:inline-block;vertical-align:top;margin:0}#lt-yantr .range-slider .slider-val div:first-child.val{text-align:left;float:left}#lt-yantr .range-slider .slider-val div:last-child.val{text-align:right;float:right}#lt-yantr .range-slider .slider-val div.selected-amt{top:0}#lt-yantr .range-slider .slider-val div.selected-amt>.slider-input{color:#2F4559;font-weight:700;font-size:30px;line-height:34px;min-width:inherit;width:180px;border:none;padding:0;background:transparent;text-align:center;height:35px;margin-bottom:0;position:relative;box-shadow:none}@media (max-width:767px){#lt-yantr .range-slider .slider-val div.selected-amt>.slider-input{font-size:22px;line-height:28px;width:110px;height:28px}}@media (max-width:380px){#lt-yantr .range-slider .slider-val div.selected-amt>.slider-input{font-size:20px}}#lt-yantr .range-slider .slider-val div.form-group>span{display:none}#lt-yantr .range-slider .slider-val.interest-val .input-text,#lt-yantr .range-slider .slider-val.term-year .input-text{text-align:left;color:#2F4559;font-weight:700;font-size:30px;line-height:37px;height:35px;margin-right:20px;display:inline-block}@media (max-width:767px){#lt-yantr .range-slider .slider-val.interest-val .input-text,#lt-yantr .range-slider .slider-val.term-year .input-text{font-size:22px;line-height:30px;height:28px}}@media (max-width:380px){#lt-yantr .range-slider .slider-val.interest-val .input-text,#lt-yantr .range-slider .slider-val.term-year .input-text{font-size:20px}}#lt-yantr .range-slider .slider-val.interest-val .selected-amt>.slider-input,#lt-yantr .range-slider .slider-val.term-year .selected-amt>.slider-input{text-align:right;width:62px}@media (max-width:767px){#lt-yantr .range-slider .slider-val.interest-val .selected-amt>.slider-input,#lt-yantr .range-slider .slider-val.term-year .selected-amt>.slider-input{width:45px}}#lt-yantr .range-slider .slider-val.term-year .input-text{top:0;margin-right:0;line-height:35px}@media (max-width:767px){#lt-yantr .range-slider .slider-val.term-year .input-text{line-height:28px}}@media (max-width:380px){#lt-yantr .range-slider .slider-val.term-year .input-text{font-size:19px;margin-right:10px}}#lt-yantr .range-slider .slider-val.term-year .selected-amt>.slider-input{width:40px}#lt-yantr .range-slider .slider-val .val{color:#aaa;font-size:13px;position:relative;top:10px}@media (max-width:767px){#lt-yantr .range-slider .slider-val .val{top:7px}}@media (max-width:380px){#lt-yantr .range-slider .slider-val .val{top:5px}}#lt-yantr .loan-pay-graph{width:48%;min-width:380px;float:right;text-align:center}@media (max-width:992px){#lt-yantr .loan-pay-graph{width:100%;min-width:100%;float:none}}#lt-yantr .loan-pay-graph .graph-block .circle-graph{width:400px;height:400px;margin:20px auto 0;position:relative}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph{width:100%;max-width:400px;height:auto;margin-bottom:20px}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .outer-circle{width:480px;height:480px;margin:0 auto;position:absolute;top:-40px;left:-40px;right:0;z-index:1}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .outer-circle{display:none}}#lt-yantr .loan-pay-graph .graph-block .circle-graph #chartjs-tooltip{width:130px;height:60px;padding:6px;z-index:1;transform:inherit}#lt-yantr .loan-pay-graph .graph-block .circle-graph #chartjs-tooltip:after{top:auto;bottom:-9px}#lt-yantr .loan-pay-graph .graph-block .circle-graph #chartjs-tooltip label{font-size:14px;margin:0;display:block}#lt-yantr .loan-pay-graph .graph-block .circle-graph #chartjs-tooltip strong{font-size:16px}#lt-yantr .loan-pay-graph .graph-block .circle-graph .inner-circle{width:380px;height:380px;background:#E93E51;border-radius:100%;margin:0 auto;position:absolute;top:10px;left:0;right:0;z-index:2}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .inner-circle{position:static;background:transparent;height:auto}}@media (max-width:380px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .inner-circle{width:100%}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content{color:#fff;width:230px;display:inline-block;margin:0 auto;position:relative;top:50%;transform:translateY(-50%);z-index:3}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content{font-size:15px;color:#101f30;display:block;width:100%;height:inherit;position:static;transform:translateY(0)}}@media (max-width:480px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content{font-size:14px}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content label{font-weight:400;display:block;margin:0}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content label{font-size:16px;margin-top:5px}}@media (max-width:767px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content label{font-size:14px}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content big{font-size:45px;font-weight:300;line-height:normal;white-space:nowrap}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content big{font-size:55px;color:#08c177;font-weight:700;display:block;margin-bottom:10px}}@media (max-width:767px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content big{font-size:45px;margin-bottom:5px}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content strong{font-size:17px;display:block}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content strong{color:#101f30;font-size:22px;line-height:normal;margin-top:3px}}@media (max-width:767px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content strong{font-size:20px}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul{margin-bottom:0}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul li{color:#fff;list-style:none}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul li{color:#666}}#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul li:first-child{display:none}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul li:first-child{display:inline-block}}@media (max-width:992px){#lt-yantr .loan-pay-graph .graph-block .circle-graph .circle-content ul li{width:49%;display:inline-block}}#lt-yantr .use-calculator{text-align:center;text-transform:uppercase;font-weight:700;margin-top:30px}@media (max-width:480px){#lt-yantr .use-calculator{margin-top:10px}}#lt-yantr .chart-info{text-align:left}#lt-yantr .chart-info li{list-style:none;display:inline-block;margin:10px 0 0 40px}#lt-yantr .chart-info li:first-child{margin-left:0}#lt-yantr .chart-info li span{width:14px;height:14px;display:inline-block;margin-right:5px;position:relative;top:2px}#lt-yantr .view-free-offers{text-align:center;width:43%;float:left;min-width:380px;margin-top:20px;display: none !important;}@media (max-width:992px){#lt-yantr .view-free-offers{width:100%;min-width:100%;float:none;margin-top:40px}}@media (max-width:767px){#lt-yantr .view-free-offers{margin-top:25px;}}#lt-yantr .view-free-offers .btn{margin:0 auto 10px}@media (max-width:480px){#lt-yantr .view-free-offers .btn{width:100%;padding-right:0;font-size:1.29em}}#lt-yantr .payment-chart-table{margin-bottom:60px}@media (max-width:767px){#lt-yantr .payment-chart-table{margin-bottom:30px}}', ""])
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    var i = a(n(1)),
        r = a(n(1051));

    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }(0, i.default)("#loan-payment-2-app", r.default)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1052),
        r = n(1054);
    for (var a in r) "default" !== a && function(t) {
        n.d(e, t, function() {
            return r[t]
        })
    }(a);
    n(232), n(806);
    var o = n(87),
        c = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
    e.default = c.exports
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1053);
    n.d(e, "render", function() {
        return i.render
    }), n.d(e, "staticRenderFns", function() {
        return i.staticRenderFns
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "render", function() {
        return i
    }), n.d(e, "staticRenderFns", function() {
        return r
    });
    var i = function() {
            var t = this,
                e = t.$createElement,
                n = t._self._c || e;
            return n("div", {
                staticClass: "advanced-calc mortgage-payment-calc",
                attrs: {
                    id: "lt-yantr"
                }
            }, [n("div", {
                staticClass: "container-width"
            }, [n("div", {
                staticClass: "loan-pay-filter-graph"
            }, [n("h1", {
                staticClass: "section-title"
            }, [t._v(t._s(t.calcSubTitle))]), t._v(" "), n("div", {
                staticClass: "filter-block"
            }, [n("ul", {
                staticClass: "loan-pay-slider"
            }, [n("li", [n("label", [t._v("What is the total price of the truck(s) and trailer(s)?")]), t._v(" "), n("div", {
                staticClass: "range-slider"
            }, [n("div", {
                staticClass: "slider-val"
            }, [n("div", {
                staticClass: "val"
            }, [t._v("$" + t._s(t.convertToK(t.loanAmtSlider.min)) + "K")]), t._v(" "), n("number-input", {
                ref: "loanAmountInput",
                attrs: {
                    "apply-input-group-addon-class": "hidden",
                    "apply-input-group-class": "selected-amt",
                    "apply-input-class": "slider-input"
                },
                on: {
                    inputBlur: t.formatLoanAmtVal
                },
                model: {
                    value: t.LoanAmount,
                    callback: function(e) {
                        t.LoanAmount = e
                    },
                    expression: "LoanAmount"
                }


            }), t._v(" "), n("div", {
                staticClass: "val"
            }, [t._v("$" + t._s(t.convertToK(t.loanAmtSlider.max)) + "K")])], 1), t._v(" "), n("vue-slider", {
                attrs: {
                    height: t.loanAmtSlider.height,
                    tooltip: t.loanAmtSlider.tooltip,
                    bgStyle: t.loanAmtSlider.bgStyle,
                    dotSize: t.loanAmtSlider.dotSize,
                    max: t.loanAmtSlider.max,
                    min: t.loanAmtSlider.min,
                    clickable: t.loanAmtSlider.clickable,
                    interval: t.loanAmtSlider.interval
                },
                on: {
                    "drag-end": function(e) {
                        t.formatLoanAmtVal(e.currentValue)
                    }
                },
                model: {
                    value: t.LoanIntAmount,
                    callback: function(e) {
                        t.LoanIntAmount = e
                    },
                    expression: "LoanIntAmount"
                }




            })], 1)]), t._v(" "), n("li", [n("label", [t._v("How much of a downpayment can you make?")]), t._v(" "), n("div", {
                staticClass: "range-slider"
            }, [n("div", {
                staticClass: "slider-val"
            }, [n("div", {
                staticClass: "val minval"
            }, [t._v("$" + t._s(t.convertToK(t.DownpaymentAmountSlider.min)) + "K")]), t._v(" "), n("number-input", {
                ref: "DownpaymentAmountInput",
                attrs: {
                    "apply-input-group-addon-class": "hidden",
                    "apply-input-group-class": "selected-amt",
                    "apply-input-class": "slider-input"
                },
                on: {
                    inputBlur: t.formatDownAmtVal
                },
                model: {
                    value: t.DownpaymentAmount,
                    callback: function(e) {
                        t.DownpaymentAmount = e
                    },
                    expression: "DownpaymentAmount"
                }


            }), t._v(" "), n("div", {
                staticClass: "val maxval"
            }, [t._v("$" + t._s(t.convertToK(t.DownpaymentAmountSlider.max)) + "K")])], 1), t._v(" "), n("vue-slider", {
                attrs: {
                    height: t.DownpaymentAmountSlider.height,
                    tooltip: t.DownpaymentAmountSlider.tooltip,
                    bgStyle: t.DownpaymentAmountSlider.bgStyle,
                    dotSize: t.DownpaymentAmountSlider.dotSize,
                    max: t.DownpaymentAmountSlider.max,
                    min: t.DownpaymentAmountSlider.min,
                    clickable: t.DownpaymentAmountSlider.clickable,
                    interval: t.DownpaymentAmountSlider.interval
                },
                on: {
                    "drag-end": function(e) {
                        t.formatDownAmtVal(e.currentValue)
                    }
                },
                model: {
                    value: t.DownpaymentIntAmount,
                    callback: function(e) {
                        t.DownpaymentIntAmount = e
                    },
                    expression: "DownpaymentIntAmount"
                }


              })], 1)]), t._v(" "), n("li", [n("label", [t._v("What is your estimated interest rate?")]), t._v(" "), n("div", {
                staticClass: "range-slider"
            }, [n("div", {
                staticClass: "slider-val interest-val"
            }, [n("div", {
                staticClass: "val"
            }, [t._v(t._s(t.interestRateSlider.min) + "%")]), t._v(" "), n("number-input", {
                attrs: {
                    "apply-input-group-addon-class": "hidden",
                    "apply-input-group-class": "selected-amt",
                    "apply-input-class": "slider-input"
                },
                on: {
                    inputBlur: t.formatInterestRateVal
                },
                model: {
                    value: t.InterestRate,
                    callback: function(e) {
                        t.InterestRate = e
                    },
                    expression: "InterestRate"
                }
            }), t._v(" "), n("span", {
                staticClass: "input-text"
            }, [t._v("%")]), t._v(" "), n("div", {
                staticClass: "val"
            }, [t._v(t._s(t.interestRateSlider.max) + "%")])], 1), t._v(" "), n("vue-slider", {
                attrs: {
                    height: t.interestRateSlider.height,
                    tooltip: t.interestRateSlider.tooltip,
                    bgStyle: t.interestRateSlider.bgStyle,
                    dotSize: t.interestRateSlider.dotSize,
                    max: t.interestRateSlider.max,
                    min: t.interestRateSlider.min,
                    clickable: t.interestRateSlider.clickable,
                    interval: t.interestRateSlider.interval
                },
                on: {
                    "drag-start": function(e) {
                        t.formatInterestRateVal(e.currentValue)
                    }
                },
                model: {
                    value: t.InterestRate,
                    callback: function(e) {
                        t.InterestRate = e
                    },
                    expression: "InterestRate"
                }


            })], 1)]), t._v(" "), n("li", [n("label", [t._v("What is your loan term?")]), t._v(" "), n("div", {
                staticClass: "range-slider"
            }, [n("div", {
                staticClass: "slider-val term-year"
            }, [n("div", {
                staticClass: "val"
            }, [t._v(t._s(t.loanTermSlider.min) + " year")]), t._v(" "), n("number-input", {
                attrs: {
                    "apply-input-group-addon-class": "hidden",
                    "apply-input-group-class": "selected-amt",
                    "apply-input-class": "slider-input"
                },
                model: {
                    value: t.LoanTerm,
                    callback: function(e) {
                        t.LoanTerm = e
                    },
                    expression: "LoanTerm"
                }
            }), t._v(" "), t._m(0), t._v(" "), n("div", {
                staticClass: "val"
            }, [t._v(t._s(t.loanTermSlider.max) + " years")])], 1), t._v(" "), n("vue-slider", {
                attrs: {
                    height: t.loanTermSlider.height,
                    tooltip: t.loanTermSlider.tooltip,
                    bgStyle: t.loanTermSlider.bgStyle,
                    dotSize: t.loanTermSlider.dotSize,
                    max: t.loanTermSlider.max,
                    min: t.loanTermSlider.min,
                    clickable: t.loanTermSlider.clickable,
                    interval: t.loanTermSlider.interval
                },
                on: {
                    "drag-start": function(e) {
                        t.formatInterestRateVal(e.currentValue)
                    }
                },
                model: {
                    value: t.LoanTerm,
                    callback: function(e) {
                        t.LoanTerm = e
                    },
                    expression: "LoanTerm"
                }
            })], 1)]), t._v(" "), t._m(1)]), t._v(" "), n("div", {
                staticClass: "loan-pay-graph"
            }, [n("div", {
                staticClass: "graph-block"
            }, [n("div", {
                staticClass: "circle-graph"
            }, [n("div", {
                staticClass: "circle-content"
            }, [n("label", [t._v("Monthly Payment:")]), t._v(" "), n("big", [t._v("$" + t._s(t.currencyFilter(t.monthlyPayment)))]), t._v(" "), n("ul", [n("li", [n("label", [t._v("Total Interest:")]), t._v(" "), n("strong", [t._v("$" + t._s(t.currencyFilter(t.totalPaymentInterest)))])]), t._v(" "), n("li", [n("label", [t._v("Total Repayment:")]), t._v(" "), n("strong", [t._v("$" + t._s(t.currencyFilter(t.allTotalPayment)))])])])], 1), t._v(" "), n("div", {
                staticClass: "inner-circle"
            }), t._v(" "), n("div", {
                staticClass: "outer-circle"
            }, [n("vue-chart", {
                attrs: {
                    type: "doughnut",
                    data: t.chartData,
                    options: t.options,
                    width: t.chartWidth,
                    height: t.chartHeight
                }
            })], 1)])])]), t._v(" "), n("div", {
                staticClass: "clear-fix"
            }), t._v(" "), n("div", {
                staticClass: "view-free-offers"
            }, [n("h4", [t._v("We've found offers for this result:")]), t._v(" "), n("button", {
                //staticClass: "btn btn-blue",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: function(e) {
                        t.redirect()
                    }
                }
            }, [t._v(t._s(t.DestinationButtonText))]), t._v(" "), n("div", {
                staticClass: "clear-fix"
            }), t._v(" "), t.DisclosureText ? n("advertising-disclosures", {
                attrs: {
                    "disclosure-text": t.DisclosureText,
                    "disclosure-tokens": t.DisclosureTokens
                }
            }) : t._e(), t._v(" "), 1 == t.ltLogo ? n("lt-logo", [n("small", [t._v("NMLS#1136 Terms & Conditions Apply")])]) : t._e()], 1), t._v(" "), n("div", {
                staticClass: "clear-fix"
            })]), t._v(" "), 1 == t.howToUseCalculator ? n("div", {
                staticClass: "use-calculator"
            }, [n("a", {
                directives: [{
                    name: "vue-scroll-to",
                    rawName: "v-vue-scroll-to",
                    value: "#how-to-use-mortgage-calculator",
                    expression: "'#how-to-use-mortgage-calculator'"
                }]
            }, [t._v("How to use this calculator")])]) : t._e()]), t._v(" "), n("div", {
                staticClass: "full-width-border"
            }), t._v(" "), 1 == t.moPayGraphSection ? n("home-loan-mo-pay-graph", {
                attrs: {
                    "loan-data": t.amortizationBreakdown
                }
            }) : t._e(), t._v(" "), 1 == t.amortizationTableSection ? n("home-loan-amortization-table", {
                attrs: {
                    "amortization-breakdown": t.amortizationBreakdown
                }
            }) : t._e(), t._v(" "), n("div", {
                staticClass: "full-width-border"
            })], 1)])
        },
        r = [function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("span", {
                staticClass: "input-text"
            }, [this._v("year "), e("span", [this._v("term")])])
        }, function() {
            var t = this.$createElement,
                e = this._self._c || t;
            return e("li", {
                staticClass: "hidden-xs"
            }, [e("ul", {
                staticClass: "chart-info"
            }, [e("li", [e("span", {
                staticClass: "green-bg"
            }), this._v(" Principal")]), this._v(" "), e("li", [e("span", {
                staticClass: "light-green-bg"
            }), this._v(" Interest")])])])
        }]
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1055),
        r = n.n(i);
    for (var a in i) "default" !== a && function(t) {
        n.d(e, t, function() {
            return i[t]
        })
    }(a);
    e.default = r.a
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = m(n(64)),
        r = m(n(587)),
        a = m(n(5)),
        o = m(n(796)),
        c = m(n(801)),
        s = m(n(588)),
        l = m(n(648)),
        p = m(n(225)),
        u = m(n(214)),
        d = m(n(202)),
        h = m(n(207)),
        f = m(n(201)),
        x = m(n(741));

    function m(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.default = {
        props: {
            calcSubTitle: {
                default: "What is the total price of the truck(s) and trailer(s)?" 
            },
            ltLogo: {
                default: 0
            },
            minLoanAmount: {
                default: 5e3
            },
            maxLoanAmount: {
                default: 500e3
            },
            loanAmount: {
                default: 30e3
            },
            minDownpaymentAmount: {
                default: 0e3
            },
            maxDownpaymentAmount: {
                default: 100e3
            },
            DownpaymentAmount: {
                default: 5e3
            },
            minInterestRate: {
                default: 1
            },
            maxInterestRate: {
                default: 30
            },
            interestRate: {
                default: 5
            },
            minLoanTerm: {
                default: 1
            },
            maxLoanTerm: {
                default: 5
            },
            loanTerm: {
                default: 2
            },
            disclosureTokens: {
                default: "00101"
            },
            /*disclosureText: {
                default: "Advertising Disclosures"
            },*/
            howToUseCalculator: {
                default: 1
            },
            moPayGraphSection: {
                default: 1
            },
            amortizationTableSection: {
                default: 1
            },
            destinationLinkOrId: {
                default: "wp-personal"
            },
            /*destinationButtonText: {
                default: "View Free Offers"
            },*/
            loanAmountInterval: {
                default: 1e3
            },
            DownpaymentAmountInterval: {
                default: 1e3
            },
            interestRateInterval: {
                default: .1
            },
            loanTermInterval: {
                default: 1
            }
        },
        data: function() {
            return {
                DisclosureText: this.disclosureText,
                DisclosureTokens: this.disclosureTokens,
                loanAmtSlider: {
                    value: this.loanAmount,
                    height: 3,
                    sliderStyle: {
                        backgroundColor: "#00aeef"
                    },
                    bgStyle: {
                        background: "#ccc"
                    },
                    dotSize: 16,
                    tooltip: !1,
                    clickable: !1,
                    min: parseInt(this.minLoanAmount),
                    max: parseInt(this.maxLoanAmount),
                    interval: parseInt(this.loanAmountInterval)
                },
                LoanAmount: this.loanAmount,
                LoanIntAmount: this.loanAmount,
                DownpaymentAmountSlider: {
                    value: this.DownpaymentAmount,
                    height: 3,
                    sliderStyle: {
                        backgroundColor: "#00aeef"
                    },
                    bgStyle: {
                        background: "#ccc"
                    },
                    dotSize: 16,
                    tooltip: !1,
                    clickable: !1,
                    min: parseInt(this.minDownpaymentAmount),
                    max: parseInt(this.maxDownpaymentAmount),
                    interval: parseInt(this.DownpaymentAmountInterval)
                },
                DownpaymentAmount: this.DownpaymentAmount,
                DownpaymentIntAmount: this.DownpaymentAmount,
                interestRateSlider: {
                    value: this.interestRate,
                    height: 3,
                    sliderStyle: {
                        backgroundColor: "#00aeef"
                    },
                    bgStyle: {
                        background: "#ccc"
                    },
                    dotSize: 16,
                    tooltip: !1,
                    clickable: !1,
                    min: parseInt(this.minInterestRate),
                    max: parseInt(this.maxInterestRate),
                    interval: parseFloat(this.interestRateInterval)
                },
                InterestRate: void 0 === this.interestRate ? 3.3 : this.interestRate,
                loanTermSlider: {
                    value: this.loanTerm,
                    height: 3,
                    sliderStyle: {
                        backgroundColor: "#00aeef"
                    },
                    bgStyle: {
                        background: "#ccc"
                    },
                    dotSize: 16,
                    tooltip: !1,
                    clickable: !1,
                    min: parseInt(this.minLoanTerm),
                    max: parseInt(this.maxLoanTerm),
                    interval: parseInt(this.loanTermInterval)
                },
                LoanTerm: this.loanTerm,
                chartData: {
                    labels: ["Total Interest"],
                    datasets: [{
                        data: [250],
                        backgroundColor: "rgba(233, 62, 81, 0.3)",
                        hoverBackgroundColor: "rgba(215, 55, 75, 0.3)",
                        borderWidth: 0
                    }]
                },
                chartWidth: 280,
                chartHeight: 280,
                DestinationLinkOrId: this.destinationLinkOrId,
                DestinationButtonText: this.destinationButtonText
            }
        },
        methods: {
     
            formatLoanAmtVal: function(t) {
                var e = a.default.unformat(t);
                this.LoanIntAmount = e < this.loanAmtSlider.min ? this.loanAmtSlider.min : 
                e > this.loanAmtSlider.max ? this.loanAmtSlider.max : e, 
                this.LoanAmount = a.default.formatMoney(this.LoanIntAmount , {
                    symbol: "$",
                    precision: 0
                })

                if (this.LoanIntAmount < this.DownpaymentIntAmount) {
                    this.LoanIntAmount=this.DownpaymentIntAmount
                    this.LoanAmount=this.DownpaymentIntAmount
                }

                
            },
            formatDownAmtVal: function(t) {
                var d = a.default.unformat(t);
                this.DownpaymentIntAmount = d < this.DownpaymentAmountSlider.min ? this.DownpaymentAmountSlider.min : 
                d > this.DownpaymentAmountSlider.max ? this.DownpaymentAmountSlider.max : d, 
                this.DownpaymentAmount = a.default.formatMoney(this.DownpaymentIntAmount, {
                    symbol: "$",
                    precision: 0
                })

                if (this.DownpaymentIntAmount > this.LoanIntAmount) {
                    this.DownpaymentIntAmount=this.LoanIntAmount
                    this.DownpaymentAmount=this.LoanIntAmount
                }


               
            },
            formatInterestRateVal: function() {
                this.InterestRate % 1 != 0 && (this.InterestRate = a.default.formatMoney(this.InterestRate, {
                    symbol: "",
                    precision: 1
                })), this.LoanAmount = a.default.formatMoney(this.LoanIntAmount, {
                    symbol: "$",
                    precision: 0
                })
            },
            currencyFilter: function(t) {
                return t > 0 ? a.default.formatNumber(t, {
                    precision: 2
                }) : 0
            },
            currencyFilterPreZero: function(t) {
                return a.default.formatNumber(t, {
                    precision: 0
                })
            },
            loadCircleChart: function() { 
            
                var t = this.allTotalPayment / 8e6 + .66,
                    e = this.allTotalPayment / 8e6 + .53 + this.totalPaymentInterest / this.allTotalPayment * .35;

                e = isFinite(e) ? e : 0, e = 0 == this.allTotalPayment ? 0 : e, 
                document.getElementsByClassName("inner-circle")[0].style.transform = 
                "matrix(" + t + ", 0, 0," + t + ", 0, 0)", 
                document.getElementsByClassName("outer-circle")[0].style.transform = 
                "matrix(" + e + ", 0, 0," + e + ", 0, 0)"

                
            },
            convertToK: function(t) {
                return t / 1e3
            },
            updateLoanAmount: function() {
                var t = a.default.unformat(this.LoanAmount);
                this.loanAmtSlider.value = t < this.loanAmtSlider.min ? 
                this.loanAmtSlider.min : t > this.loanAmtSlider.max ? this.loanAmtSlider.max : t
            },
            updateDownpaymentAmount: function() {

                var t = a.default.unformat(this.DownpaymentAmount);
                this.DownpaymentAmountSlider.value = t < this.DownpaymentAmountSlider.min ? 
                this.DownpaymentAmountSlider.min : t > this.DownpaymentAmountSlider.max ? this.DownpaymentAmountSlider.max : t
            },
            updateSliderValues: function() {
                var t = parseInt(this.minLoanAmount),
                    e = parseInt(this.maxLoanAmount),
                    aa =parseInt(this.minDownpaymentAmount),
                    b =parseInt(this.maxDownpaymentAmount),
                    n = parseFloat(this.minInterestRate),
                    i = parseFloat(this.maxInterestRate),
                    r = parseFloat(this.interestRate),
                    a = parseInt(this.loanTerm),
                    o = parseInt(this.minLoanTerm),
                    c = parseInt(this.maxLoanTerm);
                    
                    

                this.loanAmtSlider.min = t < 0 ? 0 : t, this.loanAmtSlider.max = e < t ? t : e, 
                this.DownpaymentAmountSlider.min = aa < 0 ? 0 : aa, this.DownpaymentAmountSlider.max = b < aa ? aa : b,
                this.interestRateSlider.value = r < n ? n : r > i ? i : r, 
                this.InterestRate = this.interestRateSlider.value, 
                this.interestRateSlider.min = n < 0 ? 0 : n, 
                this.interestRateSlider.max = i < n ? n : i, 
                this.loanTermSlider.value = a < o ? o : a > o ? c : a, 
                this.LoanTerm = this.loanTermSlider.value, 
                this.loanTermSlider.min = o < 0 ? 0 : o, this.loanTermSlider.max = c < o ? o : c
            }
        },
        computed: {
            monthlyPayment: function() {
                return d.default.monthlyPaymentUsingLoanTermInYears(this.LoanIntAmount-this.DownpaymentIntAmount, this.LoanTerm, this.InterestRate)
            },
            totalPaymentInterest: function() {
                var interestamt=this.LoanIntAmount-this.DownpaymentIntAmount;
                //console.log(this.monthlyPayment * (12 * this.LoanTerm) - (this.LoanIntAmount-this.DownpaymentIntAmount));
                return this.monthlyPayment * (12 * this.LoanTerm) - interestamt
            },
            allTotalPayment: function() {
                var interestamt=this.totalPaymentInterest-this.DownpaymentIntAmount;
                return interestamt + this.LoanIntAmount
            },
            amortizationBreakdown: function() {
                return f.default.amortizationBreakdown(this.LoanIntAmount-this.DownpaymentIntAmount, this.LoanTerm, this.InterestRate)
            },
            options: function() {
                var t = this;
                return {
                    cutoutPercentage: 0,
                    legend: {
                        display: !1
                    },
                    tooltips: {
                        enabled: !1,
                        custom: function(e) {
                            var n = document.getElementById("chartjs-tooltip");
                            if (n || ((n = document.createElement("div")).id = "chartjs-tooltip", n.innerHTML = "<div></div>", document.getElementsByClassName("circle-content")[0].append(n)), 0 !== e.opacity) {
                                if (e.displayColors = !1, n.classList.remove("above", "below", "no-transform"), e.yAlign ? n.classList.add(e.yAlign) : n.classList.add("no-transform"), e.body) {
                                    var i = "",
                                        r = e.title || [],
                                        o = e.body.map(function(t) {
                                            return t.lines
                                        });
                                    r.forEach(function(t) {
                                        i += "<label>" + t + "</label>"
                                    }), o.forEach(function(e, n) {
                                        var r = e[0].split(":");
                                        r[0].split("$");
                                        i += "<label>" + r[0] + "</label>", i += "<strong>" + a.default.formatMoney(t.totalPaymentInterest, {
                                            precision: 2
                                        }) + "</strong>"
                                    }), n.querySelector("div").innerHTML = i
                                }
                                this._chart.canvas.addEventListener("mousemove", function(t) {
                                    var e = this.getBoundingClientRect(),
                                        i = (t.clientX, e.left, t.clientY, e.top, t.clientX - e.left - e.width / 2 + 50),
                                        r = t.clientY - e.top - e.height / 2 + 25;
                                    n.style.left = i + "px", n.style.top = r + "px"
                                }, !1), n.style.opacity = 1
                            } else n.style.opacity = 0
                        }
                    }
                }
            },
            circleChart: function() {
                return this.LoanIntAmount + this.DownpaymentIntAmount + this.LoanTerm + this.InterestRate 
            }
        },
        mounted: function() {
            this.updateSliderValues(), this.formatLoanAmtVal(this.loanAmount),this.formatDownAmtVal(this.DownpaymentAmount),
             this.loadCircleChart(), this.updateLoanAmount(),this.updateDownpaymentAmount()
        },
        components: {
            NumberInput: i.default,
            vueSlider: r.default,
            Accounting: a.default,
            HomeLoanMoPayGraph: o.default,
            HomeLoanAmortizationTable: c.default,
            VueChart: s.default,
            ChartTooltip: l.default,
            LtLogo: p.default,
            AdvertisingDisclosures: u.default
        },
        watch: {
            circleChart: function() {
                this.loadCircleChart()
            },
            LoanAmount: function() {
                this.updateLoanAmount()
            },
            LoanIntAmount: function() {
                this.LoanAmount = a.default.formatMoney(this.LoanIntAmount, {
                    symbol: "$",
                    precision: 0
                })
            },
            DownpaymentAmount: function() {
                this.updateDownpaymentAmount()
            },
            DownpaymentIntAmount: function() {
                this.DownpaymentAmount = a.default.formatMoney(this.DownpaymentIntAmount, {
                    symbol: "$",
                    precision: 0
                })


              /*  if (this.DownpaymentIntAmount > this.LoanIntAmount) {
                    this.DownpaymentAmount=this.LoanAmount
                    this.DownpaymentIntAmount=this.LoanAmount
                }*/
            }
        },
        directives: {
            VueScrollTo: x.default
        },
        mixins: [h.default]
    }
}]);