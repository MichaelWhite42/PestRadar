import React from "react";
import style from "./tags.scss"

const Tags = ({tagName}) => {
    const clsTag = [style.tag];

    if (tagName === 'Fire') {
        clsTag.push("tag tag_red");
    };
    if (tagName === 'Animals' || tagName === 'Water' || tagName === 'Human') {
        clsTag.push("tag");
    }

    return (
        <div className={clsTag.join("")}>{tagName}</div>
    )
}

export default Tags;