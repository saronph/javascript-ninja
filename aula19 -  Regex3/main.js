(() => {
  // ^a = ^ letra a inicio de string
  // a$ = $ final da string
  // a$ = $ final da string
  // (^<).+(>$) = pega tudo capturando o final da string
  // /^a/gm = m multiline importante para pegar o inicio de cada linha
  // (<\w+>).+?(<\/\w+>) = ? não adiciona tudo, todas as tags foram divididas
  // ju(?:n|l)ho = match sem captura, exemplo junho e julho
  // <(\w+)>.+<\/(\1)> = 1 referencia da primeira captura, irá pegar uma mesma captura
  // .match retorna todos os match de uma regex por ex, dentro do array
  // .split pode ser usado regex para remover algo especifico
  // .search busca a regex e retorna a posição ou -1 caso nao encontre, igual indexOf
  // regex = new RegExp('\\d') forma de declarar regex, dessa forma precisa 2 barras para esquipar a string
  // /\s/.test('saron') = true    = .test retorna boolean do regex

  var name = 'saron123ar';
  var regex = /\d/g;
  var result;

  // console.log('test', regex.exec(name));
  // console.log('test', regex.exec(name));
  // console.log('test', regex.exec(name));
  // console.log('test', regex.exec(name));
  // console.log('test', regex.exec(name));

  while ((result = regex.exec(name) !== null)) {
    console.log("Julio's bar", result);
  }
})();
