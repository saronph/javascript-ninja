(function (win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', './data/data.xml');
  ajax.send(null);

  console.log('carregando...');
  ajax.addEventListener(
    'readystatechange',
    function () {
      if (isRequestOk()) {
        // var data = JSON.parse(ajax.responseText);
        console.log('Requisição ok', ajax.responseXML);
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})(window, document);
