import _ from 'lodash';
import assert from 'assert';
import request from 'request';
import querystring from 'querystring';
import { tweetModeKey } from './config/tweet-mode';

function requestCallback(resolve, reject, err, res, body) {
  if (err) {
    return reject(err);
  }

  if (res.statusCode !== 200) {
    return reject(
      new Error('Problem retrieving data: ' + JSON.stringify(res))
    );
  }

  return resolve(body ? JSON.parse(body) : null);
}

export function requestHandler(resolve, reject, path, token, options) {
  assert(_.isFunction(resolve), 'resolve must be a function');
  assert(_.isFunction(reject), 'reject must be a function');
  assert(_.isString(path), 'path must be a string');
  assert(_.isString(token), 'token must be a string');
  assert(_.isObject(options), 'options must be a options');

  options = options || {};

  if (this && this.options && this.options.tweet_mode) {
    options[tweetModeKey] = this.options.tweet_mode;
  }

  const requestOptions = {
    url     : 'https://api.twitter.com/1.1/' + path + '.json?' +
              querystring.stringify(options),
    method  : 'GET',
    headers : {
      'Authorization'  : 'Bearer ' + token,
      'User-Agent'     : 'request'
    },
  };

  return request.get(requestOptions, requestCallback.bind(this, resolve, reject));
}

export function validateOptions(token, schema, options) {
  assert(_.isString(token), 'token must be a string');
  assert(_.isObject(schema), 'schema must be an object');
  assert(_.isObject(options), 'options must be an object');

  return new Promise<void>((resolve, reject) => {
    const validationResult = schema.validate(options, {
      allowUnknown: true
    });
    if (validationResult.warning) {
      console.log(`Validation warning [${validationResult.warning}]`);
    }
    if (validationResult.error) {
      console.log(`Validation error [${validationResult.error}]`);
      return reject(validationResult.error);
    }

    return resolve();
  });
}

function generatedNoSchemaHandler(path, token, options) {
  return new Promise((resolve, reject) => {
    requestHandler(resolve, reject, path, token, options);
  });
}

function generatedApiHandler<TResults>(path: string, schema: any, token: string, options: any) {
  return new Promise<TResults>((resolve, reject) => {
    return validateOptions(token, schema, options)
    .then(() => {
      requestHandler.call(this, resolve, reject, path, token, options);
    });
  });
}

function generateApiHandler<TResults>(path: string, schema: any): (token: string, options: any) => Promise<TResults> {
  return (token: string, options: any) => generatedApiHandler<TResults>(path, schema, token, options);
}

function generateUrlInsertedHandler<TResults>(insertedValueNames, pathInterleves, schema): (token: string, options: any) => Promise<TResults> {
  // pathInterleves[i] + options[insertedValueName[i]]
  // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }

  if (insertedValueNames.length < (pathInterleves - 1)) {
    throw new Error(
      'There must be at least one more path interleve than inserted value'
    );
  }

  return function filterOptionsAndContinue(token, options) {
    return new Promise((resolve, reject) => {
      return validateOptions(token, schema, options)
      .then(() => {
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

        return requestHandler(resolve, reject, path, token, options).bind(this);
      });
    });
  };
}

export function generateNoSchemaHandler(path) {
  return generatedNoSchemaHandler.bind(this, path);
}

export default {
  generateApiHandler : generateApiHandler,
  generateNoSchemaHandler : generateNoSchemaHandler,
  generateUrlInsertedHandler : generateUrlInsertedHandler,
  generatedApiHandler : generatedApiHandler,
  generatedNoSchemaHandler : generatedNoSchemaHandler,
  requestCallback : requestCallback,
  requestHandler : requestHandler,
  validateOptions : validateOptions,
};
