import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export interface RetweetsOptions {
  id         : string,
  count?     : number,
  trim_user? : boolean,
}

export interface RetweetsResults {
  [index: number]: Tweet,
}

export const optionsSchema = Joi.object().keys({
  id        : Joi.string().min(0).required(),
  count     : Joi.number().integer().min(0),
  trim_user : Joi.boolean(),
});

export function retweets(callHandler: AuthenticatedTwitterCallHandler, options: RetweetsOptions): Promise<RetweetsResults> {
  callHandler.validateOptions(options, optionsSchema);
  const {id, ...queryParamsOptions} = options;
  return callHandler.callTwitterApi(`statuses/retweets/${id}`, queryParamsOptions);
}