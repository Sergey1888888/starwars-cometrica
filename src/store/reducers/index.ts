import {combineReducers} from "redux";
import {starshipReducer} from "./starshipReducer";

export const rootReducer = combineReducers({
    starship: starshipReducer,
})

export type RootState = ReturnType<typeof rootReducer>