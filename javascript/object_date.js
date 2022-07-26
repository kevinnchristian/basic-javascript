// ----- Objeto Date() ----- //
const date = new Date();
const build_date = new Date("2021-01-05");

console.log(date); // data inteira
console.log(date.getDay()); // dia da semana, começa Domingo sendo 0
console.log(date.getMonth()); // o mês também começa em 0
console.log(date.getFullYear()); // ano
console.log(date.getDate()); // dia em que estamos

console.log("");

console.log(build_date);
console.log(build_date.getDay());
console.log(build_date.getMonth());
console.log(build_date.getFullYear());
