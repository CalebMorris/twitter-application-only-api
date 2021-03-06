import TokenManagedApi from '../token-managed-api';
declare class Help extends TokenManagedApi {
    constructor(twit: any);
    configuration(options: any): Promise<unknown>;
    languages(options: any): Promise<unknown>;
    privacy(options: any): Promise<unknown>;
    tos(options: any): Promise<unknown>;
}
export default Help;
