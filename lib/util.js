'use strict';

var _ = require('lodash');
var request = require('request');

var Joi     = require('joi');
var Promise = require('bluebird');

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

function generateApiHandler(path, schema) {
  return function generatedApiHandler(token, options) {
    return new Promise(function(resolve, reject) {
      if (typeof token === 'undefined') {
        return reject(false);
      }
      if (options == null || typeof options !== 'object') {
        throw new TypeError('\'options\' must be an object.');
      }

      var requestCallback = function(err, res, body) {
        if (err) {
          return reject(err);
        }

        if (res.statusCode !== 200) {
          return reject(
            new Error('Problem retrieving data: ' + JSON.stringify(res))
          );
        }

        return resolve(body ? JSON.parse(body) : null);
      };

      Joi.validate(options, schema, function(err, value) {
        if (err) {
          throw err;
        }

        var requestOptions = {
          url     : 'https://api.twitter.com/1.1/' + path + '.json' +
                    buildQuery(options),
          method  : 'GET',
          headers : {
            'Authorization'  : 'Bearer ' + token,
            'User-Agent'     : 'request'
          },
        };

        request.get(requestOptions, requestCallback);
      });
    });
  };
}

module.exports = {
  buildQuery         : buildQuery,
  generateApiHandler : generateApiHandler,
};
