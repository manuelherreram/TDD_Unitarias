// Función para invertir un string

function invertirString(cadena) {
  if (typeof cadena !== "string") {
    throw new Error("No es una cadena");
  }
  return cadena.split("").reverse().join("");
}

module.exports = invertirString;
