import util from '../../util';
import Joi  from '@hapi/joi';

var optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
  filter_to_owned_lists : Joi.boolean(),
}).or('user_id', 'screen_name');

var memberships = function () {
  return util.generateApiHandler.call(this, 'lists/memberships', optionsSchema);
};

module.exports = {
  memberships   : memberships,
  optionsSchema : optionsSchema,
};
