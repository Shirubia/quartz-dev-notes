## ¿Javascript es un lenguaje orientado a objetos?

JavaScript es un lenguaje orientado a objetos basado en *prototipos* en lugar de clases.

---

JavaScript basado en prototipos significa que la herencia y la reutilización de código se gestionan conectando objetos directamente entre sí, en lugar de usar clases rígidas como en Java o C++. Cada objeto tiene una referencia a otro objeto "padre" (su prototipo), heredando sus métodos y propiedades a través de la "[cadena de prototipos](https://www.google.com/search?q=cadena+de+prototipos&sca_esv=a314a699d70fed9c&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=hYq6afPJBMSnkdUPw7qN2Q4&ved=2ahUKEwjZl_LnqqmTAxVLNvsDHab5CGEQgK4QegQIARAC&uact=5&oq=javascript+basado+en+prototipos+que+significa&gs_lp=Egxnd3Mtd2l6LXNlcnAiLWphdmFzY3JpcHQgYmFzYWRvIGVuIHByb3RvdGlwb3MgcXVlIHNpZ25pZmljYTIFECEYoAFInypQ-QZYpylwAXgBkAEAmAGAAqABuhqqAQYyNC45LjG4AQPIAQD4AQGYAiOgAsYbwgIKEAAYsAMY1gQYR8ICBRAAGIAEwgIGEAAYFhgewgIFEAAY7wXCAggQABiABBiiBJgDAIgGAZAGBpIHBjI1LjkuMaAH63eyBwYyNC45LjG4B78bwgcHMi4yMi4xMcgHVoAIAA&sclient=gws-wiz-serp&mstk=AUtExfC40ajlNYjchox3eLPbSwTP_S2mlszTT8UlOunsApOxEfc2gTPz8VAyPiXDo9ovRCbdLalebXSWvPeQdCn907tbbWcSek8zyWERc2BQD_VZ50MYhGmAfwwCqN8ZqvtXygE&csui=3)".

* [Prototype-based programming](https://developer.mozilla.org/es/docs/Glossary/Prototype-based_programming)

**Aspectos clave:**

- **Basado en Prototipos:** Cada objeto tiene una propiedad prototipo de la cual hereda propiedades y métodos.
- **Azúcar Sintáctico (ES6):**  Desde 2015, se introdujeron palabras clave como class y constructor para facilitar la sintaxis, aunque por detrás sigue funcionando con prototipos.
- **Objetos Fundamentales:** Funciones, arrays y estructuras de datos son objetos.
- **Creación de Objetos:** Se utilizan `new`, `Object.create()`, o literales `{}`.

  
## ¿Qué es un prototype en JS?

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí.


## ¿Que es una cadena de prototipos?

>A grandes rasgos, significa que cada objeto tiene un «**objeto padre**», que a su vez tiene otro, y así sucesivamente... hasta llegar al final. Esto se llama **cadena de prototipos** y es una especie de árbol genealógico de objetos.

>La **cadena de prototipos** es una lista de los métodos y propiedades que comparte un objeto.

>JavaScript implements inheritance by using [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#objects). Each object has an internal link to another object called its _prototype_. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, `null` has no prototype and acts as the final link in this **prototype chain**.

  
  
## ¿Qué es una clase en javascript?

Una clase en JavaScript es una plantilla para crear objetos, introducida en ES6 para organizar el código bajo el paradigma de [Programación Orientada a Objetos](https://www.google.com/search?q=Programaci%C3%B3n+Orientada+a+Objetos&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&ei=D2y5aZKxO6fq7M8P28jo-AI&biw=2048&bih=983&ved=2ahUKEwie7KHipKeTAxUrKvsDHTZ8E8QQgK4QegQIARAC&uact=5&oq=que+es+una+clase+en+javascript&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnF1ZSBlcyB1bmEgY2xhc2UgZW4gamF2YXNjcmlwdDIFEAAYgAQyCBAAGKIEGIkFMgUQABjvBTIIEAAYogQYiQVI0StQAFjcIHAAeAGQAQGYAd4BoAG6EqoBBjI5LjAuMbgBA8gBAPgBAZgCHaAC6hHCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICBhAAGBYYHpgDAJIHAjI5oAf1ogGyBwIyObgH6hHCBwcwLjEwLjE5yAdigAgA&sclient=gws-wiz-serp&mstk=AUtExfB3SJzSHFYdtS8Axul3f-Wtr3Uf-hKCn7gcQGDQwWB97ZIqAKsCC6tz0Y3XTatx0e6n-2Q5oIK0hXU6QOldJEbXxGyDSU6WYHGjo982U5eKdGMaiMGlv9lECTnyGqZE6V4&csui=3) (POO). Define propiedades (datos) y métodos (acciones) que los objetos instanciados compartirán. Técnicamente, son [funciones especiales](https://www.google.com/search?q=funciones+especiales&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&ei=D2y5aZKxO6fq7M8P28jo-AI&biw=2048&bih=983&ved=2ahUKEwie7KHipKeTAxUrKvsDHTZ8E8QQgK4QegQIARAD&uact=5&oq=que+es+una+clase+en+javascript&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnF1ZSBlcyB1bmEgY2xhc2UgZW4gamF2YXNjcmlwdDIFEAAYgAQyCBAAGKIEGIkFMgUQABjvBTIIEAAYogQYiQVI0StQAFjcIHAAeAGQAQGYAd4BoAG6EqoBBjI5LjAuMbgBA8gBAPgBAZgCHaAC6hHCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICBhAAGBYYHpgDAJIHAjI5oAf1ogGyBwIyObgH6hHCBwcwLjEwLjE5yAdigAgA&sclient=gws-wiz-serp&mstk=AUtExfB3SJzSHFYdtS8Axul3f-Wtr3Uf-hKCn7gcQGDQwWB97ZIqAKsCC6tz0Y3XTatx0e6n-2Q5oIK0hXU6QOldJEbXxGyDSU6WYHGjo982U5eKdGMaiMGlv9lECTnyGqZE6V4&csui=3) que funcionan como azúcar sintáctico sobre la herencia de prototipos.

Aunque se les llama "clases", **en el motor de JavaScript siguen funcionando mediante prototipos**, lo que las convierte en una forma más ordenada y legible de manejar la creación de objetos.

  

## ¿Qué es un contexto en JS?

Ámbito dónde se declara una variable. Dónde es visible un trozo de código. **Global**, o **bloque**.

>El [**contexto de ejecución**](https://www.google.com/search?q=contexto+de+ejecuci%C3%B3n&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=4ni5acjsPJGHkdUPz8W6wAk&ved=2ahUKEwjgm8a5paeTAxVJOfsDHaONMh0QgK4QegQIARAB&uact=5&oq=Qu%C3%A9+es+un+contexto+en+javascript%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiIlF1w6kgZXMgdW4gY29udGV4dG8gZW4gamF2YXNjcmlwdD8yCBAhGKABGMMEMggQIRigARjDBDIIECEYoAEYwwRI0BlQsgZYuxRwAXgAkAEAmAFloAGdB6oBBDEwLjG4AQPIAQD4AQGYAgygAtsHwgIIEAAYsAMY7wXCAgsQABiABBiwAxiiBMICBhAAGAcYHsICCBAAGAcYChgewgIIEAAYBxgIGB7CAgUQABjvBcICChAhGKABGMMEGAqYAwCIBgGQBgWSBwQxMC4yoAfPPbIHAzkuMrgH1wfCBwUwLjguNMgHIoAIAA&sclient=gws-wiz-serp&mstk=AUtExfDdycxGjmdn9O0DEpYHqzBIykgx2wH0SxL2DMgomuAe639V1zyicoHe9nQwh0oBFUAqpoDiZ-bQ0hsFIS46ifutgt4CNXLzABOP8UW7viNpYjrI8mc8lCIWhKGiIkIFsO4&csui=3) en JavaScript es el entorno o "escenario" donde se evalúa y ejecuta una porción de código específica. Define qué variables, funciones y objetos (this) están disponibles en ese momento, gestionando cómo funciona el código, según el [blog de DEV Community](https://dev.to/gomezfrannco/javascript-que-es-el-execution-context-3254) y [este artículo de LinkedIn](https://es.linkedin.com/pulse/el-contexto-de-ejecuci%C3%B3n-en-javascript-jose-german-martinez-melchor).

>Se conoce como **ámbito o contexto de una variable** a la zona donde esa variable existe. En principio, existen dos ámbitos muy bien definidos:
>	**Ámbito global**: Existe a lo largo de todo el programa o aplicación.
>	**Ámbito local**: Existe sólo en una pequeña región del programa.


## ¿Qué es el scope en javascript?

Véase más arriba: ¿Qué es un contexto en JS?

>El **scope** (o ámbito) en JavaScript es el contexto actual de ejecución que determina la accesibilidad, visibilidad y tiempo de vida de las variables, funciones y objetos en tu código. Define qué partes del código pueden "ver" o utilizar una variable específica, dividiéndose principalmente en scope global y local (función o bloque).
  
  

## ¿Qué es `this`?

==`this` es el contexto.==

>**THIS es el objeto contexto de Javascript en el cual se está ejecutando el código actual.**

---

En JavaScript, this es una palabra clave especial que hace referencia al **contexto de ejecución actual**; es decir, al objeto que posee o invoca la función en un momento dado. Su valor no es estático: cambia dependiendo de cómo se llama la función (método de objeto, función global, constructor o arrow function). 

**Contextos Comunes de this:**

- **Método de Objeto:** Cuando una función es un método de un objeto, this referencia al objeto "antes del punto".
- **Función Global:** Fuera de cualquier objeto, this hace referencia al objeto global (window en navegadores).
- **Constructor (new):** Dentro de una función constructora, this referencia al nuevo objeto que se está creando.
- **Arrow Functions:** No tienen su propio this; heredan el this del contexto léxico externo.
- **Eventos:** En un manejador de eventos, this referencia al elemento DOM que disparó el evento. 

**Formas de manipular this:**  
Los métodos `call()`, `apply()` y `bind()` permiten establecer explícitamente el valor de `this`.


## Call, bind, apply

>JavaScript offers `call()`, `apply()`, and `bind()` to control the value of _`this`_ inside functions.  

## ¿Qué es una *closure* ?

>Una [closure](https://www.google.com/search?q=closure&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&ei=uGe5aZ37I8WJ9u8PoLaB6Ao&biw=2048&bih=983&ved=2ahUKEwjysMP7qKeTAxUlTaQEHU8XDbUQgK4QegQIARAB&uact=5&oq=javascript+que+es+una+closure+explicado+en+terminos+simples&gs_lp=Egxnd3Mtd2l6LXNlcnAiO2phdmFzY3JpcHQgcXVlIGVzIHVuYSBjbG9zdXJlIGV4cGxpY2FkbyBlbiB0ZXJtaW5vcyBzaW1wbGVzMgUQIRigATIFECEYoAFItztQAFiPOnAAeAGQAQCYAc0EoAH7SKoBDDIwLjYuMS42LjYuM7gBA8gBAPgBAZgCKqAClkrCAgUQABiABMICBhAAGBYYHsICCBAAGBYYChgewgIFECEYnwXCAgUQABjvBZgDAJIHCzE5LjcuMS41LjEwoAfh1AGyBwsxOS43LjEuNS4xMLgHlkrCBwYwLjM0LjjIB1qACAA&sclient=gws-wiz-serp&mstk=AUtExfD-GidmnY5YtfLD6Ex7Q2YsnUF0dY3K1p1nX0SeBepgEprxsMUi42-ywEJSG7FMeuX2MhQaLXDQco7N1gaOiu5RWCVmZGHqXnVtH2LYlC-s8ChqeGOMcoDzetOfJb607ow&csui=3) (o clausura) en JavaScript es una función que "recuerda" el entorno (variables) en el que fue creada, incluso después de que la función principal que la contenía haya terminado de ejecutarse. Es básicamente **una función interna que mantiene acceso a las variables de su función padre, permitiendo persistir datos entre llamadas**. 

**En términos simples:**  
Imagina que una función padre crea una variable y dentro hay una función hija que la usa. Si la función padre termina, la función hija (la closure) "se lleva de recuerdo" esa variable y puede seguir usándola cuando se invoque más tarde.
  


## What is a Higher Order Function?

>A higher order function is a function that takes one or more functions as arguments or returns a function as its result.



## ¿Diferencias entre function y Arrow function?

>Las arrow functions ==no tienen su propio contexto== (`this`) sino que lo heredan del contexto superior.

No tienen el mismo contexto: una lo tiene (function) y la otra no (arrow function).