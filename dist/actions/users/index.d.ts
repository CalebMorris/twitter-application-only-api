import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Users {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    show(options: any): Promise<any>;
    lookup(options: any): Promise<any>;
}
export default Users;
