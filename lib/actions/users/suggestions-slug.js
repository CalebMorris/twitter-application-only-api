'use strict';

var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = Joi.object().keys({
  slug : Joi.string().required(),
  lang : Joi.string(),
});

var slug = function(token, options) {
  console.log('slut', token);
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
        return reject(new Error('Problem retrieving slug: ' +
          JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var slug = options.slug;
      delete options.slug;

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/users/suggestions/' + slug +
                  '.json' + util.buildQuery(options),
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
  slug          : slug,
  optionsSchema : optionsSchema,
};
