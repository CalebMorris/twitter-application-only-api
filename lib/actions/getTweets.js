'use strict';

var request = require('request');

var Joi     = require('joi');
var Promise = require('bluebird');

function buildQuery(options) {
  var results = [];
  Object.keys(options).forEach(function(key) {
    results.push(key + '=' + options[key]);
  });
  return results.join('&');
}

var optionsSchema = Joi.object().keys({
  screen_name         : Joi.string().min(1),
  user_id             : Joi.number().integer().min(0),
  since_id            : Joi.number().integer().min(0),
  count               : Joi.number().integer().min(0),
  max_id              : Joi.number().integer().min(0),
  trim_user           : Joi.boolean(),
  exclude_replies     : Joi.boolean(),
  contributor_details : Joi.boolean(),
  include_rts         : Joi.boolean()
}).or('screen_name', 'user_id');

var getTweets = function(options) {
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

      return resolve(JSON.parse(body));
    };

    Joi.validate(options, optionsSchema, function(err, value) {
      if (err) {
        throw err;
      }

      var requestOptions = {
        url     : 'https://api.twitter.com/1.1/statuses/user_timeline.json?' + buildQuery(options),
        method  : 'GET',
        headers : {
          'Authorization'  : 'Bearer ' + token,
          'User-Agent'     : 'request'
        },
      };

      request(requestOptions, requestCallback);
    });
  });
};

module.exports = {
  getTweets       : getTweets,
  optionsSchema   : optionsSchema,
};
