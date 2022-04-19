const {Blockchain, Transaction} = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('e03c7cbbe503d22612f375d1f3074335e6f8a472d351d3daf9b742454893e2e0');
const myWalletAddress = myKey.getPublic('hex');

//Definimos el nombre de nuestra Blockchain
let JJACoin = new Blockchain();

//Creamos una transaccion con nuestra wallet
const tx1= new Transaction(myWalletAddress,'myWalletAddress',10);
//Firmamos nuestra transacción
tx1.signTransaction(myKey);
//La transaccion se añade a la blockchain
JJACoin.addTransaction(tx1);

//Comenzar el minado de las transacciones pendientes.
console.log('\n Comenzando el minado....')
JJACoin.minedPendingTransactions(myWalletAddress);

//Obtener el balance del minero.
console.log('\nEl Balance de Jonatan es', JJACoin.getBalanceOfAddress(myWalletAddress));

//Intentamos modificar una de las transacciones.
JJACoin.chain[1].transactions[0].amount = 1;

//Comprobamos el principio de no corromper la blockchain con las condiciones creadas en nuestro codigo.
console.log('Es una Blockchain valida?', JJACoin.isChainValid());