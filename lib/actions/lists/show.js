'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = [
  Joi.object().keys({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }).or('owner_screen_name', 'owner_id'),
  Joi.object().keys({
    list_id : Joi.string().required(),
  }),
];

var show = util.generateApiHandler('lists/show', optionsSchema);

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
