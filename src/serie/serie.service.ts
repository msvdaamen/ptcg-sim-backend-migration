import {Serie} from "../models/serie";


export class SerieService {


    private _series: Serie[] = [

    ];

    get series() {
        return this._series;
    }
}
