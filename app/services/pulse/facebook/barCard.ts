import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'

import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const barCardService = (ctx,dateRange:DateRange,cardId)=>{
    let response=[]
    
    for (let index = 0; index < 2; index++) {
        response.push({
            valuesArray: ValuesArray(7),
            kind: faker.lorem.word()
        })
        
    }
    return response
    
}
const ValuesArray = (num=7)=>{
    let arr=[]
    for (let index = 0; index < num; index++) {
        arr.push(faker.random.number())
    }
    return arr
}