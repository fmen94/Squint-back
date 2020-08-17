import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { DateRange } from '../../../schema/common/Arguments';
import { kindIntValuesIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdBarFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const barCardService = (ctx, dateRange: DateRange, cardId: CardIdBarFbType): kindIntValuesIn[] => {
    logger.info(`Getting values ​​for: ${cardId}`)
    let response: kindIntValuesIn[] = []
    for (let index = 0; index < 2; index++) {
        response.push({
            valuesArray: ValuesArray(7),
            kind: faker.lorem.word()
        })

    }
    logger.info(`Successfully obtained: ${cardId}`)
    return response

}
const ValuesArray = (num = 7): Number[] => {
    let arr = []
    for (let index = 0; index < num; index++) {
        arr.push(faker.random.number())
    }
    return arr
}