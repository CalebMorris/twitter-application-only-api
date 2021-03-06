/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export interface LookupOptions {
    id: string;
    include_entities?: boolean;
    trim_user?: boolean;
    map?: boolean;
}
export declare type LookupResults = Array<Tweet>;
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function lookup(callHandler: AuthenticatedTwitterCallHandler, options: LookupOptions): Promise<LookupResults>;
