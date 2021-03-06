import TokenManagedApi from '../token-managed-api';
declare class Lists extends TokenManagedApi {
    constructor(twit: any);
    list(options: any): any;
    memberships(options: any): any;
    ownerships(options: any): any;
    show(options: any): any;
    statuses(options: any): any;
    subscriptions(options: any): any;
}
export default Lists;
