// ----- Métodos Arrays 1 ----- //
// -> Métodos para manipular dados em um array

let test_push = ["data1", "data2", "data3"];
let test_pop = ["data1", "data2", "data3"];
let test_shift = ["data1", "data2", "data3"];
let test_unshift = ["data1", "data2", "data3"];
let test_indexOf = ["data1", "data2", "data3"];
let test_lastIndexOf = ["data1", "data2", "data1"];
let test_join = ["data1", "data2", "data3"];
let test_includes = ["data1", "data2", "data3"];

// -> push() - adiciona um novo parâmetro ao último índice do array
console.log("******** Usando push ********");
console.log(test_push);
test_push.push("data4");
console.log(test_push);
console.log("");

// -> pop() - remover o último índice e retorna os dados extraídos
console.log("******** Usando pop ********");
console.log(test_pop);
let data_removed1 = test_pop.pop();
console.log(test_pop);
console.log(`Dado removido: ${data_removed1}`);
console.log("");

// -> shift() - remover o primeiro índice e retorna os dados extraídos
console.log("******** Usando shift ********");
console.log(test_shift);
let data_removed2 = test_shift.shift();
console.log(test_shift);
console.log(`Dado removido: ${data_removed2}`);
console.log("");

// -> unshift() - adicionar um novo parâmetro ao primeiro índice do array
console.log("******** Usando unshift ********");
console.log(test_unshift);
test_unshift.unshift("data0");
console.log(test_unshift);
console.log("");

// -> indexOf() - pesquisar do início ao fim do array
console.log("******** Usando indexOf ********");
console.log(test_indexOf);
console.log(test_indexOf.indexOf("data1"));
console.log("");

// -> lastIndexOf() - pesquise do fim ao começo do array
console.log("******** Usando lastIndexOf ********");
console.log(test_lastIndexOf);
console.log(test_lastIndexOf.lastIndexOf("data1"));
console.log("");

// -> join() - unificar dados de um array em uma string
console.log("******** Usando join ********");
console.log(test_join);
console.log(test_join.join());
console.log(test_join.join(" - "));
console.log("");

// -> includes() - buscar o parâmetro, retorne true para encontrado ou fale para não encontrado
console.log("******** Usando includes ********");
console.log(test_includes);
console.log(`Encontrado: ${test_includes.includes("data1")}`);
console.log(`Encontrado: ${test_includes.includes("data0")}`);
console.log("");
