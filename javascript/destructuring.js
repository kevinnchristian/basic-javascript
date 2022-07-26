// ----- Desestrututação ----- //

let array = ["Chuck", "Prison Break", "Virgin River"];
let object = {
  name: "Kevin Christian",
  age: 22,
  profession: "Desenvolvedor",
  series: ["Chuck", "Prison Break", "Virgin River"],
};

const [serie1, serie2, serie3] = array;
let { name, age, profession, series } = object;

console.log("array:");
console.log(serie1);
console.log(serie2);
console.log(serie3);

console.log("");

console.log("objeto:");
console.log(name);
console.log(age);
console.log(profession);
console.log(series);
console.log("");
