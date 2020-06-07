'use strict';


function Statuses(twit) {
  this._twit = twit;
}
Statuses.prototype.timeline = function(options) {
  return require('./timeline').timeline.call(this._twit)(this._twit.token, options);
};
Statuses.prototype.retweets = function(options) {
  return require('./retweets').retweets.call(this._twit)(this._twit.token, options);
};
Statuses.prototype.retweeters = function(options) {
  return require('./retweeters').retweeters.call(this._twit)(this._twit.token, options);
};
Statuses.prototype.show = function(options) {
  return require('./show').show.call(this._twit)(this._twit.token, options);
};
Statuses.prototype.lookup = function(options) {
  return require('./lookup').lookup.call(this._twit)(this._twit.token, options);
};
Statuses.prototype.oembed = function(options) {
  return require('./oembed').oembed.call(this._twit)(this._twit.token, options);
};

module.exports = Statuses;
