import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Type} from "../models/type";
import {TypeService} from "./type.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Type])
    ],
    providers: [
        TypeService
    ],
    exports: [
        TypeService
    ]
})
export class TypeModule {

}
