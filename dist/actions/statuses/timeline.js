"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeline = exports.optionsSchema = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
exports.optionsSchema = joi_1.default.object().keys({
    screen_name: joi_1.default.string().min(1),
    user_id: joi_1.default.number().integer().min(0),
    since_id: joi_1.default.number().integer().min(0),
    count: joi_1.default.number().integer().min(0),
    max_id: joi_1.default.number().integer().min(0),
    trim_user: joi_1.default.boolean(),
    exclude_replies: joi_1.default.boolean(),
    contributor_details: joi_1.default.boolean(),
    include_rts: joi_1.default.boolean()
}).or('screen_name', 'user_id');
function timeline(callHandler, options) {
    return callHandler.callTwitterApiWithSchema('statuses/user_timeline', options, exports.optionsSchema);
}
exports.timeline = timeline;
