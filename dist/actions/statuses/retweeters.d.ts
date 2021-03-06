/// <reference types="hapi__joi" />
import { Cursor } from '../../shared-types/cursor';
import Joi from '@hapi/joi';
export interface RetweetersOptions {
    id: string;
    count?: number;
    cursor?: string;
    stringify_ids?: boolean;
}
export interface RetweetersResults extends Cursor {
    ids: string[] | number[];
}
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare const retweeters: () => (token: string, options: RetweetersOptions) => Promise<RetweetersResults>;
