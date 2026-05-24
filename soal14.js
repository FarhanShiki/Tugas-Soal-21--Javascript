const prompt= require("prompt-sync")({ sigint: true });

let angka = parseInt(prompt("Masukkan angka : "));

if (angka < 100) {
    console.log("Nilai kamu kurang sempurna!");
}
if (angka > 100) {
    console.log("Nilai kamu sempurna!");
}