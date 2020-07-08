import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'card_has_pokemon_type'})
export class CardHasPokemonType {


    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'pokemon_type_id'})
    pokemonTypeId: number;
}
