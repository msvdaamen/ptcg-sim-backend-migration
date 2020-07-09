import {Type} from "../models/type";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


export class TypeService {

    constructor(
        @InjectRepository(Type)
        private readonly repository: Repository<Type>
    ) {
    }

    private _types: Type[] = [];
    private _typeMap: Map<string, Type>;

    async migrate(types: Partial<Type>[]) {
        if (await this.repository.count() === 0) {
            await this.repository.insert(types);
        }
        await this.setTypes();
    }

    async setTypes() {
        if (this._types.length === 0) {
            this._types = await this.repository.find();
        }
    }

    get typesMap() {
        if (!this._typeMap) {
            this._typeMap = new Map<string, Type>();
            this.types.forEach(type => this._typeMap.set(type.name, type))
        }
        return this._typeMap;
    }

    get types() {
        return this._types;
    }
}
