import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Field, Int, ObjectType} from "@nestjs/graphql";
import {Image} from "./image";

@ObjectType()
@Entity({name: 'cards'})
export class Card {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'custom_id'})
    customId: string;

    @Column({name: 'image_id', nullable: true})
    imageId: number;

    @Column({name: 'hres_image_id', nullable: true})
    hresImageId: number;

    @Column({name: 'card_set_id'})
    cardSetId: number;

    @Column({name: 'artist_id', nullable: true})
    artistId: number;

    @Column({name: 'series_id'})
    seriesId: number;

    @Column({name: 'subtype_id', nullable: true})
    subtypeId: number;

    @Column({name: 'supertype_id'})
    supertypeId: number;

    @Column({name: 'ability_id', nullable: true})
    abilityId: number;

    @Column({name: 'rarity_id'})
    rarityId: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({nullable: true})
    hp: number;

    @Field()
    @Column({nullable: true})
    number: string;

    @Field()
    @Column({name: 'national_pokedex_number', nullable: true})
    nationalPokedexNumber: number;

    @Field()
    @Column({nullable: true})
    description: string;

    @Field()
    @Column({name: 'ancient_trait', nullable: true})
    ancientTrait: string;

    @ManyToOne(() => Image, image => image.card)
    @JoinColumn({name: 'image_id'})
    image: Image;

    @ManyToOne(() => Image, image => image.hresCard)
    @JoinColumn({name: 'hres_image_id'})
    hresImage: Image;

}
