(function (win, doc) {
  'use strict';

  // console.log(doc.getElementById('ma-link'));
  // console.log(doc.getElementsByClassName('ma-link'));
  // console.log(doc.getElementsByTagName('a'));
  // console.log(doc.querySelectorAll('[type="text"]'));

  // var $input = doc.querySelectorAll('.input');
  // var $input = doc.querySelector('#username');

  /**
   * Outra aula
   */

  // var $inputUsername = doc.querySelector('#username');
  // var $inputPassword = doc.querySelector('#password');

  // $inputUsername.value = 'novo-nome';
  // $inputPassword.value = 'novo-password';

  var $inputUsername = doc.querySelector('#username');
  var $inputPassword = doc.querySelector('#password');
  var $button = doc.querySelector('#button');

  $button.addEventListener(
    'click',
    function (event) {
      event.preventDefault();
      console.log('click');
    },
    false
  );
})(window, document);
