import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'resistances'})
export class Resistance {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'pokemon_type_id'})
    pokemonTypeId: number;

    @Column()
    value: string;
}
