export type CardType = {quote: string, author: string};

export enum CardActionTypes {
    FETCH_CARDS = "FETCH_CARDS"
}

export type CardActionsType = {type: CardActionTypes, payload: string}

export type CardStateType = {cards: CardType[], isLoading: boolean, error: null | string}

export type ResponceType = {body: string, id: number, title: string, userId: string}
