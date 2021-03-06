"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var optionsSchema = joi_1.default.object().keys({
    user_id: joi_1.default.string(),
    screen_name: joi_1.default.string(),
    count: joi_1.default.number().integer(),
    cursor: joi_1.default.string(),
    filter_to_owned_lists: joi_1.default.boolean(),
}).or('user_id', 'screen_name');
var memberships = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/memberships', optionsSchema);
};
module.exports = {
    memberships: memberships,
    optionsSchema: optionsSchema,
};
