'use strict';

function sum(num1, num2) {
  if (isEmpty(num1) || isEmpty(num2)) {
    return new Error('At least 2 values');
  }

  if (!isNumber(num1) || !isNumber(num2)) {
    return new Error('Just accept numbers');
  }
  return num1 + num2;
}

function isEmpty(arg) {
  return !arg;
}

function isNumber(arg) {
  return Object.prototype.toString.call(arg) === '[object Number]';
}

module.exports = sum;
