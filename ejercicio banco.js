class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El depósito debe ser mayor a 0.");
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    mostrarInfo() {
        console.log(`Cuenta: ${this.numeroCuenta}, Saldo: $${this.saldo}`);
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo, tasaInteres) {
        super(numeroCuenta, saldo);
        this.tasaInteres = tasaInteres; 
    }

    aplicarIntereses() {
        const interes = this.saldo * (this.tasaInteres / 100);
        this.saldo += interes;
        console.log(`Intereses aplicados: $${interes.toFixed(2)}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tasa de interés: ${this.tasaInteres}%`);
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo, limiteDescubierto) {
        super(numeroCuenta, saldo);
        this.limiteDescubierto = limiteDescubierto; 
    }

    retirar(cantidad) {
        if (cantidad > 0 && (this.saldo - cantidad >= -this.limiteDescubierto)) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto excede el límite de descubierto.");
        }
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Límite de descubierto: $${this.limiteDescubierto}`);
    }
}

let cuentaAhorros1 = new CuentaAhorros('13453', 3000, 5); 
let cuentaCorriente1 = new CuentaCorriente('3332', 300, 400); 
let cuentaAhorros2 = new CuentaAhorros('34533', 1000, 3); 

let cuentas = [cuentaAhorros1, cuentaCorriente1, cuentaAhorros2];

class Banco {
    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    realizarOperacion(operacion, cantidad) {
        this.cuentas.forEach(cuenta => {
            console.log(`Operación en cuenta ${cuenta.numeroCuenta}:`);
            if (operacion === 'depositar') {
                cuenta.depositar(cantidad);
            } else if (operacion === 'retirar') {
                cuenta.retirar(cantidad);
            }
        });
    }

    aplicarIntereses() {
        this.cuentas.forEach(cuenta => {
            if (cuenta instanceof CuentaAhorros) {
                console.log(`Aplicando intereses en la cuenta ${cuenta.numeroCuenta}:`);
                cuenta.aplicarIntereses();
            }
        });
    }

    mostrarCuentas() {
        this.cuentas.forEach(cuenta => {
            cuenta.mostrarInfo();
        });
    }
}

let banco = new Banco();

banco.agregarCuenta(cuentaAhorros1);
banco.agregarCuenta(cuentaCorriente1);
banco.agregarCuenta(cuentaAhorros2);

banco.mostrarCuentas();

banco.realizarOperacion('depositar', 100);
banco.realizarOperacion('retirar', 50);

banco.aplicarIntereses();
