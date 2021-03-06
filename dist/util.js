"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const assert_1 = __importDefault(require("assert"));
const request_1 = __importDefault(require("request"));
const querystring_1 = __importDefault(require("querystring"));
const tweet_mode_1 = require("./config/tweet-mode");
function requestCallback(resolve, reject, err, res, body) {
    if (err) {
        return reject(err);
    }
    if (res.statusCode !== 200) {
        return reject(new Error('Problem retrieving data: ' + JSON.stringify(res)));
    }
    return resolve(body ? JSON.parse(body) : null);
}
function requestHandler(resolve, reject, path, token, options) {
    assert_1.default(lodash_1.default.isFunction(resolve), 'resolve must be a function');
    assert_1.default(lodash_1.default.isFunction(reject), 'reject must be a function');
    assert_1.default(lodash_1.default.isString(path), 'path must be a string');
    assert_1.default(lodash_1.default.isString(token), 'token must be a string');
    assert_1.default(lodash_1.default.isObject(options), 'options must be a options');
    options = options || {};
    if (this && this.options && this.options.tweet_mode) {
        options[tweet_mode_1.tweetModeKey] = this.options.tweet_mode;
    }
    var requestOptions = {
        url: 'https://api.twitter.com/1.1/' + path + '.json?' +
            querystring_1.default.stringify(options),
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'User-Agent': 'request'
        },
    };
    return request_1.default.get(requestOptions, requestCallback.bind(this, resolve, reject));
}
function validateOptions(token, schema, options) {
    assert_1.default(lodash_1.default.isString(token), 'token must be a string');
    assert_1.default(lodash_1.default.isObject(schema), 'schema must be an object');
    assert_1.default(lodash_1.default.isObject(options), 'options must be an object');
    return new Promise((resolve, reject) => {
        var validationResult = schema.validate(options, {
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
function generatedApiHandler(path, schema, token, options) {
    return new Promise((resolve, reject) => {
        return validateOptions(token, schema, options)
            .then(() => {
            requestHandler.call(this, resolve, reject, path, token, options);
        });
    });
}
function generateApiHandler(path, schema) {
    return (token, options) => generatedApiHandler(path, schema, token, options);
}
function generateUrlInsertedHandler(insertedValueNames, pathInterleves, schema) {
    // pathInterleves[i] + options[insertedValueName[i]]
    // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }
    if (insertedValueNames.length < (pathInterleves - 1)) {
        throw new Error('There must be at least one more path interleve than inserted value');
    }
    return function filterOptionsAndContinue(token, options) {
        return new Promise((resolve, reject) => {
            return validateOptions(token, schema, options)
                .then(() => {
                var insertedValues = lodash_1.default.map(insertedValueNames, function mapValueNameToValue(valueName) {
                    var tmp = options[valueName];
                    delete options[valueName];
                    return tmp;
                });
                var path = '';
                lodash_1.default.forEach(insertedValues, function (value, index) {
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
function generateNoSchemaHandler(path) {
    return generatedNoSchemaHandler.bind(this, path);
}
exports.default = {
    generateApiHandler: generateApiHandler,
    generateNoSchemaHandler: generateNoSchemaHandler,
    generateUrlInsertedHandler: generateUrlInsertedHandler,
    generatedApiHandler: generatedApiHandler,
    generatedNoSchemaHandler: generatedNoSchemaHandler,
    requestCallback: requestCallback,
    requestHandler: requestHandler,
    validateOptions: validateOptions,
};
