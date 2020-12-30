// ----- Methods String ----- //
// -> Are methods to use in strings

let string = 'Kevin Christian';
let string_with_space = '    Eu me tornei um dev!    ';

// -> .length - return the length of the string counting the spaces as well
console.log(`Total string length: ${string.length}`);
console.log('');

// -> .indexOf() - searches from beginning to end, and returns to a position before the desired segment
console.log(`Get a specific section: ${string.indexOf('vin')}`);
console.log(`Get a specific section: ${string.indexOf('qualquer')}`); // -1 word does not exist
console.log('');

// -> .slice() - need to pass the beginning and end of the word
console.log(`Take the word according to the start and end parameter: ${string.slice(0,5)}`);
console.log('');

// -> .trim() - remove spaces at the beginning or end of the word
console.log(`Remove spaces: ${string_with_space.trim()}`);
console.log('');


// -> .split()
console.log('Transform string in one array:');
console.log(string.split(" "));
console.log(string.split("n"));
console.log('');

// -> .replace()
console.log(`Exchange words: ${string.replace('Christian', 'Ribeiro')}`);
console.log('');