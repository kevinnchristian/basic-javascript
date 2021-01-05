// ----- for in and for of ----- //

let people_object = {
  name: 'Kevin Christian',
  age: 22,
  profession: 'Desenvolvedor'
}

let people_array = ['Kevin Christian', 22, 'Desenolvedor'];

// -> for in - works on object and array
console.log('******** for in ********');
console.log('object:');
for (let characteristic in people_object) {
  console.log(people_object[characteristic]);
}
console.log('');
console.log('array:');
for (let characteristic in people_array) {
  console.log(people_array[characteristic]);
}
console.log('');

// -> for of - can iterate over strings, he already knows that he has to go through the entire array
console.log('******** for of ********');
console.log('array:');
for (let characteristic of people_array) {
  console.log(characteristic);
}