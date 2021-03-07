"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
// TODO: update with actual params
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().min(0).required(),
});
exports.show = function () {
    return util_1.default.generateApiHandler('statuses/show', exports.optionsSchema);
};
