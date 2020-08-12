import BaseException from "./basic.exception";

export default class InternalException extends BaseException {
    constructor (public message = 'internal exception', cause = []) {
        super();
        this.status = 500;
        this.message = message;
        this.cause = cause;    
    }
}
