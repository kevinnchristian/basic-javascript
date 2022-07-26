// ----- Assincronismo ----- //
// -> Javascript é uma linguagem de encadeamento único, e para lidar com isso ele usa a pilha de tarefas
// -> Single threaded - Uma coisa de cada vez
// -> Javascript usa fila de tarefas para a função fazer o que deve ser feito em ordem de chegada
// -> Event loop - Detecta quando a pilha de tarefas está vazia e depois disso inicia a execução da tarefa da fila de tarefas

function alarm_one() {
  return "A hora de acordar é 08:00";
}

function alarm_two() {
  return "Está perto de sua hora de acordar 07:50";
}

setTimeout(function () {
  console.log("10 minutos se passaram...");
  console.log(alarm_one());
}, 2000);
console.log(alarm_two());
