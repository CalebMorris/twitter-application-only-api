"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookup = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.array().items(joi_1.default.string()).max(100),
    user_id: joi_1.default.array().items(joi_1.default.string()).max(100),
    include_entities: joi_1.default.boolean(),
    tweet_mode: joi_1.default.string(),
});
function lookup(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('users/lookup', options, exports.optionsSchema);
}
exports.lookup = lookup;
