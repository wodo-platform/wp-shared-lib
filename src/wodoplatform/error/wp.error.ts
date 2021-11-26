import { WPErrorCode } from "./wp.error.codes";

/**
 * Generic erorr definition for Wodo Platform. WPErros contain a specific WPErrorCode that is defined in the general error catalog.
 * 
 * WPError extends Error class in type script so that it can be used/handled system wide.
 */
export class WPError extends Error {
    
    private errorCode:WPErrorCode;

    constructor(errorCode:WPErrorCode, message?:string) {
        super(errorCode.code + ":" + errorCode.description + ". Message:"+message);
        this.errorCode = errorCode;
    }

    public getErrorCode(): WPErrorCode {
        return this.errorCode;
    }
}