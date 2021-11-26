import React from "react";
import Checkbox from "../UI/checkbox/toggleCheckbox";

const SettingCard = () => {
    return (
        <div className="settingsStatusWindow">
            <div className="aiRecognition">
                AI Recognition
            </div>
            <div className="checkBoxContainer">
                <label> Active
                    <Checkbox />
                    <span className="check">   
                    </span> Deactivate
                </label>
            </div>
        </div>
    )
}

export default SettingCard;