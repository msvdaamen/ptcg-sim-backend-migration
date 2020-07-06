
import {CardSet} from '../models/card-set';

export class CardSetService {

    private _sets: CardSet[] = [
        {
            id: 1,
            name: '',
            code: ''
        }
    ]

    get sets() {
        return this._sets;
    }
}
