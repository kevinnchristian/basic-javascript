// ----- Asynchronism ----- //
// -> Javascript is a single threaded language, and to deal with it it uses task stack
// -> Single threaded - One thing at a time
// -> Javascript uses task queue for the function to do what must be done in order of arrival
// -> Event loop - Detects when task stack is empty, and after that starts running task from the task queue

function alarm_one() {
  return 'Time to wake up is 08:00';
}

function alarm_two() {
  return "It's close to your time to wake up is 7:50";
}

setTimeout(function() {
  console.log('10 minutes passed...');
  console.log(alarm_one());
}, 2000);
console.log(alarm_two());
