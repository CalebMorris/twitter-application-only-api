'use strict';


function Users(twit) {
  this._twit = twit;
}

Users.prototype.show = function(options) {
  return require('./show').show(this._twit.token, options);
};
Users.prototype.lookup = function(options) {
  return require('./lookup').lookup(this._twit.token, options);
};

module.exports = Users;
