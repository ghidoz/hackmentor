'use strict';
var debug = require('debug')('pech:mixins:enhanced-context');

const extend = require('extend');

module.exports = function(Model, options) {

  debug('Enhancing modelObservable', Model.modelName);

  Model.createOptionsFromRemotingContext = function(ctx) {

    var base = this.base.createOptionsFromRemotingContext(ctx);

    return extend(base, {
      req: ctx.req,
      res: ctx.res
    });

  };


};
