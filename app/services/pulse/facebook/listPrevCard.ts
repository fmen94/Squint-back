import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const listPrevCardService = (ctx,dateRange:DateRange,cardId)=>{
    let response=[]
    
    for (let index = 0; index < 12; index++) {
        response.push({
            name: faker.address.country(),
            value: faker.random.number,
            diff: faker.random.number
        })
        
    }
    return response
    
}
