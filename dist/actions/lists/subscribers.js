"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribers = exports.optionsSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const joi_1 = __importDefault(require("@hapi/joi"));
const commonSchema = {
    count: joi_1.default.number().integer(),
    cursor: joi_1.default.string(),
    include_entities: joi_1.default.boolean(),
    skip_status: joi_1.default.boolean(),
};
exports.optionsSchema = joi_1.default.alternatives().try(joi_1.default.object().keys(lodash_1.default.extend({
    slug: joi_1.default.string().required(),
    owner_screen_name: joi_1.default.string(),
    owner_id: joi_1.default.string(),
}, commonSchema)).or('owner_screen_name', 'owner_id'), joi_1.default.object().keys(lodash_1.default.extend({
    list_id: joi_1.default.string().required(),
}, commonSchema)));
function subscribers(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('lists/subscribers', options, exports.optionsSchema);
}
exports.subscribers = subscribers;
