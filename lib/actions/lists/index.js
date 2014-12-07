'use strict';

function Lists(twit) {
  this._twit = twit;
}

Lists.prototype.list = function(options) {
  return require('./list').list(this._twit.token, options);
};
Lists.prototype.members = function(options) {
  return require('./members').members(this._twit.token, options);
};

module.exports = Lists;
