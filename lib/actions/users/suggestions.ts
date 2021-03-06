import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  lang : Joi.string(),
});

export const suggestions = function() {
  return util.generateApiHandler.call(this, 'users/suggestions', optionsSchema);
};
