"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().min(0).required(),
    trim_user: joi_1.default.boolean(),
    include_my_retweet: joi_1.default.boolean(),
    include_entities: joi_1.default.boolean(),
    include_ext_alt_text: joi_1.default.boolean(),
    include_card_uri: joi_1.default.boolean(),
});
function show(callHandler, options) {
    return callHandler.callTwitterApiWithSchema(`statuses/show`, options, exports.optionsSchema);
}
exports.show = show;
