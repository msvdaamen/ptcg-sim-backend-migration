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

@Module({
    imports: [
        TypeOrmModule.forFeature([Card, Image]),
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
