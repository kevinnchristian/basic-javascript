// ----- Ciclos ----- //
// -> Repetir bloco de código
// -> Em algum momento da execução do código tem que ser falso, para não acontecer um loop infinito

let multiplicador = 5;
let multiplicando_while = 0;
let multiplicando_do_while = 0;

// -> for
console.log("******** Usando for ********");
console.log(`***** Tabela do número: ${multiplicador} *****`);
for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
  let resultado = multiplicando * multiplicador;
  console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
}
console.log("");

// -> while
console.log("******* Usando while *******");
console.log(`***** Tabela do número: ${multiplicador} *****`);
while (multiplicando_while <= 10) {
  console.log(
    `${multiplicando_while} x ${multiplicador} = ${
      multiplicando_while * multiplicador
    }`
  );
  multiplicando_while++;
}
console.log("");

// -> do while
console.log("****** Usando 'do while' *****");
console.log(`***** Tabela do número: ${multiplicador} *****`);
do {
  console.log(
    `${multiplicando_do_while} x ${multiplicador} = ${
      multiplicando_do_while * multiplicador
    }`
  );
  multiplicando_do_while++;
} while (multiplicando_do_while <= 10);
console.log("");
