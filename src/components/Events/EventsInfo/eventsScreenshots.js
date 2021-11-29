import React from "react";
import EventsPhotosSlider from "./eventsPhoto";

const EventsScreenshots = () => {
    const dataPhoto = {
        header: 'Screenshots',
        img: ['https://www.alistairgroup.com/wp-content/uploads/2017/07/mdenga-warehouse-inside-alistair-group-01.jpg', 'https://www.alistairgroup.com/wp-content/uploads/2017/07/mdenga-warehouse-inside-alistair-group-01.jpg', 'https://www.alistairgroup.com/wp-content/uploads/2017/07/mdenga-warehouse-inside-alistair-group-01.jpg'],
    };
    return (
        <div className="events-photo">
            <EventsPhotosSlider data={dataPhoto}/>
        </div>
    );
};

export default EventsScreenshots;