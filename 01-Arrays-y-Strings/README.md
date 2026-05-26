# Sección: Arrays y Strings

Acá guardo los patrones lógicos para manipular cadenas de texto y arreglos.

## 1. Ejercicio: Merge Strings Alternately
* **Link:** [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)
* **Patrón usado:** Two Pointers (Dos Punteros)
* **¿Cómo lo resolví?** Usé dos variables numéricas (`i` y `j`) que empiezan en 0 para rastrear la posición en cada palabra. Con un bucle `while`, iteré mientras alguno de los punteros sea menor al largo de su palabra (`.length`), concatenando las letras en una variable resultado. Los `if` evitan leer posiciones que no existen (`undefined`).

## 2. Ejercicio: Greatest Common Divisor of Strings
* **Link:** [1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)
* **Patrón usado:** Matemática (MCD - Algoritmo de Euclides) + String Manipulation
* **¿Cómo lo resolví?** 1. Primero descarté los casos imposibles usando una validación lógica: si `str1 + str2` no es exactamente igual a `str2 + str1`, entonces es imposible que compartan un divisor común, devolviendo `""`.
  2. Si pasan la validación, el problema deja de ser de texto y pasa a ser de números. Usé una función recursiva para calcular el Máximo Común Divisor (MCD) de las longitudes de ambas palabras (ej: `str1.length` y `str2.length`).
  3. Sabiendo la longitud exacta del divisor común gracias al MCD, usé `.substring(0, mcd)` para recortar y devolver el bloque ganador.

## 3. Ejercicio: Kids With the Greatest Number of Candies

* **Link:** [1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)
* **Patrón usado:** Búsqueda de Máximos y Transformación de Arrays (`.map()`)
* **¿Cómo lo resolví?** 1. Primero, encontré el valor máximo actual del array original usando `Math.max(...candies)` junto con el operador spread (`...`) para desestructurar los números y que la función pueda leerlos.
  2. Luego, utilicé el método de los arrays `.map()` para iterar sobre cada elemento. A cada `caramelo` le sumé los `extraCandies` y evalué con una condición lógica si el resultado era `>=` al máximo encontrado en el paso anterior. `.map()` se encarga de devolver automáticamente el nuevo array estructurado con los booleanos (`true` o `false`).
