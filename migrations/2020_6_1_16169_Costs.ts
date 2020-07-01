import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class Costs extends Migration {

    async up() {
        await Schema.create('costs', (table: Blueprint) => {
            table.id();
            table.string('name');
        })
    }

    async down() {
        await Schema.dropIfExists('costs');
    }
}
