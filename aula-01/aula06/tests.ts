function myFunc() {
  let a = 1,
    b = 2,
    c = 3;
  return (a += b), a;
}

console.log(myFunc());
