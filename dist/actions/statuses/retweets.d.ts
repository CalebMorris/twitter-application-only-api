/// <reference types="hapi__joi" />
import { Status as Tweet } from 'twitter-d';
import Joi from '@hapi/joi';
export interface RetweetsOptions {
    id: string;
    count?: number;
    trim_user?: boolean;
}
export interface RetweetsResults {
    [index: number]: Tweet;
}
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare const retweets: () => (token: string, options: RetweetsOptions) => Promise<RetweetsResults>;
