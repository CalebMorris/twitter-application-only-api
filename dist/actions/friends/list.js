"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.number().integer().min(0),
    cursor: joi_1.default.number().integer().min(0),
    count: joi_1.default.number().integer().min(0),
    skip_status: joi_1.default.boolean(),
    include_user_entities: joi_1.default.boolean(),
}).or('screen_name', 'user_id');
function list(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('friends/list', options, exports.optionsSchema);
}
exports.list = list;
