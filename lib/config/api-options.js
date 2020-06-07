
const Joi = require('@hapi/joi');
const tweetMode = require('./tweet-mode');

const defaults = {
  [tweetMode.key]: tweetMode.default,
};

const optionsSchema = Joi.object({
  [tweetMode.key]: tweetMode.schema,
});

function normalize(currentOptions) {
  const validationResult = optionsSchema.validate(currentOptions);
  if (validationResult.warning) {
    console.warn(`API Options validation warning [${validationResult.warning}]`);
  }
  if (validationResult.error) {
    console.error(`API Options validation error [${validationResult.error}]`);
    throw validationResult.error;
  }

  const actualOptions = {...defaults, ...validationResult.value};
  console.log('API Options used', actualOptions);
  return actualOptions;
}

module.exports = {
  normalize: normalize,
};