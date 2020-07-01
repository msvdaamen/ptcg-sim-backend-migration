import {CostTypes} from "../types/cost-types";

export interface AttackInterface {
    name: string;
    cost: CostTypes[];
    convertedEnergyCost: CostTypes;
    damage: string;
    text: string;
}
