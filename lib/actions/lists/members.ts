import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.alternatives().try(
  Joi.object().keys({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  }).or('owner_screen_name', 'owner_id'),
  Joi.object().keys({
    list_id           : Joi.string().required(),
    count             : Joi.string(),
    cursor            : Joi.string(),
    include_entities  : Joi.boolean(),
    skip_status       : Joi.boolean(),
  })
);

export const members = function() {
  return util.generateApiHandler.call(this, 'lists/members', optionsSchema);
};