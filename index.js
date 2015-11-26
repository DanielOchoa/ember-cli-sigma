/* jshint node: true */
'use strict';

var fs = require('fs');

module.exports = {
  name: 'ember-cli-sigma',

  included: function(app) {
    var sigmaDir = app.bowerDirectory + '/sigma/';

    // Core:
    app.import(sigmaDir + 'src/sigma.core.js');

    // Utils:
    app.import(sigmaDir + 'src/conrad.js');
    app.import(sigmaDir + 'src/utils/sigma.utils.js');
    app.import(sigmaDir + 'src/utils/sigma.polyfills.js');

    // Main classes:
    app.import(sigmaDir + 'src/sigma.settings.js');
    app.import(sigmaDir + 'src/classes/sigma.classes.dispatcher.js');
    app.import(sigmaDir + 'src/classes/sigma.classes.configurable.js');
    app.import(sigmaDir + 'src/classes/sigma.classes.graph.js');
    app.import(sigmaDir + 'src/classes/sigma.classes.camera.js');
    app.import(sigmaDir + 'src/classes/sigma.classes.quad.js');

    // Captors:
    app.import(sigmaDir + 'src/captors/sigma.captors.mouse.js');
    app.import(sigmaDir + 'src/captors/sigma.captors.touch.js');

    // Renderers:
    app.import(sigmaDir + 'src/renderers/sigma.renderers.canvas.js');
    app.import(sigmaDir + 'src/renderers/sigma.renderers.webgl.js');
    app.import(sigmaDir + 'src/renderers/sigma.renderers.def.js');

    // Sub functions per engine:
    app.import(sigmaDir + 'src/renderers/webgl/sigma.webgl.nodes.def.js');
    app.import(sigmaDir + 'src/renderers/webgl/sigma.webgl.nodes.fast.js');
    app.import(sigmaDir + 'src/renderers/webgl/sigma.webgl.edges.def.js');
    app.import(sigmaDir + 'src/renderers/webgl/sigma.webgl.edges.fast.js');
    app.import(sigmaDir + 'src/renderers/webgl/sigma.webgl.edges.arrow.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.labels.def.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.hovers.def.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.nodes.def.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.edges.def.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.edges.curve.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.edges.arrow.js');
    app.import(sigmaDir + 'src/renderers/canvas/sigma.canvas.edges.curvedArrow.js');

    // Middlewares:
    app.import(sigmaDir + 'src/middlewares/sigma.middlewares.rescale.js');
    app.import(sigmaDir + 'src/middlewares/sigma.middlewares.copy.js');

    // Miscellaneous:
    app.import(sigmaDir + 'src/misc/sigma.misc.animation.js');
    app.import(sigmaDir + 'src/misc/sigma.misc.bindEvents.js');
    app.import(sigmaDir + 'src/misc/sigma.misc.drawHovers.js');
  }
};
