import util from '../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  q           : Joi.string().min(1).required(),
  result_type : Joi.string().min(1),
  geocode     : Joi.string().min(1),
  lang        : Joi.string().min(1),
  count       : Joi.number().integer(),
  until       : Joi.string().min(1),
  since_id    : Joi.string().min(1),
  max_id      : Joi.string().min(1),
});

export const search = util.generateApiHandler('search/tweets', optionsSchema);
