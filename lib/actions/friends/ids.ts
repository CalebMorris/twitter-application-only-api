import request from 'request';
import util    from '../../util';
import Joi     from '@hapi/joi';

const optionsSchema = Joi.object().keys({
  screen_name   : Joi.string().min(1),
  user_id       : Joi.number().integer().min(0),
  cursor        : Joi.number().integer().min(0),
  count         : Joi.number().integer().min(0),
  stringify_ids : Joi.boolean(),
}).or('screen_name', 'user_id');

var ids = util.generateApiHandler('friends/ids', optionsSchema);

module.exports = {
  ids           : ids,
  optionsSchema : optionsSchema,
};
