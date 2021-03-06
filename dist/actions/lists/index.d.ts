import TokenManagedApi from '../token-managed-api';
declare class Lists extends TokenManagedApi {
    constructor(twit: any);
    list(options: any): Promise<unknown>;
    memberships(options: any): Promise<unknown>;
    ownerships(options: any): Promise<unknown>;
    show(options: any): Promise<unknown>;
    statuses(options: any): Promise<unknown>;
    subscriptions(options: any): Promise<unknown>;
}
export default Lists;
