'use strict';

function Friends(twit) {
  this._twit = twit;
}

Friends.prototype.ids = function(options) {
  return require('./ids').ids(this._twit.token, options);
};

Friends.prototype.list = function(options) {
  return require('./list').list(this._twit.token, options);
};

module.exports = Friends;
