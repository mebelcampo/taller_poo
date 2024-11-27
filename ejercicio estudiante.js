class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Saludar: " + this.nombre + ", Edad: " + this.edad);
    }
}

let personita = new Persona('Angela', 19);
personita.saludar();

class Estudiante extends Persona { 
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificacion = [];
    }
    saludar() {
        console.log("Saludar: " + this.nombre + ", Edad: " + this.edad + "calificacion:" + this.calificacion);
    }

    agregarcalificacion(calificaciones) {
        this.calificacion.push(calificaciones);
        console.log("estudiante: " + this.nombre, "notas:" + calificaciones);
    }
    obtenerpromedios(){
        let resultado=0;
        let promedio=0;
        for (let i = 0; i < this.calificacion.length; i++){
            resultado = this.calificacion[i] +resultado
        }
        promedio = resultado / this.calificacion.length
        console.log("promedio de notas:"+promedio  )
    }
}
let promedio = new Estudiante ("Angela", '19', '23')
promedio.saludar();
promedio.agregarcalificacion(5);
promedio.agregarcalificacion(4);
promedio.agregarcalificacion(5);
promedio.obtenerpromedios();
