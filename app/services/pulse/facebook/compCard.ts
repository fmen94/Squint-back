import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { valuePrevCardService } from './ValuePrevCard';
import { xlabels } from '../../../helpers/xlabels';
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const compCardService = (ctx,dateRange:DateRange,cardId)=>{
    let response={
        data: [],
        xLabels:xlabels(dateRange)
    }
    
    for (let index = 0; index < 2; index++) {
        response.data.push({
            chartLineData: diffValue(7),
           name: faker.lorem.word()
        })
        
    }
    return response
    
}
const diffValue = (num=7)=>{
    let arr=[]
    for (let index = 0; index < num; index++) {
        arr.push(valuePrevCardService(null,null,null))
        
    }
    return arr
}