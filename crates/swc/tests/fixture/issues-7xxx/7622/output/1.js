var _async_to_generator = require("@swc/helpers/_/_async_to_generator");
var _ts_generator = require("@swc/helpers/_/_ts_generator");
function asyncWhile() {
    return _async_to_generator._(function() {
        return _ts_generator._(this, function(_state) {
            while(true){
                return [
                    2,
                    {}
                ];
            }
            return [
                2
            ];
        });
    })();
}
function generatorWhile() {
    return _ts_generator._(this, function(_state) {
        while(true){
            return [
                2,
                {}
            ];
        }
        return [
            2
        ];
    });
}
