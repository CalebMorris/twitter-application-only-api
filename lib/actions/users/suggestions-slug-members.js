'use strict';

var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  slug : Joi.string(),
});

//FIX THIS.
 //SCHEMA MUST BE CHECKED BEFORE REMOVED FROM OPTIONS TO JOIN PATH

var members = util.generateUrlInsertedHandler(
  [ 'slug' ],
  [ 'users/suggestions/', '/members' ],
  optionsSchema
);

module.exports = {
  members       : members,
  optionsSchema : optionsSchema,
};
