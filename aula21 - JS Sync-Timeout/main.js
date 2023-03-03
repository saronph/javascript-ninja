(function (win, doc) {
  'use strict';

  var counter = 0;
  var $button = doc.querySelector('[data-js="button"]');
  var temporizador;

  function timer() {
    console.log('timer', counter++);
  }
  temporizador = setInterval(timer, 1000);

  $button.addEventListener(
    'click',
    function () {
      clearInterval(temporizador);
    },
    false
  );

  // console.log('inicio');
  // setTimeout(function () {
  //   console.log('timeout');
  // }, 3000);
  // // setInterval(function () {
  // //   console.log('Interval');
  // // }, 3000);
  // console.log('fim');
})(window, document);
