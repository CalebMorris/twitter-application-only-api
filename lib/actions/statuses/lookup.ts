import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export interface LookupOptions {
  id                : string,
  include_entities? : boolean,
  trim_user?        : boolean,
  map?              : boolean,
}

export type LookupResults = Array<Tweet>

export const optionsSchema = Joi.object().keys({
  id               : Joi.string().required(), // comma separated ids
  include_entities : Joi.boolean(),
  trim_user        : Joi.boolean(),
  map              : Joi.boolean(),
});

export function lookup(callHandler: AuthenticatedTwitterCallHandler, options: LookupOptions): Promise<LookupResults> {
  return callHandler.callTwitterApiWithSchema('statuses/lookup', options, optionsSchema);
}