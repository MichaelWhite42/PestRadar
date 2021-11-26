import React from "react";
import Checkbox from "../UI/checkbox/toggleCheckbox";

const StatusTab = () => {
    return (
        <div className="StatusTab">
            <div className="StatusTab_info">
                <div className="checkBoxContainer">
                    <label>
                        <Checkbox />
                        <span className="check" />  
                        Monitor RAD Sensor
                    </label>
                </div>
                <div className="checkBoxContainer">
                    <label>
                        <Checkbox />
                        <span className="check" />   
                        Monitor Video Sensor
                    </label>
                </div>
            </div>
            <div className="cameraFunctionalityMenu">
                <div className="resolutionBox">
                    <span>
                        Camera Rotation
                    </span>
                    <select>
                        <option>180deg</option>
                        <option>test</option>
                        <option>test</option>
                    </select>
                </div>
                <div className="cameraOptions">
                    <div className="resolutionBox">
                        <span>
                            Photo Resolution
                        </span>
                        <select>
                            <option>1280x720</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className="resolutionBox delay">
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
                <div className="cameraOptions">
                    <div className="resolutionBox">
                        <span>
                            Video Resolution
                        </span>
                        <select>
                            <option>1280x720</option>
                            <option>test</option>
                            <option>test</option>
                        </select>
                    </div>
                    <div className="resolutionBox delay">
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
    )
}

export default StatusTab;