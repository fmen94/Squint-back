import { DateRange } from "../schema/common/Arguments";
import moment from "moment";
/**
 * xlabels es una funcion que decibe una fecha y un periodo y regresa un arraglo de strings que representan cada uno un valor dependiendo del periodo de tiempo la cantidad y el dia el punto de partida para moverse en el tiempo.
 * @param dateRange
 * @returns string[] Dates in various formats
 */
export const xlabels = (dateRange:DateRange ) : string[] =>{
    let response = []
    if(dateRange.period=="DL"){
        for (let index = 0; index < 24; index++) {
            response.push(moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,"hours").format('HH:00'))
        }
    }
    else if(dateRange.period=="MT"){
        for (let index = 0; index < 30; index++) {
            response.push(moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,"days").format('DD-MM-YYYYT00:00:00'))
        }
    }
    else if(dateRange.period=="WK"){
        for (let index = 0; index < 7; index++) {
            response.push(moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,"days").format('DD-MM-YYYYT00:00:00'))
        }
    }
    else if(dateRange.period=="YR"){
        for (let index = 0; index < 12; index++) {
            response.push(moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,"months").format('DD-MM-YYYYT00:00:00'))
        }
    }
    else if(dateRange.period=="HY"){
        for (let index = 0; index < 36; index++) {
            response.push(moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,"months").format('DD-MM-YYYYT00:00:00'))
        }
    }










    return response
}