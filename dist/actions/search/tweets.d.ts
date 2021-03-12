/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export interface SearchTweetsOptions {
    q: string;
    geocode?: string;
    lang?: string;
    locale?: string;
    result_type?: 'mixed' | 'recent' | 'popular';
    count?: number;
    until?: string;
    since_id?: number | string;
    max_id?: number | string;
    include_entities?: boolean;
}
export interface SearchTweetsResults {
    statuses: Array<Tweet>;
}
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function searchTweets(callHandler: AuthenticatedTwitterCallHandler, options: SearchTweetsOptions): Promise<SearchTweetsResults>;
