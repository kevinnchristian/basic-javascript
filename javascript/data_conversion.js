// ----- Identificar tipo de dados ----- //
let dataOne = "1998";
let dataTwo = "1998";
let dataThree = "123abc";
let dataFour = "123abc";
let dataFive = 22;
let dataSix = 20;

let dataOne_type = typeof dataOne;
let dataTwo_type = typeof dataTwo;
let dataFive_type = typeof dataFive;
let dataSix_type = typeof dataSix;

console.log(`Antes - parseInt: ${dataOne_type}`);
console.log(`Antes - Number: ${dataTwo_type}`);
console.log(`Antes - String: ${dataFive_type}`);
console.log(`Antes - toString: ${dataSix_type}`);
console.log("");

// ----- Funções nativas JS para converter dados ----- //
// -> parseInt():
dataOne_type = typeof parseInt(dataOne);

// -> Number():
dataTwo_type = typeof Number(dataTwo);

// -> String():
dataFive_type = typeof String(dataFive);

// -> toString():
dataSix_type = typeof dataSix.toString();

console.log(`Depois - parseInt: ${dataOne_type}`);
console.log(`Depois - Number: ${dataTwo_type}`);
console.log(`Depois - String: ${dataFive_type}`);
console.log(`Depois - toString: ${dataSix_type}`);
console.log("");

// -> Diferença entre parseInt e Number
console.log("Diferença entre parseInt e Number:");
console.log(`parseInt: ${parseInt(dataFour)}`);
console.log(`Number: ${Number(dataFour)}`);
