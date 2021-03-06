var request = require('request');
var util    = require('../../util');
var Joi     = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  id               : Joi.string().required(),
  exclude          : Joi.string().valid('hashtags'),
});

var place = function() {
  return util.generateApiHandler.call(this, 'trends/place', optionsSchema);
};

module.exports = {
  place         : place,
  optionsSchema : optionsSchema,
};
