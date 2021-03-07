import { AuthenticatedTwitterCallHandler } from '../../twitter-call-handler';
declare class Trends {
    callHandler: AuthenticatedTwitterCallHandler;
    constructor(callHandler: AuthenticatedTwitterCallHandler);
    available(): Promise<any>;
    closest(options: any): Promise<any>;
    place(options: any): Promise<any>;
}
export default Trends;
