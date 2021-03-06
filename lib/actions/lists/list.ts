import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  screen_name : Joi.string(),
  user_id     : Joi.string(),
  reverse     : Joi.boolean(),
});

export const list = function() {
  return util.generateApiHandler.call(this, 'lists/list', optionsSchema);
};
