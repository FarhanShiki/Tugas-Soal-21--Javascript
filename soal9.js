const prompt= require("prompt-sync")({ sigint: true });

let p = parseFloat(prompt("Masukkan panjang : "));
let l = parseFloat(prompt("Masukkan lebar : "));

let luas = p * l;
let keliling = 2 * (p + l);

console.log("\nHasil Perhitungan");
console.log("Luas Persegi Panjang = " + luas);
console.log("Keliling Persegi Panjang = " + keliling);