const crypto = require("crypto");

function compute() {
  const start = new Date();
  const salt = crypto.randomBytes(256).toString("base64");
  // in node common blocking operations
  // filesystem access, zip functions and dns lookup
  const _ = crypto.pbkdf2Sync("<password>", salt, 10000, 1024, "sha512", () => {
    const end = new Date();
    console.log("Hash took", end - start, "milliseconds to compute");
  });
}

function computeSync() {
  const start = new Date();
  const salt = crypto.randomBytes(256).toString("base64");
  // in node common blocking operations
  // filesystem access, zip functions and dns lookup
  const _ = crypto.pbkdf2Sync("<password>", salt, 10000, 1024, "sha512");
  const end = new Date();
  console.log("Hash took", end - start, "milliseconds to compute");
}

module.exports = { computeSync, compute };
