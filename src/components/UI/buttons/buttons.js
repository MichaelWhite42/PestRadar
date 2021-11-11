import { faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './buttons.css'

const Button = ({ text, color, icon, fncBtn }) => {
    const clsBtn = [style.btn];

    switch (color) {
        case 'red':
            clsBtn.push(style.btn_red);
            break;
        case 'green':
            clsBtn.push(style.btn_green);
            break;
    }

    return (
        <button className={clsBtn.join(' ')} onClick={fncBtn}>
            <FontAwesomeIcon icon = {icon === 'trash' ? faTrash : faDownload}/>
            <p className="btnName">
                {text}
            </p>
        </button>
    )
}

export default Button;