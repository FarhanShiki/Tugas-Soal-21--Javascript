const prompt= require("prompt-sync")({ sigint: true });

let x = parseInt(prompt("Masukkan nilai x : "));
let y = parseInt(prompt("Masukkan nilai y : "));
let z = parseInt(prompt("Masukkan nilai z : "));

let terbesar = Math.max(x, y, z);

let terkecil = Math.min(x, y, z);

console.log("\nNilai terbesar : " + terbesar);
console.log("Nilai terkecil : " + terkecil);