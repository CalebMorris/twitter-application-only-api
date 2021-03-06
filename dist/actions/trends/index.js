"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
class Trends extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    available() {
        return require('./available').available.call(this.twit)(this.getToken());
    }
    ;
    closest(options) {
        return require('./closest').closest.call(this.twit)(this.getToken(), options);
    }
    ;
    place(options) {
        return require('./place').place.call(this.twit)(this.getToken(), options);
    }
    ;
}
exports.default = Trends;
