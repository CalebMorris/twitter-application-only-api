import util from '../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  source_id          : Joi.string().min(1),
  source_screen_name : Joi.string().min(1),
  target_id          : Joi.string().min(1),
  target_screen_name : Joi.string().min(1),
});

export const friendships = util.generateApiHandler('friendships/show', optionsSchema);
