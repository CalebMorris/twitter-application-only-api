"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var optionsSchema = joi_1.default.object().keys({
    q: joi_1.default.string().min(1).required(),
    result_type: joi_1.default.string().min(1),
    geocode: joi_1.default.string().min(1),
    lang: joi_1.default.string().min(1),
    count: joi_1.default.number().integer(),
    until: joi_1.default.string().min(1),
    since_id: joi_1.default.string().min(1),
    max_id: joi_1.default.string().min(1),
});
var search = util_1.default.generateApiHandler('search/tweets', optionsSchema);
module.exports = {
    search: search,
    optionsSchema: optionsSchema,
};
