const crypto = require("crypto");

const start = Date.now();
crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

// 4 threads in thread pool in libuv by default...

crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});
