import util from '../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  screen_name      : Joi.string().min(1),
  user_id          : Joi.string().min(1),
  count            : Joi.number().integer().min(0),
  since_id         : Joi.string().min(1),
  max_id           : Joi.string().min(1),
  include_entities : Joi.boolean(),
});

export const favorites = util.generateApiHandler('favorites/list', optionsSchema);
