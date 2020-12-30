// ----- Functions ----- //
// -> Sequence of actions perfomed whenever necessary
// -> Two ways to declare a function:
//    - Express function, assigned to a variable
//    - Declared function, not assigned to a variable and has a proper name

// -> This type of function is available regardless of the order of the script 
function double_number_declared(number) {
  return number * 2;
}

// -> This type of function is available after its declaration, following the script order
const double_number_express = function (number) {
  return number * 2;
}

// Express
console.log(double_number_express(64));

// Declared
console.log(double_number_declared(64));