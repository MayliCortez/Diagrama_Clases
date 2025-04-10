// Clase Rueda
class Rueda {
    constructor(tamano) {
        this.tamano = tamano;
    }

    mostrarDetalles() {
        console.log(`Rueda de tamaño: ${this.tamano}`);
    }
}

// Clase Coche
class Coche {
    constructor(marca, rueda) {
        this.marca = marca;
        this.rueda = rueda; // Asociación: El coche tiene una rueda
    }

    mostrarDetalles() {
        console.log(`Coche Marca: ${this.marca}`);
        this.rueda.mostrarDetalles();
    }
}

// Crear una rueda
const rueda1 = new Rueda('16 pulgadas');

// Crear un coche y asociarle una rueda
const coche1 = new Coche('Toyota', rueda1);

// Mostrar detalles del coche y su rueda
coche1.mostrarDetalles();

