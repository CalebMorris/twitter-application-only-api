import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
}).or('user_id', 'screen_name');

export const ownerships = function() {
  return util.generateApiHandler.call(this, 'lists/ownerships', optionsSchema);
};
