'use strict';


function Statuses(twit) {
  this._twit = twit;
}
Statuses.prototype.timeline = function(options) {
  return require('./timeline').timeline(this._twit.token, options);
};
Statuses.prototype.retweets = function(options) {
  return require('./retweets').retweets(this._twit.token, options);
};
Statuses.prototype.retweeters = function(options) {
  return require('./retweeters').retweeters(this._twit.token, options);
};
Statuses.prototype.show = function(options) {
  return require('./show').show(this._twit.token, options);
};
Statuses.prototype.lookup = function(options) {
  return require('./lookup').lookup(this._twit.token, options);
};
Statuses.prototype.oembed = function(options) {
  return require('./oembed').oembed(this._twit.token, options);
};

module.exports = Statuses;
