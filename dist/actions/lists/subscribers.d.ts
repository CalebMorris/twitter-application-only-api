/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
export declare const optionsSchema: Joi.AlternativesSchema;
export declare const subscribers: () => (token: string, options: any) => Promise<unknown>;
