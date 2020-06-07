'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  slug : Joi.string().required(),
  lang : Joi.string(),
});

var slug = util.generateUrlInsertedHandler(
  [ 'slug' ],
  [ 'users/suggestions' ],
  optionsSchema
);

module.exports = {
  slug          : slug,
  optionsSchema : optionsSchema,
};
