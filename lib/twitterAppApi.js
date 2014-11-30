'use strict';

function buildQuery(options) {
  var results = [];
  Object.keys(options).forEach(function(key) {
    results.push(key + '=' + options[key]);
  });
  return results.join('&');
}

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

Twitter.prototype.authenticate = require('./actions/authenticate').authenticate;
Twitter.prototype.getTweets    = require('./actions/getTweets').getTweets;
Twitter.prototype.getFriends   = require('./actions/getFriends').getFriends;

module.exports = Twitter;
