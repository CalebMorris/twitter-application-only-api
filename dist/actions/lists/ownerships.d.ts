/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare function ownerships(callHandler: AuthenticatedTwitterCallHandler, options: any): Promise<any>;
