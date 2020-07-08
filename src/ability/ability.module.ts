import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Ability} from "../models/ability";
import {AbilityService} from "./ability.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Ability])
    ],
    providers: [
        AbilityService
    ],
    exports: [
        AbilityService
    ]
})
export class AbilityModule {

}
