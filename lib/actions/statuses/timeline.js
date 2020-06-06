'use strict';

var request = require('request');
var util    = require('../../util');
var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  screen_name         : Joi.string().min(1),
  user_id             : Joi.number().integer().min(0),
  since_id            : Joi.number().integer().min(0),
  count               : Joi.number().integer().min(0),
  max_id              : Joi.number().integer().min(0),
  trim_user           : Joi.boolean(),
  exclude_replies     : Joi.boolean(),
  contributor_details : Joi.boolean(),
  include_rts         : Joi.boolean()
}).or('screen_name', 'user_id');

var timeline = util.generateApiHandler('statuses/user_timeline', optionsSchema);

module.exports = {
  timeline      : timeline,
  optionsSchema : optionsSchema,
};
