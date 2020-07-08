import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {PokemonTypeService} from "./pokemon-types/pokemon-type.service";
import {RarityService} from "./rarity/rarity.service";
import {EnergyService} from "./energy/energy.service";
import {TypeService} from "./type/type.service";
import {Type} from "./models/type";
import {AbilityService} from "./ability/ability.service";
import {SerieService} from "./serie/serie.service";
import {ArtistService} from "./artist/artist.service";
import {CardSetService} from "./card-set/card-set.service";
import {AttackService} from "./attack/attack.service";
import {CardService} from "./card/card.service";

@Controller()
export class AppController {

  types: Type[] = [];

  constructor(
      private readonly appService: AppService,
      private readonly pokemonTypeService: PokemonTypeService,
      private readonly rarityService: RarityService,
      private readonly energyService: EnergyService,
      private readonly typeService: TypeService,
      private readonly abilityService: AbilityService,
      private readonly serieService: SerieService,
      private readonly artistService: ArtistService,
      private readonly cardSetService: CardSetService,
      private readonly attackService: AttackService,
      private readonly cardService: CardService
  ) {}

  @Get()
  async getHello() {
    const {
      types,
      abilities,
      series,
      artists,
      cardSets,
      attacks,
      attackEnergies
    } = await this.appService.init();


    await this.pokemonTypeService.migrate();
    await this.rarityService.migrate();
    await this.energyService.migrate();
    await this.typeService.migrate(types);
    await this.abilityService.migrate(abilities);
    await this.serieService.migrate(series);
    await this.artistService.migrate(artists);
    await this.cardSetService.migrate(cardSets);
    await this.attackService.migrateAttacks(attacks);
    await this.attackService.migrateAttackEnergy(attackEnergies);
    await this.cardService.migrate();
    return [];
  }
}
