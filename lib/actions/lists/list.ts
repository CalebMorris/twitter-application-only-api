import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  screen_name : Joi.string(),
  user_id     : Joi.string(),
  reverse     : Joi.boolean(),
});

export function list(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('lists/list', options, optionsSchema);
}