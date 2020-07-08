import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'artists'})
export class Artist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
