import {AttackInterface} from "./attack.interface";
import {WeaknessInterface} from "./weakness.interface";

export interface CardInterface {
    id: string;
    name: string;
    imageUrl: string;
    imageUrlHiRes: string;
    subtype: string;
    supertype: string;
    hp: string;
    retreatCost: string[];
    convertedRetreatCost: number;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    types: string[];
    attacks: AttackInterface[];
    weaknesses: WeaknessInterface[];
    nationalPokedexNumber: number;
    evolvesTo: string;
}

