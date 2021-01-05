// ----- Methods Arrays 1 ----- //
// -> Methos to manipulate data in an array

let test_push = ['data1', 'data2', 'data3'];
let test_pop = ['data1', 'data2', 'data3'];
let test_shift = ['data1', 'data2', 'data3'];
let test_unshift = ['data1', 'data2', 'data3'];
let test_indexOf = ['data1', 'data2', 'data3'];
let test_lastIndexOf = ['data1', 'data2', 'data1'];
let test_join = ['data1', 'data2', 'data3'];
let test_includes = ['data1', 'data2', 'data3'];

// -> push() Adds a new parameter to the last index of the array
console.log('******** Using push ********');
console.log(test_push);
test_push.push('data4');
console.log(test_push);
console.log('');

// -> pop() Removes the last index and returns the extracted data
console.log('******** Using pop ********');
console.log(test_pop);
let data_removed1 = test_pop.pop();
console.log(test_pop);
console.log(`Data removed: ${data_removed1}`);
console.log('');

// -> shift() Removes the first index and returns the extracted data
console.log('******** Using shift ********');
console.log(test_shift);
let data_removed2 = test_shift.shift();
console.log(test_shift);
console.log(`Data removed: ${data_removed2}`);
console.log('');

// -> unshift() Adds a new parameter to the first index of the array
console.log('******** Using unshift ********');
console.log(test_unshift);
test_unshift.unshift('data0');
console.log(test_unshift);
console.log('');

// -> indexOf() Search from beginning to end
console.log('******** Using indexOf ********');
console.log(test_indexOf);
console.log(test_indexOf.indexOf('data1'));
console.log('');

// -> lastIndexOf() Search from end to beginning
console.log('******** Using lastIndexOf ********');
console.log(test_lastIndexOf);
console.log(test_lastIndexOf.lastIndexOf('data1'));
console.log('');

// -> join() Unifying data from an array into a string
console.log('******** Using join ********');
console.log(test_join);
console.log(test_join.join());
console.log(test_join.join(' - '));
console.log('');

// -> includes() Fetch the parameter, return true for found or fale for not found
console.log('******** Using includes ********');
console.log(test_includes);
console.log(`Found: ${test_includes.includes('data1')}`);
console.log(`Found: ${test_includes.includes('data0')}`);
console.log('');
