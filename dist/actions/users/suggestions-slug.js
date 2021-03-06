"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slug = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    slug: joi_1.default.string().required(),
    lang: joi_1.default.string(),
});
const slug = function () {
    return util_1.default.generateUrlInsertedHandler.call(this, ['slug'], ['users/suggestions'], exports.optionsSchema);
};
exports.slug = slug;
