//// [asyncArrowFunctionCapturesArguments_es6.ts]
import { _ as _async_to_generator } from "@swc/helpers/_/_async_to_generator";
class C {
    method() {
        function other() {}
        var fn = ()=>_async_to_generator(function*() {
                return yield other.apply(this, arguments);
            }).apply(this, arguments);
    }
}
function f() {
    return ()=>_async_to_generator(function*() {
            return ()=>_async_to_generator(function*() {
                    return arguments.length;
                }).apply(this, arguments);
        }).apply(this, arguments);
}
