// ----- JSON ----- //
// -> Simple text format, easily shared and interpreted by several programming languages
// -> Javascript delivers native object that dows not offer two fantastic methods

let people = {
  name: 'Kevin',
  age: 22,
  height: 1.74
}

let bakery = ['bread', 'ham', 'cheese'];

// -> Method JSON.stringify()
console.log('Convert object to json');
let transform_in_json = JSON.stringify(people);
console.log(transform_in_json);
console.log('');

// -> Method JSON.parse()
console.log('Convert json to object');
let transform_in_object = JSON.parse(transform_in_json);
console.log(transform_in_object);
console.log('');

// -> Method JSON.stringify in array()
console.log('Convert array to json');
let array_in_json = JSON.stringify(bakery);
console.log(array_in_json);  // when trying to access position now as json,
console.log('');             // it will return the string characters

// -> Method JSON.parse() in array
console.log('Convert json to array');
let json_in_array = JSON.parse(array_in_json);
console.log(json_in_array);
console.log('');