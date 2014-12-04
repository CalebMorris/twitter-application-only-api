'use strict';

var _ = require('lodash');

function buildQuery(options) {
  var results = [];
  Object.keys(options).forEach(function(key) {
    var value = options[key];
    if (_.isArray(value)) {
      value = value.join(',');
    }

    results.push(key + '=' + value);
  });
  return results.length ? '?' + results.join('&') : '' ;
}

module.exports = {
  buildQuery : buildQuery,
};
