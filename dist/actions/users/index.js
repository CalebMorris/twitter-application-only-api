"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
class Users extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    show(options) {
        return require('./show').show.call(this.twit)(this.getToken(), options);
    }
    ;
    lookup(options) {
        return require('./lookup').lookup.call(this.twit)(this.getToken(), options);
    }
    ;
}
exports.default = Users;
