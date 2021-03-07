import _ from 'lodash';
import assert from 'assert';
import axios from 'axios';
import querystring from 'querystring';
import { tweetModeKey } from './config/tweet-mode';
import Joi from '@hapi/joi';

export async function requestHandler(path, token, options): Promise<any> {
  assert(_.isString(path), 'path must be a string');
  assert(_.isString(token), 'token must be a string');
  assert(_.isObject(options), 'options must be a options');

  options = options || {};

  if (options && options.tweet_mode) {
    options[tweetModeKey] = options.tweet_mode;
  // } else {
  //   throw new Error(`Can't find [tweet_mode] in this[${JSON.stringify(options)}]`); // TODO: remove
  }

  const response = await axios.get(
    `https://api.twitter.com/1.1/${path}.json?${querystring.stringify(options)}`,
    {
      headers: {
        'Authorization'  : 'Bearer ' + token,
        'User-Agent'     : 'axios',
      },
    }
  );

  if (response.status != 200) {
    throw new Error('Problem retrieving data: ' + JSON.stringify(response));
  }

  // console.warn(`DATA: ${response.data}`)

  // return response.data ? JSON.parse(response.data) : null;
  return response.data;
}

export function validateOptions(schema: Joi.AnySchema, options): void {
  assert(_.isObject(schema), 'schema must be an object');
  assert(_.isObject(options), 'options must be an object');

  const validationResult = schema.validate(options, {
    allowUnknown: true
  });
  if (validationResult.warning) {
    console.log(`Validation warning [${validationResult.warning}]`);
  }
  if (validationResult.error) {
    console.log(`Validation error [${validationResult.error}]`);
    throw validationResult.error;
  }
}

async function generatedNoSchemaHandler(path, token, options) {
  return await requestHandler(path, token, options);
}

async function generatedApiHandler<TResults>(path: string, schema: Joi.AnySchema, token: string, options: any): Promise<TResults> {
  validateOptions(schema, options);
  return await requestHandler(path, token, options);
}

export function generateApiHandler<TResults>(path: string, schema: Joi.AnySchema): (token: string, options: any) => Promise<TResults> {
  return (token: string, options: any) => generatedApiHandler<TResults>(path, schema, token, options);
}

function generateUrlInsertedHandler<TResults>(insertedValueNames, pathInterleves, schema: Joi.AnySchema): (token: string, options: any) => Promise<TResults> {
  // pathInterleves[i] + options[insertedValueName[i]]
  // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }

  if (insertedValueNames.length < (pathInterleves - 1)) {
    throw new Error(
      'There must be at least one more path interleve than inserted value'
    );
  }

  return async function filterOptionsAndContinue(token, options) {
    validateOptions(schema, options);

    const insertedValues = _.map(
      insertedValueNames,
      function mapValueNameToValue(valueName) {
        const tmp = options[valueName];
        delete options[valueName];
        return tmp;
      }
    );

    let path = '';
    _.forEach(insertedValues, function(value, index) {
      path += pathInterleves[index] + '/' + value;
    });

    if (pathInterleves.length > insertedValues) {
      path += '/' + pathInterleves[pathInterleves.length - 1];
    }

    return await requestHandler(path, token, options);
  };
}

export function generateNoSchemaHandler(path) {
  return async (schema, options) => await generatedNoSchemaHandler(path, schema, options);
}

export default {
  generateApiHandler : generateApiHandler,
  generateNoSchemaHandler : generateNoSchemaHandler,
  generateUrlInsertedHandler : generateUrlInsertedHandler,
  generatedApiHandler : generatedApiHandler,
};
