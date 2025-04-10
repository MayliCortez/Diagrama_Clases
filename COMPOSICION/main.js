// Clase Motor (no puede existir sin Coche)
class Motor {
    constructor(modelo) {
        this.modelo = modelo;
    }

    mostrarDetalles() {
        console.log(`Motor Modelo: ${this.modelo}`);
    }
}

// Clase Coche (contiene Motor)
class Coche {
    constructor(marca, modeloMotor) {
        this.marca = marca;
        this.motor = new Motor(modeloMotor); // El coche crea y tiene un motor
    }

    mostrarDetalles() {
        console.log(`Coche Marca: ${this.marca}`);
        this.motor.mostrarDetalles();
    }
}

// Crear un coche con un motor
const coche1 = new Coche('Toyota', 'V8');

// Mostrar detalles del coche y su motor
coche1.mostrarDetalles();
