import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './buttons.scss'

const Button = ({ text, color, icon, fncBtn }) => {
    const clsBtn = [style.btn];

    switch (color) {
        case 'red':
            clsBtn.push("btn_red event-btn");
            break;
        case 'green':
            clsBtn.push("btn_green event-btn");
            break;
    };

    return (
        <button className={clsBtn.join(' ')} onClick={fncBtn}>
            <FontAwesomeIcon icon = {icon === 'trash' ? faTrash : faDownload}/>
            <p className="btn-name">
                {text}
            </p>
        </button>
    );
};

export default Button;