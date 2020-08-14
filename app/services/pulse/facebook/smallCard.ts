import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const smallCardService = (ctx, dateRange: DateRange, cardId: string): smailCardIn => {
    let response: smailCardIn = {
        valueInt: faker.random.number(),
        diff: faker.random.number(),
        valuesArray: []
    }
    for (let index = 0; index < 7; index++) {
        response.valuesArray.push({
            date: moment(dateRange.date, 'DD-MM-YYYYThh:mm:ss').subtract(index, 'days').format('DD-MM-YYYYThh:mm:ss'),
            value: faker.random.number()
        })

    }
    return response

}