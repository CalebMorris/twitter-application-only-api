"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
class Help extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    configuration(options) {
        return require('./configuration').configuration(this.getToken(), options);
    }
    ;
    languages(options) {
        return require('./languages').languages(this.getToken(), options);
    }
    ;
    privacy(options) {
        return require('./privacy').privacy(this.getToken(), options);
    }
    ;
    tos(options) {
        return require('./tos').tos(this.getToken(), options);
    }
    ;
}
exports.default = Help;
