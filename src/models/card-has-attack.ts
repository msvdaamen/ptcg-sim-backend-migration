import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'card_has_attack'})
export class CardHasAttack {

    @PrimaryColumn({name: 'card_id'})
    cardId: number;

    @PrimaryColumn({name: 'attack_id'})
    attackId: number;
}
