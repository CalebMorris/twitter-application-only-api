"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_managed_api_1 = __importDefault(require("../token-managed-api"));
const available_1 = require("./available");
const closest_1 = require("./closest");
const place_1 = require("./place");
class Trends extends token_managed_api_1.default {
    constructor(twit) {
        super(twit);
    }
    available(options) {
        return available_1.available.call(this.twit)(this.getToken(), options);
    }
    closest(options) {
        return closest_1.closest.call(this.twit)(this.getToken(), options);
    }
    place(options) {
        return place_1.place.call(this.twit)(this.getToken(), options);
    }
}
exports.default = Trends;
