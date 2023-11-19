const carrito = []

const modelos =
    [{ imagen: '👚', codigo: 1, nombre: 'Remera rosa', precio: 2599 },
    { imagen: '🩳', codigo: 2, nombre: 'Bermuda playera', precio: 3859 },
    { imagen: '👕', codigo: 3, nombre: 'Remera casual', precio: 7851 },
    { imagen: '👖', codigo: 4, nombre: 'Pantalón de jean', precio: 8599 },
    { imagen: '👔', codigo: 5, nombre: 'Camisa Office', precio: 4894 }]
/*
    ✅ funciones de orden superior (métodos de búsqueda y transformación)
    ✅ funciones comunes con variables, constantes, arrays, etc.
    ✅ Objetos JS - array de objetos literales
    ✅ Lógica funcional de la aplicación
    ✅ entradas - salidas (prompt, confirm, alert, console.algo)
    
    -crear una funcion llamar buscarPrenda() que retorne un resultado
        - uso de .find()para rastrear el producto por su ID- CODIGO
    -crear una funcion llamada finalizarCompra()
      -validar el carrito que tenga productos, si va todo OK:
        - instanciar el objeto Compra()pasandole el carrito como parametro
        -agradecemos la compra
        -vaciamos el carrito
*/
function buscarModelo(codigo) {
    //metodo find itera el array(prendas)de principio a fin
    //cuando encuentra coincidencia, retorna copia del objeto y deja de iterar el array
    //si no encuentra coincidencia, retorna 'undefined'
    let modeloSeleccionado = modelos.find((modelo) => modelo.codigo === codigo)
    return modeloSeleccionado
}

function comprar() {
    let codigo = prompt("Ingrese por favor el codigo de la prenda seleccionada. \n(Una vez realizada la consulta seguiremos con la compra)")
    let modeloElegido = buscarModelo(parseInt(codigo))

    if (modeloElegido !== undefined) {
        carrito.push(modeloElegido)
        console.table(carrito)
        let respuesta = confirm("¿Desea elegir otra prenda?")
        if (respuesta === true) {
            comprar() //llamar nuevamente a la misma funcion se lo llama recursividad 
        } else { //finalizar la compra. 
            const carrito2 = new Compra(carrito)
            let subtotal = carrito2.obtenerSubtotal()
            console.table(carrito)
            alert("✅Su pago es de $ " + subtotal + "\nMuchas gracias por su compra.")
        }
    } else {
        alert("✖️ El codigo no es valido.")

    }
}   

let css1  = document.getElementsByClassName("css1")