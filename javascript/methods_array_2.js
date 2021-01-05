// ----- Methods Arrays 2 ----- //
// -> Methos to manipulate data in an array

let test_map = [2, 4, 6, 8, 10];
let test_filter = [2, 4, 6, 8, 10];
let test_reduce = [2, 4, 6, 8, 10];
let test_forEach = [2, 4, 6, 8, 10];
let test_find = [2, 4, 6, 8, 10];

// -> map() Executes the Callback function on each element of the array, returns 
//          a new array with the same amount of index as the original array 
console.log('******** Using map ********');
console.log(test_map);
let double_even_number = test_map.map(function(value) {
  return value * 2;
});
console.log(double_even_number);
console.log('');

// -> filter() Executes the Callback function on the array filtering based on the
//             condition of the Callback function, returns a new smaller or empty array
console.log('******** Using filter ********');
console.log(test_filter);
let filtered_numbers = test_filter.filter(function(value) {
  return value <= 6;
});
console.log(filtered_numbers);
console.log('');

// -> reduce() Executes the Callback function on each element of the array, reduces
//             the array to the minimum expression and returns the result of a single value
console.log('******** Using reduce ********');
console.log(test_reduce);
let sum_pairs = test_reduce.reduce(function(accumulator, value) {
  return accumulator + value;
});
console.log(sum_pairs);
console.log('');

// -> forEach() Executes the Callback function on an array, iterating through each
//              element of the array and returns nothing
console.log('******** Using forEach ********');
console.log(test_forEach);
test_forEach.forEach(function(value, index) {
  console.log(`The index ${index} has the value ${value}`);
});
console.log('');

// -> find() Executes the Callback function in an array, returns the first element
//           searched for and if not found, returns undefined
console.log('******** Using find ********');
console.log(test_find);
let find_number = test_find.find(function(number) {
  return number == 15;
});
console.log(find_number);
console.log('');