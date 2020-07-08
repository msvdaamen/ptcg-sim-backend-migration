import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Card} from "../models/card";
import {CardService} from "./card.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Card])
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
