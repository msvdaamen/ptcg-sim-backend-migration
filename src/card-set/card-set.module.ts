import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CardSet} from "../models/card-set";
import {CardSetService} from "./card-set.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CardSet])
    ],
    providers: [
        CardSetService
    ],
    exports: [
        CardSetService
    ]
})
export class CardSetModule {

}
