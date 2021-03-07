"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.alternatives().try(joi_1.default.object().keys({
    slug: joi_1.default.string().required(),
    owner_screen_name: joi_1.default.string(),
    owner_id: joi_1.default.string(),
}).or('owner_screen_name', 'owner_id'), joi_1.default.object().keys({
    list_id: joi_1.default.string().required(),
}));
exports.show = function () {
    return util_1.default.generateApiHandler.call(this, 'lists/show', exports.optionsSchema);
};
