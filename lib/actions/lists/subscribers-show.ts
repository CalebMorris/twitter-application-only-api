import _    from 'lodash';
import Joi  from '@hapi/joi';
import util from '../../util';

const commonSchema = {
  user_id           : Joi.string(),
  screen_name       : Joi.string(),
  include_entities  : Joi.boolean(),
  skip_status       : Joi.boolean(),
};

export const optionsSchema = [
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
  Joi.object().keys(_.extend({
    list_id           : Joi.string().required(),
  }, commonSchema)).or('user_id', 'screen_name'),
];

export const show = function() {
  return util.generateApiHandler.call(this, 'lists/subscribers/show', optionsSchema);
};
