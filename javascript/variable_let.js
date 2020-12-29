console.log('// ------------------------------- let ------------------------------- //');
// ------------------------------- let ------------------------------- //
let escopo_let; // pode ser declarada sem valor atribuída a ela
// let escopo_let; não pode ser redeclarada, SyntaxError: Identifier 'escopo_let' has already been declared.
console.log(escopo_let);
// console.log(let_hoisting); ReferenceError: Cannot access 'let_hoisting' before initialization

// -> Bloco de Código:
if (10 > 2) {
  let let_blockscope = 10; // a variável passa para fora
}
let_blockscope = 12;
console.log(let_blockscope);

// -> Bloco de Função:
function testLetFunctionScope () {
  let let_functionscope = 20;
  return let_functionscope; // a variável não passa para fora
}
// console.log(var_functionscope); ReferenceError: var_functionscope is not defined

// -> Hoisting:
let let_hoisting = 30; // não sofre hoisting, tem que ser declarado na ordem
console.log(let_hoisting);
