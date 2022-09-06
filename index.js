// Declaracion de la clase constructora Jeans, con el atributo id para identificar cada producto y el atributo cart para sumar cantidades anadidas al carrito. 

class Jeans {
    constructor (categoria, titulo, descripcion, precio,id,cart) {
        this.categoria = categoria
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
        this.id = id
        this.cart = cart
    }
    
}

// Declaracion de variables 

const productos = []
let totalCompra = 0
let carrito = []
let comprar = true

// Creacion de objetos y envio de objetos a el arrego de productos. 

const jeanSlimfit = new Jeans ("jeans","Jean Slimfit","Jean elastico slimfit color azul",100,1,1);
productos.push(jeanSlimfit)
const jeanRegularfit = new Jeans ("jeans","Jean Regularfit","Jean resistente regularfit color negro",120,2,1);
productos.push(jeanRegularfit)
const jeanWidefit = new Jeans ("jeans","Jean Widefit","Jean comodo widefit color azul",150,3,1);
productos.push(jeanWidefit)


// Creacion de ciclo para que el usuario escoga la opcion de comprar, pagar o salir.

while (comprar === true) {
    let seleccionProducto
    let menu = parseInt(prompt("Bienvenido 🎉 a la tienda de ropa online, porfavor selecciona que deseas hacer \n\n1. Comprar 🛒 \n2. Salir 😔 \n3. Pagar 💵"))
    if (menu === 1) {
        let mostrarProductos = productos.map((p) => p.titulo)
        seleccionCheck = false
        seleccionProducto = parseInt(prompt("selecciona el producto de tu interes con 1, 2 o 3:" + "\n\n" + mostrarProductos.join("\n")))

          // Para la opcion de comprar el algoritmo muestra al usuario las opciones de compra, agrega los productos seleccionados al arreglo carrito y va sumando el total acumulado. 

        while (seleccionProducto !== 1 && seleccionProducto !== 2 && seleccionProducto !== 3) {
            alert("ingresa una opcion valida ❌")
            seleccionProducto = parseInt(prompt("selecciona el producto de tu interes con 1, 2 o 3:" + "\n\n" + mostrarProductos.join("\n")))
            }
            let productoSeleccionado = productos.find((p) => p.id === seleccionProducto)
            alert("Seleccionaste: " + productoSeleccionado.titulo + " " + productoSeleccionado.precio + " USD")
            if (seleccionProducto === productoSeleccionado.id){
            if (carrito.find((p)=> p.id === productoSeleccionado.id)){
                productoSeleccionado.cart = productoSeleccionado.cart + 1
                totalCompra = totalCompra + productoSeleccionado.precio
            } else {
                carrito.push(productoSeleccionado)
                totalCompra = totalCompra + productoSeleccionado.precio
            }
            alert ("Total Compra: " + totalCompra + " USD")
            } else {
                alert("Ingresa una opcion valida ❌")
            }
    } else if (menu === 2){
        alert ("Gracias por tu visita ✨")
        comprar = false

    // Para la opcion de pagar el algoritmo muestra los articulos en el carrito de compras y las cantidades, agrega un impuesto del 19% al valor de la compra y una tarifa de envio aleatoria entre 0 y 19 dolares. 

    } else if (menu === 3){
        let mostrarCarrito = carrito.map((p)=> p.titulo)
        let mostrarCantidadCarrito = carrito.map((p)=> p.cart)
        let impuestos = totalCompra * 0.19
        let envio = Math.floor(Math.random()*20)
        let granTotal = totalCompra + impuestos + envio
        let opcionCompra
        while (opcionCompra !==1 && opcionCompra !== 2) {
            alert("tus productos seleccionados fueron estos: " + "\n\n" + mostrarCarrito.join("\n") + "\n\nLas cantidades de cada producto son estas: " + "\n\n" + mostrarCantidadCarrito.join("\n"))
            opcionCompra = parseInt(prompt("El total de tu compra es: " + totalCompra + " USD" + "\nEl Valor de los impuestos es de: " + impuestos + " USD" + "\nEl valor del envio es de: " + envio + " USD" + "\nEl valor total de la compra es: " + granTotal + " USD" + "\n\n Deseas pagar: \n1. Si \n2. Salir"))
        }
        if (opcionCompra === 1) {
            alert("🎊 Muchas Gracias por tu compra 🎊")
            comprar = false
        } else if (opcionCompra === 2) {
            alert("Gracias por tu visita ✨")
            comprar = false
        } else {
            alert("Ingresa una opcion valida ❌")
        }
    } else {
        alert("Ingresa una opcion valida ❌")
    }
}