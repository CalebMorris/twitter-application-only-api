import util from '../../util';
import Joi from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  id               : Joi.string().required(),
  exclude          : Joi.string().valid('hashtags'),
});

export const place = function() {
  return util.generateApiHandler.call(this, 'trends/place', optionsSchema);
};
