// Unions & Literal Types
var combine = function (input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }
};
var combinedAges = combine(30, 30, 'as-number');
console.log(combinedAges);
var combineStringAges = combine('100', '100', 'as-number');
console.log(combineStringAges);
var combinedNames = combine('one', 'two', 'as-string');
console.log(combinedNames);
