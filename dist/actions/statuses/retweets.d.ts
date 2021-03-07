/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export interface RetweetsOptions {
    id: string;
    count?: number;
    trim_user?: boolean;
}
export interface RetweetsResults {
    [index: number]: Tweet;
}
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function retweets(callHandler: AuthenticatedTwitterCallHandler, options: RetweetsOptions): Promise<RetweetsResults>;
