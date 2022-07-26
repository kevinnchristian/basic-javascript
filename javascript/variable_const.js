const scope_const = "value"; // NÃO pode ser declarada sem valor atribuído
console.log(scope_const);

// > Teste do Hoisting:
// console.log(hoisting);  // ReferenceError: Cannot access 'hoisting' before initialization

// > Bloco de Código:
if (10 > 2) {
  const blockScope = 10; // variável passa para fora
}
// console.log(blockScope);  // ReferenceError: blockScope is not defined
blockScope = 12;
console.log(blockScope);

// > Bloco de Função:
function testLetFunctionScope() {
  const functionScope = 20;
  return functionScope; // a variável não passa para fora
}
// console.log(functionScope);  // ReferenceError: functionScope is not defined

// > Hosting:
const hoisting = 30; // não sofre hoisting, tem que ser declarado na ordem
console.log(hoisting);
