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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 200] = "READ_ONLY";
    Role[Role["AUTHOR"] = 300] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Delta',
    age: 36,
    hobbies: ['Exploring', 'Reading', 'Walking'],
    role: Role.ADMIN
};
/**
 * Arrays
 */
var favoriteActivites;
favoriteActivites = ['Cooking'];
console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
