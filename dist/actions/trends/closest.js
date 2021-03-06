"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closest = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    lat: joi_1.default.string().required(),
    long: joi_1.default.string().required(),
});
const closest = function () {
    return util_1.default.generateApiHandler.call(this, 'trends/closest', exports.optionsSchema);
};
exports.closest = closest;
