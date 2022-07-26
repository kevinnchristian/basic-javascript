// ----- for in e for of ----- //

let people_object = {
  name: "Kevin Christian",
  age: 22,
  profession: "Desenvolvedor",
};

let people_array = ["Kevin Christian", 22, "Desenvolvedor"];

// -> for in - funciona em objeto e array
console.log("******** for in ********");
console.log("objeto:");
for (let characteristic in people_object) {
  console.log(people_object[characteristic]);
}
console.log("");
console.log("array:");
for (let characteristic in people_array) {
  console.log(people_array[characteristic]);
}
console.log("");

// -> for of - pode iterar sobre strings, ele já sabe que precisa percorrer todo o array
console.log("******** for of ********");
console.log("array:");
for (let characteristic of people_array) {
  console.log(characteristic);
}
