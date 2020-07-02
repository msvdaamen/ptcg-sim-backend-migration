import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class DeckCards extends Migration {

    async up() {
        await Schema.create('deck_cards', (table: Blueprint) => {
            table.string('deck_id');
            table.string('card_id')

            table.foreign('deck_id').references('id').on('decks').onDelete('cascade');
            table.foreign('card_id').references('id').on('cards').onDelete('cascade');
        });
    }

    async down() {
        await Schema.dropIfExists('deck_cards');
    }
}
