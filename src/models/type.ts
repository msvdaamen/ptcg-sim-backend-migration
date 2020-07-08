import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'types'})
export class Type {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
}
