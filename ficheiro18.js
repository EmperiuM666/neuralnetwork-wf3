// nomedoficheiro18.js
// Configurações da validação cruzada num ficheiro nomedoficheiro18.js
const brain = require('brain.js');

const data = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

const networkOptions = { learningRate: 0.05 };
const trainingOptions = { iterations: 10000, errorThresh: 0.004 };

const crossValidate = new brain.CrossValidate(() => new brain.NeuralNetwork(), networkOptions);

const stats = crossValidate.train(data, trainingOptions);

const json = crossValidate.toJSON();
const net = crossValidate.toNeuralNetwork();

console.log(`Taxa de erro: ${json.sets[0].error}\nIterações: ${json.sets[0].iterations}`);

const output = net.run([0, 1]);
console.log(`Resultado: ${output[0]}`);

// Guardem e executem o ficheiro
