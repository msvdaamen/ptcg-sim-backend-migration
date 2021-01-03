import {Injectable, Logger} from '@nestjs/common';
import {readDir, readFile} from "./utils/fs-promise";
import * as path from 'path';
import {CardInterface} from "./interfaces/card.interface";
import {Ability} from "./models/ability";
import {Type} from "./models/type";
import {AbilityInterface} from "./interfaces/ability.interface";
import {Serie} from "./models/serie";
import {Artist} from "./models/artist";
import {CardSet} from "./models/card-set";
import {Attack} from "./models/attack";
import {AttackInterface} from "./interfaces/attack.interface";
import {Rarity} from "./models/rarity";

interface Returns {
  rarities: Partial<Rarity>[];
  types: Partial<Type>[];
  abilities: Partial<Ability>[];
  series: Partial<Serie>[];
  artists: Partial<Artist>[];
  cardSets: Partial<CardSet>[];
  attacks: Partial<Attack>[];
  attackEnergies: Map<string, string[]>;
  cards: CardInterface[];
}

@Injectable()
export class AppService {

  logger = new Logger(AppService.name);

  async init(): Promise<Returns> {
    const cardsPath = './pokemon-tcg-data/cards';
    const deckPath = './pokemon-tcg-data/decks';
    let cardAmount = 0;
    const rarities = new Set<string>();
    const artists = new Set<string>();
    const series = new Set<string>();
    const abilities: AbilityInterface[] = []
    const abilityName = new Set<string>();
    const types = new Set<string>();
    const images = new Set();
    const cardSet = new Set<string>();
    const cardCode = new Map<string, string>();
    const files = await readDir(cardsPath);
    const attacks = new Map<string, AttackInterface>()
    const attackEnergies = new Map<string, string[]>()
    const cardArray: CardInterface[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const data = await readFile(path.resolve(cardsPath, file));
      const cards: CardInterface[] = JSON.parse(data);
      cardArray.push(...cards);
      cardAmount += cards.length;

      for(let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.set) {
          cardSet.add(card.set);
          cardCode.set(card.set, card.setCode);
        }
        if (card.rarity && !rarities.has(card.rarity)) {
          rarities.add(card.rarity);
        }
        if (card.artist) {
          artists.add(card.artist);
        }
        if(card.series) {
          series.add(card.series);
        }
        if(card.ability && !abilityName.has(card.ability.name)) {
          abilityName.add(card.ability.name);
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
        if (card.attacks) {
          card.attacks.forEach(attack => {
            const costs = attack.cost;
            delete attack.cost;
            attacks.set(attack.name.replace('-', ''), attack);
            attackEnergies.set(attack.name.replace('-', ''), costs);
          });
        }
      }
    }
    return {
      rarities: [...rarities].map(rarity => ({name: rarity})),
      types: [...types].map(type => { return {name: type} }),
      abilities: abilities.map(ability => { return {name: ability.name, description: ability.text} }),
      series: [...series].map(serie => {return {name: serie}}),
      artists: [...artists].map(artist => {return {name: artist}}),
      cardSets: [...cardSet].map(set => {return {name: set, code: cardCode.get(set)}}),
      attacks: [...attacks.values()].map(attack => {return {name: attack.name, convertedEnergyCost: attack.convertedEnergyCost, damage: attack.damage as number, description: attack.text}}),
      attackEnergies: attackEnergies,
      cards: cardArray
    }
  }
}
