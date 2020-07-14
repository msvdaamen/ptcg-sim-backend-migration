import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'card_retreat_energy'})
export class CardRetreatEnergy {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'energy_id'})
    energyId: number;
}
