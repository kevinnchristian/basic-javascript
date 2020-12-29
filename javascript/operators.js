// ----- Assignment Operator  ----- //
let age = 22;                 // Assing the number 22 to age

// ----- Concatenation Operator  ----- //
let name = 'Kevin';
let surname = 'Christian';
let full_name = name + ' ' + surname;  // -> Kevin Christian

// ----- Arithmetic Operator  ----- //
let sum = 10 + 15;            // -> 25
let subtraction = 10 - 15;    // -> -5
let multiplication = 10 * 15; // -> 150
let division = 15 / 10;       // -> 1.5
let rest = 15 % 2             // -> módulo, 1
sum++                         // -> increment, sum + 1 = 26
sum--                         // -> decrement, sum - 1 = 25

// ----- Simple Comparison Operator  ----- //
let equality = 10 == 15;      // -> false
let inequality = 10 != 15;    // -> true

// ----- Strict Comparison Operator  ----- //
let strict_equality = 10 === '10';    // -> false
let strict_inequality = 10 !== 15;    // -> true

// ----- Comparison Operator  ----- //
let comparisonOne = 15 > 15;          // -> false
let comparisonTwo = 15 >= 15;         // -> true
let comparisonThree = 10 < 15;        // -> true
let comparisonFour = 10 <= 15;        // -> true

// ----- Logical Operator  ----- //
let and = (10 > 15) && (10 != 20);    // -> false
let or = (12 % 4 == 0) || (12 != 24); // -> true
let not = !(10 > 15)                  // -> true
