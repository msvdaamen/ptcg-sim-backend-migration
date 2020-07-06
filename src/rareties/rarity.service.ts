import {Injectable} from "@nestjs/common";
import {Rarity} from "../models/rarity";


@Injectable()
export class RarityService {

    private _rarities: Rarity[] = [
        {
            id: 1,
            name: 'Common'
        },
        {
            id: 2,
            name: 'Uncommon'
        },
        {
            id: 3,
            name: 'Rare'
        },
        {
            id: 4,
            name: 'Rare Holo EX'
        },
        {
            id: 5,
            name: 'Rare Holo'
        },
        {
            id: 6,
            name: 'Rare Ultra'
        },
        {
            id: 7,
            name: 'Rare Holo Lv.X'
        },
        {
            id: 8,
            name: 'Rare Secret'
        },
        {
            id: 9,
            name: 'Rare BREAK'
        },
        {
            id: 10,
            name: 'Rare Holo GX'
        },
        {
            id: 11,
            name: 'Rare Prime'
        },
        {
            id: 12,
            name: 'LEGEND'
        },
        {
            id: 13,
            name: 'Rare Rainbow'
        },
        {
            id: 14,
            name: 'Shining'
        },
        {
            id: 15,
            name: 'Rare Promo'
        },
        {
            id: 16,
            name: 'V'
        },
        {
            id: 17,
            name: 'VM'
        }
    ];

    get rarities() {
        return this._rarities;
    }
}
