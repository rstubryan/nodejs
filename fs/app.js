const fs = require('fs');

const callback = (err) =>
  err
    ? console.error('Terjadi kesalahan:', err)
    : console.log('File berhasil ditulis.');

fs.writeFile('dummy/message.txt', 'Hello Node.js', 'utf8', callback);

fs.readFile('dummy/message.txt', 'utf8', (err, data) =>
  err ? console.error('Terjadi kesalahan:', err) : console.log(data)
);
