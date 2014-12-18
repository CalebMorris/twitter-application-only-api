'use strict';

var _       = require('lodash');
var util    = require('../../util');

var commonSchema = {
  user_id           : Joi.string(),
  screen_name       : Joi.string(),
  include_entities  : Joi.boolean(),
  skip_status       : Joi.boolean(),
};

var optionsSchema = [
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
  Joi.object().keys(_.extend({
    list_id           : Joi.string().required(),
  }, commonSchema)).or('user_id', 'screen_name'),
];

var show = util.generateApiHandler('lists/subscribers/show', optionsSchema);

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
