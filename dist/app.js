"use strict";
// Generics
// const names: Array<string> = ['']  // string[]
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve('Done !!!')
//         }, 2000)
//     }
//     catch (e) {
//         reject(e)
//     }
// })
// promise.then((data) => {
//     console.log(data)
// })
// Creating Generic functions 
// Merging of two objects
// Adding the constraints
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const mergedObj = merge({ name: 'vzan2012', hobbies: ['Coding'] }, { age: 100 })
const mergedObj = merge({ name: 'vzan2012', hobbies: ['Coding'] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
// Another Generic function 
function countAndDescribe(element) {
    let describeTxt = 'No Value !!!';
    if (element.length === 1) {
        describeTxt = 'Has 1 element';
    }
    else if (element.length > 1) {
        describeTxt = `Has ${element.length} elements`;
    }
    return [element, describeTxt];
}
console.log(countAndDescribe('Hello Sai'));
console.log(countAndDescribe(['Reading', 'Coding']));
console.log(countAndDescribe([]));
// keyOf - Constraint 
function extractAndConvert(obj, key) {
    return `Value of ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Sai' }, 'name'));
//# sourceMappingURL=app.js.map