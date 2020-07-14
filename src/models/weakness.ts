import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'weaknesses'})
export class Weakness {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'pokemon_type_id'})
    pokemonTypeId: number;

    @Column()
    value: string;
}
