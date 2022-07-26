// ----- JSON ----- //
// -> Formato de texto simples, facilmente compartilhado e interpretado por várias linguagens de programação
// -> Javascript entrega objeto nativo que oferece dois métodos fantásticos

let people = {
  name: "Kevin",
  age: 22,
  height: 1.74,
};

let bakery = ["bread", "ham", "cheese"];

// -> Método JSON.stringify()
console.log("Converter objeto em json");
let transform_in_json = JSON.stringify(people);
console.log(transform_in_json);
console.log("");

// -> Método JSON.parse()
console.log("Converter json em objeto");
let transform_in_object = JSON.parse(transform_in_json);
console.log(transform_in_object);
console.log("");

// -> Método JSON.stringify no array()
console.log("Converter array para json");
let array_in_json = JSON.stringify(bakery);
console.log(array_in_json);
console.log("");

// -> Método JSON.parse() no array
console.log("Converter json em array");
let json_in_array = JSON.parse(array_in_json);
console.log(json_in_array);
console.log("");
