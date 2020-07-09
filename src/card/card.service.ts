import {HttpService, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Card} from "../models/card";
import {Column, Repository} from "typeorm";
import {PokemonTypeService} from "../pokemon-types/pokemon-type.service";
import {RarityService} from "../rarity/rarity.service";
import {EnergyService} from "../energy/energy.service";
import {TypeService} from "../type/type.service";
import {AbilityService} from "../ability/ability.service";
import {SerieService} from "../serie/serie.service";
import {ArtistService} from "../artist/artist.service";
import {CardSetService} from "../card-set/card-set.service";
import {AttackService} from "../attack/attack.service";
import {CardInterface} from "../interfaces/card.interface";
import {Image} from "../models/image";
import * as fs from "fs";
import * as request from 'request';
@Injectable()
export class CardService {

    constructor(
        @InjectRepository(Card)
        private readonly cardRepository: Repository<Card>,
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
        private readonly pokemonTypeService: PokemonTypeService,
        private readonly rarityService: RarityService,
        private readonly energyService: EnergyService,
        private readonly typeService: TypeService,
        private readonly abilityService: AbilityService,
        private readonly serieService: SerieService,
        private readonly artistService: ArtistService,
        private readonly cardSetService: CardSetService,
        private readonly attackService: AttackService,
        private httpService: HttpService
    ) { }

    private _cards: Card[] = [];
    private _cardMap: Map<string, Card>;
    private _images: Image[] = [];
    private _imagesMap: Map<string, Image>

    download(uri, filename){
        return new Promise((resolve, reject) => {
            request.head(uri, function(err, res, body){
                // console.log('content-type:', res.headers['content-type']);
                // console.log('content-length:', res.headers['content-length']);

                request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);
            });
        })
    };

    downloadImages(images: Partial<Image>[], index: number) {
        if (index >= images.length) {
            return;
        }
        const downloads = [];
        for (let i = 0; i < 1; i++) {
            const image = images[index];
            downloads.push(this.download(image.url, `./files/images/${image.filename}`));
            index++;
        }
        Promise.all(downloads).then(result => {
            console.log(index);
            setTimeout(() => {
                this.downloadImages(images, index);
            }, 5000);
        });
    }

    async migrate(cards: CardInterface[]) {
        if (await this.imageRepository.count() === 0) {
            const images = new Map<string, Partial<Image>>();
            cards.forEach(card => {
                if (card.imageUrl) {
                    const split = card.imageUrl.split('/');
                    const filename =  split[split.length - 2] + '-' + split[split.length - 1];
                    const name = filename.split('.')[0];
                    const image: Partial<Image> = {
                        name,
                        filename,
                        url: card.imageUrl
                    };
                    images.set(filename, image);
                }
                if (card.imageUrlHiRes) {
                    const split = card.imageUrlHiRes.split('/');
                    const filename =  split[split.length - 2] + '-' + split[split.length - 1];
                    const name = filename.split('.')[0];
                    const image: Partial<Image> = {
                        name,
                        filename,
                        url: card.imageUrlHiRes
                    };
                    images.set(filename, image);
                }
            });

            const allImages = [...images.values()];
            // this.downloadImages(allImages, 0);
            await this.imageRepository.insert([...images.values()]);
        }
        await this.setImages();


        if (await this.cardRepository.count() === 0) {
            const cardInsert = [];
            cards.forEach(card => {
                const newCard: Partial<Card> = {
                    customId: card.id,
                    imageId: this.getImageId(card.imageUrl),
                    hresImageId: this.getImageId(card.imageUrlHiRes),
                    cardSetId: this.getSetId(card.setCode),
                    artistId: this.getArtistId(card.artist),
                    seriesId: this.getSeriesId(card.series),
                    subtypeId: this.getTypeId(card.subtype),
                    supertypeId: this.getTypeId(card.supertype),
                    abilityId: this.getAbilityId(card.ability?.name),
                    hp: (card.hp && card.hp !== 'None' ? parseInt(card.hp) : null),
                    number: (card.number ? card.number : null),
                    nationalPokedexNumber: (card.nationalPokedexNumber ? card.nationalPokedexNumber : null),
                    description: (card.text ? card.text.join('\n') : null),
                    // TODO make trait table
                    ancientTrait: null
                };
                cardInsert.push(newCard);
            });
            // console.log(cardInsert[0]);
            // console.log(cardInsert[7]);
            await this.cardRepository.insert(cardInsert);
        }
        await this.setCards();
    }

    async setCards() {
        if (this._cards.length === 0) {
            this._cards = await this.cardRepository.find();
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

    private getAbilityId(abilityName: string) {
        if (this.abilityService.abilityMap.has(abilityName)) {
            return this.abilityService.abilityMap.get(abilityName).id
        }
        return null;
    }

    private getTypeId(type: string) {
        if (this.typeService.typesMap.has(type)) {
            return this.typeService.typesMap.get(type).id;
        }
        return null;
    }

    private getSeriesId(serie: string) {
        return this.serieService.serieMap.get(serie).id;
    }

    private getArtistId(artistName: string) {
        if (this.artistService.artistMap.has(artistName)) {
            return this.artistService.artistMap.get(artistName).id;
        }
        return null;
    }

    private getSetId(setCode: string) {
        return this.cardSetService.setMap.get(setCode).id
    }

    private async setImages() {
        if (this._images.length === 0) {
            this._images = await this.imageRepository.find();
        }
    }

    get imageMap() {
        if (!this._imagesMap) {
            this._imagesMap = new Map<string, Image>();
            this._images.forEach(image => this._imagesMap.set(image.url, image))
        }
        return this._imagesMap;
    }

    private getImageId(url: string) {
        if (this.imageMap.has(url)) {
            return this.imageMap.get(url).id;
        }
        return null;
    }
}
