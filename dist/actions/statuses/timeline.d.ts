/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export interface TimelineOptions {
    screen_name?: string;
    user_id?: number;
    since_id?: number;
    count?: number;
    max_id?: number;
    trim_user?: boolean;
    exclude_replies?: boolean;
    contributor_details?: boolean;
    include_rts?: boolean;
}
export declare type TimelineResults = Array<Tweet>;
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function timeline(callHandler: AuthenticatedTwitterCallHandler, options: TimelineOptions): Promise<TimelineResults>;
