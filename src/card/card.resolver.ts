import {Resolver, Query, ResolveField, Parent} from "@nestjs/graphql";
import {Card} from "../models/card";
import {CardService} from "./card.service";
import {CardLoader} from "./card.loader";
import {Image} from "../models/image";

@Resolver(Card)
export class CardResolver {

    constructor(
        private readonly cardService: CardService,
        private readonly cardLoader: CardLoader
    ) {
    }

    @Query(() => [Card])
    async cards() {
        await this.cardService.setCards();
        return this.cardService.cards;
    }

    @ResolveField(() => Image, {nullable: true})
    async image(
        @Parent() card: Card
    ) {
        return this.cardLoader.images().load(card.id);
    }
    @ResolveField(() => Image, {nullable: true})
    async hresImage(
        @Parent() card: Card
    ) {
        return this.cardLoader.hresImages().load(card.id);
    }


}
