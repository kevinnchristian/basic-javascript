// ----- Closures ----- //
// -> They are functions that reside within another function
// -> Optimize our script performance
// -> After executing the container function, the functions that are inside it cease to
//    exist, thus freeing execution memory for other procedures

function father_our_container(name) {
  let message = 'Hello, welcome';

  function child() {
    return `${message} ${name}`;
  }

  return child();
}

console.log(father_our_container('Kevin'));