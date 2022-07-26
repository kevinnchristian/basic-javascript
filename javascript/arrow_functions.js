// ----- Arrow Functions ----- //

const number = (number1) => console.log(`Número é = ${number1}`);

const sum = (number1, number2) => console.log(`Soma = ${number1 + number2}`);

const division = (number1) => {
  console.log(`Recebi o numero = ${number1}`);
  let result = number1 % 2;
  if (result == 0) {
    console.log("Este número é par");
  } else {
    console.log("Este número é ímpar");
  }
};

number(50);
sum(50, 50);
division(50);
