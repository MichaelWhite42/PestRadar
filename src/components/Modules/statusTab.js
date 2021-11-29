import React from "react";
import Checkbox from "../UI/checkbox/toggleCheckbox";

const StatusTab = () => {
    return (
        <div className="status-tab">
            <div className="status-tab_info">
                <div className="checkbox_container">
                    <label>
                        <Checkbox />
                        <span className="check" />  
                        Monitor RAD Sensor
                    </label>
                </div>
                <div className="checkbox_container">
                    <label>
                        <Checkbox />
                        <span className="check" />   
                        Monitor Video Sensor
                    </label>
                </div>
            </div>
            <div className="camera_functionality-menu">
                <div className="resolution-box">
                    <span>
                        Camera Rotation
                    </span>
                    <select>
                        <option>180deg</option>
                        <option>test</option>
                        <option>test</option>
                    </select>
                </div>
                <div className="camera-options">
                    <div className="resolution-box">
                        <span>
                            Photo Resolution
                        </span>
                        <select>
                            <option>1280x720</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className="resolution-box delay">
                        <span>
                            Delay
                        </span>
                        <select>
                            <option>120</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                </div>
                <div className="camera-options">
                    <div className="resolution-box">
                        <span>
                            Video Resolution
                        </span>
                        <select>
                            <option>1280x720</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className="resolution-box delay">
                        <span>
                            Delay
                        </span>
                        <select>
                            <option>120</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusTab;