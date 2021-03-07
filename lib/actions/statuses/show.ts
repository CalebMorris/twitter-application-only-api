import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';

export interface ShowOptions {
  id: string,
  trim_user: boolean,
  include_my_retweet: boolean,
  include_entities: boolean,
  include_ext_alt_text: boolean,
  include_card_uri: boolean,
}

export type ShowResults = Tweet

export const optionsSchema = Joi.object().keys({
  id : Joi.string().min(0).required(),
  trim_user: Joi.boolean(),
  include_my_retweet: Joi.boolean(),
  include_entities: Joi.boolean(),
  include_ext_alt_text: Joi.boolean(),
  include_card_uri: Joi.boolean(),
});

export function show(callHandler: AuthenticatedTwitterCallHandler, options: ShowOptions): Promise<ShowResults> {
  return callHandler.callTwitterApiWithSchema(`statuses/show`, options, optionsSchema);
}