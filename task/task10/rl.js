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

// membuat folder data jika belum ada dan memasukan data json yang sudah diinputkan ke dalam file contacts.json
rl.question("Masukkan nama Anda: ", (nama) => {
  rl.question("Masukkan nomor HP Anda: ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);
    fs.writeFile(filePath, JSON.stringify(contacts, null, 2), callback);
    rl.close();
  });
});
