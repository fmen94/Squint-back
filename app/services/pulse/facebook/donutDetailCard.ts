import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const donutDetailCardService = (ctx, dateRange: DateRange, cardId: String): donutDetailIn => {
    let response: donutDetailIn = {
        title: faker.lorem.word(),
        subtitle: faker.lorem.word(),
        text: faker.lorem.words(),
        valuesArray: kindValue()
    }
    return response

}
const kindValue = (num: Number = 7): kindValueIn[] => {
    let arr: kindValueIn[] = []
    for (let index = 0; index < num; index++) {
        arr.push({
            kind: faker.lorem.word(),
            value: faker.random.number()
        })

    }
    return arr
}