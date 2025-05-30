//// [test.ts]
define([
    "require",
    "exports",
    "@swc/helpers/_/_async_to_generator",
    "@swc/helpers/_/_class_call_check",
    "@swc/helpers/_/_interop_require_wildcard",
    "@swc/helpers/_/_ts_generator"
], function(require, exports, _async_to_generator, _class_call_check, _interop_require_wildcard, _ts_generator) {
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
                            new Promise(function(resolve, reject) {
                                return require([
                                    "./test"
                                ], function(m) {
                                    return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                                }, reject);
                            }) // ONE
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
                                new Promise(function(resolve, reject) {
                                    return require([
                                        "./test"
                                    ], function(m) {
                                        return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                                    }, reject);
                                }) // TWO
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
                                new Promise(function(resolve, reject) {
                                    return require([
                                        "./test"
                                    ], function(m) {
                                        return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                                    }, reject);
                                }) // THREE
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
                                    new Promise(function(resolve, reject) {
                                        return require([
                                            "./test"
                                        ], function(m) {
                                            return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                                        }, reject);
                                    }) // FOUR
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
                            new Promise(function(resolve, reject) {
                                return require([
                                    "./test"
                                ], function(m) {
                                    return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                                }, reject);
                            }) // FIVE
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
