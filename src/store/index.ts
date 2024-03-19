import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from './reducers/CardSlice';
import themeReducer from './reducers/ThemeSlice';

const rootReducer = combineReducers({
    cardReducer,
    themeReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']