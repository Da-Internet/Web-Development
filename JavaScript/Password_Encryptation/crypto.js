
// 
const crypto = require('crypto');
const password = "123456789"

//
const hash = crypto.createHash("sha256").update(password).digest('hex');
console.log("Password Original: " + password);
console.log("Password Encriptada: " + hash);