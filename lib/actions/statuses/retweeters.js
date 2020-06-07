'use strict';

var request = require('request');
var util    = require('../../util');
var Joi     = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  id            : Joi.string().min(0),
  count         : Joi.number().integer().min(0),
  cursor        : Joi.string().min(0),
  stringify_ids : Joi.boolean(),
});

var retweeters = util.generateApiHandler(
  'statuses/retweeters/ids',
  optionsSchema
);

module.exports = {
  retweeters    : retweeters,
  optionsSchema : optionsSchema,
};
