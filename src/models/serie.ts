import {Column, PrimaryGeneratedColumn} from "typeorm";

@Column()
export class Serie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
