import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Card} from "../models/card";
import {Repository} from "typeorm";

@Injectable()
export class CardService {

    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: Repository<Card>
    ) { }

    private _cards: Card[] = [];
    private _cardMap: Map<string, Card>;

    async migrate() {
        if (await this.cardRepository.count() === 0) {

        }
    }

    get cardMap() {
        if(!this._cardMap) {
            this._cardMap = new Map<string, Card>();
            this.cards.forEach(card => this._cardMap.set(card.customId, card));
        }
        return this._cardMap;
    }

    get cards() {
        return this._cards;
    }
}
