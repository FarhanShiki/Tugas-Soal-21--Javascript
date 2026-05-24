const prompt= require("prompt-sync")({ sigint: true });

let huruf = prompt("Masukkan sebuah huruf : ").toLowerCase();

if (huruf.length == 1 && huruf >= 'a' && huruf <= 'z') {

    if (
        huruf == 'a' ||
        huruf == 'i' ||
        huruf == 'u' ||
        huruf == 'e' ||
        huruf == 'o'
    ) {
        console.log("Huruf vokal");
    } else {
        console.log("Huruf konsonan");
    }

} else {
    console.log("Bukan berupa huruf");
}