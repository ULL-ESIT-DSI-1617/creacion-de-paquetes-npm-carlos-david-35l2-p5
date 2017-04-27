"use strict"

class Shapes {
  constructor(shapes,options) {
        this.shapes = shapes;
        this.options = options;
      }

    getArea() {
        try {
            let shape = new Shapes[this.shapes](this.options);
            return shape.getArea();
        }

      catch(e) {
        console.error(`La figura geometrica: '${this.shapes}', no es valida `);
        return null;
      }
    }
    static get Shapes() {
    return Shapes;
  }
}

module.exports = Shapes;
