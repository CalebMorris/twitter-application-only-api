"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var commonSchema = {
    since_id: joi_1.default.string(),
    max_id: joi_1.default.string(),
    count: joi_1.default.number().integer(),
    include_entities: joi_1.default.boolean(),
    include_rts: joi_1.default.boolean(),
};
var optionsSchema = [
    joi_1.default.object().keys(lodash_1.default.extend({
        slug: joi_1.default.string().required(),
        owner_screen_name: joi_1.default.string(),
        owner_id: joi_1.default.string(),
    }, commonSchema)).or('owner_screen_name', 'owner_id'),
    joi_1.default.object().keys(lodash_1.default.extend({
        list_id: joi_1.default.string().required(),
    }, commonSchema)),
];
var statuses = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/statuses', optionsSchema);
};
module.exports = {
    statuses: statuses,
    optionsSchema: optionsSchema,
};
