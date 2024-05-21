const brain = require('brain.js');
const config = {
  binaryThresh: 0.5, // Corrigido de 0,5 para 0.5
  hiddenLayers: [7],
  activation: 'leaky-relu', // Corrigido de ’leaky-relu' para 'leaky-relu'
  leakyReluAlpha: 0.01, // Adicionado para leaky-relu funcionar corretamente
  decayRate: 0.1
};

const net = new brain.NeuralNetwork(config);

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

const output = net.run([0, 1]);
console.log(output);
