export default abstract class TokenManagedApi {
    twit: {
        token?: string;
    };
    constructor(twit: any);
    protected getToken(): string;
}
