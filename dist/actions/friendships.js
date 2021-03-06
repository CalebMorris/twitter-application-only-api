"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendships = exports.optionsSchema = void 0;
const util_1 = __importDefault(require("../util"));
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    source_id: joi_1.default.string().min(1),
    source_screen_name: joi_1.default.string().min(1),
    target_id: joi_1.default.string().min(1),
    target_screen_name: joi_1.default.string().min(1),
});
exports.friendships = util_1.default.generateApiHandler('friendships/show', exports.optionsSchema);
