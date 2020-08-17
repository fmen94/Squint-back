import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';
import { smailCardIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdSmallFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const smallCardService = (ctx, dateRange: DateRange, cardId: CardIdSmallFbType): smailCardIn => {
    logger.info(`Getting values ​​for: ${cardId}`)
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
    logger.info(`Successfully obtained: ${cardId}`)
    return response

}