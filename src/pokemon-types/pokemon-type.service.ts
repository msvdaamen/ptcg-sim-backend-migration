import {PokemonType} from "../models/pokemon-type";


export class PokemonTypeService {

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

    get types() {
        return this._types;
    }
}
