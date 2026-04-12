RxJs es una librería de JavaScript que combina programación reactiva, funcional y el [[Patrones de diseño#Comportamiento|patrón observer]] para gestionar flujos de datos asíncronos (streams) de forma declarativa y eficiente.

# Observer pattern
Es un [[Patrones de diseño|patrón de diseño de software]] que define una ==dependencia de tipo uno a muchos== entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

> [!example]+
> Semáforo en rojo y dos camiones. El semáforo (observable) emite la información. Los camiones (observers) estarían suscritos al semáforo.

# Iterator pattern
En POO, el patrón iterador define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.
> [!example]+
> Métodos tipo `primero()`, `siguiente()`, `hayMas()`, `elementoActual()`, etc.

# Programación funcional
Crear un conjunto de funciones que tengan un objetivo específico. Es decir, si tengo una función que reciba `A` y retorne `A + 1`, siempre que yo llame a esa función retornará `A + 1`. Sin efectos secundarios, sin mutar los datos → [[APIs del Navegador y DOM#Función pura vs impura|Funciones puras]]
> [!example]+
> En JavaScript todos los objetos pasan [[APIs del Navegador y DOM#Tipo por valor vs referencia|por referencia]], y Rx previene que estos objetos muten de manera accidental cuando pasamos datos a los operadores.

# Resumen
* **Observer pattern** → Notificar cuando suceden cambios
* **Iterator pattern** → Poder ejecutar operaciones secuenciales
* **Programación funcional** → Tener funciones con tareas específicas que reciban argumentos y no muten la información