# Práctica 8: Creación de Paquetes NPM y Strategy Pattern

## Descripción

Uno de los objetivos de esta práctica es aprender a crear packages NodeJS y publicarlos en [npm](https://www.npmjs.com/). El paquete se construye a partir de el código que se desarrolló en la [práctica evaluar strategy pattern](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaevaluastrategypattern.html).

* Se trata de construir un primer módulo npm *ull-shape* con el código de la clase *Shape*.
* Se construirá un módulo npm *ull-shape-triangle* que contenga la clases *Triangle*.
* En general, para cada tipo particular de forma geométrica *x* se construirá un módulo npm *ull-shape-x* que contenga la clase *X*.
* La implantación del módulo principal *ull-shape* se hace primero y de forma colaborativa.
    * Cada miembro del equipo implantará el solo al menos uno de los plugin *ull-shape-x*: si hay tres miembros cada uno implantará al menos una forma distinta, etc.
    * La implantación de los plugin *ull-shape-x* no debería conllevar ,a modificación del código del módulo principal *ull-shape* (principio Open/Close).
* Como deberán publicar en el site de [npm](https://www.npmjs.com/) los módulos creen una organización *ull-team-name* pública y pongan sus módulos en ese ámbito.
    * Añadan a todos los miembros del equipo a la organización.
* Escriba documentación para cada uno de los módulos (Véase [documentation.js](http://documentation.js.org/), [jsdoc](https://www.npmjs.com/package/jsdoc), [docco](http://jashkenas.github.io/docco/)).
* Añada pruebas para cada uno de los módulos.
* Integre usando Travis.
* En esta tarea deberá trabajar con varios repos, uno para el módulo principal *ull-shape* y uno para cada shape específica: cree los diferentes repos dentro de la organización *ULL-ESIT-DSI-1617* siguiendo el patrón *creacion-de-paquetes-npm-team* para el módulo principal y *creacion-de-paquetes-npm-team-triangle* para el del triángulo, etc.

## Build Status

[![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5)


## Módulos (Repositorios)

* [Triangle](https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5-triangle)
* [Square](https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5-square)

## Paquetes npm

* [Organization](https://www.npmjs.com/org/ull-carlos-david)
* [Shape](https://www.npmjs.com/package/@ull-carlos-david/ull-shape)
* [Triangle](https://www.npmjs.com/package/@ull-carlos-david/ull-shape-triangle)
* [Square](https://www.npmjs.com/package/@ull-carlos-david/ull-square)
## Autores

Carlos Fernández Donate
* [Github](https://github.com/charly-poket)
* [Página personal](https://charly-poket.github.io/)


David Dorta Acosta  
* [Github](https://github.com/alu0100851236)
* [Página personal](https://alu0100851236.github.io/)

creacion-de-paquetes-npm-carlos-david-35l2-p5 created by GitHub Classroom
