
import {CardSet} from '../models/card-set';
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Energy} from "../models/energy";

@Injectable()
export class CardSetService {

    constructor(
        @InjectRepository(CardSet)
        private readonly repository: Repository<CardSet>
    ) { }

    private _sets: CardSet[] = []
    private _setMap: Map<string, CardSet>;

    // TODO remove migrate function

    async migrate(sets: Partial<CardSet>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(sets);
            await this.setCardSets();
        }
    }

    async setCardSets() {
        if (this.sets.length === 0) {
            this._sets = await this.repository.find();
        }
    }

    get energyMap() {
        if(!this._setMap) {
            this._setMap = new Map<string, CardSet>();
            this.sets.forEach(set => this._setMap.set(set.code, set));
        }
        return this._setMap;
    }

    get sets() {
        return this._sets;
    }
}
