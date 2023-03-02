(() => {
  // ^a = ^ letra a inicio de string
  // a$ = $ final da string
  // a$ = $ final da string
  // (^<).+(>$) = pega tudo capturando o final da string
  // /^a/gm = m multiline importante para pegar o inicio de cada linha
  // (<\w+>).+?(<\/\w+>) = ? não adiciona tudo, todas as tags foram divididas
  // ju(?:n|l)ho = match sem captura, exemplo junho e julho
  // <(\w+)>.+<\/(\1)> = 1 referencia da primeira captura, irá pegar uma mesma captura
})();
