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
    new EmpleadoTiempoCompleto("Juan Pérez", 2000, 160),  // 160 horas trabajadas
    new EmpleadoMedioTiempo("Ana Gómez", 1200, 80),      // 80 horas trabajadas
    new EmpleadoTiempoCompleto("Carlos López", 2500, 170),// 170 horas trabajadas
    new EmpleadoMedioTiempo("María Rodríguez", 1000, 50)  // 50 horas trabajadas
];

// Mostrar los sueldos de todos los empleados
empleados.forEach(empleado => {
    console.log(`${empleado.nombre}: $${empleado.calcularSueldo()}`);
});
