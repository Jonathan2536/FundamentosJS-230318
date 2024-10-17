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