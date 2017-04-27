'use strict'

let Figura = require('../lib/shape.js')
let should = require('should')

describe("Shape",function()  {
  it("must not compute the shape area correctly", function() {
    let x = new Shapes('Triangulo', {width: 150, heigth: 150});
    let a = x.getArea();
    should(a).be.null;
  })
});
