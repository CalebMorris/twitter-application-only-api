"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
const show_1 = require("./show");
const lookup_1 = require("./lookup");
class Users extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    show(options) {
        return show_1.show.call(this.twit)(this.getToken(), options);
    }
    lookup(options) {
        return lookup_1.lookup.call(this.twit)(this.getToken(), options);
    }
}
exports.default = Users;
