'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  screen_name : Joi.string(),
  user_id     : Joi.string(),
  reverse     : Joi.boolean(),
});

var list = util.generateApiHandler('lists/list', optionsSchema);

module.exports = {
  list          : list,
  optionsSchema : optionsSchema,
};
