import {Serie} from "../models/serie";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class SerieService {

    constructor(
        @InjectRepository(Serie)
        private readonly repository: Repository<Serie>
    ) {
    }

    private _series: Serie[] = [];
    private _serieMap: Map<string, Serie>;


    // TOTO remove migrate function
    async migrate(series: Partial<Serie>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(series);
            await this.setSeries();
        }
    }

    async setSeries() {
        if (this._series.length === 0){
            this._series = await this.repository.find();
        }
    }

    get serieMap() {
        if (!this._serieMap) {
            this._serieMap = new Map<string, Serie>();
            this.series.forEach(serie => this._serieMap.set(serie.name, serie));
        }
        return this._serieMap;
    }

    get series() {
        return this._series;
    }
}
