// ----- String ----- //
let stringType = "Kevin";

// ----- Number ----- //
let numberType = 22;
let numberType2 = 62.0;

// ----- Boolean ----- //
let booleanType = true;

// ----- Not a Number (NaN) ----- //
// Não é um number, nem string e muito menos um boolean
// É um valor que o js não consegue processar
let nanType = "a" * 2;

// ----- Null ----- //
let nullType = null;

// ----- Undefined ----- //
let undefinedType;

// ----- Object Literal ----- //
// Temos os atributos e valores
let objectLiteralType = {
  a: "1",
  b: 2,
  c: true,
  d: {},
  e: [],
};

// ----- Array ----- //
// Temos as posições/índices
let arrayType = ["String", 1, 1.0, true, null, undefined, {}, []];

console.log("*************** Data Types ***************");
console.log(`String: ${stringType}`);
console.log(`Integer: ${numberType}`);
console.log(`Float: ${numberType2}`);
console.log(`Boolean: ${booleanType}`);
console.log(`Not a Number (NaN): ${nanType}`);
console.log(`Valor nulo/null: ${nullType}`);
console.log(`Valor não definido/undefined: ${undefinedType}`);

console.log("");
console.log("Object Literal:");
console.log(objectLiteralType);
console.log(
  `${objectLiteralType.a} - ${objectLiteralType.b} - ${objectLiteralType.c}`
);

console.log("");
console.log("Array:");
console.log(arrayType);
console.log(`${arrayType[0]} - ${arrayType[1]} - ${arrayType[3]}`);
