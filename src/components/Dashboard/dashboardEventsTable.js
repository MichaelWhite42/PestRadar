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
        }
    }
    return (
        <div className="dashboardTable">
            <div className="dashboardTable_headTable headTable">
                <p className="headTable_header">Latest Events</p>
                <div className="headTable_settings">
                    <div className="headTable_tabs">
                        <button className="headTable_tabs--btn headTable_tabs--btn-active">Day</button>
                        <button className="headTable_tabs--btn">Week</button>
                        <button className="headTable_tabs--btn">Year</button>
                    </div>
                    <div className="headTable_data">
                        <div className="daySelect">
                            <div className="selectPeriod">
                                Select Period
                            </div>
                            <div className="dateFrom">
                                <input type="date" placeholder="From" className="calendar" required></input>
                            </div>
                            <div className="dateTo">
                                <input type="date" placeholder="To" className="calendar" required></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Table data={data}/>
        </div>
    )
}

export default DashboardTable;