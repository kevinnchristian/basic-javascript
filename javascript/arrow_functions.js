// ----- Arrow Functions ----- //

const number = number1 => console.log(`Number is = ${number1 }`);

const sum = (number1, number2) => console.log(`Sum = ${number1 + number2}`);

const division = number1 => {
  console.log(`I received the number = ${number1}`);
  let result = number1 % 2;
  if (result == 0) {
    console.log('This number is even');
  } else {
    console.log('This number is odd');
  }
}  

number(50);
sum(50, 50);
division(50);