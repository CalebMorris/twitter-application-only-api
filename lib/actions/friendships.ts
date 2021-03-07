import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  source_id          : Joi.string().min(1),
  source_screen_name : Joi.string().min(1),
  target_id          : Joi.string().min(1),
  target_screen_name : Joi.string().min(1),
});

export function friendships(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('friendships/show', options, optionsSchema);
}
