"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retweets = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().min(0).required(),
    count: joi_1.default.number().integer().min(0),
    trim_user: joi_1.default.boolean(),
});
const retweets = function () {
    return util_1.default.generateUrlInsertedHandler(['id'], ['statuses/retweets/'], exports.optionsSchema);
};
exports.retweets = retweets;
