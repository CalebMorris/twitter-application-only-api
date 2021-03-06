/// <reference types="hapi__joi" />
import { Status as Tweet } from 'twitter-d';
import Joi from '@hapi/joi';
export interface ShowOptions {
    id: string;
}
export declare type ShowResults = Tweet;
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare const show: () => (token: string, options: ShowOptions) => Promise<ShowResults>;
