//----------------JAVASCRIPT-------------------
//Desafios del dia #1
// -Crear un array con los números del 1 al 10.
// -Crear un bucle for que imprima en consola todos los números del array.
// -Crear un bucle que imprima solo los primeros 5 números.
// -Crear un bucle que imprima los últimos 5 números.
// -Crear un bucle que imprima todos los números, excepto el que este en la 4ta posición.

let arrayNum = [1,2,3,4,5,6,7,8,9,10];
//llamo a todos los numeros del array
// for (let i = 0; i < arrayNum.length; i++) {
//   console.log (i);
// }

//llamo solo a los primeros 5
// for (let i = 0; i < arrayNum[4]; i++) {
//   console.log (i);
// }

//llamo a los ultimos 5
// for (let i = 6; i <= arrayNum.length; i++) {
//   console.log (i);
// }

//Imprime todos menos la 4ta posicion





// E1: Arrays, Funciones, Bucles | Javascript

// 👉 Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

let ingredientesPizza = ['harina', 'aceite de oliva', 'agua', 'sal', 'tomate','cebolla','aceitunas','morron','rucula','muzzarella'];
let pares = [];
let impares = [];

// 👉 Crear una función que acepte ese array como parámetro. 
// Dentro de la función, debemos lograr lo siguiente: 
// 👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
// 👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
// 👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
// Los ingredientes impares son: (ingredientes en array impares)."

let paresImpares = (ingredientesPizza) => {
  for (let i = 9; i < ingredientesPizza.length; i++) {
    let numImpares = ingredientesPizza.filter(word => word.length % 2 !== 0)
    impares.push(numImpares);
    let numPares = ingredientesPizza.filter(word => word.length % 2 === 0)
    pares.push(numPares);
   
  }
}

paresImpares(ingredientesPizza)
console.log(`Los ingredientes pares son: ${pares}. 
// Los ingredientes impares son: ${impares}.`)

