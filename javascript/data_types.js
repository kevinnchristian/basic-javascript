// ----- String ----- //
let my_name = 'Kevin';

// ----- Number ----- //
let age = 22;
let weight = 62.00;

// ----- Boolean ----- //
let dayIsRainy = true;

// ----- Not a Number (NaN) ----- //
// Não é um number, nem string e muito menos um boolean
// É um valor que o js não consegue processar
let not_a_number = 'a' * 2;

// ----- Null ----- //
let players = null;

// ----- Undefined ----- //
let spectators;

// ----- Object Literal ----- //
// Temos os atributos e valores
let myCarObject = {
  brand: 'Nissan',
  model: 'GTR',
  serie: 'R35',
  year: 2020,
  turbo: true,
  pressure: 1.2,
  damaged: null,
}

// ----- Array ----- //
// Temos as posições/índices
let myCarArray = ['Nissan', 'GTR', 'R35', 2020, true, 1.2, null];

console.log('*************** Data Types ***************');
console.log(`String: ${my_name}`);
console.log(`Integer: ${age}`);
console.log(`Float: ${weight}`);
console.log(`Boolean: ${dayIsRainy}`);
console.log(`Not a Number (NaN): ${not_a_number}`);
console.log(`Valor nulo/null: ${players}`);
console.log(`Valor não definido/undefined: ${spectators}`);

console.log('');
console.log('Object Literal:'); 
console.log(myCarObject);
console.log(`My car is a ${myCarObject.brand}, model ${myCarObject.model} and year ${myCarObject.year}`);

console.log('');
console.log('Array:'); 
console.log(myCarArray);
console.log(`My car is a ${myCarArray[0]}, model ${myCarArray[1]} and year ${myCarArray[3]}`);