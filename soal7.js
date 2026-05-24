const prompt = require("prompt-sync")({ sigint: true });

const a = 8.3;
const c = "3.2";

const b = parseFloat(c);

console.log(`${a} + ${b} = ${parseFloat((a+b).toFixed(10))}`);
console.log(`${a} - ${b} = ${parseFloat((a-b).toFixed(10))}`);
console.log(`${a} x ${b} = ${parseFloat((a*b).toFixed(10))}`);
console.log(`${a} / ${b} = ${a/b}`);

console.log(`${Math.trunc(a)} % ${Math.trunc(b)} = ${Math.trunc(a) % Math.trunc(b)}`);