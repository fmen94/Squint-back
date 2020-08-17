import {injectable} from "tsyringe";
import log4js from 'log4js';

@injectable()
export default class Logger4JSHelper {
    

    public logger = log4js.configure({
        appenders: {  
          out: { type: 'stdout' },
          app: { type: 'file', filename: 'squit-graph.log' }
        },
        categories: {
          default: { appenders: [ 'out', 'app' ], level: process.env.LOGGIN_LEVEL || "debug" }
        }
      });
}
