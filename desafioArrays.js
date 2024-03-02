//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementosDeProgramacion() {
  console.log(lenguagesDeProgramacion);
}
mostrarElementosDeProgramacion();

//5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosInversos() {
  console.log(lenguagesDeProgramacion.reverse());
}

//6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedioDeElementos(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}
let numeros = [10, 20, 30, 40, 50, 60];
let promedio = calcularPromedioDeElementos(numeros);
console.log("Promedio:", promedio);

//7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontarMayorMenor(lista2) {
  let mayor = lista2[0];
  let menor = lista2[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista2[i] > mayor) {
      mayor = lista2[i];
    }
    if (lista2[i] < menor) {
      menor = lista2[i];
    }
  }
  console.log("Mayor:", mayor);
  console.log("Menor:", menor);
}
let numeros2 = [15, 25, 35, 5, 0];
encontarMayorMenor(numeros2);

//8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeTodosLosElementos(lista3) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista3[i];
  }
  return suma;
}
let numeros3 = [1991, 2024, 21];
let suma = sumaDeTodosLosElementos(numeros3);
console.log("Suma:", suma);

//9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

//10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function name(params) {}

//11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function name(params) {}
