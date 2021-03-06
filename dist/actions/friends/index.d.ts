import TokenManagedApi from '../token-managed-api';
declare class Friends extends TokenManagedApi {
    constructor(twit: any);
    ids(options: any): Promise<unknown>;
    list(options: any): Promise<unknown>;
}
export default Friends;
