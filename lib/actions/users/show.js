'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  user_id          : Joi.string(),
  screen_name      : Joi.string(),
  include_entities : Joi.boolean(),
}).or('user_id', 'screen_name');

var show = util.generateApiHandler('users/show', optionsSchema);

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
