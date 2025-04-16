const saludar = require('../saludar');
test('saludo correcto', () => {
  expect(saludar()).toBe('Hola Mundo');
});