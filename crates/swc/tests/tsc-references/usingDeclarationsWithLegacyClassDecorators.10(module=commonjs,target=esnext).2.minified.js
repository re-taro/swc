//// [usingDeclarationsWithLegacyClassDecorators.10.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function() {
        return _class;
    }
});
const _ts_decorate = require("@swc/helpers/_/_ts_decorate"), _ts_add_disposable_resource = require("@swc/helpers/_/_ts_add_disposable_resource"), _ts_dispose_resources = require("@swc/helpers/_/_ts_dispose_resources"), env = {
    stack: [],
    error: void 0,
    hasError: !1
};
try {
    var _class = class {
    };
    _class = _ts_decorate._([
        dec
    ], _class), _ts_add_disposable_resource._(env, null, !1);
} catch (e) {
    env.error = e, env.hasError = !0;
} finally{
    _ts_dispose_resources._(env);
}
