(function (win, doc) {
  'use strict';

  // function afterDomContentLoaded() {
  //   var fragment = doc.createDocumentFragment();
  //   var childP = doc.createElement('p');
  //   var textChildP = doc.createTextNode('Texto da tag p!');

  //   childP.appendChild(textChildP);
  //   fragment.appendChild(childP);
  //   doc.body.appendChild(fragment);

  //   console.log('teste');
  // }

  // function afterWindowLoad() {
  //   alert('after window');
  // }

  // doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
  // win.addEventListener('load', afterWindowLoad, false);

  /*
    Técnicas Ninjas
  */

  // Copiando array
  // var $divs = doc.querySelectorAll('div');
  // var $divsCopy = Array.prototype.slice.call($divs);

  // console.log($divs);
  // console.log($divsCopy);

  var arr = [1, 2, 3, 4];
  function myFunc() {}
  // var arr2 = arr.slice();

  // console.log('arr', arr);
  // console.log('arr2', arr2);

  // Types
  console.log(Object.prototype.toString.call(arr));
})(window, document);
