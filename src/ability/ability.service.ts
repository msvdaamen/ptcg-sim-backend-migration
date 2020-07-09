import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Ability} from "../models/ability";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AbilityService {

    constructor(
        @InjectRepository(Ability)
        private readonly repository: Repository<Ability>
    ) {
    }

    private _abilities: Ability[] = [];
    private _abilityMap: Map<string, Ability>;

    // TODO remove migrate function
    async migrate(abilities: Partial<Ability>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(abilities);
        }
        await this.setAbilities();
    }

    async setAbilities() {
        if (this._abilities.length === 0) {
            this._abilities = await this.repository.find();
        }
    }

    get abilityMap() {
        if (!this._abilityMap) {
            this._abilityMap = new Map<string, Ability>();
            this.abilities.forEach(ability => this._abilityMap.set(ability.name, ability));
        }
        return this._abilityMap;
    }

    get abilities() {
        return this._abilities;
    }
}
