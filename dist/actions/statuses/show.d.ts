/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Status as Tweet } from 'twitter-d';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export interface ShowOptions {
    id: string;
    trim_user: boolean;
    include_my_retweet: boolean;
    include_entities: boolean;
    include_ext_alt_text: boolean;
    include_card_uri: boolean;
}
export declare type ShowResults = Tweet;
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function show(callHandler: AuthenticatedTwitterCallHandler, options: ShowOptions): Promise<ShowResults>;
