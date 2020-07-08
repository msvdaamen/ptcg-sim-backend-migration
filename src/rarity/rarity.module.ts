import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Rarity} from "../models/rarity";
import {RarityService} from "./rarity.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Rarity])
    ],
    providers: [
        RarityService
    ],
    exports: [
        RarityService
    ]
})
export class RarityModule {

}
