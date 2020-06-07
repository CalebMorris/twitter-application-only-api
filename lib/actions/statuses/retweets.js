'use strict';

var request = require('request');
var util    = require('../../util');
var Joi     = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  id        : Joi.string().min(0).required(),
  count     : Joi.number().integer().min(0),
  trim_user : Joi.boolean(),
});

var retweets = function() {
  return util.generateUrlInsertedHandler.call(
    this, 
    [ 'id' ],
    [ 'statuses/retweets/' ],
    optionsSchema
  );
};

module.exports = {
  retweets      : retweets,
  optionsSchema : optionsSchema,
};
