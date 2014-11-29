'use strict';

var request = require('request');

var Promise = require('bluebird');

function TwitterApiError(message, body) {
  this.name = 'TwitterApiError';
  this.message = message;
  this.body = body;
  this.statck = new Error().stack;
}
TwitterApiError.prototype = Error.prototype;

var authenticate = function() {
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

module.exports = {
  authenticate : authenticate,
};
