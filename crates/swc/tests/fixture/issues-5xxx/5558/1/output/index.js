var _async_to_generator = require("@swc/helpers/_/_async_to_generator");
class Foo {
    bar(x = ()=>_async_to_generator._(function*() {
            return yield 1;
        })()) {}
}
