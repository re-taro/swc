define([
    "require",
    "exports",
    "foo",
    "foo-bar",
    "./directory/foo-bar",
    "foo2",
    "foo4",
    "foo5"
], function(require, exports, _foo, _foobar, _foobar1, _foo2, _foo4, _foo5) {
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
        get test () {
            return test;
        },
        get test2 () {
            return test2;
        }
    });
    _foo2 = /*#__PURE__*/ _interop_require_default(_foo2);
    var test;
    var test2 = 5;
    _foo4.bar;
    _foo5.foo;
    _foo2.default;
});
