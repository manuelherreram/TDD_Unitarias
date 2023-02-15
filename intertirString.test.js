const invertirString = require("./invertirString");

test("Invierte una cadena", () => {
  expect(invertirString("Hola")).toBe("aloH");
  expect(invertirString("JavaScript")).toBe("tpircSavaJ");
});

test("No es una cadena", () => {
  expect(() => invertirString(123)).toThrow();
});

test("Cadena vacía", () => {
  expect(invertirString("")).toBe("");
});
