"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const util_1 = __importDefault(require("../../util"));
var commonSchema = {
    user_id: Joi.string(),
    screen_name: Joi.string(),
    include_entities: Joi.boolean(),
    skip_status: Joi.boolean(),
};
var optionsSchema = [
    Joi.object().keys(lodash_1.default.extend({
        slug: Joi.string().required(),
        owner_screen_name: Joi.string(),
        owner_id: Joi.string(),
    }, commonSchema)).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'),
    Joi.object().keys(lodash_1.default.extend({
        list_id: Joi.string().required(),
    }, commonSchema)).or('user_id', 'screen_name'),
];
var show = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/subscribers/show', optionsSchema);
};
module.exports = {
    show: show,
    optionsSchema: optionsSchema,
};
