import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'card_retreat_cost'})
export class CardRetreatCost {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'energy_id'})
    energyId: number;
}
