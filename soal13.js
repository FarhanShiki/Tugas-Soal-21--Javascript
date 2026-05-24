const prompt= require("prompt-sync")({ sigint: true });

let harga = parseFloat(prompt("Masukkan harga makanan : "));

let pajak = harga * 10 / 100;
let fee = harga * 5 / 100;

let bayar = harga + pajak + fee;

console.log("\nHarga makanan : " + harga);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + bayar);