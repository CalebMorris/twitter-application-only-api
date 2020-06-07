'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
}).or('user_id', 'screen_name');

var ownerships = function() {
  return util.generateApiHandler.call(this, 'lists/ownerships', optionsSchema);
};

module.exports = {
  ownerships    : ownerships,
  optionsSchema : optionsSchema,
};
