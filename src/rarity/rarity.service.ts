import {Injectable} from "@nestjs/common";
import {Rarity} from "../models/rarity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class RarityService {

    constructor(
        @InjectRepository(Rarity)
        private readonly repository: Repository<Rarity>
    ) {
    }

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
    private _rarityMap: Map<string, Rarity>;

    // TOTO remove migrate function
    async migrate() {
        if (await this.repository.count() === 0) {
            await this.repository.insert(this.rarities);
        }
    }

    get rarityMap() {
        if (!this._rarityMap) {
            this._rarityMap = new Map<string, Rarity>();
            this.rarities.forEach(rarity => this._rarityMap.set(rarity.name, rarity));
        }
        return this._rarityMap;
    }

    get rarities() {
        return this._rarities;
    }
}
