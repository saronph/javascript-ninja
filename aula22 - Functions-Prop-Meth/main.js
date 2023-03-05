(function (win, doc) {
  function myFunc(a, b, c) {
    console.log(this.lastName, { a, b, c });
  }

  var myName = new myFunc();
  myName.lastName = 'Medeiros';

  var obj = {
    lastName: 'Medeiros',
  };

  var obj2 = {
    lastName: 'Amaro',
  };

  var myArr = [1, 2, 3];

  // myFunc.call(obj2, myArr);
  // myFunc.apply(obj2, myArr);

  ////////////////////////////////////////////////

  // FUNCTION PROTOTYPE

  // function MyFunction(name, lastName) {
  //   this.name = name;
  //   this.lastName = lastName;
  //   this.age = 30; // se possuir essa prop ela nao podera ser reescrita
  // }
  // // prototype extend aq função inicial
  // MyFunction.prototype.fullName = function () {
  //   return this.name + ' ' + this.lastName;
  // };

  // var saron = new MyFunction('Saron', 'Medeiros');

  // MyFunction.prototype.age = 30;

  // console.log(saron.age);

  //////////////////////////////////////////////

  function myFunction() {
    // var arr = [1, 2, 3, 4];

    // arr.forEach(function (item) {
    //   console.log(this);
    // }, arr);

    Array.prototype.forEach.call(arguments, function (item, index) {
      console.log(item);
    });
  }

  myFunction(1, 2, 3, 4);

  // console.log('func', myFunction(1, 2, 3, 4));
})(window, document);
