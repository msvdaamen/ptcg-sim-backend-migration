import {EnergyTypes} from "../types/energy-types";

export interface AttackInterface {
    name: string;
    cost: EnergyTypes[];
    convertedEnergyCost: EnergyTypes;
    damage: string;
    text: string;
}
