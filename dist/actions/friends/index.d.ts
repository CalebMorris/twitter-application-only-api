import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Friends {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    ids(options: any): Promise<any>;
    list(options: any): Promise<any>;
}
export default Friends;
