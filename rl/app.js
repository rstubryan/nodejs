const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is your name? ", (name) => {
//   console.log(`Hello ${name}`);
//   rl.close();
// });

rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan nomor HP Anda: ", (noHP) => {
    console.log(
      `Terima kasih sudah mengisi data. Berikut detail data Anda: ${nama}, ${noHP}`
    );

    rl.close();
  });
});
