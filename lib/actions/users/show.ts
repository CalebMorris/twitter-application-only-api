import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  user_id          : Joi.string(),
  screen_name      : Joi.string(),
  include_entities : Joi.boolean(),
}).or('user_id', 'screen_name');

export const show = function() {
  return util.generateApiHandler.call(this, 'users/show', optionsSchema);
};
