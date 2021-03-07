"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedTwitterCallHandler = exports.TwitterApiError = void 0;
const lodash_1 = __importDefault(require("lodash"));
const assert_1 = __importDefault(require("assert"));
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
class TwitterApiError extends Error {
    constructor(message, body) {
        super(message);
        this.body = body;
        Object.setPrototypeOf(this, TwitterApiError.prototype);
    }
}
exports.TwitterApiError = TwitterApiError;
class TwitterCallHandler {
    constructor(globalOptions = {}) {
        this.globalOptions = globalOptions;
    }
    authenticate(apiKey, apiSecret) {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = Buffer.from(apiKey + ':' + apiSecret).toString('base64');
            const response = yield axios_1.default.post('https://api.twitter.com/oauth2/token', 'grant_type=client_credentials', {
                headers: {
                    'Authorization': 'Basic ' + credentials,
                    'Content-Length': 29,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'User-Agent': 'request'
                },
            });
            if (response.status != 200) {
                new TwitterApiError('There was a problem retrieving the bearer token', response.data);
            }
            if (!response.data) {
                throw new Error('Missing body from auth request');
            }
            if (response.data.token_type !== 'bearer') {
                throw new Error(`Response token was of the wrong type: [${response.data.token_type}]`);
            }
            return new AuthenticatedTwitterCallHandler(response.data.access_token, this.globalOptions);
        });
    }
}
class AuthenticatedTwitterCallHandler {
    constructor(bearerToken, globalOptions = {}) {
        this.bearerToken = bearerToken;
        this.globalOptions = globalOptions;
    }
    static fromApiKeys(apiKey, apiSecret, globalOptions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new TwitterCallHandler(globalOptions).authenticate(apiKey, apiSecret);
        });
    }
    callTwitterApi(path, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.default(lodash_1.default.isString(path), 'path must be a string');
            assert_1.default(lodash_1.default.isObject(options), 'options must be a options');
            options = Object.assign(Object.assign({}, this.globalOptions), options);
            const response = yield axios_1.default.get(`https://api.twitter.com/1.1/${path}.json?${querystring_1.default.stringify(options)}`, {
                headers: {
                    'Authorization': `Bearer ${this.bearerToken}`,
                    'User-Agent': 'axios',
                },
            });
            if (response.status != 200) {
                throw new Error(`Problem retrieving data: ${JSON.stringify(response)}`);
            }
            return response.data;
        });
    }
    callTwitterApiWithSchema(path, options, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateOptions(options, schema);
            return yield this.callTwitterApi(path, options);
        });
    }
    validateOptions(options, schema) {
        assert_1.default(lodash_1.default.isObject(schema), 'schema must be an object');
        assert_1.default(lodash_1.default.isObject(options), 'options must be an object');
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
exports.AuthenticatedTwitterCallHandler = AuthenticatedTwitterCallHandler;
