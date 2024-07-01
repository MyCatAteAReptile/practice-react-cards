import { AppDispatch } from '..';
import CardService from '../../API/CardService';
import { parseResponse } from '../../utils';
import { cardSlice } from '../reducers/CardSlice';

const fetchCards = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(cardSlice.actions.cardsFetch());
        const cards = parseResponse(await CardService.getAll());
        dispatch(cardSlice.actions.cardsFetchSuccess(cards));
    } catch (error) {
        const errorMessage =
            error instanceof Error ? error.message : 'Неизвестная ошибка';

        dispatch(
            cardSlice.actions.cardsFetchError(
                `Ошибка при загрузке карточек:\n${errorMessage}`,
            ),
        );
    }
};

export default fetchCards;
