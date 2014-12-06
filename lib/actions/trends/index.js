'use strict';


function Trends(twit) {
  this._twit = twit;
}

Trends.prototype.available = function() {
  return require('./available').available(this._twit.token);
};
Trends.prototype.closest = function(options) {
  return require('./closest').closest(this._twit.token, options);
};
Trends.prototype.place = function(options) {
  return require('./place').place(this._twit.token, options);
};

module.exports = Trends;
