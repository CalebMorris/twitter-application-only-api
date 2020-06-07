'use strict';

var querystring = require('querystring');

var Followers= require('./actions/followers');
var Friends  = require('./actions/friends');
var Help     = require('./actions/help');
var Lists    = require('./actions/lists');
var Statuses = require('./actions/statuses');
var Trends   = require('./actions/trends');
var Users    = require('./actions/users');
const normalizeOptions = require('./config/api-options').normalize;

/**
 * @param {string} apiKey            - The Twitter API Key to use for authenticate
 * @param {string} apiSecret         - The Twitter API secret to use for authentication
 * @param {Object} options           - Configuration options for the API interactions
 * @param {string} optiona.tweetMode - The
 */
function Twitter(apiKey, apiSecret, options) {
  if (typeof apiKey !== 'string') {
    throw new TypeError('apiKey isn\'t a string');
  }
  if (typeof apiSecret !== 'string') {
    throw new TypeError('apiSecret isn\'t a string');
  }

  this.options = normalizeOptions(options);
  console.log(`Twitter(options=${JSON.stringify(options)}); this.options=${JSON.stringify(this.options)}`);
  this.apiKey = apiKey;
  this.apiSecret = apiSecret;

  this.followers= new Followers(this);
  this.friends  = new Friends(this);
  this.help     = new Help(this);
  this.lists    = new Lists(this);
  this.statuses = new Statuses(this);
  this.trends   = new Trends(this);
  this.users    = new Users(this);

  return this;
}

Twitter.prototype.authenticate = require('./actions/authenticate').authenticate;

Twitter.prototype.favorites   = function(options) {
  return require('./actions/favorites').favorites(this.token, options);
};
Twitter.prototype.friends     = function(options) {
  return require('./actions/friends').friends(this.token, options);
};
Twitter.prototype.friendships = function(options) {
  return require('./actions/friendships').friendships(this.token, options);
};
Twitter.prototype.followers   = function(options) {
  return require('./actions/followers').followers(this.token, options);
};
Twitter.prototype.search = function(options) {
  return require('./actions/search').search(this.token, options);
};

module.exports = Twitter;
