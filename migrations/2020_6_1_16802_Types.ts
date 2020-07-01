import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class Types extends Migration {

    async up() {
        await Schema.create('types', (table: Blueprint) => {
            table.id();
            table.string('name');
        })
    }

    async down() {
        await Schema.dropIfExists('types');
    }
}
