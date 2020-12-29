console.log('// ------------------------------ const ------------------------------ //');
// ------------------------------ const ------------------------------ //
const escopo_const = 'value'; // não pode ser declarada sem valor atribuída a ela. SyntaxError: Missing initializer in const declaration
// const escopo_const; não pode ser redeclarada, SyntaxError: Identifier 'escopo_const' has already been declared.
console.log(escopo_const);
// console.log(const_hoisting); ReferenceError: Cannot access 'const_hoisting' before initialization

// -> Bloco de Código:
if (10 > 2) {
  const const_blockscope = 10; // a variável passa para fora
}
const_blockscope = 12;
console.log(const_blockscope);

// -> Bloco de Função:
function testLetFunctionScope () {
  const const_functionscope = 20;
  return const_functionscope; // a variável não passa para fora
}
// console.log(const_functionscope); ReferenceError: const_functionscope is not defined

// -> Hoisting:
const const_hoisting = 30; // não sofre hoisting, tem que ser declarado na ordem
console.log(const_hoisting);
