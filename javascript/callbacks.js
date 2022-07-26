// ----- Callback ----- //
// -> Não passe a função com parênteses, apenas o nome dela
const sum = (numberA, numberB) => numberA + numberB;
const function_father_calc = (numberA, numberB, operation) =>
  operation(numberA, numberB);

const full_name = (name, surname) => name + " " + surname;
const salute = (name, surname, callback) => {
  return `Olá ${callback(name, surname)}!`;
};

console.log("Usando Callback:");
console.log(function_father_calc(10, 20, sum));
console.log("");

console.log("Declarando a função callback como parâmetro:");
console.log(
  function_father_calc(10, 20, (numberA, numberB) => numberA - numberB)
);
console.log("");

console.log("Usando a função callback full_name como parâmetro:");
console.log(salute("Kevin", "Christian", full_name));
console.log("");
