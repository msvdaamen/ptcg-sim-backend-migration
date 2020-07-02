import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class Decks extends Migration {

    async up() {
        await Schema.create('decks', (table: Blueprint) => {
            table.id();
            table.string('name');
            table.string('filename');
        });
    }

    async down() {
        await Schema.dropIfExists('decks');
    }
}
