import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'evolutions'})
export class Evolution {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'card_evolution_id'})
    cardEvolutionId: number;
}
