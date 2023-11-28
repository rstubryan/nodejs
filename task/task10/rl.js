const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan nama Anda: ");
  const noHP = await contacts.tulisPertanyaan("Masukkan nomor HP Anda: ");
  const email = await contacts.tulisPertanyaan("Masukkan email Anda: ");

  contacts.simpanContact(nama, email, noHP);
};

main();
