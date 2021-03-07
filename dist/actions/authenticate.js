"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const axios_1 = __importDefault(require("axios"));
function TwitterApiError(message, body) {
    this.name = 'TwitterApiError';
    this.message = message;
    this.body = body;
    this.statck = new Error().stack;
}
TwitterApiError.prototype = Error.prototype;
function authenticate(getKeys, setToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const [key, sec] = getKeys();
        const credentials = Buffer.from(key + ':' + sec).toString('base64');
        const response = yield axios_1.default.post('https://api.twitter.com/oauth2/token', 'grant_type=client_credentials', {
            headers: {
                'Authorization': 'Basic ' + credentials,
                'Content-Length': 29,
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'User-Agent': 'request'
            },
        });
        if (response.status != 200) {
            new TwitterApiError('There was a problem retrieving the bearer token', response.data);
        }
        if (!response.data) {
            throw new Error('Missing body from auth request');
        }
        if (response.data.token_type !== 'bearer') {
            throw new Error(`Response token was of the wrong type: [${response.data.token_type}]`);
        }
        setToken(response.data.access_token);
        return response.data.access_token;
    });
}
exports.authenticate = authenticate;
