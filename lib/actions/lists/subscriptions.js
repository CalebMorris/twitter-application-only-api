'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
}).or('user_id', 'screen_name');

var subscriptions = util.generateApiHandler('lists/subscriptions', optionsSchema);

module.exports = {
  subscriptions : subscriptions,
  optionsSchema : optionsSchema,
};
