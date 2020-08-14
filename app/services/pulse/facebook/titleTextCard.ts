import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments'



//El uso de Faker es temportal hasta conectar a base de datos
export const titleTextCardService = (ctx, dateRange: DateRange, cardId: String): titleTextIn => {
    return {
        title: faker.lorem.word(),
        text: faker.lorem.words(10)
    }

}