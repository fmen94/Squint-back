import BaseException from "./basic.exception";

export default class ParametersException extends BaseException {
    constructor (public message = 'forbidden exception', cause = []) {
        super();
        this.status = 401;
        this.message = message;
        this.cause = cause;    
    }
}
