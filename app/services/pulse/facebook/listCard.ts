import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { valuePrevCardService } from './ValuePrevCard';
import { xlabels } from '../../../helpers/xlabels';
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const listCardService = (ctx,dateRange:DateRange,cardId)=>{
    let response=[]   
    for (let index = 0; index < 12; index++) {
        response.push({
           kind: faker.lorem.word(),
           value: faker.random.number()
        })
        
    }
    return response
    
}