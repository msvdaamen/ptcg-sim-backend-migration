import {EnergyTypes} from "../types/energy-types";

export interface AttackInterface {
    name: string;
    cost: EnergyTypes[];
    convertedEnergyCost: number;
    damage: number;
    text: string;
}
