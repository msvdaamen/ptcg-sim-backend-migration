import {CardInterface} from "./card.interface";


export interface DeckInterface {
    id: number;
    name: string;
    types: string[];
    cards: CardInterface[];
}
