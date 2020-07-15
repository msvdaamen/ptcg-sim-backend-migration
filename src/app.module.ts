import {HttpModule, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PokemonTypeModule} from "./pokemon-types/pokemon-type.module";
import {RarityModule} from "./rarity/rarity.module";
import {EnergyModule} from "./energy/energy.module";
import {TypeModule} from "./type/type.module";
import {AbilityModule} from "./ability/ability.module";
import {SerieModule} from "./serie/serie.module";
import {ArtistModule} from "./artist/artist.module";
import {CardSetModule} from "./card-set/card-set.module";
import {AttackModule} from "./attack/attack.module";
import {CardModule} from "./card/card.module";
import {GraphQLModule} from "@nestjs/graphql";
import {join} from 'path';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ptcg-sim',
      autoLoadEntities: true,
      synchronize: false
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: false,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      },
      autoSchemaFile: 'schema.graphql',
      cors: {
        credentials: true,
        origin: true,
      },
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
    CardModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
