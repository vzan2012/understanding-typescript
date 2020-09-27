// Next-gen Scripts


// let and const
const userNameUsed = 'vzan2012';
let userAge = 102;
// userName = 'other';
console.log(userNameUsed);
console.log(userAge)


// Arrow function 
const addition = (a: number, b: number = 5) => a + b;
// A default parameter should be used at the last 
// console.log(add(5, 5))
const printOut = (output: string | number) => console.log(output);
printOut(addition(5, 7))
printOut(addition(5))

const buttonClick = document.querySelector('button');
buttonClick?.addEventListener('click', event => console.log(event))


// Spread Operator 
const hobbies = ['Reading', 'Playing'];
const activeHobbies = ['Sports'];
activeHobbies.push(...hobbies)
console.log(activeHobbies);

const person = { userName: 'vzan2012', age: 102 }
const replicateUser = { ...person };
console.log(`Person Object: `)
console.log(person);
console.log(`Replicated User Object: `)
console.log(replicateUser);


// REST parameters 
// const add_N_numbers = (...nums: number[]): number => {
//     return nums.reduce((currValue, resultValue) => {
//         return currValue + resultValue
//     }, 0)
// };
const add_N_numbers = (...nums: number[]) => nums.reduce((currValue, resultValue) => currValue + resultValue, 0)
console.log(add_N_numbers(4, 5, 6, 7, 8, 9))


// Array and Object Destructuring
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies
console.log(hobby1, hobby2, remainingHobbies);
const { userName, age } = replicateUser
console.log(userName, age)