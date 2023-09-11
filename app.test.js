const Server = require('./models/server');
const request  = require('supertest');
const conexion = require('./database/connection');

const suma     = require('./app');

beforeEach(async () => {
  // set up the todo
  require('mysql2/node_modules/iconv-lite').encodingExists('foo');

  const hcServer = new Server();
})

test('La suma entre 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});