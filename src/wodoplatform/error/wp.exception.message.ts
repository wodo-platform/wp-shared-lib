/**
 *  Exception message attrbiutes and tempalte to be returned in case API throws errors.
 * 
 * Typical example is an error message in json format as result of a REST call
 */
export class WPExceptionMessage {

    public statusCode: number; 
    public message: string; 
    public errorCode: string;
    public details: string;

    constructor(statusCode: number,  message: string, errorCode: string, details: string) {
        this.statusCode = statusCode;
        this.message = message;
        this.errorCode = errorCode;
        this.details = details;
    }

}