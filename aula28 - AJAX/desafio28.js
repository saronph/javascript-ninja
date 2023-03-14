(function (win, doc) {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elementAttribute) {
    this.elements = doc.querySelectorAll(elementAttribute);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      return element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.elements, function (element) {
      return element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.elements;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.elements, arguments);
  };

  DOM.prototype.map = function map() {
    Array.prototype.map.apply(this.elements, arguments);
  };

  DOM.prototype.filter = function filter() {
    Array.prototype.filter.apply(this.elements, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    Array.prototype.reduce.apply(this.elements, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    Array.prototype.reduceRight.apply(this.elements, arguments);
  };

  DOM.prototype.every = function every() {
    Array.prototype.every.apply(this.elements, arguments);
  };

  DOM.prototype.some = function some() {
    Array.prototype.some.apply(this.elements, arguments);
  };

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return (
      Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]'
    );
  };

  // var url = `https://viacep.com.br/ws/${$inputCep.get()[0].value}/json/`;
  var ajax = new XMLHttpRequest();

  var $inputCep = new DOM('[data-js="input-cep"]');

  var $formCep = new DOM('[data-js="form"]');
  $formCep.on('submit', handleSubmitFormCep);

  function handleSubmitFormCep(event) {
    var url = getUrl();

    event.preventDefault();
    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange() {
    isRequestOk() && fillCepFields();
  }

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function getUrl() {
    return `https://viacep.com.br/ws/${$inputCep
      .get()[0]
      .value.replace(/\D/, '')}/json/`;
  }

  function fillCepFields() {
    var data = parseData();

    if (!data) {
      return;
    }

    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cep = new DOM('[data-js="cep"]');

    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $cidade.get()[0].textContent = data.localidade;
    $estado.get()[0].textContent = data.uf;
    $cep.get()[0].textContent = data.cep;

    console.log(data.logradouro);
  }

  function parseData() {
    var result = null;

    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {}

    return result;
  }

  function getMessage(type) {
    var messages = {
      loading: 'Buscando informações para o CEP [CEP]...',
      ok: 'Endereço referente ao CEP [CEP]:',
      error: 'Não encontramos o endereço para o CEP [CEP].',
    };

    return messages[type];
  }
})(window, document);
