// ------------------------------- var ------------------------------- //

var escopo_var; // pode ser declarada sem valor atribuída a ela
var escopo_var; // pode ser redeclarada
console.log(escopo_var);
console.log(`A variável var sofre hoisting e tem seu valor como: ** ${var_hoisting} **`);

// -> Bloco de Código:
if (10 > 2) {
  var var_blockscope = 10; // a variável passa para fora
}
var_blockscope = 12;
console.log(var_blockscope);

// -> Bloco de Função:
function testVarFunctionScope () {
  var var_functionscope = 20;
  return var_functionscope; // a variável não passa para fora
}
//console.log(var_functionscope);
//  var_functionscope sofre Function Scope, quando executar o código aparece 
//  o seguinte error: ReferenceError: var_functionscope is not defined

// -> Hoisting:
var var_hoisting = 30;
console.log(var_hoisting);
