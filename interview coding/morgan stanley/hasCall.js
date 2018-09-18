/**
 * Created by Paul on 9/18/2018.
 */
function spyOn(obj, prop){
    let hasCalled = false;
    let paramsArr;
    const originalFn = obj[prop];

    obj[prop] = (...params) => {

        hasCalled = true;

        paramsArr = params;

        originalFn.apply(obj, params);

    }


    return {

        hasCalled: () => hasCalled,

        isCalledWith: ()=> paramsArr

}

}



//Usage
const ob = {
        get: (a) => console.log(a)
}

const ob2 = {
        num: 20,
        test: (a, b, c) => console.log(a+b+c+this.num)
}

const obSpy = spyOn(ob, 'get');


console.log(obSpy.hasCalled())
ob.get(10);
console.log(obSpy.hasCalled()) // true
console.log(obSpy.isCalledWith()) // [10]



const ob2Spy = spyOn(ob2, 'test');
ob2.test(2, 3, 5);
console.log(ob2Spy.hasCalled()) // true
console.log(ob2Spy.isCalledWith()) // [10]
