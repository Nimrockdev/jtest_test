const suma = require('../app');

const { conexion } = require('../database/connection')



describe('Test para la función suma y la conexion de la BD', () => {

  beforeAll(async () => {

    try {
      await conexion.authenticate();
    } catch (error) {
      throw new Error('No se pudo autenticar la conexión a la base de datos.');
    }

  });


  test('La suma entre 1 + 2 es igual a 3', () => {
    const resultado = suma(1, 2);
    expect(resultado).toBe(3);
  });


  test('Test simple, conexión no tiene que ser null', () => {

    //console.log(conexion);
    expect(conexion).not.toBe(null);

  });


})