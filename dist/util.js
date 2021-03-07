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
exports.generateNoSchemaHandler = exports.generateApiHandler = exports.validateOptions = exports.requestHandler = void 0;
const lodash_1 = __importDefault(require("lodash"));
const assert_1 = __importDefault(require("assert"));
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
const tweet_mode_1 = require("./config/tweet-mode");
function requestHandler(path, token, options) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.default(lodash_1.default.isString(path), 'path must be a string');
        assert_1.default(lodash_1.default.isString(token), 'token must be a string');
        assert_1.default(lodash_1.default.isObject(options), 'options must be a options');
        options = options || {};
        if (options && options.tweet_mode) {
            options[tweet_mode_1.tweetModeKey] = options.tweet_mode;
            // } else {
            //   throw new Error(`Can't find [tweet_mode] in this[${JSON.stringify(options)}]`); // TODO: remove
        }
        const response = yield axios_1.default.get(`https://api.twitter.com/1.1/${path}.json?${querystring_1.default.stringify(options)}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'User-Agent': 'axios',
            },
        });
        if (response.status != 200) {
            throw new Error('Problem retrieving data: ' + JSON.stringify(response));
        }
        // console.warn(`DATA: ${response.data}`)
        // return response.data ? JSON.parse(response.data) : null;
        return response.data;
    });
}
exports.requestHandler = requestHandler;
function validateOptions(schema, options) {
    assert_1.default(lodash_1.default.isObject(schema), 'schema must be an object');
    assert_1.default(lodash_1.default.isObject(options), 'options must be an object');
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
exports.validateOptions = validateOptions;
function generatedNoSchemaHandler(path, token, options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield requestHandler(path, token, options);
    });
}
function generatedApiHandler(path, schema, token, options) {
    return __awaiter(this, void 0, void 0, function* () {
        validateOptions(schema, options);
        return yield requestHandler(path, token, options);
    });
}
function generateApiHandler(path, schema) {
    return (token, options) => generatedApiHandler(path, schema, token, options);
}
exports.generateApiHandler = generateApiHandler;
function generateUrlInsertedHandler(insertedValueNames, pathInterleves, schema) {
    // pathInterleves[i] + options[insertedValueName[i]]
    // ex. /test/2/foo ivn = ['k'], pi = ['test', 'foo'], options={ k : 2 }
    if (insertedValueNames.length < (pathInterleves - 1)) {
        throw new Error('There must be at least one more path interleve than inserted value');
    }
    return function filterOptionsAndContinue(token, options) {
        return __awaiter(this, void 0, void 0, function* () {
            validateOptions(schema, options);
            const insertedValues = lodash_1.default.map(insertedValueNames, function mapValueNameToValue(valueName) {
                const tmp = options[valueName];
                delete options[valueName];
                return tmp;
            });
            let path = '';
            lodash_1.default.forEach(insertedValues, function (value, index) {
                path += pathInterleves[index] + '/' + value;
            });
            if (pathInterleves.length > insertedValues) {
                path += '/' + pathInterleves[pathInterleves.length - 1];
            }
            return yield requestHandler(path, token, options);
        });
    };
}
function generateNoSchemaHandler(path) {
    return (schema, options) => __awaiter(this, void 0, void 0, function* () { return yield generatedNoSchemaHandler(path, schema, options); });
}
exports.generateNoSchemaHandler = generateNoSchemaHandler;
exports.default = {
    generateApiHandler: generateApiHandler,
    generateNoSchemaHandler: generateNoSchemaHandler,
    generateUrlInsertedHandler: generateUrlInsertedHandler,
    generatedApiHandler: generatedApiHandler,
};
