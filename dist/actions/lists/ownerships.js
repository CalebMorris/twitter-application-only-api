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
}).or('user_id', 'screen_name');
var ownerships = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/ownerships', optionsSchema);
};
module.exports = {
    ownerships: ownerships,
    optionsSchema: optionsSchema,
};
