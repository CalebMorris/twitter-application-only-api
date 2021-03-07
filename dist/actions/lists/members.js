"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.members = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.alternatives().try(joi_1.default.object().keys({
    slug: joi_1.default.string().required(),
    owner_screen_name: joi_1.default.string(),
    owner_id: joi_1.default.string(),
    count: joi_1.default.string(),
    cursor: joi_1.default.string(),
    include_entities: joi_1.default.boolean(),
    skip_status: joi_1.default.boolean(),
}).or('owner_screen_name', 'owner_id'), joi_1.default.object().keys({
    list_id: joi_1.default.string().required(),
    count: joi_1.default.string(),
    cursor: joi_1.default.string(),
    include_entities: joi_1.default.boolean(),
    skip_status: joi_1.default.boolean(),
}));
function members(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('lists/members', options, exports.optionsSchema);
}
exports.members = members;
