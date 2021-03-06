"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
var optionsSchema = [joi_1.default.object().keys({
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
    })];
var members = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/members', optionsSchema);
};
module.exports = {
    members: members,
    optionsSchema: optionsSchema,
};
