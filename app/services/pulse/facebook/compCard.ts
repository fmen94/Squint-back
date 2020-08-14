import BadRequestException from '../../../exceptions/bad-request.exception'
import faker from 'faker'
import { xlabels } from '../../../helpers/xlabels';
import { DateRange } from '../../../schema/common/Arguments';

//El uso de Faker es temportal hasta conectar a base de datos
export const compCardService = (ctx, dateRange: DateRange, cardId: String): nameValueDiffIn[] => {
    let response: nameValueDiffIn[] = []
    let levels = xlabels(dateRange)
    for (let index = 0; index < levels.length; index++) {
        response.push({
            name: levels[index],
            value: faker.random.number(),
            diff: faker.random.number()
        })
    }
    return response
}