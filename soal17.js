const prompt= require("prompt-sync")({ sigint: true });

let totalHarga = parseFloat(prompt("Masukkan total harga barang : "));

let diskon = 0;
let totalBayar = totalHarga;

if (totalHarga >= 200000) {
    diskon = totalHarga * 7.5 / 100;
    totalBayar = totalHarga - diskon;
}

console.log("\nTotal Harga Barang : " + totalHarga);
console.log("Diskon : " + diskon);
console.log("Total Bayar : " + totalBayar);