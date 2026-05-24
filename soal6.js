const prompt = require("prompt-sync")({ sigint: true });

let namaSiswa = ("Budimansah ");
let ukuranSepatu = ("38 ");
let nilaiRapor =  ("82.87 ");
let statusKelulusan = ("false ");

console.log("Nama : " + namaSiswa);
console.log("Ukuran  : " + ukuranSepatu);
console.log("Nilai  : " + nilaiRapor);
console.log("Status : " + statusKelulusan);

document.body.innerHTML =
  "<p>Nama : "          + namaSiswa   + "</p>" +
  "<p>Ukuran Sepatu : " + ukuranSepatu + "</p>" +
  "<p>Nilai Rapor : "   + rataRapor    + "</p>" +
  "<p>Kelulusan : "    + statusLulus  + "</p>";