'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  lang : Joi.string(),
});

var suggestions = util.generateApiHandler('users/suggestions', optionsSchema);

module.exports = {
  suggestions   : suggestions,
  optionsSchema : optionsSchema,
};
