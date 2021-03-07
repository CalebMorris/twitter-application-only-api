import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Help {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    configuration(): Promise<any>;
    languages(): Promise<any>;
}
export default Help;
