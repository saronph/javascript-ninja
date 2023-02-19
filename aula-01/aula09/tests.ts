function myFunc() {
  let number1 = 1;
  let number2 = 2;

  return sum();

  function sum() {
    return number1 + number2;
  }
}

console.log(myFunc());
