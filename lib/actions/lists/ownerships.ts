import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  user_id     : Joi.string(),
  screen_name : Joi.string(),
  count       : Joi.number().integer(),
  cursor      : Joi.string(),
}).or('user_id', 'screen_name');

export function ownerships(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('lists/ownerships', options, optionsSchema);
}