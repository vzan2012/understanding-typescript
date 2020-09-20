// const num1 = document.querySelector('#num1')! as HTMLInputElement
// const num2 = document.querySelector('#num2')! as HTMLInputElement
// const button = document.querySelector('button')

// const add = (input1: number, input2: number): number => input1 + input2

// button.addEventListener('click', () => console.log(add(+ num1.value, + num2.value)));

// Example (C 14)
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result
    }
};

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

add(number1, number2, printResult, resultPhrase);
