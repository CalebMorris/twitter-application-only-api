'use strict';

function buildQuery(options) {
  var results = [];
  Object.keys(options).forEach(function(key) {
    results.push(key + '=' + options[key]);
  });
  return results.length ? '?' + results.join('&') : '' ;
}

module.exports = {
  buildQuery : buildQuery,
};