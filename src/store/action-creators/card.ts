import { AppDispatch } from "..";
import CardService from "../../API/CardService";
import { parseResponse } from "../../utils";
import { cardSlice } from "../reducers/CardSlice";

export const fetchCards = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(cardSlice.actions.cardsFetch());
            const cards = parseResponse(await CardService.getAll());
            dispatch(cardSlice.actions.cardsFetchSuccess(cards));
        } catch (error) {
            console.log(error);
            dispatch(cardSlice.actions.cardsFetchError("Ошибка при загрузке карточек"));
        }
    }
}