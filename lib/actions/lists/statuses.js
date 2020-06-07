'use strict';

var _    = require('lodash');
var util = require('../../util');
var Joi  = require('@hapi/joi');

var commonSchema = {
  since_id          : Joi.string(),
  max_id            : Joi.string(),
  count             : Joi.number().integer(),
  include_entities  : Joi.boolean(),
  include_rts       : Joi.boolean(),
};

var optionsSchema = [
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id'),
  Joi.object().keys(_.extend({
    list_id : Joi.string().required(),
  }), commonSchema),
];

var statuses = function() {
  return util.generateApiHandler.call(this, 'lists/statuses', optionsSchema);
};

module.exports = {
  statuses      : statuses,
  optionsSchema : optionsSchema,
};
