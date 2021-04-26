//Hacer una función que recibe n y retorna la suma de todos los números entre 1 y n.
function suma(num) {
  let resultado = 0;

  for (let i = 1; i <= num; i++) {
    resultado += i;
  }

  return resultado;
}

let num = parseInt(prompt("Ingrese un número"));
alert(suma(num));

