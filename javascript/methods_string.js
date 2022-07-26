// ----- Métodos String ----- //
// -> São métodos para usar em strings

let string = "Kevin Christian";
let string_with_space = "    Eu me tornei um dev!    ";

// -> .length - retorna o comprimento da string contando os espaços também
console.log(`Comprimento total da string: ${string.length}`);
console.log("");

// -> .indexOf() - pesquisa do início ao fim e retorna a uma posição anterior a string desejada
console.log(`Obtenha uma string específica: ${string.indexOf("vin")}`);
console.log(`Obtenha uma string específica: ${string.indexOf("qualquer")}`); // -1 string não existe
console.log("");

// -> .slice() - precisa passar o início e o fim da string
console.log(
  `Pegue a palavra de acordo com o parâmetro inicial e final: ${string.slice(
    0,
    5
  )}`
);
console.log("");

// -> .trim() - remover espaços no início ou no final da string
console.log(`Remover espaços: ${string_with_space.trim()}`);
console.log("");

// -> .split()
console.log("Transformar string em um array:");
console.log(string.split(" "));
console.log(string.split("n"));
console.log("");

// -> .replace()
console.log(`Trocar strings: ${string.replace("Christian", "Ribeiro")}`);
console.log("");
