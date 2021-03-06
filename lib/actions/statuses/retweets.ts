import { Status as Tweet } from 'twitter-d';
import util from '../../util';
import Joi from '@hapi/joi';

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

export const retweets = function(): (token: string, options: RetweetsOptions) => Promise<RetweetsResults> {
  return util.generateUrlInsertedHandler<RetweetsResults>(
    [ 'id' ],
    [ 'statuses/retweets/' ],
    optionsSchema
  );
};
