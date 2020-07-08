import {Energy} from "../models/energy";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


export class EnergyService {

    constructor(
        @InjectRepository(Energy)
        private readonly repository: Repository<Energy>
    ) {
    }

    private _energies: Energy[] = [
        {
            id: 1,
            name: 'Grass'
        },
        {
            id: 2,
            name: 'Colorless'
        },
        {
            id: 3,
            name: 'Fire'
        },
        {
            id: 4,
            name: 'Water'
        },
        {
            id: 5,
            name: 'Lightning'
        },
        {
            id: 6,
            name: 'Psychic'
        },
        {
            id: 7,
            name: 'Fighting'
        },
        {
            id: 8,
            name: 'Darkness'
        },
        {
            id: 9,
            name: 'Metal'
        },
        {
            id: 10,
            name: 'Fairy'
        }
    ];
    private _energyMap: Map<string, Energy>;

    // TODO remove migrate function
    async migrate() {
        if (await this.repository.count() === 0) {
            await this.repository.insert(this.energies);
        }
    }

    get energyMap() {
        if(!this._energyMap) {
            this._energyMap = new Map<string, Energy>();
            this.energies.forEach(energy => this._energyMap.set(energy.name, energy));
        }
        return this._energyMap;
    }

    get energies() {
        return this._energies;
    }
}
