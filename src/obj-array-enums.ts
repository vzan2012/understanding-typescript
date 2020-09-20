/**
 * Object Types
 */
// const person = {
//     name: 'Delta',
//     age: 36
// }

// const person: object = {
//     name: 'Delta',
//     age: 36
// }

// const person: { name: string; age: number } = {
//     name: 'Delta',
//     age: 36
// }


/**
 * Tuples
 */
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Delta',
//     age: 36,
//     hobbies: ['Exploring', 'Reading', 'Walking'],
//     role: [2, 'author'] //Tuples
// }

// person.role.push('admin');
// person.role[1] = 100

// person.role = [0, 'One']

/**
 * ENums
 */

enum Role { ADMIN = 'ADMIN', READ_ONLY = 200, AUTHOR = 300 };

const person = {
    name: 'Delta',
    age: 36,
    hobbies: ['Exploring', 'Reading', 'Walking'],
    role: Role.ADMIN
}

/**
 * Arrays
 */
let favoriteActivites: string[];
favoriteActivites = ['Cooking']

console.log(person)
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby)
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}

