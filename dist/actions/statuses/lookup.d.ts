/// <reference types="hapi__joi" />
import { Status as Tweet } from 'twitter-d';
import Joi from '@hapi/joi';
export interface LookupOptions {
    id: string;
    include_entities?: boolean;
    trim_user?: boolean;
    map?: boolean;
}
export declare type LookupResults = Array<Tweet>;
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare const lookup: () => (token: string, options: LookupOptions) => Promise<LookupResults>;
