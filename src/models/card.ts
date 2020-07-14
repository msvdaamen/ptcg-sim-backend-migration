import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'cards'})
export class Card {

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

    @Column()
    name: string;

    @Column({nullable: true})
    hp: number;

    @Column({nullable: true})
    number: string;

    @Column({name: 'national_pokedex_number', nullable: true})
    nationalPokedexNumber: number;

    @Column({nullable: true})
    description: string;

    @Column({name: 'ancient_trait', nullable: true})
    ancientTrait: string;

}
