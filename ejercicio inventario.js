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

// Clase Electrodomestico que hereda de Producto
class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
        this.productos = []; // Lista de productos adicionales
    }

    agregarProducto(nombre, precio, cantidadEnStock, marca) {
        // Aquí se crea el objeto Producto, no solo los datos como string
        const nuevoProducto = new Producto(nombre, precio, cantidadEnStock);
        this.productos.push(nuevoProducto);
        console.log(`Producto agregado: ${nuevoProducto.getNombre()}`);
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.cantidadEnStock}, Marca: ${this.marca}`);
    }

    // Método para listar productos con stock menor a 10
    listarProductosConPocoStock() {
        console.log("Productos con stock menor a 10:");
        for (let i = 0; i < this.productos.length; i++) {
            // Asegúrate de que los objetos en `productos` sean instancias de Producto
            if (this.productos[i].getCantidadEnStock() < 10) {
                this.productos[i].mostrarInfo();
            }
        }
    }
}

let electrodomesticoPrincipal = new Electrodomestico('Licuadora', 45000, 56, 'Imusa');
electrodomesticoPrincipal.mostrarInfo();

// Agregar productos correctamente creando instancias de Producto
electrodomesticoPrincipal.agregarProducto('Estufa', 5600, 5, 'Haceb');
electrodomesticoPrincipal.agregarProducto('Nevera', 8522, 78, 'Imusa');
electrodomesticoPrincipal.agregarProducto('Estufa', 78000, 6, 'Kalley');
electrodomesticoPrincipal.agregarProducto('Horno', 96000, 100, 'Haceb');

// Listar productos con stock menor a 10
electrodomesticoPrincipal.listarProductosConPocoStock();
