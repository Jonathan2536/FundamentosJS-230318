// Comentarios de una sola línea

/*
 Comentarios multilínea
*/

// Ejercicio 01: Declaración de variables

// a) Var: Permite declarar variables globales o locales dentro de una función.
var miNombre = "Jonathan"; // Declaración e inicialización de una variable.
var misApellidos; // Declaración sin inicialización.
var miEdad = 19; // Inicialización de la variable con un valor numérico.

// El objetivo de console.log() es permitirnos visualizar el valor de una variable o el resultado de una función en la consola.

console.log("Intentando leer variables: ", miNombre, misApellidos);
misApellidos = "Emanuel"; // Inicialización posterior de la variable.
console.log("Ya que ambas fueron inicializadas, vuelve a intentar leerlas: ", miNombre, misApellidos);

// Una variable puede cambiar en el proceso de ejecución del programa.

// b) Const: Declara constantes, cuyo valor no puede cambiar una vez asignado.

console.warn("-------Declaración de variables del tipo constante usando: CONST");
const miUniversidad = "UT Xicotepec"; // Valor fijo que no se puede modificar.
const miMatricula = 230417; // Un número constante.

console.log("Hola", miNombre, misApellidos, "sé que estudias actualmente en: ", miUniversidad, ". Te asignaron matrícula: ", miMatricula, "y tienes una edad de: ", miEdad);

// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeof().
console.log("Analizando los datos, puedo deducir que:");
console.log("miNombre es del tipo: ", typeof(miNombre));
console.log("misApellidos es del tipo: ", typeof(misApellidos));
console.log("miEdad es del tipo: ", typeof(miEdad));
console.log("miMatrícula es del tipo: ", typeof(miMatricula));

// c) LET: Declara variables limitadas al bloque en el que se definen, pero que pueden cambiar su valor.
let miFechaNacimiento = "2005-08-11"; // Fecha de nacimiento.
let miColorFavorito; // Declaración sin asignación.
let hola; // Declaración de una variable no usada.

console.warn("---Declaración de Variables Locales usando: LET");
console.log("Genial, ya te voy conociendo mejor. Ahora sé que naciste el", miFechaNacimiento, "y tu color favorito es... déjame pensar...");

miColorFavorito = "Azul"; // Asignación de valor.
console.log(`Creo que es ${miColorFavorito}, ¿le atiné?`); // La manera de mezclar textos con variables se llama interpolación, utilizando backticks (`).

console.log("miFechaNacimiento es de tipo: ", typeof(miFechaNacimiento));
console.log("miColorFavorito es de tipo: ", typeof(miColorFavorito));