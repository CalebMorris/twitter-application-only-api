'use strict';

var _    = require('lodash');
var util = require('../../util');

var Joi  = require('@hapi/joi');

var commonSchema = {
  count            : Joi.number().integer(),
  cursor           : Joi.string(),
  include_entities : Joi.boolean(),
  skip_status      : Joi.boolean(),
};

var optionsSchema = [
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id'),
  Joi.object().keys(_.extend({
    list_id           : Joi.string().required(),
  }, commonSchema)),
];

var subscribers = function() {
  return util.generateApiHandler.call(this, 'lists/subscribers', optionsSchema);
};

module.exports = {
  subscribers   : subscribers,
  optionsSchema : optionsSchema,
};
