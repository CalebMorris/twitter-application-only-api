/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
export declare const optionsSchema: Joi.ObjectSchema<any>;
export declare const lookup: () => (token: string, options: any) => Promise<unknown>;
