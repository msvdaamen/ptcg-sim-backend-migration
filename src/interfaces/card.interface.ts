import {AttackInterface} from "./attack.interface";
import {WeaknessInterface} from "./weakness.interface";
import {PokemonTypes} from "../types/pokemon-types";
import {AbilityInterface} from "./ability.interface";
import {CostTypes} from "../types/cost-types";
import {RarityTypes} from "../types/rarity-types";

export interface CardInterface {
    id: string;
    name: string;
    imageUrl: string;
    imageUrlHiRes: string;
    subtype: string;
    supertype: string;
    hp: string;
    retreatCost: CostTypes[];
    convertedRetreatCost: CostTypes;
    ability: AbilityInterface,
    number: string;
    artist: string;
    rarity: RarityTypes;
    series: string;
    set: string;
    setCode: string;
    types?: PokemonTypes[];
    attacks: AttackInterface[];
    weaknesses: WeaknessInterface[];
    nationalPokedexNumber: number;
    evolvesFrom: string;
    evolvesTo: string[];
}

