const num1 = document.querySelector('#num1')! as HTMLInputElement
const num2 = document.querySelector('#num2')! as HTMLInputElement
const button = document.querySelector('button')

const add = (num1: number, num2: number): number => num1 + num2

button.addEventListener('click', () => console.log(add(+ num1.value, + num2.value)));