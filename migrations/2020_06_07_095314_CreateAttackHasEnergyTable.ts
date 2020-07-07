import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class CreateAttackHasEnergyTable extends Migration {

    async up() {
        await Schema.create('attack_has_energy', (table: Blueprint) => {
            table.unsignedInteger('energy_id');
            table.unsignedInteger('attack_id');

            table.foreign('energy_id').references('id').on('energies').onDelete('cascade');
            table.foreign('attack_id').references('id').on('attacks').onDelete('cascade');
        });
    }

    async down() {
        await Schema.dropIfExists('attack_has_energy');
    }
}