import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';
import { kindNameValue } from '../../../schema/common/Common';

//El uso de Faker es temportal hasta conectar a base de datos
export const tableCardService = (ctx, dateRange: DateRange, cardId: String): kindNameValueIn[][][] => {
    let response: kindNameValueIn[][][] = []

    for (let index = 0; index < 6; index++) {
        let arr: kindNameValueIn[][] = []
        for (let ind = 0; ind < 10; ind++) {
            arr.push(cell(2))

        }
        response.push(arr)
    }
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