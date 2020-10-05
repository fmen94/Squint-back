import BaseException from "./basic.exception";

export default class NotFoundException extends BaseException {
    constructor (public message = 'not found exception', cause = []) {
        super();
        this.status = 404;
        this.message = message;
        this.cause = cause;    
    }
}
