let NombreProducto = "Camperas"
let precioUnitario = 500
let cantidadDeseada

cantidadDeseada = prompt ("¿Cuantas "+ NombreProducto + " deseas comprar?")

cantidadDeseada = parseInt(cantidadDeseada)

let costoTotal = precioUnitario * cantidadDeseada

alert("el costo total de tu compra es: $" + costoTotal )