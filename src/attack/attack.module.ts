import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Attack} from "../models/attack";
import {AttackHasEnergy} from "../models/attack-has-energy";
import {AttackService} from "./attack.service";
import {EnergyModule} from "../energy/energy.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Attack, AttackHasEnergy]),
        EnergyModule
    ],
    providers: [
        AttackService
    ],
    exports: [
        AttackService
    ]
})
export class AttackModule {

}
