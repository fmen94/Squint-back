import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import moment = require("moment");
import { valuePrevCardService } from './ValuePrevCard';
import { xlabels } from '../../../helpers/xlabels';
import { DateRange } from '../../../schema/common/Arguments';
import { kindValueIn } from '../../../interfaces/common';
import logger from '../../../helpers/logins/login.helper';
import { CardIdListFbType } from '../../../schema/common/Enums';

//El uso de Faker es temportal hasta conectar a base de datos
export const listCardService = (ctx, dateRange: DateRange, cardId: CardIdListFbType ): kindValueIn[] => {
    logger.info(`Getting values ​​for: ${cardId}`)
    let response: kindValueIn[] = []
    for (let index = 0; index < 12; index++) {
        response.push({
            kind: faker.lorem.word(),
            value: faker.random.number()
        })

    }
    logger.info(`Successfully obtained: ${cardId}`)
    return response
}