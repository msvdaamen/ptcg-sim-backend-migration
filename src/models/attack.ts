import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'attacks'})
export class Attack {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    convertedEnergyCost: number

    @Column()
    damage: number

    @Column()
    description: string
}
