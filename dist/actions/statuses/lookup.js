"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookup = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
    include_entities: joi_1.default.boolean(),
    trim_user: joi_1.default.boolean(),
    map: joi_1.default.boolean(),
});
function lookup(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('statuses/lookup', options, exports.optionsSchema);
}
exports.lookup = lookup;
