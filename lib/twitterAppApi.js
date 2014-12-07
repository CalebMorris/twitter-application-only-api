'use strict';

var Followers= require('./actions/followers');
var Help     = require('./actions/help');
var Lists    = require('./actions/lists');
var Statuses = require('./actions/statuses');
var Trends   = require('./actions/trends');
var Users    = require('./actions/users');

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

  this.followers= new Followers(this);
  this.help     = new Help(this);
  this.lists    = new Lists(this);
  this.statuses = new Statuses(this);
  this.trends   = new Trends(this);
  this.users    = new Users(this);

  return this;
}

Twitter.prototype.authenticate = require('./actions/authenticate').authenticate;

Twitter.prototype.favorites   = require('./actions/favorites').favorites;
Twitter.prototype.friends     = require('./actions/friends').friends;
Twitter.prototype.friendships = require('./actions/friendships').friendships;
Twitter.prototype.followers   = require('./actions/followers').followers;
Twitter.prototype.search      = require('./actions/search').search;

module.exports = Twitter;
