"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTweets = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    q: joi_1.default.string().max(500).required(),
    geocode: joi_1.default.string().pattern(/(?:-?\d{1,3}(?:\d+)?[ ,]?){2}[ ,]\d+(?:mi|km)/),
    lang: joi_1.default.string(),
    locale: joi_1.default.string(),
    result_type: joi_1.default.string(),
    count: joi_1.default.number().integer(),
    until: joi_1.default.string().pattern(/\d{4}-\d{2}-\d{2}/),
    since_id: joi_1.default.number().integer(),
    max_id: joi_1.default.number().integer(),
    include_entities: joi_1.default.boolean(),
});
function searchTweets(callHandler, options) {
    options.q = encodeURIComponent(options.q);
    return callHandler.callTwitterApiWithSchema('search/tweets', options, exports.optionsSchema);
}
exports.searchTweets = searchTweets;
