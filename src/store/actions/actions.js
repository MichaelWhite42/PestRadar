import { SET_GRAPH, SORT_EVENTS_GRAPH } from "../types";

export const setGraph = (data) => ({
    type: SET_GRAPH,
    payload: data,
});
export const sortEvents = (filter) => ({
    type: SORT_EVENTS_GRAPH,
    payload: filter,
})