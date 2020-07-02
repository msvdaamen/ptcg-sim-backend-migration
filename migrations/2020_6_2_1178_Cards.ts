import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class Cards extends Migration {

    async up() {
        await Schema.create('cards', (table: Blueprint) => {
            table.id();
            table.string('custom_id');
            table.unsignedInteger('image_id');
            table.unsignedInteger('hres_image_id');
            table.string('subtype');
            table.string('supertype');
            table.unsignedInteger('hp');
            table.string('retreatCost');
            table.string('convertedRetreatCost');
            table.string('number');
            table.string('artist');
            table.string('rarity');
            table.string('series');
            table.string('set');
            table.string('setCode');
            table.string('types');
            table.string('attacks');
            table.string('weaknesses');
            table.unsignedInteger('nationalPokedexNumber').nullable();
            table.string('evolvesTo');
            table.string('evolvesFrom');
            table.string('ability');
            table.string('text');
            table.string('ancientTrait');
            table.string('resistances');
            table.string('level');

        });
    }

    async down() {
        await Schema.dropIfExists('cards');
    }
}
