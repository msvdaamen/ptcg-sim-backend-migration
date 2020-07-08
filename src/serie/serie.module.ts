import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Serie} from "../models/serie";
import {SerieService} from "./serie.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Serie])
    ],
    providers: [
        SerieService
    ],
    exports: [
        SerieService
    ]
})
export class SerieModule {}
