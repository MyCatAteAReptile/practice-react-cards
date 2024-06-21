import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardState, CardType } from '../../types';

const initialState: CardState = {
    cards: [],
    isLoading: false,
    error: null,
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        cardsFetch: (state: CardState) => ({ ...state, isLoading: true }),
        cardsFetchSuccess: (
            state: CardState,
            action: PayloadAction<CardType[]>,
        ) => ({
            ...state,
            isLoading: false,
            cards: action.payload,
        }),
        cardsFetchError: (state: CardState, action: PayloadAction<string>) => ({
            ...state,
            isLoading: false,
            error: action.payload,
        }),
    },
});

export default cardSlice.reducer;
