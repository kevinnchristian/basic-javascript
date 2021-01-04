// ----- Callback ----- //
// -> Do not pass the function with parenthesis, just her name
const sum = (numberA, numberB) => numberA + numberB;
const function_father_calc = (numberA, numberB, operation) => operation(numberA, numberB);

const full_name = (name, surname) => name + ' ' + surname;
const salute = (name, surname, callback) => {
  return `Hello ${callback(name, surname)}!`;
};

console.log('Using Callback:');
console.log(function_father_calc(10, 20, sum));
console.log('');

console.log('Declaring the function callback within the parameter:');
console.log(function_father_calc(10, 20, (numberA, numberB) => numberA - numberB));
console.log('');

console.log('Using Callback Full Name:');
console.log(salute('Kevin', 'Christian', full_name));
console.log('');