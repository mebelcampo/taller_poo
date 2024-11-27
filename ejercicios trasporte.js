// Clase base Transporte
class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }

    // Método para mostrar información general del transporte
    mostrarInfo() {
        console.log(`Capacidad: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`);
    }
}

// Subclase Autobus que hereda de Transporte
class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible, numeroDePlazas) {
        super(capacidad, tipoCombustible);
        this.numeroDePlazas = numeroDePlazas;
    }

    // Método específico para arrancar el autobús
    arrancar() {
        console.log("El autobús ha arrancado.");
    }

    // Sobrescribir mostrarInfo para incluir el número de plazas
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Número de plazas: ${this.numeroDePlazas}`);
    }
}

// Subclase Bicicleta que hereda de Transporte
class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible, tipoDeFreno) {
        super(capacidad, tipoCombustible);
        this.tipoDeFreno = tipoDeFreno;
    }

    // Método específico para pedalear la bicicleta
    pedalear() {
        console.log("La bicicleta está en movimiento.");
    }

    // Sobrescribir mostrarInfo para incluir el tipo de freno
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo de freno: ${this.tipoDeFreno}`);
    }
}

// Crear instancias de Autobus y Bicicleta
let autobus1 = new Autobus(50, 'Diesel', 40);
let bicicleta1 = new Bicicleta(1, 'Ninguno', 'V-Brake');
let autobus2 = new Autobus(30, 'Gasolina', 30);
let bicicleta2 = new Bicicleta(1, 'Ninguno', 'Disco');

// Almacenar los transportes en un arreglo
let transportes = [autobus1, bicicleta1, autobus2, bicicleta2];

// Recorrer el arreglo de transportes y ejecutar las acciones correspondientes
transportes.forEach(transporte => {
    transporte.mostrarInfo();  // Mostrar la información del transporte

    // Ejecutar acciones específicas dependiendo del tipo de transporte
    if (transporte instanceof Autobus) {
        transporte.arrancar();  // Si es un Autobús, arrancar
    } else if (transporte instanceof Bicicleta) {
        transporte.pedalear();  // Si es una Bicicleta, pedalear
    }

  
});
