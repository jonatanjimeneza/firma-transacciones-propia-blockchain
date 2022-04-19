//Creamos nuestas Key(llaves) publica y privada para el testeo de nuestra blockchain propia.

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private Key: ', privateKey);

console.log();
console.log('Public Key:', publicKey);