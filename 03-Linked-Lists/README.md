# Patrón: Listas Enlazadas (Linked Lists)

##  Conceptos Clave
- A diferencia de los Arrays, acá no hay índices. Avanzamos nodo por nodo usando `.next`.
- Para acceder al valor del nodo actual usamos `.val`.

##  Herramienta: El Nodo Ficticio (Dummy Node)
**¿Cuándo usarlo?** Cuando necesitamos construir una Lista Enlazada nueva desde cero y queremos evitar la lógica compleja de inicializar el primer nodo.

**¿Cómo funciona?**
1. Creamos un nodo falso inicial: `let dummy = new ListNode(0);`
2. Usamos un puntero `current` para ir enganchando los resultados reales detrás del falso.
3. Al final, devolvemos `dummy.next` (ignorando el 0 inicial).

**Snippet salvavidas:**
```javascript
let dummy = new ListNode(0);
let current = dummy;
// ... bucle while ...
current.next = new ListNode(nuevoValor);
current = current.next;
