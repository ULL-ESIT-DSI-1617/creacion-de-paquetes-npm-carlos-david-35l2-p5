'use strict'

var Figura = require('@ull-carlos-david/ull-shape')

class Square extends Figura {
    constructor(options) {
      Figura.Shapes.Square = Square;
      super("Square", options)
      this.width = options.width;
    }
    getArea() {
      return Math.pow(this.width,2);
    }
}

module.exports = Square;
