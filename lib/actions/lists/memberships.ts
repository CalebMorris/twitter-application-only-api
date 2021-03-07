import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
  filter_to_owned_lists : Joi.boolean(),
}).or('user_id', 'screen_name');

export function memberships(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('lists/memberships', options, optionsSchema);
}