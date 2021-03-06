var util = require('../../util');
var Joi  = require('@hapi/joi');

var optionsSchema = Joi.object().keys({
  user_id          : Joi.string(),
  screen_name      : Joi.string(),
  include_entities : Joi.boolean(),
}).or('user_id', 'screen_name');

var show = function() {
  return util.generateApiHandler.call(this, 'users/show', optionsSchema);
};

module.exports = {
  show          : show,
  optionsSchema : optionsSchema,
};
