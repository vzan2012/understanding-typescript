var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var button = document.querySelector('button');
var add = function (input1, input2) { return input1 + input2; };
button.addEventListener('click', function () { return console.log(add(+num1.value, +num2.value)); });
