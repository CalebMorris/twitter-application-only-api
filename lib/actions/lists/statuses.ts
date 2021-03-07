import _    from 'lodash';
import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

const commonSchema = {
  since_id          : Joi.string(),
  max_id            : Joi.string(),
  count             : Joi.number().integer(),
  include_entities  : Joi.boolean(),
  include_rts       : Joi.boolean(),
};

export const optionsSchema = Joi.alternatives().try(
  Joi.object().keys(_.extend({
    slug              : Joi.string().required(),
    owner_screen_name : Joi.string(),
    owner_id          : Joi.string(),
  }, commonSchema)).or('owner_screen_name', 'owner_id'),
  Joi.object().keys(_.extend({
    list_id : Joi.string().required(),
  }, commonSchema)),
);

export function statuses(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('lists/statuses', options, optionsSchema);
}