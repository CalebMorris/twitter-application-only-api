import util    from '../../util';
import Joi     from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  screen_name   : Joi.string().min(1),
  user_id       : Joi.number().integer().min(0),
  cursor        : Joi.number().integer().min(0),
  count         : Joi.number().integer().min(0),
  stringify_ids : Joi.boolean(),
}).or('screen_name', 'user_id');

export const ids = util.generateApiHandler('friends/ids', optionsSchema);
