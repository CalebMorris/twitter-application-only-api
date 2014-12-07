'use strict';

var Promise = require('bluebird');

function Lists(twit) {
  this._twit = twit;
}

Lists.prototype.list = function(options) {
  return require('./list').list(this._twit.token, options);
};
Lists.prototype.memberships = function(options) {
  return require('./memberships').memberships(this._twit.token, options);
};
Lists.prototype.ownerships = function(options) {
  return require('./ownerships').ownerships(this._twit.token, options);
};
Lists.prototype.show = function(options) {
  return require('./show').show(this._twit.token, options);
};
Lists.prototype.statuses = function(options) {
  return require('./statuses').statuses(this._twit.token, options);
};
Lists.prototype.subscriptions = function(options) {
  return require('./subscriptions').subscriptions(this._twit.token, options);
};
Lists.prototype.members = function(options) {
  var token = this._twit.token;
  var shouldIgnorePromise = false;

  var result = new Promise(function(resolve, reject) {
    process.nextTick(function() {
      if (! shouldIgnorePromise) {
        return resolve(require('./members').members(token, options));
      }
    });
  });

  result.show = function(options) {
    shouldIgnorePromise = true;
    return require('./members-show')
      .show(token, options);
  };

  return result;
};

module.exports = Lists;
