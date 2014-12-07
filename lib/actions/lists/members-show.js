'use strict';

var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = [
  Joi.object().keys({
    slug              : Joi.string().required(),
    user_id           : Joi.string(),
    screen_name       : Joi.string(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  }).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
  Joi.object().keys({
    list_id           : Joi.string().required(),
    user_id           : Joi.string(),
    screen_name       : Joi.string(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  }).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
];

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

      if (res.statusCode !== 200) {
        return reject(new Error('Problem retrieving show: ' +
          JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/lists/members/show.json' +
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
