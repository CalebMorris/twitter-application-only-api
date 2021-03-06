import util from '../../util';
import Joi  from '@hapi/joi';

export const optionsSchema = Joi.object().keys({
  slug : Joi.string(),
});

//FIX THIS.
 //SCHEMA MUST BE CHECKED BEFORE REMOVED FROM OPTIONS TO JOIN PATH

export const members = function() {
  return util.generateUrlInsertedHandler.call(
    this,
    [ 'slug' ],
    [ 'users/suggestions/', '/members' ],
    optionsSchema
  );
};
