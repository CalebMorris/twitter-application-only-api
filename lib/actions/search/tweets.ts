import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/search/api-reference/get-search-tweets

export interface SearchTweetsOptions {
  q                 : string,
  geocode?          : string,
  lang?             : string,
  locale?           : string,
  result_type?      : 'mixed' | 'recent' | 'popular',
  count?            : number,
  until?            : string,
  since_id?         : number | string,
  max_id?           : number | string,
  include_entities? : boolean,
}

export interface SearchTweetsResults {
  statuses: Array<Tweet>,
}

export const optionsSchema = Joi.object().keys({
  q                : Joi.string().max(500).required(),
  geocode          : Joi.string().pattern(/(?:-?\d{1,3}(?:\d+)?[ ,]?){2}[ ,]\d+(?:mi|km)/),
  lang             : Joi.string(),
  locale           : Joi.string(),
  result_type      : Joi.string(),
  count            : Joi.number().integer(),
  until            : Joi.string().pattern(/\d{4}-\d{2}-\d{2}/),
  since_id         : Joi.number().integer(),
  max_id           : Joi.number().integer(),
  include_entities : Joi.boolean(),
});

export function searchTweets(callHandler: AuthenticatedTwitterCallHandler, options: SearchTweetsOptions): Promise<SearchTweetsResults> {
  options.q = encodeURIComponent(options.q);
  return callHandler.callTwitterApiWithSchema('search/tweets', options, optionsSchema);
}
