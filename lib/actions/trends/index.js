'use strict';


function Trends(twit) {
  this._twit = twit;
}

Trends.prototype.available = function() {
  return require('./available').available.call(this._twit)(this._twit.token);
};
Trends.prototype.closest = function(options) {
  return require('./closest').closest.call(this._twit)(this._twit.token, options);
};
Trends.prototype.place = function(options) {
  return require('./place').place.call(this._twit)(this._twit.token, options);
};

module.exports = Trends;
