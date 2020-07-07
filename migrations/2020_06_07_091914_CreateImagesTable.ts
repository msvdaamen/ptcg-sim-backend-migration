import {Migration} from 'migrationjs';
import {Blueprint} from 'migrationjs';
import {Schema} from 'migrationjs';


export default class CreateImagesTable extends Migration {

    async up() {
        await Schema.create('images', (table: Blueprint) => {
            table.id();
            table.string('name').unique();
            table.string('filename').unique();
        });
    }

    async down() {
      await Schema.dropIfExists('images');
    }
}
