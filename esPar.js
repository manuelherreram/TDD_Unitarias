// Función para determinar si un número es par o impar

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = esPar;
