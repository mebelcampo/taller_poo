// Clase Producto
class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    getNombre() {
        return this.nombre;
    }

    setPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }

    getPrecio() {
        return this.precio;
    }

    setCantidadEnStock(nuevaCantidad) {
        this.cantidadEnStock = nuevaCantidad;
    }

    getCantidadEnStock() {
        return this.cantidadEnStock;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.cantidadEnStock}`);
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
        this.productos = [];
    }

    agregarProducto(nombre, precio, cantidadEnStock, marca) {
        const nuevoProducto = new Electrodomestico(nombre, precio, cantidadEnStock, marca);
        this.productos.push(nuevoProducto);
        console.log(`Producto agregado: ${nuevoProducto.getNombre()}`);
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.cantidadEnStock}, Marca: ${this.marca}`);
    }

    listarProductosConPocoStock() {
        console.log("Productos con stock menor a 10:");
        this.productos.forEach(producto => {
            if (producto.getCantidadEnStock() < 10) {
                producto.mostrarInfo();
            }
        });
    }
}
let electrodomesticoPrincipal = new Electrodomestico('Nevera', 65000, 34, 'Acer');
electrodomesticoPrincipal.mostrarInfo();
electrodomesticoPrincipal.agregarProducto('Celular', 4600, 4, 'Samsung');
electrodomesticoPrincipal.agregarProducto('Televisor', 8544, 3, 'LG');
electrodomesticoPrincipal.agregarProducto('Portátil', 5600, 6, 'HP');
electrodomesticoPrincipal.agregarProducto('Computador', 4600, 45, 'Asus');
electrodomesticoPrincipal.listarProductosConPocoStock();
