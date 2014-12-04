'use strict';

var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = Joi.object().keys({
  id                 : Joi.string().min(0).required(),
  count              : Joi.number().integer().min(0),
  include_my_retweet : Joi.boolean(),
  include_entities   : Joi.boolean(),
});

var show = function(token, options) {
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

      console.log('options', options);
      if (res.statusCode !== 200) {
        return reject(new Error('Problem retrieving tweet "' + options.id +
          '": ' + JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/statuses/show.json' +
                  util.buildQuery(options),
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
  show          : show,
  optionsSchema : optionsSchema,
};
