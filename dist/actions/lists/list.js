"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string(),
    user_id: joi_1.default.string(),
    reverse: joi_1.default.boolean(),
});
var list = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/list', optionsSchema);
};
module.exports = {
    list: list,
    optionsSchema: optionsSchema,
};
