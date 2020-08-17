import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';
import { kindNameValueIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdTableFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const tableCardService = (ctx, dateRange: DateRange, cardId: CardIdTableFbType): kindNameValueIn[][][] => {
    logger.info(`Getting values ​​for: ${cardId}`)
    let response: kindNameValueIn[][][] = []

    for (let index = 0; index < 6; index++) {
        let arr: kindNameValueIn[][] = []
        for (let ind = 0; ind < 10; ind++) {
            arr.push(cell(2))
        }
        response.push(arr)
    }
    logger.info(`Successfully obtained: ${cardId}`)
    return response
}
const cell = (num): kindNameValueIn[] => {
    let arr: kindNameValueIn[] = []
    for (let index = 0; index < num; index++) {
        arr.push({
            kind: faker.commerce.productName(),
            name: faker.name.firstName(),
            value: faker.random.number(),
        })
    }
    return arr
}