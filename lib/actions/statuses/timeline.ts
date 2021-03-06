import { Status as Tweet } from 'twitter-d';
import util from '../../util';
import Joi from '@hapi/joi';

export interface TimelineOptions {
  screen_name?: string,
  user_id?: number,
  since_id?: number,
  count?: number
  max_id?: number,
  trim_user?: boolean,
  exclude_replies?: boolean,
  contributor_details?: boolean
  include_rts?: boolean,
}

export interface TimelineResults {
  [index: number]: Tweet,
}

export const optionsSchema = Joi.object().keys({
  screen_name         : Joi.string().min(1),
  user_id             : Joi.number().integer().min(0),
  since_id            : Joi.number().integer().min(0),
  count               : Joi.number().integer().min(0),
  max_id              : Joi.number().integer().min(0),
  trim_user           : Joi.boolean(),
  exclude_replies     : Joi.boolean(),
  contributor_details : Joi.boolean(),
  include_rts         : Joi.boolean()
}).or('screen_name', 'user_id');

export const timeline = function(): (token: string, options: TimelineOptions) => Promise<TimelineResults> {
  return util.generateApiHandler<TimelineResults>('statuses/user_timeline', optionsSchema);
};
