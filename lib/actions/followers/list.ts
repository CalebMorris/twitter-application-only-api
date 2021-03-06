import util from '../../util';
import Joi  from '@hapi/joi';

var optionsSchema = Joi.object().keys({
  screen_name           : Joi.string().min(1),
  user_id               : Joi.number().integer().min(0),
  cursor                : Joi.number().integer().min(0),
  count                 : Joi.number().integer().min(0),
  skip_status           : Joi.boolean(),
  include_user_entities : Joi.boolean(),
}).or('screen_name', 'user_id');

var list = util.generateApiHandler('followers/list', optionsSchema);

module.exports = {
  list          : list,
  optionsSchema : optionsSchema,
};
