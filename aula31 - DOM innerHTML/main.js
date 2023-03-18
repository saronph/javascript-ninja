(function (win, doc) {
  'use strict';

  // var $div = doc.querySelector('[data-js="main"]');
  // console.log($div.innerHTML);

  // $div.textContent = '<h2>Título 2</h2>';

  var $div = doc.querySelector('[data-js="main"]');
  var $textarea = doc.querySelector('[data-js="textarea"]');
  var $form = doc.querySelector('[data-js="form"]');

  // $form.addEventListener(
  //   'submit',
  //   function (e) {
  //     e.preventDefault();
  //     $div.innerHTML = $textarea.value;
  //   },
  //   false
  // );

  // $form.insertAdjacentHTML('beforebegin', '<h1>Meu formulário</h1>');

  var year = 2020;
  var month = 10;
  var day = 6;
  var hour = 8;
  var minute = 32;
  var second = 10;
  var millisecond = 15;
  var date = new Date(year, month, day, hour, minute, second, millisecond);

  console.log(date);
})(window, document);
