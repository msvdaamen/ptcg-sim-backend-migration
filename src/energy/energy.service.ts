import {Energy} from "../models/energy";


export class EnergyService {

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

    get energies() {
        return this._energies;
    }
}
