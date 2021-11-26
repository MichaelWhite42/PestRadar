import React from "react";
import { useDispatch } from "react-redux";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import Table from "../UI/table/table";

const EventsTable = () => {
    const dispatch = useDispatch();
    const data = {
        headerTable: {
            location: "Location",
            data: 'Date and time',
            event: 'Event',
            videos: 'Videos',
            source: 'Source',
            tags: 'Tags',
        },
        info: [
            { location: "Warehouse Astarta 1", date: '12/09/2020  14:55:34', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', videos: '2/2', source: 'Module 1', id: Math.random(), tags: ['Fire', 'Animals', 'Human'], key: Math.random(), },
            { location: "Warehouse Astarta 1", date: '12/09/2020  14:55:34', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', videos: '2/2', source: 'Module 1', id: Math.random(), tags: ['Fire', 'Animals', 'Human'], key: Math.random(), },
            { location: "Warehouse Astarta 1", date: '12/09/2020  14:55:34', events: 'https://cdn.zeplin.io/60ba3ca70f21c9a5abfe2d14/assets/816758EB-133D-4CA2-AEA3-F88D859AC6C0.svg', videos: '2/2', source: 'Module 1', id: Math.random(), tags: ['Fire', 'Animals', 'Human'], key: Math.random(), },
        ],
        checkbox: true,
        sort: true,
        sortFunction: {
            location: () => {dispatch(SORT_EVENTS_GRAPH("location"))},
            date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
        }
    }

    return (
        <div className="eventsInfo">
            <Table data={data}/>
        </div>
    )
}

export default EventsTable;