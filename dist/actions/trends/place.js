"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.place = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
    exclude: joi_1.default.string().valid('hashtags'),
});
const place = function () {
    return util_1.default.generateApiHandler.call(this, 'trends/place', exports.optionsSchema);
};
exports.place = place;
