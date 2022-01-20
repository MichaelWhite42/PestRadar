import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import Table from "../../components/UI/table/table";

const EventsTable = () => {
    const dispatch = useDispatch();
    const itemsData = useSelector(state => state.reducer.items);
    const data = {
        headerTable: {
            location: "Location",
            data: 'Date and time',
            event: 'Event',
            videos: 'Videos',
            source: 'Source',
            tags: 'Tags',
        },
        info: [...itemsData],
        checkbox: true,
        sort: true,
        sortFunction: {
            location: () => {dispatch(SORT_EVENTS_GRAPH("location"))},
            date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
        },
    };
    return (
        <div className="events-info">
            <Table data={data}/>
        </div>
    );
};

export default EventsTable;