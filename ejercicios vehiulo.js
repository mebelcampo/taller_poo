class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }

    conducirAuto() {
        console.log(`Yo conduzco un auto de marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`);
    }
}

// Clase Moto
class Moto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
        this.vehiculosAgregados = [];
    }

    conducirMoto() {
        console.log(`Yo conduzco una moto de marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`);
    }

    agregarVehiculo(vehiculo) {
        this.vehiculosAgregados.push(vehiculo);
        console.log(`Vehículo agregado: ${vehiculo.marca} ${vehiculo.modelo}`);
    }

    listarPorTipo(tipo) {
        console.log(`Listando vehículos de tipo: ${tipo.name}`);
        for (let i = 0; i < this.vehiculosAgregados.length; i++) {
            if (this.vehiculosAgregados[i] instanceof tipo) {
                this.vehiculosAgregados[i].mostrarInfo();
            }
        }
    }
}
const auto1 = new Auto('Toyota', '4x4', 2023);
const moto1 = new Moto('AKT', 'H23H2', 2025);

auto1.conducirAuto();
moto1.conducirMoto();

moto1.agregarVehiculo(auto1);
moto1.agregarVehiculo(new Moto('AKT', 'H23H2', 2025));

moto1.listarPorTipo(Moto);
