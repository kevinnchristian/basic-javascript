// ----- Find data type ----- //
let dataOne = '1998';
let dataTwo = '1998';
let dataThree = '123abc';
let dataFour = '123abc';
let dataFive = 22;
let dataSix = 20;

let dataOne_type = typeof(dataOne);
let dataTwo_type = typeof(dataTwo);
let dataFive_type = typeof(dataFive);
let dataSix_type = typeof(dataSix);

console.log(`Before parseInt: ${dataOne_type}`);
console.log(`Before Number: ${dataTwo_type}`);
console.log(`Before String: ${dataFive_type}`);
console.log(`Before toString: ${dataSix_type}`);
console.log('');

// ----- Native js functions for data coversion ----- //
// -> parseInt():
dataOne_type = typeof(parseInt(dataOne));
console.log(`After parseInt: ${dataOne_type}`);

// -> Number():
dataTwo_type = typeof(Number(dataTwo));
console.log(`After Number: ${dataTwo_type}`);

// -> String():
dataFive_type = typeof(String(dataFive));
console.log(`After String: ${dataFive_type}`);

// -> toString():
dataSix_type = typeof(dataSix.toString());
console.log(`After toString: ${dataSix_type}`);

console.log('');

// -> Diferença entre parseInt e Number
console.log('Difference between parseInt and Number:')
console.log(`parseInt: ${parseInt(dataThree)}`);
console.log(`Number: ${Number(dataFour)}`);