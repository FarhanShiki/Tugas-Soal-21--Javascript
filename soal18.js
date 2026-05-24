const prompt= require("prompt-sync")({ sigint: true });

let angka = parseInt(prompt("Masukkan bilangan : "));

if (angka % 7 == 0) {
    console.log("Bilangan tersebut kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}