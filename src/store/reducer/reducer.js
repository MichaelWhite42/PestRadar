import { INIT_TODOS, SET_GRAPH, SORT_EVENTS_GRAPH } from "../types";

const defaulState = {
    items: [],
}

const sortEvents = (property) => {
    let sortOrder = 1;
    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return (a,b) => {
        if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

export const reducer = (state = defaulState, action) => {
    switch (action.type) {
        case INIT_TODOS:
            const items = action.payload;
            return items
        case SET_GRAPH: 
            return {
                ...state, items: action.payload
            }
        case SORT_EVENTS_GRAPH:
            return {
                ...state.items.sort(sortEvents(action.payload))
            }
        default:
            return {
                ...state
            }
    }
};