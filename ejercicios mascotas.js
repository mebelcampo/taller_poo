// Clase base Mascota
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método para mostrar información básica de la mascota
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}`);
    }

    // Método para hacer que la mascota realice su acción (será sobrescrito en las subclases)
    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase derivada Perro
class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, "Perro");
    }

    // Método específico para ladrar
    ladrar() {
        console.log(`${this.nombre} está ladrando: ¡Guau! ¡Guau!`);
    }

    // Sobrescribir el método hacerSonido
    hacerSonido() {
        this.ladrar();
    }
}

// Clase derivada Gato
class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, "Gato");
    }

    // Método específico para maullar
    maullar() {
        console.log(`${this.nombre} está maullando: ¡Miau! ¡Miau!`);
    }

    // Sobrescribir el método hacerSonido
    hacerSonido() {
        this.maullar();
    }
}

// Crear instancias de las mascotas (Perro y Gato)
let perro1 = new Perro('Rex');
let gato1 = new Gato('Felix');
let perro2 = new Perro('Max');
let gato2 = new Gato('Tom');

// Almacenar las mascotas en un arreglo
let mascotas = [perro1, gato1, perro2, gato2];

// Recorrer el arreglo de mascotas y hacer que cada una realice su sonido
mascotas.forEach(mascota => {
    mascota.mostrarInfo(); // Mostrar la información de la mascota
    mascota.hacerSonido(); // Hacer que la mascota realice su sonido
   
});
