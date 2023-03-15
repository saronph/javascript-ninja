(function (DOM, doc) {
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

  function app() {
    var ajax = new XMLHttpRequest();
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    var $formCep = new DOM('[data-js="form"]');
    $formCep.on('submit', handleSubmitFormCep);
    var data;

    function handleSubmitFormCep(event) {
      var url = getUrl();

      event.preventDefault();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        data = parseData();
        fillCepFields();
        getMessage('ok');
      } else {
        data = clearData();
        getMessage('error');
        fillCepFields();
      }
    }

    function clearData() {
      return {
        logradouro: '-',
        bairro: '-',
        localidade: '-',
        uf: '-',
        cep: '-',
      };
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
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $cidade.get()[0].textContent = data.localidade;
      $estado.get()[0].textContent = data.uf;
      $cep.get()[0].textContent = data.cep;
    }

    function parseData() {
      var result = null;

      try {
        result = JSON.parse(ajax.responseText);
      } catch (e) {
        result = null;
      }

      return result;
    }

    function getMessage(type) {
      var messages = {
        loading: `Buscando informações para o CEP ${$inputCep
          .get()[0]
          .value.replace(/\D/g, '')}...`,
        ok: `Endereço referente ao CEP ${$inputCep
          .get()[0]
          .value.replace(/\D/g, '')}:`,
        error: `Não encontramos o endereço para o CEP ${$inputCep
          .get()[0]
          .value.replace(/\D/g, '')}.`,
      };

      $status.get()[0].textContent = messages[type];
    }

    return {
      getMessage: getMessage,
    };
  }

  window.app = app();
  app();
})(window.DOM, document);
