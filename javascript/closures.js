// ----- Closures ----- //
// -> São funções que operam dentro de outra função
// -> Otimizar o desempenho do nosso script
// -> Após executar a função container, as funções que estão dentro dela deixam de existir,
//    liberando memória de execução para outros procedimentos

function father_our_container(name) {
  let message = "Olá, seja bem-vindo";

  function child() {
    return `${message} ${name}`;
  }

  return child();
}

console.log(father_our_container("Kevin"));
