(function (win, doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $mainHeader = doc.querySelector('.main-header');
  var $mainContent = doc.querySelector('.main-content');
  var $mainFooter = doc.querySelector('.main-footer');
  var $firstText = $mainContent.firstChild;
  var $h1 = $mainHeader.firstElementChild;

  // console.log($main.childNodes);
  // console.log($main.children);

  // console.log($main.firstChild.nextSibling.nodeValue);
  // console.log($main.firstChild.nextElementSibling.nodeValue);
  // console.log($main.firstChild.nodeName);
  // console.log($main.firstElementChild);

  // console.log($main.hasAttribute('class'));

  /*
    - Percorrer elementos
  */

  // console.log($mainContent.appendChild($mainHeader));
  // $mainContent.insertBefore($mainHeader, $firstText);

  var $cloneMainHeader = $mainHeader.cloneNode(true);
  // $mainContent.appendChild($cloneMainHeader);

  // $mainHeader.removeChild($h1);

  // $main.replaceChild($mainHeader, $mainFooter);

  var newTextNode = doc.createTextNode('Aqui jovens!');
  // $main.appendChild(newTextNode);

  var newP = doc.createElement('p');
  newP.appendChild(newTextNode);
  $main.appendChild(newP);

  // console.log(doc.querySelectorAll('.main-header').length);
  // console.log($mainContent.hasChildNodes());
  // console.log($mainContent.hasChildNodes());

  /*
    - Atributos
  */

  // console.log(($main.id = 'novoId'));
  // console.log(($main.className = 'novoId'));

  // console.log($main.getAttribute('id'));
  console.log($main.setAttribute('idNovo', 'aqui-mesmo'));
})(window, document);
