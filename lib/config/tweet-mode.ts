
import Joi  from '@hapi/joi';

const parameterKey = 'tweet_mode';

// Values
const extended = 'extended';
const compact = 'compat';

const schema = Joi.string().valid(extended, compact);

export const tweetModeKey = parameterKey;

export default {
  key: parameterKey,
  default: extended,
  schema: schema,
  values: {
    extended: extended,
    compact: compact,
  }
};
