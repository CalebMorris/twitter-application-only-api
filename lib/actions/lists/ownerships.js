'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
}).or('user_id', 'screen_name');

var ownerships = util.generateApiHandler('lists/ownerships', optionsSchema);

module.exports = {
  ownerships    : ownerships,
  optionsSchema : optionsSchema,
};
