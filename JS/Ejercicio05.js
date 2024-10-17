const bg =
  "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(260,129,12,1) 33%, rgba(255,19,260,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;
//Personalización de las salidas a consola
console.warn("Práctica 07: Arreglos en Java Script");
console.log("%c1.- Condicionales Si/Entoces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`);
//Y si la necesitamos en formato local(?)
const fechaLocalMX = fechaActual.toLocaleString("es-MX", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});
console.log(`en formato local (México): ${fechaLocalMX}`);
//Si es antes de las doce saluda con buenos días
if (fechaActual.getHours() < 12)
  console.log(`Buenos días, hoy es ${fechaLocalMX}`);
//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if (fechaActual.getMonth() <= 6)
  console.log(`Estas en la primera mitad del año`);
else console.log(`Estas en la segunda mitad del año.`);
//que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);
let horarioVerano = false;
if (fechaActual >= inicioPrimavera || fechaActual < inicioVerano) {
  console.log("Estamos en PRIMAVERA...");
  console.log("Inicia la floracion de muchas plantas...");
  console.log("Los dias son mas largos y las noches mas cortas...");
  console.log("Muchos animales despiertan de la hibernacion...");
  estacion = "Primavera";
  horarioVerano = true;
} else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
  console.log("Estamos en OTOÑO...")
  console.log("Los arboles suelen cambiar de follaje")
  console.log("Se registran temperaturas mas templadas")
 console.log("Los animales comienzan con la recolecion de alimento y preparan sus espacios,incluso algunas emigran")
 estacion="Verano"
 horarioVerano=true;
}
else{
    console.log("Estamos en INVIERNO")
    console.log("En esta temporada los días son mas cortos y las noches mas largas...")
    console.log("En algunas regiones suele nevar ...")
    console.log("Dado las bajas temperaturas , se recomienda abrigarse")
    estacion="Invierno"
    horarioVerano=false;
}
console.log("%c2.- Operador Ternario (validacion? cumple: no_cumple)", style_console);
// En Java Script existe una operacion simplifica que valida si una condicion se cumple o no y que hacer en cada caso
const edadPersona = 19;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;
let evaluarMayoriaEdad = (edad) =>
    edad>=18? "Eres mayor de edad." : "No eres mayor de edad."
console.log("Evaluado la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));
//Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais
//por cuestiones legales , por lo que debemos considerar un segundo parametro en la evaluacion
evaluarMayoriaEdad=(edad,pais)=>
(edad>=18 && pais===" MX ")?`En ${ pais }eres mayor de edad`:`En${ pais }No eres mayor de edad`;
console.log("Evaluando la mayoria de edad de una persona en Mexico")
console.log(evaluarMayoriaEdad(edadPersona, " MX "));
console.log("Evaluando la mayoria de edad de una persona en Estados Unidos")
console.log(evaluarMayoriaEdad(edadPersona, " US "));
console.log("%c3.- SWHITCH  - CASE (Eleccion por valor definido)", style_console);
let asignaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968): //Baby Boomers
        return "Baby Boomers";
        case(anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generacion X";
        case(anioNacimiento>1980 && anioNacimiento<=1994):
        return "Milenials";
        case(anioNacimiento>1994 && anioNacimiento<=2010):
        return "Centenials";
        case(anioNacimiento>2010):
        return "Krystal";
    }
}

