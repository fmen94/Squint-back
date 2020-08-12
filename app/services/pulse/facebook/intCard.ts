import  BadRequestException  from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments'

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = (ctx ,dateRange:DateRange,cardId)=>{
        return faker.random.number()
}