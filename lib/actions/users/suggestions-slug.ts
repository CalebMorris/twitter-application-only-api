import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  slug : Joi.string().required(),
  lang : Joi.string(),
});

export const slug = function() {
  return util.generateUrlInsertedHandler.call(
    this,
    [ 'slug' ],
    [ 'users/suggestions' ],
    optionsSchema
  );
};
