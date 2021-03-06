import TokenManagedApi from '../token-managed-api';
declare class Users extends TokenManagedApi {
    constructor(twit: any);
    show(options: any): any;
    lookup(options: any): any;
}
export default Users;
