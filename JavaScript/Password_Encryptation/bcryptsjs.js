
//
//
const bcryptjs = require('bcryptjs');

const password = "123456789";

const hash = bcryptjs.hashSync(password, 10);

console.log("Password Original: " + password);
console.log("Password con Hash: " + hash);