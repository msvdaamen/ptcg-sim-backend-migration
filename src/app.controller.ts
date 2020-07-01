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
    let cardAmount = 0;
    const rareties = new Set();
    const files = await readDir(cardsPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const data = await readFile(path.resolve(cardsPath, file));
      const cards: CardInterface[] = JSON.parse(data);
      for (let c = 0; c < cards.length; c++) {
        const card = cards[c];
        if (!card.rarity) {
          card.rarity = 'Common';
        }
        rareties.add(card.rarity);
      }
      cardAmount += cards.length;
    }
    console.log(rareties);
    return rareties.keys();
  }
}
