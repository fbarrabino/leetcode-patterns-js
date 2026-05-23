# Sección: Arrays y Strings

Acá guardo los patrones lógicos para manipular cadenas de texto y arreglos.

## 1. Ejercicio: Merge Strings Alternately
* **Link:** [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/)
* **Patrón usado:** Two Pointers (Dos Punteros)
* **¿Cómo lo resolví?** Usé dos variables numéricas (`i` y `j`) que empiezan en 0 para rastrear la posición en cada palabra. Con un bucle `while`, iteré mientras alguno de los punteros sea menor al largo de su palabra (`.length`), concatenando las letras en una variable resultado. Los `if` evitan leer posiciones que no existen (`undefined`).

---
