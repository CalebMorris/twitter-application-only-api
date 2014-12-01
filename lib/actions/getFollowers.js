'use strict';

var request = require('request');
var util    = require('../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = Joi.object().keys({
  screen_name   : Joi.string().min(1),
  user_id       : Joi.number().integer().min(0),
  cursor        : Joi.number().integer().min(0),
  stringify_ids : Joi.boolean(),
  count         : Joi.number().integer().min(0),
}).or('screen_name', 'user_id');

var getFollowers = function(options) {
  var self = this;
  return new Promise(function(resolve, reject) {
    var token = self.token;
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
        return reject(new Error('Problem retrieving followers: ' + JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/followers/ids.json' +
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
  getFollowers    : getFollowers,
  optionsSchema : optionsSchema,
};
