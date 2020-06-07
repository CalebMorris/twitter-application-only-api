'use strict';

function Lists(twit) {
  this._twit = twit;
}

Lists.prototype.list = function(options) {
  return require('./list').list.call(this._twit)(this._twit.token, options);
};
Lists.prototype.memberships = function(options) {
  return require('./memberships').memberships.call(this._twit)(this._twit.token, options);
};
Lists.prototype.ownerships = function(options) {
  return require('./ownerships').ownerships.call(this._twit)(this._twit.token, options);
};
Lists.prototype.show = function(options) {
  return require('./show').show.call(this._twit)(this._twit.token, options);
};
Lists.prototype.statuses = function(options) {
  return require('./statuses').statuses.call(this._twit)(this._twit.token, options);
};
Lists.prototype.subscriptions = function(options) {
  return require('./subscriptions').subscriptions.call(this._twit)(this._twit.token, options);
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
Lists.prototype.subscribers = function(options) {
  var token = this._twit.token;
  var shouldIgnorePromise = false;

  var result = new Promise(function(resolve, reject) {
    process.nextTick(function() {
      if (! shouldIgnorePromise) {
        return resolve(require('./subscribers').subscribers(token, options));
      }
    });
  });

  result.show = function(options) {
    shouldIgnorePromise = true;
    return require('./subscribers-show')
      .show(token, options);
  };

  return result;
};

module.exports = Lists;
