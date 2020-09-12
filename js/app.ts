// Unions
const combine = (input1: number | string, input2: number | string) => {
    if (typeof input1 === 'number' && typeof input2 === 'number') { return input1 + input2 } else { return input1.toString() + input2.toString() }
}

const combinedAges = combine(30, 30)
console.log(combinedAges)

const combinedNames = combine('100', '100')
console.log(combinedNames)