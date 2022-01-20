import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SORT_EVENTS_GRAPH } from "../../store/types";
import Table from "../../components/UI/table/table";

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
            location: () => {dispatch(SORT_EVENTS_GRAPH('location'))},
            date: () => {dispatch(SORT_EVENTS_GRAPH("date"))},
        },
    };
    return (
        <div className="dashboard-table">
            <div className="dashboard-table__head-table">
                <p className="dashboar-table__head-table__header">Latest Events</p>
                <div className="dashboard-table__head-table__settings">
                    <div className="tabs">
                        <button className="tabs__btn tabs__btn--active">Day</button>
                        <button className="tabs__btn">Week</button>
                        <button className="tabs__btn">Year</button>
                    </div>
                    <div className="date">
                        <div className="date__day-select">
                            <div className="select-period">
                                Select Period
                            </div>
                            <div>
                                <input type="date" placeholder="From" className="calendar" required></input>
                            </div>
                            <div>
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
