// Functions Types
const add = (n1: number, n2: number) => n1 + n2
const printResult = (num: number): void => { console.log(`Result is ${num}`); return }

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result)
}

printResult(add(6, 6))

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
console.log(combineValues(9, 9))

addAndHandle(30, 30, (result) => {
    console.log(result)
})