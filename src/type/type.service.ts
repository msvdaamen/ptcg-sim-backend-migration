import {Type} from "../models/type";


export class TypeService {

    private _types: Type[] = [

    ]

    get types() {
        return this._types;
    }
}
