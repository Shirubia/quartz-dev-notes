## ¿Javascript es multihilo o monohilo? , ¿es síncrono o asíncrono?.

JavaScript es ==monohilo y síncrono==.

  
## ¿Qué tipo de lenguaje es Javascript? Interpretado, compilado.

==Interpretado==.


## ¿Qué tipo de lenguaje es Typescript? Interpretado, compilado…

TypeScript es un lenguaje ==transpilado==.

- **Compilación (Transpilación):** El compilador de TypeScript (tsc) convierte el código .ts en código .js funcional.
  
  
## ¿Qué es el _event Loop_ de javascript?

==Maneja la concurrencia.==

>El **Event Loop** (bucle de eventos) es quien coordina **cuándo** las tareas pueden volver al Call Stack.

---

El _Event Loop_ (bucle de eventos) es el mecanismo fundamental en JavaScript que gestiona la ejecución de tareas asíncronas, permitiendo que el código no bloquee el hilo principal, a pesar de ser un lenguaje monohilo. Su función es revisar continuamente si la pila de llamadas ([_Call Stack_](https://www.google.com/search?q=Call+Stack&sca_esv=cf7b893ecca69e9d&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=O1m6aZGAL66Sxc8PtbvS8AY&ved=2ahUKEwi5isjL-6iTAxWBB9sEHbGKPfQQgK4QegQIARAC&uact=5&oq=Qu%C3%A9+es+el+evento+Loop+de+javascript%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiJVF1w6kgZXMgZWwgZXZlbnRvIExvb3AgZGUgamF2YXNjcmlwdD8yBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSIwPUP4EWP4EcAF4AZABAJgBjgGgAY4BqgEDMC4xuAEDyAEA-AEB-AECmAICoAKaAagCFMICIBAAGIAEGLQCGNQDGOUCGOcGGLcDGIoFGOoCGIoD2AEBwgIdEAAYgAQYtAIY5QIY5wYYtwMYigUY6gIYigPYAQHCAhAQABgDGLQCGOoCGI8B2AECwgIQEC4YAxi0AhjqAhiPAdgBApgDB_EFjsNWwWpU_TK6BgQIARgHugYGCAIQARgKkgcDMS4xoAfmBLIHAzAuMbgHkgHCBwUwLjEuMcgHB4AIAA&sclient=gws-wiz-serp&mstk=AUtExfC47rQ0_B097GX3r5PIsluq4noxnFWv1DQiiNtaDsb4lJ8ftujxSIpujuuqN_nODDAXS81q9wACSa7AeSBtNiNHE19UfEQ7wlzQFuakaqlKrVEaWeE9DZYEQEGfFUElyEw&csui=3)) está vacía para procesar tareas pendientes de la cola ([_Callback Queue_](https://www.google.com/search?q=Callback+Queue&sca_esv=cf7b893ecca69e9d&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=O1m6aZGAL66Sxc8PtbvS8AY&ved=2ahUKEwi5isjL-6iTAxWBB9sEHbGKPfQQgK4QegQIARAD&uact=5&oq=Qu%C3%A9+es+el+evento+Loop+de+javascript%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiJVF1w6kgZXMgZWwgZXZlbnRvIExvb3AgZGUgamF2YXNjcmlwdD8yBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABSIwPUP4EWP4EcAF4AZABAJgBjgGgAY4BqgEDMC4xuAEDyAEA-AEB-AECmAICoAKaAagCFMICIBAAGIAEGLQCGNQDGOUCGOcGGLcDGIoFGOoCGIoD2AEBwgIdEAAYgAQYtAIY5QIY5wYYtwMYigUY6gIYigPYAQHCAhAQABgDGLQCGOoCGI8B2AECwgIQEC4YAxi0AhjqAhiPAdgBApgDB_EFjsNWwWpU_TK6BgQIARgHugYGCAIQARgKkgcDMS4xoAfmBLIHAzAuMbgHkgHCBwUwLjEuMcgHB4AIAA&sclient=gws-wiz-serp&mstk=AUtExfC47rQ0_B097GX3r5PIsluq4noxnFWv1DQiiNtaDsb4lJ8ftujxSIpujuuqN_nODDAXS81q9wACSa7AeSBtNiNHE19UfEQ7wlzQFuakaqlKrVEaWeE9DZYEQEGfFUElyEw&csui=3)).

🔁 **What the Event Loop actually does**

It repeatedly:

1. Checks: “Is the **Call Stack empty**?”
2. If yes:
    - Runs **all microtasks**
    - Then runs **one macrotask**
3. Repeat forever

👉 So it’s more like a **scheduler / orchestrator**, not a queue manager.

>Event Loop manages the **execution order of tasks from the queues.**
  

## ¿Qué es el _hoisting_?

==Javascript, internamente, subre las variables y las funciones arriba.==

---

>El _hoisting_ (o izado) es un comportamiento en JavaScript donde las declaraciones de variables y funciones se "mueven" automáticamente a la parte superior de su ámbito (scope) antes de ejecutar el código. 

>El [**hoisting**](https://www.google.com/search?q=hoisting&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=MVu6aYCkPL_ri-gPpaGmsQU&ved=2ahUKEwjRr4Pa_aiTAxX5Rv4FHfvoKmcQgK4QegQIARAB&uact=5&oq=que+es+hoisting+javascript+es6&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnF1ZSBlcyBob2lzdGluZyBqYXZhc2NyaXB0IGVzNjIFECEYoAEyBRAhGJ8FSNEOUIYIWL0NcAF4AZABAJgBhwGgAcEDqgEDMS4zuAEDyAEA-AEBmAIFoALcA8ICChAAGLADGNYEGEfCAgYQABgWGB7CAgUQABjvBcICCBAAGKIEGIkFmAMAiAYBkAYDkgcDMS40oAf9CrIHAzAuNLgH1gPCBwUwLjMuMsgHDYAIAA&sclient=gws-wiz-serp&mstk=AUtExfBNmBnSNzYCGOZT3SBOKcIZl9BVxfchRqBu472h8-fxPSB8W0__mPo4CIjvudeCyP946CAN57yOGY_I0D_hmzO3BcY_juPexBw6HUWpmK2EX9-G_9_gafawzE5j2GIk2SE&csui=3) (elevación) en JavaScript ES6+ es un mecanismo donde las declaraciones de variables y funciones son procesadas y almacenadas en memoria antes de ejecutar el código, permitiendo usarlas antes de declararlas. **ES6 introdujo let y const**, que se elevan pero no se inicializan, causando errores si se acceden antes de su declaración, a diferencia de var.

Teniendo en cuenta cómo funciona el hoisting, **podemos llamar a una función y definirla más abajo**, porque automáticamente JS la “subirá”.
  
  

## ¿Qué es el Call Stack en Javascript?

>El **Call Stack** es donde JavaScript ejecuta tu código línea por línea. Cada vez que se llama a una función, esta se “apila”. Cuando termina, se “desapila”.

>El [**Call Stack**](https://www.google.com/search?q=Call+Stack&sca_esv=4ae20d8bd47daad1&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=zFu6ab7vIPfmi-gPp43wwAg&ved=2ahUKEwiz8_WU_qiTAxUNzgIHHWrxI7YQgK4QegQIARAB&uact=5&oq=Qu%C3%A9+es+el+Call+Stack+en+Javascript%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiJFF1w6kgZXMgZWwgQ2FsbCBTdGFjayBlbiBKYXZhc2NyaXB0PzIGEAAYFhgeMggQABiABBiiBDIFEAAY7wUyBRAAGO8FSIIJUABYAHAAeAGQAQCYAW2gAW2qAQMwLjG4AQPIAQD4AQL4AQGYAgGgAnCYAwCSBwMwLjGgB_ICsgcDMC4xuAdwwgcDMC4xyAcCgAgA&sclient=gws-wiz-serp&mstk=AUtExfDkn2yZAWAN2NSHamIkDHmwOXPUJrZjNPUyvBt7g-XJH8DlYNDZlyAI3vsZpfPn5hkgEUrfEHq2ZHPIE8AbFeG4uYiLzlF-sG5otpwMSaFKjcajlbk_uglxllZjDtHshP0&csui=3) (pila de llamadas) en JavaScript es un mecanismo del motor de JS para gestionar la ejecución de funciones. Utiliza una estructura de datos tipo **LIFO** (_Last In, First Out_ - último en entrar, primero en salir) para realizar un seguimiento de qué función se está ejecutando actualmente y qué funciones se llamarán después.

  
## ¿Qué se ejecuta primero, una promesa o un `setTimeout`?

La **promesa (promise)** se ejecuta antes que el setTimeout, incluso si el setTimeout tiene un retraso de 0 milisegundos. 

Esto ocurre debido a cómo JavaScript gestiona la asincronía (Event Loop) y la prioridad de las colas de tareas: 

- **Promesas (Microtareas):** Se colocan en la cola de **microtareas** (microtask queue), que tiene mayor prioridad y se procesa inmediatamente después de que el código síncrono principal termina, antes de cualquier otra cosa.
- **setTimeout (Macrotareas):** Se colocan en la cola de **tareas** o **macrotareas** (macrotask queue/callback queue), que tiene menor prioridad y se procesa después de que la cola de microtareas esté totalmente vacía.  
  

## ¿Qué es el Task Queue en javascript?

**La Task Queue es la cola donde se encolan las tareas macro en el Event Loop**.

>La **Task Queue** (cola de tareas o _callback queue_) en JavaScript es una estructura de datos FIFO (primero en entrar, primero en salir) que almacena los _callbacks_ de operaciones asíncronas (como setTimeout, fetch o eventos DOM) listos para ejecutarse. El _Event Loop_ mueve estas tareas al _Call Stack_ solo cuando este está vacío. 
  

## ¿Cómo funciona Javascript?

JavaScript funciona principalmente como un **lenguaje interpretado** que se ejecuta directamente en el navegador del usuario (lado del cliente) para dar interactividad a las páginas web. A diferencia del HTML (estructura) y el CSS (estilo), JavaScript actúa como el "cerebro" que permite que los sitios respondan a acciones en tiempo real. 

**Proceso de ejecución técnica**

El funcionamiento interno de JavaScript se basa en varios componentes clave que gestionan el código:

- **Motores de JavaScript (Engines):** Cada navegador tiene un motor (como **V8** en Chrome o **SpiderMonkey** en Firefox) que traduce el código de texto a instrucciones que la computadora entiende.
- **Contexto de Ejecución:** Cuando el código empieza a correr, el navegador crea un "contexto global" y reserva espacio en memoria para las variables y funciones.
- **Pila de Llamadas (Call Stack):** Es el mecanismo que sigue el orden de las funciones. JavaScript es **monohilo**, lo que significa que solo puede procesar una tarea a la vez, apilándolas y resolviéndolas de arriba hacia abajo.
- **Asincronía y Bucle de Eventos (Event Loop):** Para no bloquear la página (por ejemplo, mientras se descarga una imagen), JavaScript usa funciones asíncronas y promesas. Estas tareas "esperan" en una cola aparte y el _Event Loop_ las introduce en la pila principal solo cuando esta queda libre.  
  

## ¿Qué es Javascript?

**JavaScript es un lenguaje de programación** que los desarrolladores utilizan para hacer páginas web interactivas.