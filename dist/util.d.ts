declare function requestCallback(resolve: any, reject: any, err: any, res: any, body: any): any;
export declare function requestHandler(resolve: any, reject: any, path: any, token: any, options: any): any;
export declare function validateOptions(token: any, schema: any, options: any): Promise<void>;
declare function generatedNoSchemaHandler(path: any, token: any, options: any): Promise<unknown>;
declare function generatedApiHandler<TResults>(path: string, schema: any, token: string, options: any): Promise<TResults>;
declare function generateApiHandler<TResults>(path: string, schema: any): (token: string, options: any) => Promise<TResults>;
declare function generateUrlInsertedHandler<TResults>(insertedValueNames: any, pathInterleves: any, schema: any): (token: string, options: any) => Promise<TResults>;
export declare function generateNoSchemaHandler(path: any): (token: any, options: any) => Promise<unknown>;
declare const _default: {
    generateApiHandler: typeof generateApiHandler;
    generateNoSchemaHandler: typeof generateNoSchemaHandler;
    generateUrlInsertedHandler: typeof generateUrlInsertedHandler;
    generatedApiHandler: typeof generatedApiHandler;
    generatedNoSchemaHandler: typeof generatedNoSchemaHandler;
    requestCallback: typeof requestCallback;
    requestHandler: typeof requestHandler;
    validateOptions: typeof validateOptions;
};
export default _default;
