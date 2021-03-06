/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export declare const optionsSchema: Joi.AlternativesSchema;
export declare function members(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any>;
