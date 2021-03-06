"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
const configuration_1 = require("./configuration");
const languages_1 = require("./languages");
const privacy_1 = require("./privacy");
const tos_1 = require("./tos");
class Help extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    configuration(options) {
        return configuration_1.configuration(this.getToken(), options);
    }
    languages(options) {
        return languages_1.languages(this.getToken(), options);
    }
    privacy(options) {
        return privacy_1.privacy(this.getToken(), options);
    }
    tos(options) {
        return tos_1.tos(this.getToken(), options);
    }
}
exports.default = Help;
