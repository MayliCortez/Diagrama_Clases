// Clase Servicio
class Servicio {
    realizarServicio() {
        console.log("Servicio realizado.");
    }
}

// Clase Cliente
class Cliente {
    solicitarServicio() {
        console.log("Cliente solicitando servicio...");
        const servicio = new Servicio(); // Dependencia: Cliente depende de Servicio
        servicio.realizarServicio();    // Usamos el servicio en esta clase
    }
}

// Crear un cliente
const cliente1 = new Cliente();
cliente1.solicitarServicio();  // El cliente solicita el servicio, lo cual depende de la clase Servicio
