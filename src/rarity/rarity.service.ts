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

    private _rarities: Rarity[] = [];
    private _rarityMap: Map<string, Rarity>;

    // TOTO remove migrate function
    async migrate(rarities: Partial<Rarity>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(rarities);
        }
        await this.setRarities()
    }

    async setRarities() {
        if (this._rarities.length === 0) {
            this._rarities = await this.repository.find();
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
