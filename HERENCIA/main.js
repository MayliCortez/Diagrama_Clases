// Clase Superclase
class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    // Método común para todas las subclases
    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

// Clase Subclase (hereda de Animal)
class Perro extends Animal {
    constructor(nombre, especie, raza) {
        super(nombre, especie);  // Llamada al constructor de la superclase
        this.raza = raza;
    }

    // Sobreescribir el método hablar
    hablar() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

// Crear un objeto de la subclase
const miPerro = new Perro('Rex', 'Canino', 'Labrador');

// Mostrar detalles del perro
console.log(`${miPerro.nombre} es un ${miPerro.especie} de raza ${miPerro.raza}.`);

// Llamar al método hablar, que es sobrescrito en la subclase
miPerro.hablar();  // Llamará al método hablar de la clase Perro
