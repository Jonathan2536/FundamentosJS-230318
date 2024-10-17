//Objetos
const producto=
{
    Nombre:"Tablet 9\"",
    Marca : "Mac",
    Modelo: "iPad",
    Costo_Compra:11500.25,
    Costo_Venta:15400,
    Disponible: true,
    SKU: Symbol("Linkin Park"),
    Colores : ["Blanco","Negro","Rosa","Azul"] 
}
//Imprimir el objeto
console.warn("---Objetos---")
//console.log(producto);
//Los objetos tambien ya pueden representarse en formato de tabla utilizando la funcion console.log.table
console.table(producto);
//Acceder a las propiedades de un objeto
console.warn("---Leyendo las Propiedades de un Objeto y sus tipos de dato")
console.log(`Nombre del producto${producto.Nombre} que es del tipo de dato ${typeof(producto.Nombre)}`);
console.log(`Nombre de la marca es ${producto.Marca} que es del tipo de dato ${typeof(producto.Marca)}`);
console.log(`El modelo del producto es${producto.Modelo} que es del tipo de dato ${typeof(producto.Modelo)}`);
console.log(`El precio del producto es${producto.Costo_Compra} que es del tipo de dato ${typeof(producto.Costo_Compra)}`);
console.log(`El costo del producto es${producto.Costo_Compra} que es del tipo de dato ${typeof(producto.Costo_Venta)}`);
//Objetos 2.0
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`
//Personalización de las Salidas a Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");
//VARIABLES INDEPENDIENTES
console.log("%c1.- Variables Independientes", style_console);
//Agregacion de propiedades a un objeto existente
console.log("%c5-- Agregacion de propeidades de un objeto",style_console);
//console.log("%c5.- Agregar nuevas propiedades al Objeto", style_console);
console.log("Objeto antes de ser modificado: ");
console.log(JSON.stringify(Comprador));
//Agregando propiedades
console.log("Los datos actuales del comprador son: ")
console.table(Comprador)
Comprador[`Dirección`]="Av. Benito Juárez No. 1525, Interior 40, Xicotepec de JUárez, Puebla, México"
Comprador[`Tipo`]="Nuevo Cliente"
Comprador[`ActividadReciente`]= true
Comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las propiedades; Dirección, Tipo, ActividadReciente y TotalCompras... ")
console.table(Comprador)
//Eliminar Propiedades de un objeto existente
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Despues de la modificación...")
console.table(Pedido)
console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos,Congelacion(FREZE)", style_console);
//Si deseamos no permitir que los objetos sean modificados ni su estructura, ni el valor , utilizaremos el metodo FREZE(Congelar)
console.log(`La estructura actual del Objeto COMPRADOR es : `)
console.table(Comprador)
Object.freeze(Comprador);
//Internamos agregar , eliminar , modificar los valores de sus propiedades
Comprador.FechaUltimaCompra="05/09/2024"
delete Comprador.Tipo;
Comprador.Dirección="Calle Misericorida Interior #112"
console.log(`Verificamos que si se realizaron los cambios en el objeto COMPRADOR es : `)
console.table(Comprador)
console.log("%c8.- Metodos para controlar la mutabilidad de objetos sellado (SEAL)", style_console);
//Sin embargo , en el caso que debemos poder modificar los valores de las propiedades del Objeto , pero no su estructura , usaremos SEAL
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`]="24/09/2024";
delete Pedido[`Cantidad`]
console.log(`Verificamos que si se realizaron los cambios en el Objeto PEDIDO:`)
console.table(Pedido)
Pedido.Cantidad=5
console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO:`)
console.table(Pedido)
console.log("%c9.-Destructuracion de  2 objetos", style_console);
const {} = Producto;
let{Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
let{Precio: ProductoPrecio, SKU: ProductoSKU, Marca: ProductoMarca}= Producto
if (ProductoPrecio> 2000)
    ProductoPrecio="Caro"  
else
    ProductoPrecio = "Barato"
if (clienteSaldo>0)
    clienteSaldo = "A favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
    clienteSaldo = "Sin deuda"
let clienteNivel;
    if(clienteTipo =="Premium")
        clienteNivel=1;
    if(clienteTipo == "Fremium")
        clienteNivel =2 ;
    if(clienteNivel=="No identificado")
        clienteNivel =3;
if(clientePais == "Mexico")
    clientePais = "Nacional"
else
    clientePais="Extrangero"
let datosClientesPromociones={clienteCorreo,clientePais,clienteNivel,clienteSaldo,ProductoMarca,ProductoPrecio}
console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientesPromociones)
//Operaciones sobre Objetos 
console.log("%c10- Metodo para controlar la mutabilidad de los objetos Sellado (SEAL))", style_console);
console.log("Impeimimos la estructura y valores en Objetos PRODUCTO")
 console.table(Producto);
console.log("Imprimimos la estructura y valores de Objetos PEDIDO")
 console.table(Pedido);
console.log("%c10- Union de Objetos usando el SPEAD OPERATOR (ASAY))", style_console);
console.table(Producto);
console.table(Comprador);
console.table(Pedido);
let Venta2 = { 
    producto : {... Producto },
    comprador: {... Comprador},
    pedido : {... Pedido}
}
    console.log("Fusionamps los 3 Objetos en uno nuevo sin perdida de informacion")
    console.log(Venta2)
    console.table(Venta2)