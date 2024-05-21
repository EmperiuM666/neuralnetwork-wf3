// nomedoficheiro17.js
// Configurações do fluxo de rede num ficheiro nomedoficheiro17.js
const brain = require('brain.js');
const net = new brain.NeuralNetwork();
const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

// Treinar a rede neural com os dados fornecidos
const trainingOptions = {
  iterations: 20000,    // Número de iterações de treinamento
  log: true,            // Log de progresso
  logPeriod: 1000,      // Intervalo de log (em iterações)
  learningRate: 0.3     // Taxa de aprendizado
};

net.train(data, trainingOptions);

// Testar a rede neural após o treinamento
const output00 = parseFloat(net.run([0, 0])).toFixed(0);
const output01 = parseFloat(net.run([0, 1])).toFixed(0);
const output10 = parseFloat(net.run([1, 0])).toFixed(0);
const output11 = parseFloat(net.run([1, 1])).toFixed(0);

console.log(`0 xor 0: ${output00}`);
console.log(`0 xor 1: ${output01}`);
console.log(`1 xor 0: ${output10}`);
console.log(`1 xor 1: ${output11}`);
