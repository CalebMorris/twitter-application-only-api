'use strict';

var util = require('../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  source_id          : Joi.string().min(1),
  source_screen_name : Joi.string().min(1),
  target_id          : Joi.string().min(1),
  target_screen_name : Joi.string().min(1),
});

var friendships = util.generateApiHandler('friendships/show', optionsSchema);

module.exports = {
  friendships   : friendships,
  optionsSchema : optionsSchema,
};
