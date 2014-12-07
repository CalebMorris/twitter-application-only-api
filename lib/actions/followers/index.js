'use strict';

function Followers(twit) {
  this._twit = twit;
}

Followers.prototype.ids = function(options) {
  return require('./ids').ids(this._twit.token, options);
};

Followers.prototype.list = function(options) {
  return require('./list').list(this._twit.token, options);
};

module.exports = Followers;
