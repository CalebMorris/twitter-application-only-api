'use strict';

var request = require('request');
var Joi     = require('joi');

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

function Twitter(apiKey, apiSecret, cb) {
  if (typeof apiKey !== 'string') {
    throw new TypeError('apiKey isn\'t a string');
  }
  if (typeof apiSecret !== 'string') {
    throw new TypeError('apiSecret isn\'t a string');
  }

  var credentials = new Buffer(apiKey + ':' + apiSecret).toString('base64');

  var self = this;

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

  request(options, function(error, response, body) {
    if (error) {
      throw error;
    }
    if (response.statusCode === 200) {
      var info = JSON.parse(body);
      if (info.token_type !== 'bearer') {
        throw new Error('Response token was of the wrong type: ' + info.token_type);
      }

      self.token = info.access_token;
      cb(null, self);
    }
    else {
      cb(new TwitterApiError('There was a problem retrieving the bearer token', JSON.parse(body)));
    }
  });
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

Twitter.prototype.getTweets = function(options, callback) {
  var token = this.token;
  if (typeof token === 'undefined') {
    throw new Error('This was not initiated correctly.');
  }
  if (options == null || typeof options !== 'object') {
    throw new TypeError('\'options\' must be an object.');
  }
  if (typeof callback !== 'function') {
    throw new TypeError('\'callback\' must ba a function');
  }

  var requestCallback = function(err, res, body) {
    if (err) {
      throw err;
    }

    callback(JSON.parse(body));
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
};

module.exports = Twitter;