'use strict';


function Help(twit) {
  this._twit = twit;
}

Help.prototype.configuration = function(options) {
  return require('./configuration').configuration(this._twit.token, options);
};
Help.prototype.languages = function(options) {
  return require('./languages').languages(this._twit.token, options);
};
Help.prototype.privacy = function(options) {
  return require('./privacy').privacy(this._twit.token, options);
};
Help.prototype.tos = function(options) {
  return require('./tos').tos(this._twit.token, options);
};

module.exports = Help;
