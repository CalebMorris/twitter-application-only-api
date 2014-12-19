'use strict';

var querystring = require('querystring');
var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = Joi.object().keys({
  format      : Joi.string().valid(['xml', 'json']).default('json'),
  id          : Joi.string().min(0),
  url         : Joi.string().min(0),
  maxwidth    : Joi.number().integer().min(220).max(550),
  hide_media  : Joi.boolean(),
  hide_thread : Joi.boolean(),
  omit_script : Joi.boolean(),
  align       : Joi.string().valid(['left', 'right', 'center', 'none'])
    .default('none'),
  related     : Joi.array().includes(Joi.string()),
  lang        : Joi.string().min(0),
}).or('id', 'url');

var oembed = function(token, options) {
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
        return reject(new Error('Problem retrieving oembed: ' + JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var format = options.format;
      delete options.format;

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/statuses/oembed.' + format +
                  querystring.stringify(options),
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

module.exports = {
  oembed        : oembed,
  optionsSchema : optionsSchema,
};
