(function (win, doc) {
  'use strict';

  var $div = document.querySelector('[data-js="main"]');
  console.log($div.innerHTML);

  $div.textContent = '<h2>Título 2</h2>';
})(window, document);
