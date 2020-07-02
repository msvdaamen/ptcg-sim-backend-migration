import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as fs from 'fs'
import * as path from 'path';
import {CardInterface} from "./interfaces/card.interface";
import {readDir, readFile} from "./utils/fs-promise";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  @Get()
  async getHello() {
    const cardsPath = './pokemon-tcg-data/cards';
    const deckPath = './pokemon-tcg-data/decks';
    let cardAmount = 0;
    const rarities = new Set();
    const types = new Set();
    const costs = new Set();
    const files = await readDir(cardsPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const data = await readFile(path.resolve(cardsPath, file));
      const cards: CardInterface[] = JSON.parse(data).filter(card => card.nationalPokedexNumber);
      for (let c = 0; c < cards.length; c++) {
        const card = cards[c];
        if (!card.rarity) {
          card.rarity = 'Common';
        }
        rarities.add(card.rarity);

        if (card.types) {
          card.types.forEach(type => types.add(type))
        }
        if (card.attacks) {
          card.attacks.forEach(attack => {
            attack.cost.forEach(cost => {
              costs.add(cost);
            })
          })
        }
      }
      cardAmount += cards.length;
    }
    return [...rarities];
  }
}
