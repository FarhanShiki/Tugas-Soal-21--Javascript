const prompt= require("prompt-sync")({ sigint: true });

let rpl1 = parseFloat(prompt("Jumlah siswa RPL 1 : "));
let rpl2 = parseFloat(prompt("Jumlah siswa RPL 2 : "));
let tjkt1 = parseFloat(prompt("Jumlah siswa TJKT 1 : "));
let tjkt2 = parseFloat(prompt("Jumlah siswa TJKT 2 : "));

let total= rpl1 + rpl2 + tjkt1 + tjkt2;

console.log("\nJumlah total semua siswa = " + total);