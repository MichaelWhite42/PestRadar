import React, { useState } from "react";
import SettingsTab from "./settingsTab";
import StatusTab from "./statusTab";
import EventsTab from "./eventsTab";

const ModulesInfo = () => {
    const Tabs = ["Status", "Settings", "Events"]
    const [tab, setTab] = useState(Tabs[0]);

    return (
        <div className='ModulesInfo'>
            <ul className='ModulesInfo_tabs'>
                {Tabs.map((item, index) => (
                    <li key={Tabs[index]}
                        onClick={() => {
                            setTab(Tabs[index]);
                        }}>{item}</li>))}
            </ul>
            <div className='ModulesInfo_content'>
                {tab === Tabs[0] && <StatusTab />}
                {tab === Tabs[1] && <SettingsTab />}
                {tab === Tabs[2] && <EventsTab />}
            </div>
        </div>
    )
}

export default ModulesInfo;