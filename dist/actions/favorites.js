"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favorites = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.string().min(1),
    count: joi_1.default.number().integer().min(0),
    since_id: joi_1.default.string().min(1),
    max_id: joi_1.default.string().min(1),
    include_entities: joi_1.default.boolean(),
});
function favorites(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('favorites/list', options, exports.optionsSchema);
}
exports.favorites = favorites;
