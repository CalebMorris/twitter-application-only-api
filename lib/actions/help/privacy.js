'use strict';

var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var privacy = function(token) {
  return new Promise(function(resolve, reject) {
    if (typeof token === 'undefined') {
      return reject(false);
    }

    var requestCallback = function(err, res, body) {
      if (err) {
        return reject(err);
      }

      if (res.statusCode !== 200) {
        return reject(new Error('Problem retrieving privacy: ' + JSON.stringify(res)));
      }

      return resolve(body ? JSON.parse(body) : null);
    };

    var requestOptions = {
      url     : 'https://api.twitter.com/1.1/help/privacy.json',
      method  : 'GET',
      headers : {
        'Authorization'  : 'Bearer ' + token,
        'User-Agent'     : 'request'
      },
    };

    request.get(requestOptions, requestCallback);
  });
};

module.exports = {
  privacy : privacy,
};
