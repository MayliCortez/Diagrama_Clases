
# Diagrama_Clases

# Diagramas de Clases - Relaciones y Conexiones

Este repositorio contiene ejemplos de relaciones y conexiones entre clases en los diagramas de clases. Se han implementado diferentes tipos de relaciones entre clases, que incluyen:

## Tipos de relaciones representadas:
- **Agregación**: Representa una relación de "todo/parte", donde el objeto que contiene (la clase agregadora) puede existir independientemente del objeto que está contenido.
- **Asociación**: Relación estructural entre dos clases. Puede ser de uno a uno, uno a muchos, o muchos a muchos.
- **Composición**: Es una forma más fuerte de agregación, donde el objeto contenido no puede existir sin el objeto contenedor.
- **Dependencia**: Relación en la que una clase depende de otra para su funcionamiento.
- **Herencia**: Relación en la que una clase (subclase) hereda atributos y métodos de otra clase (superclase).

## Ejemplos en este repositorio:

### 1. **Agregación**:
En este ejemplo, la clase `Coche` tiene una `Rueda`, pero el `Motor` puede existir independientemente del coche.

### 2. **Asociación**:
Aquí se muestra cómo un `Departamento` tiene muchos `Empleados`, y la relación entre ellos es de "uno a muchos".

### 3. **Composición**:
Este ejemplo muestra cómo un `Coche` tiene un `Motor`, pero el `Motor` no puede existir sin el `Coche`.

### 4. **Dependencia**:
En este ejemplo, la clase `Cliente` depende de la clase `Servicio` para solicitar un servicio.

### 5. **Herencia**:
La clase `Perro` hereda de la clase `Animal`, reutilizando su comportamiento y atributos, y sobreescribiendo algunos métodos.

## Uso:
1. Clona este repositorio:
   ```bash
   git clone https://github.com/MayliCortez/Diagramas-de-Clases.git
