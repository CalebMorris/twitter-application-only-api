var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  slug : Joi.string(),
});

//FIX THIS.
 //SCHEMA MUST BE CHECKED BEFORE REMOVED FROM OPTIONS TO JOIN PATH

var members = function() {
  return util.generateUrlInsertedHandler.call(
    this,
    [ 'slug' ],
    [ 'users/suggestions/', '/members' ],
    optionsSchema
  );
};

module.exports = {
  members       : members,
  optionsSchema : optionsSchema,
};
