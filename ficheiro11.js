const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
], {
  iterations: 20000,
  errorThresh: 0.005,
  log: false,
  logPeriod: 10,
  learningRate: 0.3,
  momentum: 0.1,
  callbackPeriod: 10,
  timeout: Infinity
});

const output = net.run([0, 1]);
console.log(output);
