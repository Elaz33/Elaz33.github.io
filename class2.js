/*jshint esversion: 6 */
/* global console */
/*jshint esversion:8*/
(async function (){
    "use strict";

    function doSomethingOne(n, callback,failureCallback){
      callback(n + 1);
    }

    function doSomethingTwo(n, callback, failureCallback){
        callback(n + 2);
    }

    function doSomethingThree(n, callback, failureCallback) {
        callback(n + 3);
        failureCallback(n + 3);
    }

    doSomethingOne(2,r =>{
        doSomethingTwo(r,r2 =>{
            doSomethingThree(r2,r3 =>{
                console.log(r3);
            }, e => console.error('3',e));
        }, e => console.error('2', e));
    }, e => console.error('3', e));

    const myPromise = new Promise(resolve,reject)
})();