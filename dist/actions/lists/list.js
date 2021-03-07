"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string(),
    user_id: joi_1.default.string(),
    reverse: joi_1.default.boolean(),
});
function list(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('lists/list', options, exports.optionsSchema);
}
exports.list = list;
