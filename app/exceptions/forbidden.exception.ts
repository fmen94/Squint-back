import BaseException from "./basic.exception";

export default class ForbiddenException extends BaseException {
    constructor (public message = 'forbidden exception', cause = []) {
        super();
        this.status = 403;
        this.message = message;
        this.cause = cause;    
    }
}
