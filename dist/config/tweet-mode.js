"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetModeKey = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const parameterKey = 'tweet_mode';
// Values
const extended = 'extended';
const compact = 'compat';
const schema = joi_1.default.string().valid(extended, compact);
exports.tweetModeKey = parameterKey;
exports.default = {
    key: parameterKey,
    default: extended,
    schema: schema,
    values: {
        extended: extended,
        compact: compact,
    }
};
