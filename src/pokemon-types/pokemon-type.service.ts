import {PokemonType} from "../models/pokemon-type";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


export class PokemonTypeService {

    constructor(
        @InjectRepository(PokemonType)
        private readonly repository: Repository<PokemonType>
    ) { }

    private _types: PokemonType[] = [
        {
            id: 1,
            name: 'Grass'
        },
        {
            id: 2,
            name: 'Fire'
        },
        {
            id: 3,
            name: 'Water'
        },
        {
            id: 4,
            name: 'Lightning'
        },
        {
            id: 5,
            name: 'Psychic'
        },
        {
            id: 6,
            name: 'Fighting'
        },
        {
            id: 7,
            name: 'Darkness'
        },
        {
            id: 8,
            name: 'Metal'
        },
        {
            id: 9,
            name: 'Fairy'
        },
        {
            id: 10,
            name: 'Dragon'
        },
        {
            id: 11,
            name: 'Colorless'
        },
    ];

    private _typesMap: Map<string, PokemonType>;

    // TODO remove migrate function
    async migrate() {
        if (await this.repository.count() === 0) {
            await this.repository.insert(this.types);
        }
    }

    get types() {
        return this._types;
    }

    get typesMap() {
        if (!this._typesMap) {
            this._typesMap = new Map<string, PokemonType>();
            this.types.forEach(type => {
                this._typesMap.set(type.name, type);
            })
        }
        return this._typesMap;
    }
}
