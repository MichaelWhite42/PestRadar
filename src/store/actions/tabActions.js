import { CHANGE_TAB } from "../types";

export const changeTab = (nameTab) => ({
    type: CHANGE_TAB,
    payload: nameTab,
})