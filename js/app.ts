// Aliases or Custom Types 
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string'

// Unions & Literal Types
const combine = (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }
}

const combinedAges = combine(30, 30, 'as-number')
console.log(combinedAges)

const combineStringAges = combine('100', '100', 'as-number');
console.log(combineStringAges)

const combinedNames = combine('one', 'two', 'as-string')
console.log(combinedNames)