/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { Cursor } from '../../shared-types/cursor';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
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
export declare function retweeters(callHandler: AuthenticatedTwitterCallHandler, options: RetweetersOptions): Promise<RetweetersResults>;
