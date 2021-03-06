import { Cursor } from '../../shared-types/cursor';
import util from '../../util';
import Joi from '@hapi/joi';

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

export const retweeters = function(): (token: string, options: RetweetersOptions) => Promise<RetweetersResults> {
  return util.generateApiHandler<RetweetersResults>(
    'statuses/retweeters/ids',
    optionsSchema
  );
};
