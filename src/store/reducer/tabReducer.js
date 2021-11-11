import { CHANGE_TAB } from "../types";

const defaultState = {
    activeTab: '',
};

export const tabReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return {...state, activeTab: action.payload}
        default:
            return {
                ...state
            }
    }
}