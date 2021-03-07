import _ from 'lodash';
import assert from 'assert';
import axios from "axios";
import querystring from 'querystring';
import Joi from '@hapi/joi';

export interface GlobalOptions {
  tweet_mode?: 'extended' | 'compact'
}

export class TwitterApiError extends Error {
  body: any;

  constructor(message: string, body: any) {
    super(message);
    this.body = body;
    Object.setPrototypeOf(this, TwitterApiError.prototype);
  }
}

class TwitterCallHandler {

  globalOptions: GlobalOptions;

  constructor(globalOptions: GlobalOptions = {}) {
    this.globalOptions = globalOptions;
  }

  async authenticate(apiKey: string, apiSecret: string): Promise<AuthenticatedTwitterCallHandler> {
    const credentials = Buffer.from(apiKey + ':' + apiSecret).toString('base64')
    const response = await axios.post(
      'https://api.twitter.com/oauth2/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': 'Basic ' + credentials,
          'Content-Length': 29,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'User-Agent': 'request'
        },
      }
    );

    if (response.status != 200) {
      new TwitterApiError('There was a problem retrieving the bearer token', response.data)
    }

    if (!response.data) {
      throw new Error('Missing body from auth request');
    }

    if (response.data.token_type !== 'bearer') {
      throw new Error(`Response token was of the wrong type: [${response.data.token_type}]`);
    }

    return new AuthenticatedTwitterCallHandler(response.data.access_token, this.globalOptions);

  }

}

export class AuthenticatedTwitterCallHandler {
  bearerToken: string;
  globalOptions: GlobalOptions;

  static async fromApiKeys(apiKey: string, apiSecret: string, globalOptions: GlobalOptions = {}): Promise<AuthenticatedTwitterCallHandler> {
    return new TwitterCallHandler(globalOptions).authenticate(apiKey, apiSecret);
  }

  constructor(bearerToken: string, globalOptions: GlobalOptions = {}) {
    this.bearerToken = bearerToken;
    this.globalOptions = globalOptions;
  }

  async callTwitterApi<RequestOptions, ResponseType>(path: string, options: RequestOptions | any = {}): Promise<ResponseType> {
    assert(_.isString(path), 'path must be a string');
    assert(_.isObject(options), 'options must be a options');

    options = {
      ...this.globalOptions,
      ...options,
    };

    const response = await axios.get(
      `https://api.twitter.com/1.1/${path}.json?${querystring.stringify(options)}`,
      {
        headers: {
          'Authorization': `Bearer ${this.bearerToken}`,
          'User-Agent': 'axios',
        },
      }
    );

    if (response.status != 200) {
      throw new Error(`Problem retrieving data: ${JSON.stringify(response)}`);
    }

    return response.data;
  }

  async callTwitterApiWithSchema<RequestOptions, ResponseType>(path: string, options: RequestOptions, schema: Joi.AnySchema): Promise<ResponseType> {
    this.validateOptions(options, schema);
    return await this.callTwitterApi(path, options);
  }

  validateOptions<RequestOptions>(options: RequestOptions, schema: Joi.AnySchema): void {
    assert(_.isObject(schema), 'schema must be an object');
    assert(_.isObject(options), 'options must be an object');
  
    const validationResult = schema.validate(options, {
      allowUnknown: true
    });
    if (validationResult.warning) {
      console.warn(`Validation warning [${validationResult.warning}]`);
    }
    if (validationResult.error) {
      console.error(`Validation error [${validationResult.error}]`);
      throw validationResult.error;
    }
  }
}
