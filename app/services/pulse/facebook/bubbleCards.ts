import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';
import { kindDateValueIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdBubblesFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const bubblesService = (ctx, dateRange: DateRange, cardId: CardIdBubblesFbType): kindDateValueIn[] => {
    logger.info(`Getting values ​​for: ${cardId}`)
    let response: kindDateValueIn[] = []
    for (let index = 0; index < 7; index++) {
        response.push({
            kind: faker.commerce.color(),
            date: moment(dateRange.date, 'DD-MM-YYYYThh:mm:ss').subtract(index, 'days').format('DD-MM-YYYYThh:mm:ss'),
            value: faker.random.number()
        })

    }
    logger.info(`Successfully obtained: ${cardId}`)
    return response
}