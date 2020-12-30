// ----- Conditional ----- //
// -> Conditional allows us to execute a block of code whenever a condition is met

let climate = 'cloudy';
let day = 'Wednesday';

// -> if, else and else if
if (climate == 'sunny' && day == 'Sunday') {
  console.log("I'm going to the beach 😎");
} else if (climate == 'cloudy' && day == 'Wednesday') {
  console.log("I'm going to the cine 🎥");
} else {
  console.log("I will stay home 🏡");
}

// -> if ternary
// -> Shortest way to write an if
// -> Written horizontally and in a single line
let if_ternary = day == 'Sunday' ? "I'm going to the beach 😎" : "I will stay home 🏡";
console.log(if_ternary);

// -> switch
// -> For each case, execute a specific block of code
switch (day) {
  case 'Sunday':
    console.log("I'm going to the beach 😎");
    break;
  case 'Wednesday':
    console.log("I'm going to the cine 🎥");
    break;
  default:
    console.log("I will stay home 🏡");
    // There is no need to break because the key does this function to say that
    // it is finished
}