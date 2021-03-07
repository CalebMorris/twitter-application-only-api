import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  screen_name      : Joi.array().items(Joi.string()).max(100),
  user_id          : Joi.array().items(Joi.string()).max(100),
  include_entities : Joi.boolean(),
  tweet_mode       : Joi.string(),
});

export function lookup(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('users/lookup', options, optionsSchema);
}
