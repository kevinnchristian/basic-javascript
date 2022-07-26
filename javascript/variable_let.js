let scope_let; // pode ser declarada sem valor atribuído
console.log(scope_let);

// > Teste do Hoisting:
// console.log(hoisting);  // ReferenceError: Cannot access 'hoisting' before initialization

// > Bloco de Código:
if (10 > 2) {
  let blockScope = 10; // variável passa para fora
}
// console.log(blockScope);  // ReferenceError: blockScope is not defined
blockScope = 12;
console.log(blockScope); // 12

// > Bloco de Função:
function testFunctionScope() {
  let functionScope = 20;
  return functionScope; // variável não passa para fora
}
// console.log(functionScope);  // ReferenceError: functionScope is not defined

// > Hosting:
let hoisting = 30; // não sofre hoisting, tem que ser declarado na ordem
console.log(hoisting);
