/// <reference types="hapi__joi" />
import { Status as Tweet } from 'twitter-d';
import Joi from '@hapi/joi';
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
export interface TimelineResults {
    [index: number]: Tweet;
}
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function timeline(token: string, options: TimelineOptions): Promise<TimelineResults>;
