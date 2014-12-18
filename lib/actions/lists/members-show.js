'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = [
  Joi.object().keys({
    slug              : Joi.string().required(),
    user_id           : Joi.string(),
    screen_name       : Joi.string(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  }).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
  Joi.object().keys({
    list_id           : Joi.string().required(),
    user_id           : Joi.string(),
    screen_name       : Joi.string(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  }).or('user_id', 'screen_name'),
];

var show = util.generateApiHandler('lists/members/show', optionsSchema);

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
