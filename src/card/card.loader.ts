import {Injectable, Scope} from "@nestjs/common";
import {Image} from "../models/image";
import DataLoader from "dataloader";
import {getRepository} from "typeorm";
import {Card} from "../models/card";

@Injectable({
    scope: Scope.REQUEST
})
export class CardLoader {


    private _images: DataLoader<number, Image>;
    private _hresImages: DataLoader<number, Image>;

    images() {
        if (!this._images) {
            this.createImageLoader();
        }
        return this._images;
    }

    hresImages() {
        if (!this._hresImages) {
            this.createHresImageLoader();
        }
        return this._hresImages;
    }

    private createImageLoader() {
        this._images = new DataLoader<number, Image>(async (cardIds: number[]) => {
            const cardRepository = getRepository(Card);
            const cards = await cardRepository
                .createQueryBuilder('cards')
                .leftJoinAndSelect('cards.image', 'image')
                .whereInIds(cardIds)
                .getMany()
            const cardToImageMap: {[cardId: number]: Image} = {};
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                cardToImageMap[card.id] = card.image;
            }
            return cardIds.map(cardId => cardToImageMap.hasOwnProperty(cardId) ? cardToImageMap[cardId] : null);
        })
    }

    private createHresImageLoader() {
        this._hresImages = new DataLoader<number, Image>(async (cardIds: number[]) => {
            const cardRepository = getRepository(Card);
            const cards = await cardRepository
                .createQueryBuilder('cards')
                .leftJoinAndSelect('cards.hresImage', 'image')
                .whereInIds(cardIds)
                .getMany()
            const cardToImageMap: {[cardId: number]: Image} = {};
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                cardToImageMap[card.id] = card.hresImage;
            }
            return cardIds.map(cardId => cardToImageMap.hasOwnProperty(cardId) ? cardToImageMap[cardId] : null);
        })
    }

}
