# Tarea

Implementa una función llamada `extend`. Esta función debe comportarse muy
parecido a `Object.assign()`, pero siempre retorna un objeto nuevo, con las
propiedades de todas los objetos que reciba como argumentos.

```js
const obj1 = { foo: true, bar: false };
const obj2 = { baz: 1, bar: true };
console.log(extend(obj1, obj2));
// { foo: true, bar: true, baz: 1 }
```

## Requisitos

* Tu implementación debe hacer uso de `Object.assign`.

## Pistas

En las funciones flecha no tenemos `arguments`, pero podemos usar `...args`. Más
info sobre esto en la página de MDN (ver link más abajo).

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

***

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`coi verify object.assign.js`
