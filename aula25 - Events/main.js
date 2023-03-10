(function (win, doc) {
  'use strict';

  function on(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function off(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  function handleClick(event) {
    event.preventDefault();
    alert('clicou no a');
  }

  on('[data-js="link"]', 'click', handleClick);
  off('[data-js="link"]', 'click', handleClick);

  on('[data-js="link"]', 'click', function (event) {
    event.preventDefault();
    alert('clicou no a again');
  });

  on('[data-js="input"]', 'input', function (event) {
    console.log(this.value);
  });

  on('[data-js="select"]', 'change', function (event) {
    doc.querySelector('[data-js="input"]').value = this.value;
  });

  // on('[data-js="div"]', 'click', function (event) {
  //   event.preventDefault();
  //   alert('clicou na div');
  // });

  // on('[data-js="span"]', 'click', function (event) {
  //   event.preventDefault();
  //   alert('clicou no span');
  // });

  // var $a = doc.querySelector('[data-js="link"]');

  // doc.querySelector('[data-js="div"]').addEventListener(
  //   'click',
  //   function (event) {
  //     event.preventDefault();
  //     alert('clicou na div');
  //   },
  //   false
  // );

  // $a.addEventListener(
  //   'click',
  //   function (event) {
  //     event.preventDefault();
  //     alert('clicou no a');
  //   },
  //   false
  // );
})(window, document);
