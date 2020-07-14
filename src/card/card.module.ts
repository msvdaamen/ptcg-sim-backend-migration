import {HttpModule, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Card} from "../models/card";
import {CardService} from "./card.service";
import {PokemonTypeModule} from "../pokemon-types/pokemon-type.module";
import {RarityModule} from "../rarity/rarity.module";
import {EnergyModule} from "../energy/energy.module";
import {TypeModule} from "../type/type.module";
import {AbilityModule} from "../ability/ability.module";
import {SerieModule} from "../serie/serie.module";
import {ArtistModule} from "../artist/artist.module";
import {CardSetModule} from "../card-set/card-set.module";
import {AttackModule} from "../attack/attack.module";
import {Image} from "../models/image";
import {CardHasAttack} from "../models/card-has-attack";
import {CardHasPokemonType} from "../models/card-has-pokemon-type";
import {CardRetreatEnergy} from "../models/card-retreat-energy";
import {Evolution} from "../models/evolution";
import {Resistance} from "../models/resistance";
import {Weakness} from "../models/weakness";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Card,
            Image,
            CardHasAttack,
            CardHasPokemonType,
            CardRetreatEnergy,
            Evolution,
            Resistance,
            Weakness
        ]),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
        PokemonTypeModule,
        RarityModule,
        EnergyModule,
        TypeModule,
        AbilityModule,
        SerieModule,
        ArtistModule,
        CardSetModule,
        AttackModule,
    ],
    providers: [
        CardService
    ],
     exports: [
         CardService
     ]
})
export class CardModule {

}
