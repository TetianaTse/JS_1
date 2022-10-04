let firstNumber = prompt('Enter any number:');
let secondNumber = prompt('And now enter another number:');
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);
let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
 
alert(firstNumber + '+' + secondNumber + '=' + sum);
alert(firstNumber + '-' + secondNumber + '=' + sub);
alert(firstNumber + '*' + secondNumber + '=' + mult);
alert(firstNumber + '/' + secondNumber +'='+ div);

