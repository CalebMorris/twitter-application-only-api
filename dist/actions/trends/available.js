"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.available = void 0;
const util_1 = __importDefault(require("../../util"));
const available = function () {
    return util_1.default.generateNoSchemaHandler.call(this, 'trends/available');
};
exports.available = available;
