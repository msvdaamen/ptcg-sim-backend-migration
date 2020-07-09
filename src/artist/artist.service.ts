import {Artist} from "../models/artist";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


export class ArtistService {

    constructor(
        @InjectRepository(Artist)
        private readonly repository: Repository<Artist>
    ) { }

    private _artists: Artist[] = [];
    private _artistMap: Map<string, Artist>

    // TODO remove migration service
    async migrate(artists: Partial<Artist>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(artists);
        }
        await this.setArtists();
    }

    async setArtists() {
        if (this.artists.length === 0) {
            this._artists = await this.repository.find();
        }
    }

    get artistMap() {
        if(!this._artistMap) {
            this._artistMap = new Map<string, Artist>();
            this.artists.forEach(artist => this._artistMap.set(artist.name, artist))
        }
        return this._artistMap;
    }

    get artists() {
        return this._artists;
    }
}
