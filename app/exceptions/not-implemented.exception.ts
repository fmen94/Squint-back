import BaseException from "./basic.exception";

export default class NotImplementedException extends BaseException {
    constructor (public message = 'not implemented exception', cause = []) {
        super();
        this.status = 501;
        this.message = message;
        this.cause = cause;    
    }
}
