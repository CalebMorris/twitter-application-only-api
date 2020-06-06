'use strict';

var request = require('request');
var util    = require('../../util');
var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  screen_name   : Joi.string().min(1),
  user_id       : Joi.number().integer().min(0),
  cursor        : Joi.number().integer().min(0),
  stringify_ids : Joi.boolean(),
  count         : Joi.number().integer().min(0),
}).or('screen_name', 'user_id');

var ids = util.generateApiHandler('followers/ids', optionsSchema);

module.exports = {
  ids           : ids,
  optionsSchema : optionsSchema,
};
