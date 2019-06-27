
// help to optimize prototype inheritance performance.
function createObjWithoutConstructor(Class){
    function T(){};
    T.prototype = Class.prototype;
    return new T();
}
