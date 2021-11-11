import React from "react";

const SettingCard = () => {
    return (
        <div className="settingsStatusWindow">
            <div className="aiRecognition">
                AI Recognition
            </div>
            <div className="checkBoxContainer">
                <label> Active
                    <input className="checkbox" type="checkbox" />
                    <span className="check">   
                    </span> Deactivate
                </label>
            </div>
        </div>
    )
}

export default SettingCard;