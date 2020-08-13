import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const bubblesService = (ctx,dateRange:DateRange ,cardId)=>{
    let response=[]
    for (let index = 0; index < 7; index++) {
        response.push({
            kind: faker.commerce.color(),
            date: moment(dateRange.date,'DD-MM-YYYYThh:mm:ss').subtract(index,'days').format('DD-MM-YYYYThh:mm:ss'),
           value: faker.random.number()
        })
        
    }
    return response 
}