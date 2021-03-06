/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
export declare const tweetModeKey = "tweet_mode";
declare const _default: {
    key: string;
    default: string;
    schema: Joi.StringSchema;
    values: {
        extended: string;
        compact: string;
    };
};
export default _default;
