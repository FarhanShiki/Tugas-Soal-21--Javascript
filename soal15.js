const prompt= require("prompt-sync")({ sigint: true });

let kode = prompt("Masukkan kode : ");

if (kode == "999") {
    console.log("You are authenticated");
} else {
    console.log("You have no access");
}