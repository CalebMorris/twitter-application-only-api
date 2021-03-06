"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const tweet_mode_1 = __importDefault(require("./tweet-mode"));
const defaults = {
    [tweet_mode_1.default.key]: tweet_mode_1.default.default,
};
const optionsSchema = joi_1.default.object({
    [tweet_mode_1.default.key]: tweet_mode_1.default.schema,
});
function normalize(currentOptions) {
    const validationResult = optionsSchema.validate(currentOptions);
    if (validationResult.warning) {
        console.warn(`API Options validation warning [${validationResult.warning}]`);
    }
    if (validationResult.error) {
        console.error(`API Options validation error [${validationResult.error}]`);
        throw validationResult.error;
    }
    const actualOptions = Object.assign(Object.assign({}, defaults), validationResult.value);
    console.log('API Options used', actualOptions);
    return actualOptions;
}
module.exports = {
    normalize: normalize,
};
