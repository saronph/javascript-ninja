(() => {
  // /\n/ quebra de linha /s espaço e quebra
  // [^abc] qualquer nao abc
  // [\S\s] pega tudo
  // \d{2} pega 2 dígitos
  // \d{2,} pega 2 ao infinito dígitos
  // \d{2,4} pega 2-4 dígitos
  // \s\d? numero é opcional
  // https?:\/\/[^.]\w+\.\w+[.\w]+ validação url
  // [\w+]+@[.\w]+\.\w+([.\w]+)? validação email
  // /[?&](\w+)=(\w+)/g

  var query = '?s=ola&b=olha&c=aqui';
  query.replace(/[?&](\w+)=(\w+)/g, function (regex, key, value) {
    console.log(key, value);
  });
})();
