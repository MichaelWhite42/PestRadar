import React from "react";
import { EventInfo, EventsVideo, EventPhoto, EventsScreenshots } from "../components/Events/EventsInfo";

const PageEventsInfo = () => {
    return (
        <div className="container">
            <EventInfo />
            <EventsVideo />
            <EventPhoto />
            <EventsScreenshots />
        </div>
    );
};

export default PageEventsInfo;