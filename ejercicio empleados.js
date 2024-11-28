// Clase base Empleado
class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    // Método para calcular el sueldo total (por defecto retorna el sueldo base)
    calcularSueldo() {
        return this.sueldoBase;
    }
}

// Clase derivada EmpleadoTiempoCompleto
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldoBase, horasTrabajadas) {
        super(nombre, sueldoBase);
        this.horasTrabajadas = horasTrabajadas;
    }

    // Sobrescribir el método calcularSueldo para empleados a tiempo completo
    calcularSueldo() {
        return this.sueldoBase + (this.horasTrabajadas * 10); // 10 es el pago adicional por cada hora trabajada
    }
}

// Clase derivada EmpleadoMedioTiempo
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldoBase, horasTrabajadas) {
        super(nombre, sueldoBase);
        this.horasTrabajadas = horasTrabajadas;
    }

    // Sobrescribir el método calcularSueldo para empleados a medio tiempo
    calcularSueldo() {
        return this.sueldoBase + (this.horasTrabajadas * 8); // 8 es el pago adicional por cada hora trabajada
    }
}

// Crear una lista de empleados (un arreglo)
let empleados = [
    new EmpleadoTiempoCompleto("ester moca", 2000, 243),  
    new EmpleadoMedioTiempo("Isabela Fernandez", 1200, 45),      
    new EmpleadoTiempoCompleto("ana Solares", 2500, 134),
    new EmpleadoMedioTiempo("juan Rodríguez", 1000, 30)  
];

// Mostrar los sueldos de todos los empleados
empleados.forEach(empleado => {
    console.log(`${empleado.nombre}: $${empleado.calcularSueldo()}`);
});
