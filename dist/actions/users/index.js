"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const show_1 = require("./show");
const lookup_1 = require("./lookup");
class Users {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    show(options) {
        return show_1.show(this.callHandler, options);
    }
    lookup(options) {
        return lookup_1.lookup(this.callHandler, options);
    }
}
exports.default = Users;
