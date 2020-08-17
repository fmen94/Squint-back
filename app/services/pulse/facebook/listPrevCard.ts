import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { DateRange } from '../../../schema/common/Arguments';
import { nameValueDiffIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdListPrevFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const listPrevCardService = (ctx, dateRange: DateRange, cardId: CardIdListPrevFbType): nameValueDiffIn[] => {
    logger.info(`Getting values ​​for: ${cardId}`)
    let response: nameValueDiffIn[] = []
    for (let index = 0; index < 12; index++) {
        response.push({
            name: faker.address.country(),
            value: faker.random.number(),
            diff: faker.random.number()
        })

    }
    logger.info(`Successfully obtained: ${cardId}`)
    return response

}
