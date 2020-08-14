import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments'



//El uso de Faker es temportal hasta conectar a base de datos
export const stringCardService = (ctx, dateRange: DateRange, cardId: String): String => {
    return faker.lorem.word()
}