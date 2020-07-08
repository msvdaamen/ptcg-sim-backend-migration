import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'series'})
export class Serie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
