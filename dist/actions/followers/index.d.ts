import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Followers {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    ids(options: any): Promise<any>;
    list(options: any): Promise<any>;
}
export default Followers;
