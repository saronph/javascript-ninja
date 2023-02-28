(() => {
  var string = 'Saron Amanha Sabado';
  var regexAllLetter = /\w/g;
  var regexAllNumber = /\d/g;
  // [1,2,3] array = classe caracteres =  'ou'
  // (1,2,3)|(5,6,7) agrupamento de caracteres =  'ou'
  // [a-z0-9] pega todas letras minusculas e numeros
  // $1 primeira captura, $2 segunda...
  // console.log(string.replace(/a/g, 'o'));
  // console.log(string.replace(/(a)(b)/g, '--$1')); procura 'ab' juntos
  console.log(
    string.replace(/(\w)(\w)/g, function (capTotal, letter1, letter2) {
      return letter1.toUpperCase() + letter2.toLowerCase();
    })
  );
})();
