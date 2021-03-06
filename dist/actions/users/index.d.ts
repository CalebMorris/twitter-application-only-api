import TokenManagedApi from '../token-managed-api';
declare class Users extends TokenManagedApi {
    constructor(twit: any);
    show(options: any): Promise<unknown>;
    lookup(options: any): Promise<unknown>;
}
export default Users;
