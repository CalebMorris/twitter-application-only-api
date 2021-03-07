"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.optionsSchema = void 0;
const lodash_1 = __importDefault(require("lodash"));
const joi_1 = __importDefault(require("@hapi/joi"));
const util_1 = __importDefault(require("../../util"));
const commonSchema = {
    user_id: joi_1.default.string(),
    screen_name: joi_1.default.string(),
    include_entities: joi_1.default.boolean(),
    skip_status: joi_1.default.boolean(),
};
exports.optionsSchema = joi_1.default.alternatives().try(joi_1.default.object().keys(lodash_1.default.extend({
    slug: joi_1.default.string().required(),
    owner_screen_name: joi_1.default.string(),
    owner_id: joi_1.default.string(),
}, commonSchema)).or('owner_screen_name', 'owner_id').or('user_id', 'screen_name'), joi_1.default.object().keys(lodash_1.default.extend({
    list_id: joi_1.default.string().required(),
}, commonSchema)).or('user_id', 'screen_name'));
exports.show = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/subscribers/show', exports.optionsSchema);
};
