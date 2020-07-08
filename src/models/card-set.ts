import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'card_sets'})
export class CardSet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;
}
