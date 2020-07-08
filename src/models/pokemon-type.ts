import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'pokemon_types'})
export class PokemonType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
