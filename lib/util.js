'use strict';

var _ = require('lodash');
var assert = require('assert');
var request = require('request');
var querystring = require('querystring');

var Joi     = require('joi');
var Promise = require('bluebird');

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
    url     : 'https://api.twitter.com/1.1/' + path + '.json?' +
              querystring.stringify(options),
    method  : 'GET',
    headers : {
      'Authorization'  : 'Bearer ' + token,
      'User-Agent'     : 'request'
    },
  };

  request.get(requestOptions, requestCallback.bind(null, resolve, reject));
}

function validateOptions(token, schema, options) {
  assert(_.isString(token), 'token must be a string');
  assert(_.isObject(schema), 'schema must be an object');
  assert(_.isObject(options), 'options must be an object');

  return new Promise(function(resolve, reject) {
    Joi.validate(options, schema, function(err, value) {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}

function generatedNoSchemaHandler(path, token, options) {
  return new Promise(function(resolve, reject) {
    requestHandler(resolve, reject, path, token, options);
  });
}

function generatedApiHandler(path, schema, token, options) {
  return new Promise(function(resolve, reject) {
    return validateOptions(token, schema, options)
    .then(function() {
      requestHandler(resolve, reject, path, token, options);
    });
  });
}

function generateApiHandler(path, schema) {
  return generatedApiHandler.bind(null, path, schema);
}

function generateUrlInsertedHandler(insertedValueNames, pathInterleves, schema){
  // pathInterleves[i] + options[insertedValueName[i]]
  // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }

  if (insertedValueNames.length < (pathInterleves - 1)) {
    throw new Error(
      'There must be at least one more path interleve than inserted value'
    );
  }

  return function filterOptionsAndContinue(token, options) {
    return new Promise(function(resolve, reject) {
      return validateOptions(token, schema, options)
      .then(function() {
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
          path += pathInterleves[index] + '/' + value;
        });

        if (pathInterleves.length > insertedValues) {
          path += '/' + pathInterleves[pathInterleves.length - 1];
        }

        return requestHandler(resolve, reject, path, token, options);
      });
    });
  };
}

function generateNoSchemaHandler(path) {
  return generatedNoSchemaHandler.bind(null, path);
}

module.exports = {
  generateApiHandler : generateApiHandler,
  generateNoSchemaHandler : generateNoSchemaHandler,
  generateUrlInsertedHandler : generateUrlInsertedHandler,
};
