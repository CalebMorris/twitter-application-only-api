'use strict';


function Trends(twit) {
  this._twit = twit;
}

Trends.prototype.place = function(options) {
  return require('./place').place(this._twit.token, options);
};

module.exports = Trends;
