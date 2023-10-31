/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World"
    }
};


const f = createHelloWorld();
f([42, null, {}]);