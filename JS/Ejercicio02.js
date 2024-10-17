// Tipos de Datos en JS
// 1. Undefined
console.warn("--- Tipo de Dato UNDEFIEND")
let cliente;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero"
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = 19227
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);
// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
// 2. BOOLEAN
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor \"true\" a la variable. ")
esPremium="true"
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;
if(esPremium)
    console.log ("El cliente pago por usar el servicio.");
else 
    console.log ("El cliente que recibe los servicios gratuitos");
// 3. NUMBER
var cantidad;
const costo_producto = 10.50
let  saldo_cuenta = -2500.40
let monto_transaccion ;
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimleas , flotantes");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar:  ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);

// 7. Null
console.warn("-- Tipo de Dato : NULL (Nulo o Vacio)")
// Este tipo de dato nulo se asigna cuando el sistema o el usuario sabe de la variabl
// pero prefiere dejarlo vacio , bajo su consentimiento , a diferenecia de la UNDEFINED que es un valor desconocido
// asignado por DEFAULT por JS.
let nombreUsuario = null
let passUsuario = null
let generoUsuario = null
let estatusRelacioneSentimental = null
let fecha_ultimoPost = undefined
/*Supongamos que estamos programando uns Red Social , tipo Facebook , en la que parte de la informacion
 se publicara en el perfil del usuario*/
 /*Si el usuario no ha iniciado sesion en el dispositivo movil o en la aplicacion web
  , puede explorar contenido de acceso publico . y no existiria informacion para mostrar */
  /*En la HU (Historias de Usuario) , que el usuario desea logearse deberan ingresar
  su numero telefonico o correo electronico y una contraseña que deberemos guardar en las variables
  previamente declaradas*/
  /*Supongamos que el usuario : José Francisco Flores Amador con correo electronico 230417@utxicotepec.edu.mx
  desea ingresar con con su contraseña : JOSEF11BN14*/
  console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña ${passUsuario}`);
// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos
//y en caso de que los datos sean correctos comenzara la sesion en la plataforma actualizando estos valores 
generoUsuario = "M"
estatusRelacioneSentimental = null
console.log(`El usuario: ${nombreUsuario} se ha logeado exitosamente ,al tener acceso a su informacion de perfil
    podemos deducir que es el generp ${generoUsuario} y que estatus de relacion es : ${estatusRelacioneSentimental} y se ultima publicacion
    se ha realizado el ${fecha_ultimoPost}`);
// NULL vs UNDEFINED
console.log("Comparacion de la Identidad ente Undefined y Null:")
console.log(
    (fecha_ultimoPost==estatusRelacioneSentimental)?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato":
    "Las variables no tienen el mismo valor"
);
console.log("Comparacion de la Identidad ente Undefined y Null:")
console.log(
    (fecha_ultimoPost===estatusRelacioneSentimental)?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato":
    "Las variables no tienen el mismo valor"
);
//8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Funcion)")
const saludar = function(nombre){return `Hola,${nombre}!`}
//Invocamos a la funciondeclarada
console.log(saludar(`Paco`))
//Y que tipo de dato tiene la constante
console.log(`El Tipo de dato de la constante saludar e: ${typeof(saludar)}`)