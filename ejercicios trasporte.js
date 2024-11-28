class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }

    mostrarInfo() {
        console.log(`Capacidad: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`);
    }
}

class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible, numeroDePlazas) {
        super(capacidad, tipoCombustible);
        this.numeroDePlazas = numeroDePlazas;
    }

    arrancar() {
        console.log("El autobús ha arrancado.");
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Número de plazas: ${this.numeroDePlazas}`);
    }
}

class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible, tipoDeFreno) {
        super(capacidad, tipoCombustible);
        this.tipoDeFreno = tipoDeFreno;
    }

    pedalear() {
        console.log("La bicicleta está en movimiento.");
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo de freno: ${this.tipoDeFreno}`);
    }
}

let autobus1 = new Autobus(50, 'Diesel', 40);
let bicicleta1 = new Bicicleta(1, 'Ninguno', 'V-Brake');
let autobus2 = new Autobus(30, 'Gasolina', 30);
let bicicleta2 = new Bicicleta(1, 'Ninguno', 'Disco');

let transportes = [autobus1, bicicleta1, autobus2, bicicleta2];

transportes.forEach(transporte => {
    transporte.mostrarInfo();
    if (transporte instanceof Autobus) {
        transporte.arrancar();
    } else if (transporte instanceof Bicicleta) {
        transporte.pedalear();
    }
});
