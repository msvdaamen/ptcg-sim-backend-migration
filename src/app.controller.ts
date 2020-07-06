import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';
import {CardInterface} from "./interfaces/card.interface";
import {readDir, readFile} from "./utils/fs-promise";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService
  ) {
    this.init();
  }

  async init() {
    const cardsPath = './pokemon-tcg-data/cards';
    const deckPath = './pokemon-tcg-data/decks';
    let cardAmount = 0;
    const artists = new Set();
    const series = new Set();
    const abilities = [];
    const types = new Set();
    const images = new Set();
    const cardSet = new Set();

    const files = await readDir(cardsPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const data = await readFile(path.resolve(cardsPath, file));
      const cards: CardInterface[] = JSON.parse(data).filter(card => card.nationalPokedexNumber);
      cardAmount += cards.length;

      for(let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.set) {
          cardSet.add(card.set);
        }
        if (card.artist) {
          artists.add(card.artist);
        }
        if(card.series) {
          series.add(card.series);
        }
        if(card.ability) {
          abilities.push(card.ability);
        }
        if (card.subtype) {
          types.add(card.subtype);
        }
        if (card.supertype) {
          types.add(card.supertype);
        }
        if (card.imageUrl) {
          images.add(card.imageUrl)
        }
        if (card.imageUrlHiRes) {
          images.add(card.imageUrlHiRes)
        }
      }
    }
  }

  @Get()
  async getHello() {

    return [];
  }
}
