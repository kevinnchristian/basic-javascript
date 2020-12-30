// ----- Spread operator / Rest parameter ----- //
// -> Spread operator ...
//      - In array: [...variable1, ...variable2]
//      - In object literal: { key1: 'value1', key2: 'value2',...otherObject }
// -> Rest parameter
//      - In function: function name_function (...paramns) {}, return array


// -> Spread operator array:
let array_fruitOne = ['maça', 'banana', 'uva'];
let array_fruitTwo = ['laranja', 'abacate', 'goiaba'];
let array_fruitComplete = [...array_fruitOne, ...array_fruitTwo];
console.log('Spread operator in array:');
console.log(array_fruitComplete);
console.log('');

// -> Spread operator object:
let object_curso = {
  name_curso: 'Fullstack',
  ano: 2020
};
let object_student1 = {
  name: 'Bruno',
  age: 20,
  ...object_curso
};
let object_student2 = {
  name: 'Carla',
  age: 22,
  ...object_curso
};
console.log('Spread operator in object:');
console.log(object_student1);
console.log(object_student2);
console.log('');


// -> Rest parameter
function letters (...paramns) {
  console.log(paramns);
}
console.log('Spread operator in function:');
letters('a', 'b', 'c', 'd');