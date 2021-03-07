"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ids = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.number().integer().min(0),
    cursor: joi_1.default.number().integer().min(0),
    stringify_ids: joi_1.default.boolean(),
    count: joi_1.default.number().integer().min(0),
}).or('screen_name', 'user_id');
function ids(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('followers/ids', options, exports.optionsSchema);
}
exports.ids = ids;
