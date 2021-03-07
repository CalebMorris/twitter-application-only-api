import Joi     from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export const optionsSchema = Joi.object().keys({
  lat  : Joi.string().required(),
  long : Joi.string().required(),
});

export function closest(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any> {
  return callHandler.callTwitterApiWithSchema('trends/closest', options, optionsSchema);
}