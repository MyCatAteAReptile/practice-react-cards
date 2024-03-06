import { CardActionTypes, CardActionsType, CardStateType } from "../../types"

export const cardReducer = (state: CardStateType, action: CardActionsType) => {
    switch (action.type) { 
        case CardActionTypes.FETCH_CARDS: return {}
    }
}