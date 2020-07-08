import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'abilities'})
export class Ability {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
