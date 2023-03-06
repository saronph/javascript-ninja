(function (win, doc) {
  'use strict';
  // function sum() {
  //   console.log(arguments);
  //   var sumArguments = Array.prototype.reduce.call(
  //     arguments,
  //     (accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     },
  //     0
  //   );

  //   return sumArguments;
  // }

  // console.log(sum(1, 2, 3, 4, 5));

  console.time('Time for');

  for (var i = 0; i < 10000; i++) {
    console.log('calculando');
  }

  console.timeEnd('Time for end');
})(window, document);
