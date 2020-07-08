import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'energies'})
export class Energy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
