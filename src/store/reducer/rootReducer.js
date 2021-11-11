import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { tabReducer } from "./tabReducer";

export const rootReducer = combineReducers({
    reducer,
    tabReducer
})