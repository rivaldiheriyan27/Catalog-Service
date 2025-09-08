const crypto = require("crypto");
const CryptoJS = require("crypto-js");

const {
  CRYPTO_ALGORITHM,
  CRYPTO_KEY,
  CRYPTO_IV,
  CRYPTO_ALGORITHM2,
  CRYPTO_KEY2,
  CRYPTO_IV2,
} = require("../common/constant");

const doubleDecrypt = (str) => {
  let decipher2 = crypto.createDecipheriv(
    CRYPTO_ALGORITHM2,
    CRYPTO_KEY2,
    CRYPTO_IV2
  );
  let decryptedString2 = decipher2.update(str, "hex", "utf-8");
  decryptedString2 += decipher2.final("utf-8");

  let decipher = crypto.createDecipheriv(
    CRYPTO_ALGORITHM,
    CRYPTO_KEY,
    CRYPTO_IV
  );
  var decryptedString = decipher.update(decryptedString2, "hex", "utf-8");
  decryptedString += decipher.final("utf-8");

  return decryptedString;
};

module.exports = {
  doubleDecrypt,
};
