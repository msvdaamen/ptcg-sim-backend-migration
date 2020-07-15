import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Card} from "./card";
import {Field, Int, ObjectType} from "@nestjs/graphql";


@ObjectType()
@Entity({name: 'images'})
export class Image {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    filename: string;

    @Field()
    @Column()
    url: string;

    @OneToMany(() => Card, card => card.image)
    card: Card[];

    @OneToMany(() => Card, card => card.image)
    hresCard: Card[];
}
