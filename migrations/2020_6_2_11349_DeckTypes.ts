import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class DeckTypes extends Migration {

    async up() {
        await Schema.create('deck_types', (table: Blueprint) => {
            table.id();
            table.string('deck_id');
            table.string('type')

            table.foreign('deck_id').references('id').on('decks').onDelete('cascade');
        });
    }

    async down() {
        await Schema.dropIfExists('deck_types');
    }
}
