import TokenManagedApi from '../token-managed-api';
declare class Trends extends TokenManagedApi {
    constructor(twit: any);
    available(options: any): Promise<any>;
    closest(options: any): Promise<unknown>;
    place(options: any): Promise<unknown>;
}
export default Trends;