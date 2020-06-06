'use strict';

var request = require('request');
var util    = require('../../util');
var Joi     = require('joi');

var optionsSchema = Joi.object().keys({
  id               : Joi.string().required(),
  exclude          : Joi.string().valid('hashtags'),
});

var place = util.generateApiHandler('trends/place', optionsSchema);

module.exports = {
  place         : place,
  optionsSchema : optionsSchema,
};
