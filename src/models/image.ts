import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity({name: 'images'})
export class Image {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    filename: string;
}
