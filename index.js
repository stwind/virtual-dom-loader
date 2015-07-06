'use strict';

var loaderUtils = require('loader-utils');
var jsxTransform = require('jsx-transform');

module.exports = function(source) {

  this.cacheable && this.cacheable();
  
  var query = loaderUtils.parseQuery(this.query);
  
  return jsxTransform.fromString(source, {   
    ignoreDocblock : true,
    factory: query.factory || 'h',
  });
  
};
