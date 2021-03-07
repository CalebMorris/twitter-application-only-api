export default abstract class TokenManagedApi {
    twit: {
        token?: string;
        options: any;
    };
    constructor(twit: any);
    protected getToken(): string;
}
