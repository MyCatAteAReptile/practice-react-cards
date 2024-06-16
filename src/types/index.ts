export enum CardActionTypes {
    FETCH_CARDS = "FETCH_CARDS",
    FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS",
    FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR"
}

export enum ThemeActionTypes {
    SET_COLOR = "SET_COLOR"
}

export type CardType = { quote: string, author: string };

type fetchCardsAction = {
    type: CardActionTypes.FETCH_CARDS
}

type fetchCardsSuccessAction = {
    type: CardActionTypes.FETCH_CARDS_SUCCESS,
    payload: CardType[]
}

type fetchCardsErrorAction = {
    type: CardActionTypes.FETCH_CARDS_ERROR,
    payload: string
}

export type CardAction = fetchCardsAction | fetchCardsSuccessAction | fetchCardsErrorAction;

export type CardState = { cards: CardType[], isLoading: boolean, error: null | string }

export type ResponseType = { body: string, id: number, title: string, userId: string }

type changeColorAction = { 
    type: ThemeActionTypes.SET_COLOR, 
    payload: string 
}

export type ThemeAction = changeColorAction;

export type ThemeState = { color: string };