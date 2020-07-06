import {Artist} from "../models/artist";


export class ArtistService {

    private _artists: Artist[] = [

    ];


    get artists() {
        return this._artists;
    }
}
