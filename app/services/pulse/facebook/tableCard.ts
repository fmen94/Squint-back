import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const tableCardService = (ctx,dateRange:DateRange ,cardId)=>{
    let response= []
    
    for (let index = 0; index < 6; index++) {
        let arr = [] 
        for (let ind = 0; ind < 10; ind++) {
            arr.push(cell(2))
            
        }
        response.push(arr)
    }
    return response
}
const cell = (num)=>{
    let arr= []
    for (let index = 0; index < num; index++) {
        arr.push({
            kind: faker.commerce.productName(),
            name: faker.name.firstName(),
            value: faker.random.number(),
        })
    }
 return arr
}