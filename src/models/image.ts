import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'images'})
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    filename: string;

    @Column()
    url: string;
}
