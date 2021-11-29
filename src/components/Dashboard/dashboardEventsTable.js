import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import Table from "../UI/table/table";

const DashboardTable = () => {
    const itemsData = useSelector(state => state.reducer.items);
    const dispatch = useDispatch();
    const data = {
        headerTable: {
            location: "Location",
            date: "Date and time",
            event: "Event",
            thumbs: 'Thumbs',
            videos: 'Videos',
            source: "Source",
            tags: "Tags",
        },
        info: [...itemsData],
        checkbox: false,
        sort: true,
        sortFunction: {
            location: () => {dispatch(SORT_EVENTS_GRAPH("location"))},
            date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
        },
    };
    return (
        <div className="dashboard-table">
            <div className="dashboard-table_head-table head-table">
                <p className="head-table_header">Latest Events</p>
                <div className="head-table_settings">
                    <div className="head-table_tabs">
                        <button className="head-table_tabs--btn head-table_tabs--btn-active">Day</button>
                        <button className="head-table_tabs--btn">Week</button>
                        <button className="head-table_tabs--btn">Year</button>
                    </div>
                    <div className="head-table_data">
                        <div className="day-select">
                            <div className="select-period">
                                Select Period
                            </div>
                            <div className="date-from">
                                <input type="date" placeholder="From" className="calendar" required></input>
                            </div>
                            <div className="date-to">
                                <input type="date" placeholder="To" className="calendar" required></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Table data={data}/>
        </div>
    );
};

export default DashboardTable;