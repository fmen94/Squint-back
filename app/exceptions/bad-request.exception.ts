import BaseException from "./basic.exception";

export default class BadRequestException extends BaseException {
    constructor (public message = 'bad request exception', cause = []) {
        super();
        this.status = 400;
        this.message = message;
        this.cause = cause;    
    }
}
