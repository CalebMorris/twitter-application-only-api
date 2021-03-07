import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Lists {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    list(options: any): Promise<any>;
    memberships(options: any): Promise<any>;
    ownerships(options: any): Promise<any>;
    show(options: any): Promise<any>;
    statuses(options: any): Promise<any>;
    subscriptions(options: any): Promise<any>;
}
export default Lists;
