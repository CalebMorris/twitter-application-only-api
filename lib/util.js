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

function requestCallback(resolve, reject, err, res, body) {
  if (err) {
    return reject(err);
  }

  if (res.statusCode !== 200) {
    return reject(
      new Error('Problem retrieving data: ' + JSON.stringify(res))
    );
  }

  return resolve(body ? JSON.parse(body) : null);
}

function requestHandler(resolve, reject, path, token, options) {
  options = options || {};
  var requestOptions = {
    url     : 'https://api.twitter.com/1.1/' + path + '.json' +
              buildQuery(options),
    method  : 'GET',
    headers : {
      'Authorization'  : 'Bearer ' + token,
      'User-Agent'     : 'request'
    },
  };

  request.get(requestOptions, requestCallback.bind(null, resolve, reject));
}

function generatedNoSchemaHandler(path, token, options) {
  return new Promise(function(resolve, reject) {
    requestHandler(resolve, reject, path, token, options);
  });
}

function generatedApiHandler(path, schema, token, options) {
  return new Promise(function(resolve, reject) {
    if (typeof token === 'undefined') {
      return reject(false);
    }
    if (options == null || typeof options !== 'object') {
      throw new TypeError('\'options\' must be an object.');
    }

    Joi.validate(options, schema, function(err, value) {
      if (err) {
        throw err;
      }

      requestHandler(resolve, reject, path, token, options);
    });
  });
}

function generateApiHandler(path, schema) {
  return generatedApiHandler.bind(null, path, schema);
}

function generateUrlInsertedHandler(insertedValueNames, pathInterleves, schema) {
  // pathInterleves[i] + options[insertedValueName[i]]
  // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }

  if (insertedValueNames.length < (pathInterleves - 1)) {
    throw new Error(
      'There must be at least one more path interleve than inserted value'
    );
  }

  return function filterOptionsAndContinue(token, options) {
    var insertedValues = _.map(
      insertedValueNames,
      function mapValueNameToValue(valueName) {
        var tmp = options[valueName];
        delete options[valueName];
        return tmp;
      }
    );

    var path = '';
    _.forEach(insertedValues, function(value, index) {
      path += pathInterleves[index] + value;
    });

    if (pathInterleves.length > insertedValues) {
      path += pathInterleves[pathInterleves.length - 1];
    }

    return generatedApiHandler(path, schema, token, options);
  };
}

function generateNoSchemaHandler(path) {
  return generatedNoSchemaHandler.bind(null, path);
}

module.exports = {
  buildQuery : buildQuery,
  generateApiHandler : generateApiHandler,
  generateNoSchemaHandler : generateNoSchemaHandler,
  generateUrlInsertedHandler : generateUrlInsertedHandler,
};
