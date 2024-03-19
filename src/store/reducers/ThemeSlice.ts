import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../types";

const initialState: ThemeState = {
    color: '#000fff'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setColor: (state: ThemeState, action: PayloadAction<string>) => { 
            state.color = action.payload;
        }
    }
});

export default themeSlice.reducer;