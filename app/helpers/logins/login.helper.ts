import 'reflect-metadata'
import { container } from "tsyringe";
import LoggerHelper from './login4js.helper';


const loggerHelper = container.resolve(LoggerHelper);
const logger = loggerHelper.logger.getLogger('SQUINT-GRAPH');

export default logger;
