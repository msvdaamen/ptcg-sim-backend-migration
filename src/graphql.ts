
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Image {
    id: number;
    name: string;
    filename: string;
    url: string;
}

export interface Card {
    id: number;
    name: string;
    hp: number;
    number: string;
    nationalPokedexNumber: number;
    description: string;
    ancientTrait: string;
    image?: Image;
    hresImage?: Image;
}

export interface IQuery {
    cards(): Card[] | Promise<Card[]>;
}
