"use strict"

/**
* Creación de paquete npm - Shapes
*
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5
*
* Equipo: carlos-david
*
* Creación de un paquete npm con el código de la clase "Shapes" para el cálculo de área.
*
* Clase padre de las distintas figuras geométricas y provee el método para hallar las áreas
*/

const Shapes = {};

class Shapes {

  /**
  * @param {string} shapes Figura geometrica
  * @param {string} options Objeto con las dimensiones
  */

  constructor(shapes,options) {
        this.shapes = shapes;
        this.options = options;
      }

  /**
  * La función getArea calcula el área de las figuras geometricas
  * @return {number} retorna el área de la figura
  */

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
