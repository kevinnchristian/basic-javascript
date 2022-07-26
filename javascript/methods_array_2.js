// ----- Métodos Arrays 2 ----- //
// -> Métodos para manipular dados em um array
let test_map = [2, 4, 6, 8, 10];
let test_filter = [2, 4, 6, 8, 10];
let test_reduce = [2, 4, 6, 8, 10];
let test_forEach = [2, 4, 6, 8, 10];
let test_find = [2, 4, 6, 8, 10];

// -> map() Executa a função Callback em cada elemento do array, retorna um novo
//          array com a mesma quantidade de índice do array original
console.log("******** Usando map ********");
console.log(test_map);
let double_even_number = test_map.map(function (value) {
  return value * 2;
});
console.log(double_even_number);
console.log("");

// -> filter() Executa a função Callback no array filtrando com base na condição
//             da função Callback, retorna um novo array menor ou vazio
console.log("******** Usando filter ********");
console.log(test_filter);
let filtered_numbers = test_filter.filter(function (value) {
  return value <= 6;
});
console.log(filtered_numbers);
console.log("");

// -> reduce() Executa a função Callback em cada elemento do array, reduz o array
//             à expressão mínima e retorna o resultado de um único valor
console.log("******** Usando reduce ********");
console.log(test_reduce);
let sum_pairs = test_reduce.reduce(function (accumulator, value) {
  return accumulator + value;
});
console.log(sum_pairs);
console.log("");

// -> forEach() Executa a função Callback em um array, iterando por cada elemento
//              do array e não retorna nada
console.log("******** Usando forEach ********");
console.log(test_forEach);
test_forEach.forEach(function (value, index) {
  console.log(`O índice ${index} tem o valor ${value}`);
});
console.log("");

// -> find() Executa a função Callback em um array, retorna o primeiro elemento
//           procurado e se não encontrar, retorna undefined
console.log("******** Usando find ********");
console.log(test_find);
let find_number = test_find.find(function (number) {
  return number == 15;
});
console.log(find_number);
console.log("");
