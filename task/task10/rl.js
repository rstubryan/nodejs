const fs = require("fs"); // file system module
const readline = require("readline"); // readline module

// callback function
const callback = (err) =>
  err
    ? console.error("Terjadi kesalahan:", err)
    : console.log("File berhasil ditulis.");

// interface dari readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
const filePath = "./data/contacts.json";

!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : "";
!fs.existsSync(filePath) ? fs.writeFileSync(filePath, "[]", "utf-8") : "";

const tulisPertanyaan = (pertanyaan) =>
  new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama Anda: ");
  const noHP = await tulisPertanyaan("Masukkan nomor HP Anda: ");

  const contact = { nama, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));
  callback();
  rl.close();
};

main();
