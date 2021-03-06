import util from '../../util';
import Joi  from '@hapi/joi';

var optionsSchema = Joi.object().keys({
  screen_name : Joi.string(),
  user_id     : Joi.string(),
  reverse     : Joi.boolean(),
});

var list = function() {
  return util.generateApiHandler.call(this, 'lists/list', optionsSchema);
};

module.exports = {
  list          : list,
  optionsSchema : optionsSchema,
};
