"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    user_id: joi_1.default.string(),
    screen_name: joi_1.default.string(),
    include_entities: joi_1.default.boolean(),
}).or('user_id', 'screen_name');
function show(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('users/show', options, exports.optionsSchema);
}
exports.show = show;
