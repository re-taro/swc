//// [declarationEmitThisPredicates01.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var target = exports, all = {
    get C () {
        return C;
    },
    get D () {
        return D;
    }
};
for(var name in all)Object.defineProperty(target, name, {
    enumerable: !0,
    get: Object.getOwnPropertyDescriptor(all, name).get
});
var _call_super = require("@swc/helpers/_/_call_super"), _class_call_check = require("@swc/helpers/_/_class_call_check"), _inherits = require("@swc/helpers/_/_inherits"), _instanceof = require("@swc/helpers/_/_instanceof"), C = /*#__PURE__*/ function() {
    function C() {
        _class_call_check._(this, C);
    }
    return C.prototype.m = function() {
        return _instanceof._(this, D);
    }, C;
}(), D = /*#__PURE__*/ function(C) {
    function D() {
        return _class_call_check._(this, D), _call_super._(this, D, arguments);
    }
    return _inherits._(D, C), D;
}(C);
