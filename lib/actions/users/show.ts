import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  user_id          : Joi.string(),
  screen_name      : Joi.string(),
  include_entities : Joi.boolean(),
}).or('user_id', 'screen_name');

export function show(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('users/show', options, optionsSchema);
}