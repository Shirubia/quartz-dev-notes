## ¿Cómo extraerías valores de objetos o arreglos directamente?

[Desestructuración de objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)

  
## ¿Qué es el optional chaining?

“?.”

* [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

El [_optional chaining_](https://www.google.com/search?q=optional+chaining&sca_esv=a314a699d70fed9c&rlz=1C1GCEA_enES1110ES1110&ei=t3G6afbgEo-xi-gP-5GnmQc&biw=2048&bih=983&ved=2ahUKEwjssLLyqamTAxUPOPsDHfGzGaMQgK4QegQIARAB&uact=5&oq=javascript+que+es+el+optional+chaining&gs_lp=Egxnd3Mtd2l6LXNlcnAiJmphdmFzY3JpcHQgcXVlIGVzIGVsIG9wdGlvbmFsIGNoYWluaW5nMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IxCJQAFjcIHAAeAGQAQCYAXCgAesRqgEEMjQuM7gBA8gBAPgBAZgCG6AC5BLCAgUQABiABMICCBAAGBYYChgewgIFEAAY7wXCAggQABiABBiiBMICBRAhGKABwgIFECEYnwXCAgQQIRgVmAMAkgcEMjMuNKAHtMcBsgcEMjMuNLgH5BLCBwcwLjEyLjE1yAdSgAgA&sclient=gws-wiz-serp&mstk=AUtExfCXlo0_10s_O4lSt5azCi_pzdUeC8mBPitt4KjtFQCbbpcfwwMxJZFWL2_auWKRM87EdnnEUD6BlaNZHPaJYD2grHcdsC2DyfVMkjfmlGsYP2ghux_KrsKea1gocwK8J_U&csui=3) (?.) en JavaScript es un operador que permite acceder de forma segura a propiedades anidadas de un objeto, incluso si propiedades intermedias son `null` o `undefined`. En lugar de lanzar un error, devuelve `undefined` si la referencia no existe. Esto evita validaciones largas y repetitivas (`if (obj && obj.prop)`), simplificando el código.

  
## Nullish coalescing (??)

El resultado de `a ?? b`:

- si a está “definida”, será a,
- si a no está “definida”, será b.

El uso típico de `??` es ==proporcionar un valor predeterminado==.

>Retorna el operando de lado derecho cuando el operando de lado izquierdo es [null](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null) o [undefined](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/undefined), y en caso contrario retorna el operando de lado izquierdo.


## ¿Cómo copiarías un objeto en javaScript?

Distinguimos entre clon superficial vs profundo:

>**A shallow copy duplicates the top-level properties** but references any nested objects or arrays.

* **Clon superficial**: sintaxis spread (`{…obj}`) o método `Object.assign()`
* **Clon profundo**: `structuredClone()`

Antaño: **JSON.parse(JSON.stringify())**  
const jsonClone = JSON.**parse**(JSON.**stringify**(object))


## ¿Cómo recibirías múltiples argumentos en javascript?

`…args` [(rest parameters)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

>Los _rest parameters_ (parámetros rest) en JavaScript permiten representar un número indefinido de argumentos como un Array.
  

## ¿Cómo copiarías un array?

Igual que con los objetos, hay que distinguir entre clon superficial vs profundo:

>**A shallow copy duplicates the top-level properties** but references any nested objects or arrays.

* **Clon superficial**: sintaxis spread (`[…arr]`) o  métodos como `Array.slice()`, `Array.from()`
* **Clon profundo**: `structuredClone()`  

Antaño: **JSON.parse(JSON.stringify())**  
const jsonClone = JSON.**parse**(JSON.**stringify**(array))

  
## ¿Como añades y borras elementos de un array?

Métodos `push`, `pop`  
  

## ¿Para que sirve un `map reduce`?

[MapReduce](https://www.google.com/search?q=MapReduce&sca_esv=a314a699d70fed9c&rlz=1C1GCEA_enES1110ES1110&biw=2048&bih=983&ei=W4q6adiGCavhkdUPyMqz0QU&ved=2ahUKEwjmkKShqqmTAxVDTKQEHRqfGqEQgK4QegQIARAB&uact=5&oq=javascript+para+que+sirve+un+map+reduce+ciencia+de+datos&gs_lp=Egxnd3Mtd2l6LXNlcnAiOGphdmFzY3JpcHQgcGFyYSBxdWUgc2lydmUgdW4gbWFwIHJlZHVjZSBjaWVuY2lhIGRlIGRhdG9zMgcQIRigARgKMgcQIRigARgKMgcQIRigARgKMgcQIRigARgKSMRJUN0SWNpIcAJ4AZABAZgB0gGgAbUhqgEHMzAuMTMuMbgBA8gBAPgBAZgCLaACwSHCAgoQABiwAxjWBBhHwgIFEAAYgATCAgoQABiABBhDGIoFwgIGEAAYFhgewgIIEAAYgAQYogTCAgUQABjvBcICCBAAGKIEGIkFwgIFECEYoAHCAgUQIRifBcICBBAhGBWYAwCIBgGQBgiSBwUyNC4yMaAHr5YCsgcFMjIuMjG4B7QhwgcHMS4yNy4xN8gHhQGACAA&sclient=gws-wiz-serp&mstk=AUtExfDH8mq9HKWvv_iQrgxEHtrr5DgqIzmd8t7WtaIHG39g62sOI4Ql8JrulplAF3Wt9QzpzLN09muKaQFbCU5744lx-XulMjr1TG2fMOOpIl5XiPP7IWW0KdWXN_WYH33IyqA&csui=3) en JavaScript es un paradigma para procesar grandes volúmenes de datos en paralelo, dividiendo tareas complejas en fragmentos pequeños (Map) para procesarlos de forma independiente y luego unificar los resultados (Reduce). Es fundamental en ==ciencia de datos== para **Big Data**, permitiendo transformar, filtrar y agregar conjuntos masivos de información de manera rápida y escalable (por ejemplo **para calcular totales, promedios o estadísticas complejas**).

**Diferencia funcional en JavaScript (Arrays)**  
Aunque el concepto anterior se refiere a sistemas distribuidos, JavaScript aplica los mismos principios conceptuales en sus funciones nativas de manipulación de datos: 

- **`map()`:** Transforma cada elemento de un array individualmente para crear uno nuevo.
- **`reduce()`:** Agrega o combina todos los elementos de un array en un único valor final.


## Diferencias entre Foreach y map en un array.

>**`.map` returns a new array**, whereas `.forEach` doesn't return anything. Basically, if you want to obtain a modified form of the previous array, you use `.map`.

==Si solo quieres iterar, como en un bucle `for`, usa `.forEach`.==


## Arrays & const and mutability

>A `const` variable cannot be re-assigned, just like a `readonly` property.
>
>Essentially, when you define a property, you can use readonly to prevent re-assignment. This is actually only a compile-time check.
>
>When you define a const variable (and target a more recent version of JavaScript to preserve const in the output), the check is also made at runtime.
>
>So they effectively both do the same thing, but one is for variables and the other is for properties.

```
const x = 5;

// Not allowed
x = 7;

class Example {
	public readonly y = 6;
}

var e = new Example();

// Not allowed
e.y = 4;
```

>==Important note... "cannot be re-assigned" is not the same as immutability.==

```
const myArr = [1, 2, 3];

// Not allowed
myArr = [4, 5, 6]

// Perfectly fine
myArr.push(4);

// Perfectly fine
myArr[0] = 9;
```


* Source: [https://stackoverflow.com/a/46561261](https://stackoverflow.com/a/46561261)

> An array in JS/TS is a ==mutable object==. So `[an array]` is a constant reference to a mutable object. You can't point it at some other array, but you can change the contents of the array.

* Source: [https://stackoverflow.com/questions/46561155/difference-between-const-and-readonly-in-typescript#comment80088422_46561261](https://stackoverflow.com/questions/46561155/difference-between-const-and-readonly-in-typescript#comment80088422_46561261)