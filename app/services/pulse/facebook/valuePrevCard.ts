import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments'



//El uso de Faker es temportal hasta conectar a base de datos
export const valuePrevCardService = (ctx, dateRange:DateRange, cardId) => {
    return {
        value: faker.random.number(),
        diff: faker.random.number()
    }

}