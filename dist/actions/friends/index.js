"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ids_1 = require("./ids");
const list_1 = require("./list");
class Friends {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    ids(options) {
        return ids_1.ids(this.callHandler, options);
    }
    list(options) {
        return list_1.list(this.callHandler, options);
    }
}
exports.default = Friends;
