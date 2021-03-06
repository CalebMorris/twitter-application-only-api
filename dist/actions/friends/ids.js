"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
const optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.number().integer().min(0),
    cursor: joi_1.default.number().integer().min(0),
    count: joi_1.default.number().integer().min(0),
    stringify_ids: joi_1.default.boolean(),
}).or('screen_name', 'user_id');
var ids = util_1.default.generateApiHandler('friends/ids', optionsSchema);
module.exports = {
    ids: ids,
    optionsSchema: optionsSchema,
};
