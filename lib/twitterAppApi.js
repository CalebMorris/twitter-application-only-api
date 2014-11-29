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

function TwitterApiError(message, body) {
  this.name = 'TwitterApiError';
  this.message = message;
  this.body = body;
  this.statck = new Error().stack;
}
TwitterApiError.prototype = Error.prototype;

function Twitter(apiKey, apiSecret) {
  if (typeof apiKey !== 'string') {
    throw new TypeError('apiKey isn\'t a string');
  }
  if (typeof apiSecret !== 'string') {
    throw new TypeError('apiSecret isn\'t a string');
  }

  this.apiKey = apiKey;
  this.apiSecret = apiSecret;

  return this;
}

Twitter.prototype.authenticate = function() {
  var credentials = new Buffer(this.apiKey + ':' + this.apiSecret).toString('base64');

  var options = {
    url     : 'https://api.twitter.com/oauth2/token',
    method  : 'POST',
    headers : {
      'Authorization'  : 'Basic ' + credentials,
      'Content-Length' : 29,
      'Content-Type'   : 'application/x-www-form-urlencoded;charset=UTF-8',
      'User-Agent'     : 'request'
    },
    body    : 'grant_type=client_credentials'
  };

  return new Promise(function(resolve, reject) {
    request(options, function(error, response, body) {
      if (error) {
        throw error;
      }
      if (response.statusCode === 200) {
        var info = JSON.parse(body);
        if (info.token_type !== 'bearer') {
          throw new Error('Response token was of the wrong type: ' + info.token_type);
        }

        this.token = info.access_token;
        resolve(this);
      }
      else {
        reject(new TwitterApiError('There was a problem retrieving the bearer token', JSON.parse(body)));
      }
    }.bind(this));
  }.bind(this));

};

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

Twitter.prototype.getTweets = function(options) {
  return new Promise(function(resolve, reject) {
    var token = this.token;
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
  }.bind(this));
};

module.exports = Twitter;
