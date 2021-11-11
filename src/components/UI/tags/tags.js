import React from "react";
import style from "./tags.css";

const Tags = ({tagName}) => {
    const clsTag = [style.tag];

    if (tagName === 'Fire') {
        clsTag.push(style.tag_red);
    };

    return (
        <span className={clsTag.join(" ")}>{tagName}</span>
    )
}

export default Tags;