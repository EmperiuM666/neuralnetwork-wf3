const brain = require('brain.js');
const fs = require('fs');

// Carregar o modelo salvo
const json = fs.readFileSync('./model-xor.json', 'utf8');
const net = new brain.NeuralNetwork();
net.fromJSON(JSON.parse(json));

// Executar a rede neural com diferentes entradas e obter os resultados
const output00 = parseFloat(net.run([0, 0])).toFixed(0);
const output01 = parseFloat(net.run([0, 1])).toFixed(0);
const output10 = parseFloat(net.run([1, 0])).toFixed(0);
const output11 = parseFloat(net.run([1, 1])).toFixed(0);

// Imprimir os resultados no console
console.log(`0 xor 0: ${output00}`);
console.log(`0 xor 1: ${output01}`);
console.log(`1 xor 0: ${output10}`);
console.log(`1 xor 1: ${output11}`);
