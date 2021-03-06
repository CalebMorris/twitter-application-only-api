"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.string().min(1),
    count: joi_1.default.number().integer().min(0),
    since_id: joi_1.default.string().min(1),
    max_id: joi_1.default.string().min(1),
    include_entities: joi_1.default.boolean(),
});
var favorites = util_1.default.generateApiHandler('favorites/list', optionsSchema);
module.exports = {
    favorites: favorites,
    optionsSchema: optionsSchema,
};
