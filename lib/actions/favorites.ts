import Joi  from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  screen_name      : Joi.string().min(1),
  user_id          : Joi.string().min(1),
  count            : Joi.number().integer().min(0),
  since_id         : Joi.string().min(1),
  max_id           : Joi.string().min(1),
  include_entities : Joi.boolean(),
});

export function favorites(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('favorites/list', options, optionsSchema);
}
