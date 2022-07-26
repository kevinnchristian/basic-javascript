var scope_var; // pode ser declarada sem valor atribuído
var scope_var; // pode ser redeclarada
console.log(scope_var); // undefined

// > Teste do Hoisting:
console.log(hoisting);

// > Bloco de Código:
if (10 > 2) {
  var blockScope = 10; // variável passa para fora do escopo do bloco de código
}
console.log(blockScope); // 10
blockScope = 12;
console.log(blockScope); // 12

// > Bloco de Função:
function testFunctionScope() {
  var functionScope = 20;
  return functionScope; // variável não passa para fora do escopo do bloco de função
}
// console.log(functionScope);  // ReferenceError: functionScope is not defined

// > Hosting:
//   - A variável declarada com a palavra reservada "var" sofre o hoisting:
//     levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função)
//     levada ao topo do escopo global (se declaradas fora de uma função)
var hoisting = 30;
console.log(hoisting);
