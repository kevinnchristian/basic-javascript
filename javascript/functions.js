// ----- Funções ----- //
// -> Sequência de ações realizadas sempre que necessário
// -> Duas maneiras de declarar uma função:
//    - Função expressa, atribuída a uma variável
//    - Função declarada, não atribuída a uma variável e tem um nome próprio

// -> Este tipo de função está disponível independentemente da ordem do script
function double_number_declared(number) {
  return number * 2;
}

// -> Este tipo de função está disponível após sua declaração, seguindo a ordem do script
const double_number_express = function (number) {
  return number * 2;
};

// Expressa
console.log(double_number_express(64));

// Declarada
console.log(double_number_declared(64));
