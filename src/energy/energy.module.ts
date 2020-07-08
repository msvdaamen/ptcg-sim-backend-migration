import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Energy} from "../models/energy";
import {EnergyService} from "./energy.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Energy])
    ],
    providers: [
        EnergyService
    ],
    exports: [
        EnergyService
    ]
})
export class EnergyModule {

}
