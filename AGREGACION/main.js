// Clase Parte
class Motor {
    constructor(modelo) {
        this.modelo = modelo;
    }
}

// Clase Todo
class Coche {
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor; // Agregación: El coche tiene un motor, pero el motor puede existir por sí solo
    }

    mostrarDetalles() {
        console.log(`Coche Marca: ${this.marca}, Motor Modelo: ${this.motor.modelo}`);
    }
}

// Crear un motor
const motor1 = new Motor('V8');

// Crear un coche y agregarle el motor
const coche1 = new Coche('Ford', motor1);

// Mostrar detalles del coche
coche1.mostrarDetalles();
