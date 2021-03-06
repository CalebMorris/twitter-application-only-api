import TokenManagedApi from '../token-managed-api';
declare class Followers extends TokenManagedApi {
    constructor(twit: any);
    ids(options: any): any;
    list(options: any): any;
}
export default Followers;
