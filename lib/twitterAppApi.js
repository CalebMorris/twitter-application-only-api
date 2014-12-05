'use strict';

var Statuses = require('./actions/statuses');

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

  this.statuses = new Statuses(this);

  return this;
}

Twitter.prototype.authenticate = require('./actions/authenticate').authenticate;

Twitter.prototype.favorites   = require('./actions/favorites').favorites;
Twitter.prototype.friends     = require('./actions/friends').friends;
Twitter.prototype.friendships = require('./actions/friendships').friendships;
Twitter.prototype.followers   = require('./actions/followers').followers;
Twitter.prototype.search      = require('./actions/search').search;

module.exports = Twitter;
