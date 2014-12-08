'use strict';

var request = require('request');
var util    = require('../../util');

var Joi     = require('joi');
var Promise = require('bluebird');

var optionsSchema = Joi.object().keys({
  count     : Joi.number().integer().min(0),
  trim_user : Joi.boolean(),
});

var retweets = util.generateUrlInsertedHandler(
  [ 'id' ],
  [ 'statuses/retweets/' ],
  optionsSchema
);

module.exports = {
  retweets      : retweets,
  optionsSchema : optionsSchema,
};
