require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();

function suma(a, b) {
    return a + b;
};


module.exports = suma;