/// <reference types="hapi__joi" />
import Joi from '@hapi/joi';
export interface GlobalOptions {
    tweet_mode?: 'extended' | 'compact';
}
export declare class TwitterApiError extends Error {
    body: any;
    constructor(message: string, body: any);
}
export declare class AuthenticatedTwitterCallHandler {
    bearerToken: string;
    globalOptions: GlobalOptions;
    static fromApiKeys(apiKey: string, apiSecret: string, globalOptions?: GlobalOptions): Promise<AuthenticatedTwitterCallHandler>;
    constructor(bearerToken: string, globalOptions?: GlobalOptions);
    callTwitterApi<RequestOptions, ResponseType>(path: string, options?: RequestOptions | any): Promise<ResponseType>;
    callTwitterApiWithSchema<RequestOptions, ResponseType>(path: string, options: RequestOptions, schema: Joi.AnySchema): Promise<ResponseType>;
    validateOptions<RequestOptions>(options: RequestOptions, schema: Joi.AnySchema): void;
}
