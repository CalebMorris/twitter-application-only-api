'use strict';

function buildQuery(options) {
  var results = [];
  Object.keys(options).forEach(function(key) {
    results.push(key + '=' + options[key]);
  });
  return results.join('&');
}

function Statuses(twit) {
  this._twit = twit;
}
Statuses.prototype.timeline = function(options) {
  return require('./actions/statuses/timeline').timeline(this._twit.token, options);
};
Statuses.prototype.retweets = function(options) {
  return require('./actions/statuses/retweets').retweets(this._twit.token, options);
};
Statuses.prototype.retweeters = function(options) {
  return require('./actions/statuses/retweeters').retweeters(this._twit.token, options);
};
Statuses.prototype.show = function(options) {
  return require('./actions/statuses/show').show(this._twit.token, options);
};
Statuses.prototype.lookup = function(options) {
  return require('./actions/statuses/lookup').lookup(this._twit.token, options);
};
Statuses.prototype.oembed = function(options) {
  return require('./actions/statuses/oembed').oembed(this._twit.token, options);
};

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

Twitter.prototype.favorites = require('./actions/favorites').favorites;
Twitter.prototype.friends   = require('./actions/friends').friends;
Twitter.prototype.followers = require('./actions/followers').followers;
Twitter.prototype.search    = require('./actions/search').search;

module.exports = Twitter;
