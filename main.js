const productoAPrecio = 5;
const productoBPrecio = 15;
const productoCPrecio = 30;

const productoA = "1. Producto A - $" + productoAPrecio + "\n";
const productoB = "2. Producto B - $" + productoBPrecio + "\n";
const productoC = "3. Producto C - $" + productoCPrecio + "\n";
const finalizar = "0. Finalizar";

let continuarCompra = true;
let totalCompra = 0; 

while (continuarCompra) {
    let productos = "Productos disponibles:\n" + productoA + productoB + productoC + finalizar;

    let seleccionProductos = prompt(productos + "\n\nElija un producto para continuar, o 0 para finalizar");

    if (seleccionProductos === "0") {
        alert("Compra finalizada. Total a pagar: $" + totalCompra);
        continuarCompra = false;
    } else if (seleccionProductos === "1" || seleccionProductos === "2" || seleccionProductos === "3") {
        let precio = cantidad(seleccionProductos);
        totalCompra += precio;
        alert("El monto total de estos productos es: $" + precio);
    } else {
        alert("Selección no válida");
    }
}

function cantidad(seleccion) {
    let elegirCantidad = parseInt(prompt("¿Cuántos quieres agregar?"));
    let precio;
    if (seleccion === "1") {
        precio = elegirCantidad * productoAPrecio;
    } else if (seleccion === "2") {
        precio = elegirCantidad * productoBPrecio;
    } else if (seleccion === "3") {
        precio = elegirCantidad * productoCPrecio;
    }
    return precio;
}