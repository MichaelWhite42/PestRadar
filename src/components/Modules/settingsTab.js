import React from "react";
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis } from "recharts";

const SettingsTab = () => {
    <div className="modulesPageVideoItemStettingsContent">
        <div className="moduleSettingsInfo">
            <div className="settingsIfoBox" >
                Status: 
                <span>
                    Online
                </span>
            </div>
            <div className="settingsIfoBox">
                Upload Queue:
                <span>
                    850
                </span>
            </div>
            <div className="settingsIfoBox">
                Temperature:
                <span>
                    22deg
                </span>
            </div>
            <div className="settingsIfoBox">
                Frequency:
                <span>
                    1900000
                </span>
            </div>
            <div className="settingsIfoBox">
                Volts:
                <span>
                    1.2
                </span>
            </div>
        </div>
        <div className="graphicContainer">
            <div className="name">
                Upload Queue
            </div>
            <div className="griphic">
                <LineChart width={700} height={125} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5"/>
                </LineChart>
            </div>
            <div className="name">
                Temperature
            </div>
            <div className="griphic">
                <LineChart width={700} height={125} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5"/>
                </LineChart>
            </div>
            <div className="name">
                Volts
            </div>
            <div className="griphic">
                <LineChart width={700} height={125} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                    <XAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5"/>
                </LineChart>
            </div>
        </div>
    </div>
};

export default SettingsTab;