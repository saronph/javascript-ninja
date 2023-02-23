function adder(x) {
  return function (y) {
    return x + y;
  };
}

// console.log(adder(2)(3));

function myFunc(func) {
  return func();
}

console.log(
  myFunc(() => {
    return 'to aqui';
  })
);
