'use strict';

var util    = require('../../util');

var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  id                 : Joi.string().min(0).required(),
  count              : Joi.number().integer().min(0),
  include_my_retweet : Joi.boolean(),
  include_entities   : Joi.boolean(),
});

var show = util.generateApiHandler('statuses/show', optionsSchema);

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
