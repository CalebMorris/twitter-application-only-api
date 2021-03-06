"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
const ids_1 = require("./ids");
const list_1 = require("./list");
class Friends extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    ids(options) {
        return ids_1.ids(this.getToken(), options);
    }
    list(options) {
        return list_1.list(this.getToken(), options);
    }
}
exports.default = Friends;
