(function (win, doc) {
  /*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
  // ?

  var $input = doc.querySelector('input');
  var $startButton = doc.querySelector('[data-js="startButton"]');
  var $stopButton = doc.querySelector('[data-js="stopButton"]');
  var $resetButton = doc.querySelector('[data-js="resetButton"]');

  var counter = 0;
  var interval;

  // function timer() {
  //   $input.value = String(counter++);
  // }

  $startButton.addEventListener(
    'click',
    // function () {
    //   interval = setInterval(timer, 1000);
    // },
    function startTime() {
      $input.value = +$input.value + 1;
      interval = setTimeout(startTime, 1000);
    },
    false
  );

  $stopButton.addEventListener(
    'click',
    // function () {
    //   clearInterval(interval);
    // },
    function stopTimer() {
      clearTimeout(interval);
    },
    false
  );

  $resetButton.addEventListener(
    'click',
    // function () {
    //   clearInterval(interval);
    //   $input.value = '0';
    //   counter = 0;
    // },
    function () {
      clearTimeout(interval);
      $input.value = '0';
    },
    false
  );
})(window, document);
