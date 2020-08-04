const crypto = require("crypto");

const jobsCount = 8;
const start = Date.now();
for (let i = 0; i < jobsCount; i++) {
  crypto.pbkdf2("pass", "salt", 100000, 512, "sha512", () => {
    console.log(`${i.toString().padStart(2, "0")}:  ${Date.now() - start}`);
  });
}
