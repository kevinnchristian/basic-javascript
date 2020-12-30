// ----- Cycles ----- //
// -> Repeat code block
// -> Some moment of the code execution has to be false, in order not to happen an infinite loop

let multiplicador = 5;
let multiplicando_while = 0;
let multiplicando_do_while = 0;

// -> for
console.log('******** Using for ********');
console.log(`***** Number table: ${multiplicador} *****`);
for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
  let resultado = multiplicando * multiplicador;
  console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);
}
console.log('');


// -> while
console.log('******* Using while *******');
console.log(`***** Number table: ${multiplicador} *****`);
while (multiplicando_while <= 10) {
  console.log(`${multiplicando_while} x ${multiplicador} = ${multiplicando_while * multiplicador}`);
  multiplicando_while++;
}
console.log('');


// -> do while
console.log('****** Using do while *****');
console.log(`***** Number table: ${multiplicador} *****`);
do {
  console.log(`${multiplicando_do_while} x ${multiplicador} = ${multiplicando_do_while * multiplicador}`);
  multiplicando_do_while++;
} while (multiplicando_do_while <= 10);
console.log('');