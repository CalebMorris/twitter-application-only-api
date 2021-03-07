"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const available_1 = require("./available");
const closest_1 = require("./closest");
const place_1 = require("./place");
class Trends {
    constructor(callHandler) {
        this.callHandler = callHandler;
    }
    available() {
        return available_1.available(this.callHandler);
    }
    closest(options) {
        return closest_1.closest(this.callHandler, options);
    }
    place(options) {
        return place_1.place(this.callHandler, options);
    }
}
exports.default = Trends;
