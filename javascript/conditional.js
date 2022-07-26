// ----- Condicional ----- //
// -> Condicional nos permite executar um bloco de código sempre que uma condição for atendida

let climate = "cloudy";
let day = "Wednesday";

// -> if, else e else if
if (climate == "sunny" && day == "Sunday") {
  console.log("I'm going to the beach 😎");
} else if (climate == "cloudy" && day == "Wednesday") {
  console.log("I'm going to the cine 🎥");
} else {
  console.log("I will stay home 🏡");
}

// -> if ternário
// -> Maneira mais curta de escrever um if
// -> Escrito horizontalmente e em uma única linha
let if_ternary =
  day == "Sunday" ? "I'm going to the beach 😎" : "I will stay home 🏡";
console.log(if_ternary);

// -> switch
// -> Para cada caso, execute um bloco de código específico
switch (day) {
  case "Sunday":
    console.log("I'm going to the beach 😎");
    break;
  case "Wednesday":
    console.log("I'm going to the cine 🎥");
    break;
  default:
    console.log("I will stay home 🏡");
  // Não há necessidade do "break", o default só é executado se nenhum dos outros
  // casos não for executado.
}
