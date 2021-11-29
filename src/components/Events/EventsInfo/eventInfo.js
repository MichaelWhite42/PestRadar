import React from "react";
import Tags from "../../UI/tags/tags";
import Button from "../../UI/buttons/buttons";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";

const EventInfo = () => {
    const itemsData = useSelector(state => state.reducer.items);
    const csvReport = {
    filename: 'eventModule.csv',
    data: itemsData,
    };
    const btnDeleteEvent = {
        text: 'Delete Event',
        color: 'red',
        icon: 'trash',
    };
    const btnExportFile = {
        text: 'Export Event',
        color: 'green',
        icon: 'export',
    };
    return (
        <div className="events-info">
            <div className="events-info_head">
                <h1 className="events-info_header">Event: Warehouse Astarta 1</h1>
                <span className="events-info_subtitle">(ID 98765789)</span>
            </div>
            <div className="events-info--item events-info_dateInfo">
                <span className='events-info_date'>12/09/2020</span>
                <span className='events-info_time'>14:55:34</span>
            </div>
            <div className='events-info--item events-info_sourceInfo'>
                <span className='events-info_motion'>Motion Detected</span>
                <span className='events-info_source'>Source: Module 12</span>
            </div>
            <div className="events-info--item events-info_bottom">
                <div className="events-info_tags">
                    <Tags tagName="Fire"/>
                    <Tags tagName="Animals"/>
                    <Tags tagName="Water"/>
                </div>
                <div className="events-info--item events-info_buttons">
                    <Button {...btnDeleteEvent} />
                    <CSVLink {...csvReport}>
                        <Button {...btnExportFile} />
                    </CSVLink>
                </div>
            </div>
        </div>
    );
};

export default EventInfo;