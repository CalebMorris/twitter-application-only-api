declare var request: any;
declare function TwitterApiError(message: any, body: any): void;
declare namespace TwitterApiError {
    var prototype: Error;
}
declare var authenticate: (setToken: (string: any) => void) => Promise<string>;
