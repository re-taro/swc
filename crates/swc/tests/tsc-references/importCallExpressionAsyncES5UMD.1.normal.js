//// [test.ts]
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("@swc/helpers/_/_async_to_generator"), require("@swc/helpers/_/_class_call_check"), require("@swc/helpers/_/_interop_require_wildcard"), require("@swc/helpers/_/_ts_generator"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "@swc/helpers/_/_async_to_generator",
        "@swc/helpers/_/_class_call_check",
        "@swc/helpers/_/_interop_require_wildcard",
        "@swc/helpers/_/_ts_generator"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.testTs = {}, global.asyncToGenerator, global.classCallCheck, global.interopRequireWildcard, global.tsGenerator);
})(this, function(exports, _async_to_generator, _class_call_check, _interop_require_wildcard, _ts_generator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
        get cl1 () {
            return cl1;
        },
        get cl2 () {
            return cl2;
        },
        get fn () {
            return fn;
        },
        get l () {
            return l;
        },
        get obj () {
            return obj;
        }
    });
    function fn() {
        return _async_to_generator._(function() {
            var req;
            return _ts_generator._(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            import('./test') // ONE
                        ];
                    case 1:
                        req = _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    }
    var cl1 = /*#__PURE__*/ function() {
        "use strict";
        function cl1() {
            _class_call_check._(this, cl1);
        }
        var _proto = cl1.prototype;
        _proto.m = function m() {
            return _async_to_generator._(function() {
                var req;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                import('./test') // TWO
                            ];
                        case 1:
                            req = _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        };
        return cl1;
    }();
    var obj = {
        m: function() {
            return _async_to_generator._(function() {
                var req;
                return _ts_generator._(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                import('./test') // THREE
                            ];
                        case 1:
                            req = _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    };
    var cl2 = function cl2() {
        "use strict";
        _class_call_check._(this, cl2);
        this.p = {
            m: function() {
                return _async_to_generator._(function() {
                    var req;
                    return _ts_generator._(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    import('./test') // FOUR
                                ];
                            case 1:
                                req = _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        };
    };
    var l = function() {
        return _async_to_generator._(function() {
            var req;
            return _ts_generator._(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            import('./test') // FIVE
                        ];
                    case 1:
                        req = _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    };
});
