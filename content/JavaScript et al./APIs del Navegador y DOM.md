## ¿En qué se diferencian _local storage_ y _session storage_?

La principal diferencia radica en la **persistencia y el alcance** de los datos. `localStorage` guarda información indefinidamente (incluso al cerrar el navegador) y es compartida entre todas las pestañas, mientras que `sessionStorage` guarda datos solo por pestaña y los elimina al cerrar la sesión o pestaña. 

- **`localStorage` (Persistente):** Los datos no tienen fecha de caducidad. Se mantienen tras cerrar el navegador, la pestaña o reiniciar el equipo. Ideal para datos a largo plazo (ej. configuración de usuario, temas claro/oscuro).
- **`sessionStorage` (Temporal):** Los datos se eliminan automáticamente al cerrar la pestaña o el navegador. Ideal para datos temporales (ej. borradores de formularios, estado de una sesión única).
- **Alcance:** `localStorage` es compartido entre pestañas de la misma página, mientras que `sessionStorage` está limitado exclusivamente a la pestaña que creó los datos.
  
  
## ¿Qué es el DOM? ¿Qué es es el ShadowDOM? ¿Slot? ¿Scope Elements?

1. **¿Qué es el DOM (Document Object Model)?**

>HTML is a configuration language that tells the browser how to make a DOM. The html is just a text document. The browser ingests it, parses it, and produces a DOM that it can render.

>Remember HTML is just instructions for making a website, it’s not a website itself.

— [**reddit**](https://www.reddit.com/r/learnjavascript/comments/y633pu/why_do_we_need_dom_instead_of_just_html/)

El **DOM** es la representación estructurada de un documento HTML en forma de árbol, donde cada rama termina en un nodo y cada nodo contiene objetos. 

- **Función:** Es la interfaz de programación (API) que permite a JavaScript interactuar con el HTML, permitiendo cambiar la estructura, estilos o contenido de una página web dinámicamente.
- **Funcionamiento:** Cuando el navegador lee el HTML, convierte la página en un objeto document que representa el árbol DOM.
- **Características:** Es global para toda la página. Cualquier cambio en él puede requerir un re-renderizado de la página completa. 

**2. ¿Qué es el Shadow DOM?**

El **Shadow DOM** es un estándar web que permite crear un "árbol DOM" separado y ==encapsulado==, atado a un elemento del DOM regular, pero oculto de él. 

- **Encapsulamiento de estilos:** Su principal objetivo es aislar estilos y componentes para evitar conflictos. El CSS definido dentro de un Shadow DOM no se "escapa" hacia afuera, y el CSS global no afecta a los estilos internos.
- **Estructura:** Se conecta a un elemento a través de un "Shadow Root".
- **Uso:** Es la base de los **Web Components**, permitiendo crear componentes (como botones o widgets) que funcionan de forma independiente en cualquier entorno (Vanilla JS, React, Angular). 

**3. ¿Qué es un Slot?**

Los **Slots** son marcadores de posición (_placeholders_) que se definen dentro de la plantilla del Shadow DOM. 

- **Función:** Permiten insertar contenido externo (del "Light DOM" o DOM regular) dentro del Shadow DOM de un componente de manera flexible.

- **Tipos:**
    - **Slot por defecto:** `<slot></slot>` captura todo el contenido que no tiene un nombre específico.
    - **Slots con nombre:** `<slot name="nombre"></slot>` captura elementos específicos que tengan el atributo slot="nombre". 

**4. ¿Qué son los Scoped Elements (Scoped Custom Element Registries)?**

Los _Scoped Elements_ son una característica avanzada de los Web Components que permite **aislar el registro de componentes personalizados** a un árbol DOM específico (como un Shadow Root). 

- **Problema que resuelve:** Normalmente, los componentes se registran en un "registro global" (`window.customElements`). Si dos librerías intentan usar el mismo nombre para un componente (ej. `<my-button>`), el navegador da error.
- **Solución:** Los _Scoped Registries_ permiten que un componente tenga su propia versión de otro componente, separando sus definiciones del registro global.
  
  

## ¿En qué se diferencian una SPA y una Multipage/PWA?.

- **SPA:** Carga una sola página HTML y actualiza el contenido ==dinámicamente== mediante JavaScript sin recargar.
- **MPA (Multipage):** Carga una nueva página del servidor cada vez que el usuario hace clic en un enlace.
- **PWA:** Es una web moderna (puede ser SPA o MPA) que utiliza _service workers_ para funcionar sin conexión, instalarse como una app nativa y enviar notificaciones.
  
  

## ¿Qué apis del navegador conoces?

Además del DOM, existen muchas otras APIs web que amplían las capacidades de una aplicación sin necesidad de librerías externas:

- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch): Para realizar solicitudes de red y obtener datos de servidores de forma asíncrona.
- [Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API): Incluye localStorage y sessionStorage para guardar datos localmente en el navegador de forma persistente o temporal.
- [IndexedDB](https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API): Una base de datos más potente para almacenar grandes cantidades de datos estructurados en el cliente.
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Document): Permite obtener la ubicación geográfica del usuario (con su permiso).
- Canvas API: Utilizada para dibujar gráficos 2D y animaciones directamente en la pantalla.
- Web Audio API: Proporciona un sistema potente para controlar y manipular audio en la web. 


## ¿Qué es la sincronía en JS?

En JS al final solo hay un hilo.

>La sincronía en [JavaScript](https://www.freecodecamp.org/espanol/news/sincrono-vs-asincrono-en-javascript/) significa que el código se ejecuta secuencialmente, línea por línea, en un solo hilo (single thread). Cada operación debe finalizar antes de que comience la siguiente.
  
  
## ¿Cómo hacemos la asincronía?

==Con promesas.==

```js
.then
.catch
.finally
```
  
  
`async` y `await` permite escribir lo mismo de forma más legible.


## ¿Cómo resolverías un grupo de promesas?

`Promise.all()`

```js
const promesas = [fetch(url1), fetch(url2), fetch(url3)];

Promise.all(promesas)
	.then((resultados) => console.log(resultados))
	.catch((error) => console.error("Alguna falló:", error));
```  

Para un código más limpio y legible, puedes combinar `async`/`await` con `Promise.all`.

```js
async function resolverPromesas() {
	try {
		const resultados = await Promise.all([p1, p2, p3]);
		console.log(resultados);
	} catch (error) {
		console.error("Una promesa falló", error);
	}
} finally {} (opcional)
```

  

## ¿Cómo se manejan los errores en un `async`/`await`?

Los errores en `async`/`await` se manejan principalmente utilizando bloques **`try...catch`**, lo que permite capturar rechazos de promesas de forma sincrónica y limpia. El código asíncrono se coloca dentro del `try`, y si una promesa es rechazada, el flujo salta automáticamente al `catch`, evitando errores no controlados. 

```js
async function fetchData() {
	try {
		const response = await fetch('https://api.ejemplo.com/datos');
		// Si la respuesta no es 200-299, lanzar error manualmente
		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		// Manejo del error
		console.error('Hubo un problema:', error.message);
	}
}
```  

  

## 4. ¿Qué se ejecuta antes un setTimeout o una promesa?

Promesa
  

## Función pura vs impura

==Pura: misma entrada = misma salida==.

>Las funciones puras en JavaScript devuelven siempre el mismo resultado para las mismas entradas y ==carecen de efectos secundarios== (no modifican variables externas ni el DOM), garantizando predictibilidad y fácil testeo. Las impuras pueden alterar el estado externo, depender de variables globales o realizar interacciones (API, consola), siendo necesarias para acciones reales, pero más complejas de gestionar. 



## Tipo por valor vs referencia

Primitivo vs objeto:

| **Tipo de Dato**               | **Cómo se pasa**         | **¿Afecta al original si se modifica?** |
| ------------------------------ | ------------------------ | --------------------------------------- |
| **Primitivo** (string, num...) | Por Valor (copia)        | No                                      |
| **Objeto** (Obj, Array)        | Por Referencia (puntero) | Sí                                      |

- **¿Por qué importa?** Para evitar bugs inesperados al pasar objetos a funciones y mejorar el rendimiento al no copiar objetos grandes innecesariamente.    


## Tipo `Symbol` en JavaScript

>Es un **tipo de dato primitivo** introducido en ES6, inmutable y único, utilizado principalmente como identificador clave para propiedades de objetos. Garantiza que no haya colisiones de nombres entre propiedades, incluso si se crean con la misma descripción.



## Automatización de tareas

==Para generar el código final, ejecutas ciertos scripts hechos en node.==

Automatizadores / Task runners: Webpack, vite, gulp...

  

## HTTP requests

También se pueden hacer con fetch Api (`fetch()`)



## Apis en html5: cómo averiguar la compatibilidad

* [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)

>"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.