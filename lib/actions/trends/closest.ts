import util    from '../../util';
import Joi     from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  lat  : Joi.string().required(),
  long : Joi.string().required(),
});

export const closest = function() {
  return util.generateApiHandler.call(this, 'trends/closest', optionsSchema);
};
