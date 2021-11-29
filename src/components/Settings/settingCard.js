import React from "react";
import Checkbox from "../UI/checkbox/toggleCheckbox";

const SettingCard = () => {
    return (
        <div className="settings_status-window">
            <div className="settings_ai-recognition">
                AI Recognition
            </div>
            <div className="checkbox_container">
                <label> Active
                    <Checkbox />
                    <span className="check">   
                    </span> Deactivate
                </label>
            </div>
        </div>
    );
};

export default SettingCard;