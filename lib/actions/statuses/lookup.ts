import { Status as Tweet } from 'twitter-d';
import util from '../../util';
import Joi from '@hapi/joi';

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

export const lookup = function(): (token: string, options: LookupOptions) => Promise<LookupResults> {
  return util.generateApiHandler<LookupResults>('statuses/lookup', optionsSchema);
};
