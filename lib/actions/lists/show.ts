import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.alternatives().try(
  Joi.object().keys({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }).or('owner_screen_name', 'owner_id'),
  Joi.object().keys({
    list_id : Joi.string().required(),
  }),
);

export const show = function() {
  return util.generateApiHandler.call(this, 'lists/show', optionsSchema);
};
