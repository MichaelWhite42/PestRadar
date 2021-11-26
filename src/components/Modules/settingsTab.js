import React from "react";
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis } from "recharts";

const SettingsTab = () => {
    return (
        <div className="modulesPageVideoItemStettingsContent">
            <div className="moduleSettingsInfo">
                <div className="settingsInfoBox" >
                    <div className="settingsInfo_title">
                        Status:
                    </div> 
                    <span>
                        Online
                    </span>
                </div>
                <div className="settingsInfoBox">
                    <div className="settingsInfo_title">
                        Upload Queue:
                    </div>
                    <span>
                        850
                    </span>
                </div>
                <div className="settingsInfoBox">
                    <div className="settingsInfo_title">
                        Temperature:
                    </div>
                    <span>
                        22deg
                    </span>
                </div>
                <div className="settingsInfoBox">
                    <div className="settingsInfo_title">
                        Frequency:
                    </div>                
                    <span>
                        1900000
                    </span>
                </div>
                <div className="settingsInfoBox">
                    <div className="settingsInfo_title">
                        Volts:
                    </div>                
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
    )
};

export default SettingsTab;