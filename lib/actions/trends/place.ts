import Joi from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  id               : Joi.string().required(),
  exclude          : Joi.string().valid('hashtags'),
});

export function place(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('trends/place', options, optionsSchema);
}