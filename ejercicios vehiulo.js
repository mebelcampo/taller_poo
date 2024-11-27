
//Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases
 //derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, 
 //como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.

class vehiulo {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarinfo(){
        console.log(this.marca + this.modelo + this.año);
    }
}
class auto extends vehiulo{
    constructor(marca, modelo, año){
        super(marca, modelo, año)
    }
    conducirauto(){
        console.log('yo conduzco un auto de marca:'+this.marca+'modelo:'+this.modelo+'año:'+this.año)

    }

}
class moto extends vehiulo{
    constructor(marca, modelo, año){
        super(marca, modelo, año)
        this.tipo =[]
    }
    conducirmoto(){
        console.log('yo conduzco una moto de marca:'+this.marca+'modelo:'+this.modelo+'año:'+this.año)
        
    }
    agregarvehiulos(vehiulo){
        this.tipo.push(vehiulo);
        console.log(`vehiulos agregados: ${vehiulo}`);
    }

    listarPorTipo(tipo) {
        console.log(`Listando vehículos de tipo: ${tipo.nombre}`);
        for (let i = 0; i < this.tipo.length; i++) {
            if (this.tipo[i] instanceof tipo) {
                this.tipo[i].mostrarInfo();
            }
        }

    }
}
const auto1 = new auto('Toyota', 'Corolla', 2021);
const moto1 = new moto('Yamaha', 'YZF-R6', 2019);
auto1.conducirAuto(); 
moto1.conducirMoto(); 
