class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León'); // Llamar al constructor de la clase base
    }

    rugir() {
        console.log(`${this.nombre} ruge: ¡ROAR!`);
    }
}

class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    trompetear() {
        console.log(`${this.nombre} trompetea: ¡fiifif!`);
    }
}

class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    gruñir() {
        console.log(`${this.nombre} gruñe: ¡GRRR!`);
    }
}

class Zoologico {
    constructor() {
        this.animales = []; 
    }

    agregarAnimal(animal) {
        this.animales.push(animal); 
    }

    hacersonidos() { // Método para hacer sonidos
        for (let i = 0; i < this.animales.length; i++) {
            let animal = this.animales[i];
            if (animal instanceof Leon) {
                animal.rugir();
            } else if (animal instanceof Elefante) {
                animal.trompetear();
            } else if (animal instanceof Tigre) {
                animal.gruñir();
            } 
        }
    }
}


let leoncito = new Leon('Simba');
let elefantito = new Elefante('Dumbo');
let tigrito = new Tigre('Tiger');

// Crear el zoológico y agregar animales
let zoologico = new Zoologico();
zoologico.agregarAnimal(leoncito);
zoologico.agregarAnimal(elefantito);
zoologico.agregarAnimal(tigrito);

// Llamar al método para hacer sonidos
zoologico.hacersonidos();

