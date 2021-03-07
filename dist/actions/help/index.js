"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./configuration");
const languages_1 = require("./languages");
class Help {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    configuration() {
        return configuration_1.configuration(this.callHandler);
    }
    languages() {
        return languages_1.languages(this.callHandler);
    }
}
exports.default = Help;
