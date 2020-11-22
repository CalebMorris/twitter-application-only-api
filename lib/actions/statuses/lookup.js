'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  id               : Joi.array().items(Joi.string()).required(),
  include_entities : Joi.boolean(),
  trim_user        : Joi.boolean(),
  map              : Joi.boolean(),
});

var lookup = function() {
  return util.generateApiHandler.call(this, 'statuses/lookup', optionsSchema);
};

module.exports = {
  lookup        : lookup,
  optionsSchema : optionsSchema,
};
