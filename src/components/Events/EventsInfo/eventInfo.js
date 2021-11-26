import React from "react";
import Tags from "../../UI/tags/tags";
import Button from "../../UI/buttons/buttons";
import { CSVLink } from "react-csv";

const csvReport = {
    filename: 'eventModule.csv',
    data: '123',
}
const EventInfo = () => {
    const btnDeleteEvent = {
        text: 'Delete Event',
        color: 'red',
        icon: 'trash',
    }
    const btnExportFile = {
        text: 'Export Event',
        color: 'green',
        icon: 'export',
    }
    return (
        <div className="eventsInfo">
            <div className="eventsInfo_head">
                <h1 className="eventsInfo_header">Event: Warehouse Astarta 1</h1>
                <span className="eventsInfo_subtitle">(ID 98765789)</span>
            </div>
            <div className="eventsInfo--item eventsInfo_dateInfo">
                <span className='eventsInfo_date'>12/09/2020</span>
                <span className='eventsInfo_time'>14:55:34</span>
            </div>
            <div className='eventsInfo--item eventsInfo_sourceInfo'>
                <span className='eventsInfo_motion'>Motion Detected</span>
                <span className='eventsInfo_source'>Source: Module 12</span>
            </div>
            <div className="eventsInfo--item eventsInfo_bottom">
                <div className="eventsInfo_tags">
                    <Tags tagName="Fire"/>
                    <Tags tagName="Animals"/>
                    <Tags tagName="Water"/>
                </div>
                <div className="eventsInfo--item eventsInfo_buttons">
                    <Button {...btnDeleteEvent} />
                    <CSVLink {...csvReport}>
                        <Button {...btnExportFile} />
                    </CSVLink>
                </div>
            </div>
        </div>
    );
}

export default EventInfo;