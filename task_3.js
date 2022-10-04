let firstDigit = prompt('Now let\'s calculate the arithmetic mean of three numbers! Enter the first number:');
let secondDigit = prompt('Enter second number:');
let thirdDigit = prompt('Enter the third number:');

firstDigit = parseInt(firstDigit);
secondDigit = parseInt(secondDigit);
thirdDigit = parseInt(thirdDigit);

let mean = (firstDigit + secondDigit + thirdDigit) / 3;


alert('The arithmetic mean is ' + mean);
