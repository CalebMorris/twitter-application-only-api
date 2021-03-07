import _    from 'lodash';
import util from '../../util';
import Joi  from '@hapi/joi';

const commonSchema = {
  count            : Joi.number().integer(),
  cursor           : Joi.string(),
  include_entities : Joi.boolean(),
  skip_status      : Joi.boolean(),
};

export const optionsSchema = Joi.alternatives().try(
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id'),
  Joi.object().keys(_.extend({
    list_id           : Joi.string().required(),
  }, commonSchema))
)

export const subscribers = function() {
  return util.generateApiHandler.call(this, 'lists/subscribers', optionsSchema);
};
