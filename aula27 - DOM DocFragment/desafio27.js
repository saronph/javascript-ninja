(function (win, doc) {
  'use strict';
  /*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
  // ?

  function DOM(elementAttribute) {
    this.elements = doc.querySelectorAll(elementAttribute);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      return element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      return element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.elements;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.call(this.elements, function (element) {
      return console.log(element);
    });
  };

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick);
  });

  console.log('teste', $a.forEach());

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
})(window, document);
