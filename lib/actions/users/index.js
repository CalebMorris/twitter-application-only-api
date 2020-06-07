'use strict';

var _ = require('lodash');

function Users(twit) {
  this._twit = twit;
}

Users.prototype.show = function(options) {
  return require('./show').show.call(this._twit)(this._twit.token, options);
};
Users.prototype.lookup = function(options) {
  return require('./lookup').lookup.call(this._twit)(this._twit.token, options);
};
Users.prototype.suggestions = function(slug, options) {
  var token = this._twit.token;
  var wasMembersCalled = false;

  var result = new Promise(function(resolve, reject) {
    if (typeof slug === 'string') {
      _.extend(options, { slug : slug });

      process.nextTick(function() {
        if (! wasMembersCalled) {
          return resolve(require('./suggestions-slug').slug(token, options));
        }
      });
    }
    else {
      options = slug;
      return resolve(require('./suggestions').suggestions(token, options));
    }
  });

  result.members = function() {
    wasMembersCalled = true;
    return require('./suggestions-slug-members')
    .members(token, { slug : slug });
  };

  return result;
};

module.exports = Users;
