"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    lat: joi_1.default.string().required(),
    long: joi_1.default.string().required(),
});
function closest(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('trends/closest', options, exports.optionsSchema);
}
exports.closest = closest;
