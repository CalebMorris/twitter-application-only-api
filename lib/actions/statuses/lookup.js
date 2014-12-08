'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  id               : Joi.array().includes(Joi.string()).required(),
  include_entities : Joi.boolean(),
  trim_user        : Joi.boolean(),
  map              : Joi.boolean(),
});

var lookup = util.generateApiHandler('statuses/lookup', optionsSchema);

module.exports = {
  lookup        : lookup,
  optionsSchema : optionsSchema,
};
