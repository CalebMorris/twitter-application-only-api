'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  screen_name      : Joi.array().includes(Joi.string()).max(100),
  user_id          : Joi.array().includes(Joi.string()).max(100),
  include_entities : Joi.boolean(),
  tweet_mode       : Joi.string(),
});

var lookup = function() {
  return util.generateApiHandler.call(this, 'users/lookup', optionsSchema);
};

module.exports = {
  lookup        : lookup,
  optionsSchema : optionsSchema,
};
