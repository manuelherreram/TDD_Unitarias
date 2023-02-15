const esPar = require("./esPar");

test("Es par", () => {
  expect(esPar(2)).toBe(true);
  expect(esPar(4)).toBe(true);
  expect(esPar(6)).toBe(true);
});

test("Es impar", () => {
  expect(esPar(1)).toBe(false);
  expect(esPar(3)).toBe(false);
  expect(esPar(5)).toBe(false);
});

