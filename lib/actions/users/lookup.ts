import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  screen_name      : Joi.array().items(Joi.string()).max(100),
  user_id          : Joi.array().items(Joi.string()).max(100),
  include_entities : Joi.boolean(),
  tweet_mode       : Joi.string(),
});

export const lookup = function() {
  return util.generateApiHandler.call(this, 'users/lookup', optionsSchema);
};
