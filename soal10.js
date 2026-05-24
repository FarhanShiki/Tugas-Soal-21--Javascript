const prompt= require("prompt-sync")({ sigint: true });

let judul = prompt("Masukkan Judul Buku : ");
let penerbit = prompt("Masukkan Penerbit : ");
let jumlah = prompt("Masukkan Jumlah Buku : ");
let tanggal = prompt("Masukkan Tanggal Pembelian : ");

console.log("\nJudul Buku : " + judul);
console.log("Penerbit : " + penerbit);
console.log("Jumlah Buku : " + jumlah);
console.log("Tanggal Pembelian : " + tanggal);