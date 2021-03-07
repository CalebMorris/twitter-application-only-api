import Joi from '@hapi/joi';
import { Cursor } from '../../shared-types/cursor';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export interface RetweetersOptions {
  id             : string,
  count?         : number,
  cursor?        : string,
  stringify_ids? : boolean,
}

export interface RetweetersResults extends Cursor {
  ids: string[] | number[],
}

export const optionsSchema = Joi.object().keys({
  id            : Joi.string().min(0).required(),
  count         : Joi.number().integer().min(0),
  cursor        : Joi.string().min(0),
  stringify_ids : Joi.boolean(),
});

export function retweeters(callHandler: AuthenticatedTwitterCallHandler, options: RetweetersOptions): Promise<RetweetersResults> {
  return callHandler.callTwitterApiWithSchema('statuses/retweeters/ids', options, optionsSchema);
}
