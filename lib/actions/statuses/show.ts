import { Status as Tweet } from 'twitter-d';
import util from '../../util';
import Joi from '@hapi/joi';

export interface ShowOptions {
  id: string,
}

export interface ShowResults extends Tweet{}

// TODO: update with actual params
export const optionsSchema = Joi.object().keys({
  id : Joi.string().min(0).required(),
});

export const show = function(): (token: string, options: ShowOptions) => Promise<ShowResults> {
  return util.generateApiHandler<ShowResults>('statuses/show', optionsSchema);
};
