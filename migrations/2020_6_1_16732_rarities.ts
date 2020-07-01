import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class Rarities extends Migration {

    async up() {
        await Schema.create('rarities', (table: Blueprint) => {
           table.id();
           table.string('name');
        });
    }

    async down() {
        await Schema.dropIfExists('rarities');
    }
}
