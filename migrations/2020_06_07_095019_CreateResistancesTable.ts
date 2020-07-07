import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class CreateResistancesTable extends Migration {

    async up() {
        await Schema.create('resistances', (table: Blueprint) => {
            table.unsignedInteger('card_id');
            table.unsignedInteger('pokemon_type_id');
            table.float('value');

            table.unique(['card_id', 'pokemon_type_id']);

            table.foreign('card_id').references('id').on('cards').onDelete('cascade');
            table.foreign('pokemon_type_id').references('id').on('pokemon_types').onDelete('cascade');
        })
    }

    async down() {
        await Schema.dropIfExists('resistances');
    }
}