import {Entity, PrimaryColumn} from "typeorm";

@Entity({name: 'attack_has_energy'})
export class AttackHasEnergy {


    @PrimaryColumn({name: 'attack_id'})
    attackId: number;

    @PrimaryColumn({name: 'energy_id'})
    energyId: number;
}
