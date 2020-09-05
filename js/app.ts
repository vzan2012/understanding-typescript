const num1 = document.querySelector('#num1')! as HTMLInputElement
const num2 = document.querySelector('#num2')! as HTMLInputElement
const button = document.querySelector('button')

const add = (input1: number, input2: number): number => input1 + input2

button.addEventListener('click', () => console.log(add(+ num1.value, + num2.value)));