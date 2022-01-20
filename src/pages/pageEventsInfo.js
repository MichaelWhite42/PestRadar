import React from "react";
import { EventInfo, EventsVideo, EventPhoto, EventsScreenshots } from "../modules/Events/EventsInfo";

const PageEventsInfo = () => {
    return (
        <div className="app__page events__info">
            <EventInfo />
            <EventsVideo />
            <EventPhoto />
            <EventsScreenshots />
        </div>
    );
};

export default PageEventsInfo;