import React from "react";
import style from "./tags.css";

const Tags = ({tagName}) => {
    const clsTag = [style.tag];

    if (tagName === 'Fire') {
        clsTag.push("tag tag_red");
    };
    if (tagName === 'Animals' || tagName === 'Water' || tagName === 'Human') {
        clsTag.push("tag");
    }

    return (
        <span className={clsTag.join("")}>{tagName}</span>
    )
}

export default Tags;