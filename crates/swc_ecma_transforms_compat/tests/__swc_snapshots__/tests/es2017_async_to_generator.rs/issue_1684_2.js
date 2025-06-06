const cache = {};
function getThing(key) {
    return _async_to_generator(function() {
        var it, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _tmp = cache[key];
                    if (_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        fetchThing(key)
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    it = _tmp;
                    return [
                        2,
                        it
                    ];
            }
        });
    })();
}
function fetchThing(key) {
    return Promise.resolve(key.toUpperCase()).then((val)=>cache[key] = val);
}
