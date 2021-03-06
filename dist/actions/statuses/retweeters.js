"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retweeters = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().min(0).required(),
    count: joi_1.default.number().integer().min(0),
    cursor: joi_1.default.string().min(0),
    stringify_ids: joi_1.default.boolean(),
});
function retweeters(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('statuses/retweeters/ids', options, exports.optionsSchema);
}
exports.retweeters = retweeters;
