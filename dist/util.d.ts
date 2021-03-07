/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
export declare function requestHandler(path: any, token: any, options: any): Promise<any>;
export declare function validateOptions(schema: Joi.AnySchema, options: any): void;
declare function generatedApiHandler<TResults>(path: string, schema: Joi.AnySchema, token: string, options: any): Promise<TResults>;
export declare function generateApiHandler<TResults>(path: string, schema: Joi.AnySchema): (token: string, options: any) => Promise<TResults>;
declare function generateUrlInsertedHandler<TResults>(insertedValueNames: any, pathInterleves: any, schema: Joi.AnySchema): (token: string, options: any) => Promise<TResults>;
export declare function generateNoSchemaHandler(path: any): (schema: any, options: any) => Promise<any>;
declare const _default: {
    generateApiHandler: typeof generateApiHandler;
    generateNoSchemaHandler: typeof generateNoSchemaHandler;
    generateUrlInsertedHandler: typeof generateUrlInsertedHandler;
    generatedApiHandler: typeof generatedApiHandler;
};
export default _default;
