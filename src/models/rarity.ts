import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'rarities'})
export class Rarity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
