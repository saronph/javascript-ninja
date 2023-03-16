(function (win, doc) {
  'use strict';

  function DOM(elementAttribute) {
    if (!(this instanceof DOM)) {
      return new DOM(elementAttribute);
    }

    this.elements = doc.querySelectorAll(elementAttribute);

    // if (this.elements.length === 1) {
    //   return this.get();
    // }
  }

  DOM.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };

  DOM.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };

  DOM.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };

  DOM.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.isNull = function isNull(param) {
    return (
      Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]'
    );
  };

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

  DOM.prototype.get = function get(index) {
    if (index) {
      return this.element[index];
    }
    return this.elements[0];
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

  window.DOM = DOM;
})(window, document);
