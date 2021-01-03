import {Injectable} from "@nestjs/common";
import {Attack} from "../models/attack";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AttackHasEnergy} from "../models/attack-has-energy";
import {EnergyService} from "../energy/energy.service";

@Injectable()
export class AttackService {

    constructor(
        @InjectRepository(Attack)
        private readonly attackRepository: Repository<Attack>,
        @InjectRepository(AttackHasEnergy)
        private readonly attackEnergyRepository: Repository<AttackHasEnergy>,
        private readonly energyService: EnergyService
    ) { }

    private _attacks: Attack[] = [];
    private _attackMap: Map<string, Attack>;

    // TODO remove migrate function
    async migrateAttacks(attacks: Partial<Attack>[]) {
        if (await this.attackRepository.count() === 0) {
            await this.attackRepository.createQueryBuilder()
                .insert()
                .values(attacks)
                .orIgnore()
                .execute()
            // await this.attackRepository.insert(attacks);
        }
        await this.setAttacks();
    }

    async migrateAttackEnergy(attackEnergies: Map<string, string[]>) {
        if (await this.attackEnergyRepository.count() === 0) {
            const energies: Partial<AttackHasEnergy>[] = [];
            this.attacks.forEach(attack => {
                const attackEnergy = attackEnergies.get(attack.name.replace('-', ''));
                attackEnergy.forEach(energy => {
                    if (!this.attackMap.get(attack.name.replace('-', ''))) {
                        console.log(attack.name)
                    }
                    if (this.energyService.energyMap.get(energy)) {
                        energies.push({
                            attackId: this.attackMap.get(attack.name.replace('-', '')).id,
                            energyId: this.energyService.energyMap.get(energy).id
                        });
                    }
                });
            });
            await this.attackEnergyRepository.insert(energies);
        }
    }

    private async setAttacks() {
        if (this._attacks.length === 0) {
            this._attacks = await this.attackRepository.find();
        }
    }

    get attackMap() {
        if(!this._attackMap) {
            this._attackMap = new Map<string, Attack>();
            this.attacks.forEach(attack => {
                this._attackMap.set(attack.name.replace('-', ''), attack);
            });
        }
        return this._attackMap;
    }

    get attacks() {
        return this._attacks;
    }
}
